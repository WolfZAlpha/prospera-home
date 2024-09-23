import dotenv from "dotenv";
import nodemailer from "nodemailer";
import crypto from "crypto";
import bcrypt from "bcrypt";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { SignJWT, jwtVerify, importPKCS8, importSPKI } from "jose";
import { userModel } from "../../schemas/user.schema.js";
import { passwordResetModel } from "../../schemas/passwordResets.schema.js";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const privateKeyPath = path.join(
  __dirname,
  "..",
  "..",
  "..",
  "config",
  "keys",
  "ed25519-private.key"
);
const publicKeyPath = path.join(
  __dirname,
  "..",
  "..",
  "..",
  "config",
  "keys",
  "ed25519-public.key"
);

let privateKey, publicKey;

async function initializeKeys() {
  const privateKeyData = fs.readFileSync(privateKeyPath, "utf8");
  const publicKeyData = fs.readFileSync(publicKeyPath, "utf8");
  privateKey = await importPKCS8(privateKeyData, "EdDSA");
  publicKey = await importSPKI(publicKeyData, "EdDSA");
}

await initializeKeys();

const transporter = nodemailer.createTransport({
  host: process.env.MAILTRAP_HOST,
  port: process.env.MAILTRAP_PORT,
  auth: {
    user: process.env.MAILTRAP_USER,
    pass: process.env.MAILTRAP_PASS,
  },
});

function generateSecureToken(length = 32) {
  return crypto.randomBytes(length).toString("hex");
}

async function generateToken(payload) {
  const jwt = await new SignJWT(payload)
    .setProtectedHeader({ alg: "EdDSA" })
    .setIssuedAt()
    .setExpirationTime("24h")
    .sign(privateKey);
  return jwt;
}

export async function verifyToken(token) {
  try {
    const { payload } = await jwtVerify(token, publicKey, {
      algorithms: ["EdDSA"],
    });
    return payload;
  } catch (error) {
    console.error("Token verification failed:", error.message);
    return null;
  }
}

export const loginRouteHandler = async (req, res) => {
  console.log("Login route hit. Request body:", req.body);
  const { emailOrUsername, password, source } = req.body;

  if (typeof emailOrUsername !== "string" || typeof password !== "string") {
    console.error("Invalid input types:", {
      emailOrUsername: typeof emailOrUsername,
      password: typeof password,
    });
    return res.status(400).json({
      errors: [{ detail: "Invalid input" }],
    });
  }

  try {
    let foundUser = await userModel.findOne({
      $or: [{ email: emailOrUsername }, { username: emailOrUsername }],
    });

    if (!foundUser) {
      console.log("User not found:", emailOrUsername);
      return res.status(400).json({
        errors: [{ detail: "Invalid credentials" }],
      });
    }

    const validPassword = await foundUser.matchPassword(password);

    if (!validPassword) {
      console.log("Invalid password for user:", emailOrUsername);
      return res.status(400).json({
        errors: [{ detail: "Invalid credentials" }],
      });
    }

    if (
      source === "team-dashboard" &&
      !["admin", "co-admin", "prosperaTeam", "kol"].includes(foundUser.role)
    ) {
      console.log(
        "Unauthorized access attempt to team dashboard:",
        emailOrUsername,
        foundUser.role
      );
      return res.status(403).json({
        errors: [
          { detail: "You do not have permission to access this dashboard." },
        ],
      });
    }

    const token = await generateToken({
      id: foundUser.id,
      email: foundUser.email,
      role: foundUser.role,
    });

    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      domain: ".prosperadefi.com",
      maxAge: 24 * 60 * 60 * 1000, // 1 day
    });

    console.log("Login successful:", emailOrUsername);

    return res.json({
      message: "Logged in successfully",
      user: {
        id: foundUser.id,
        name: foundUser.name,
        email: foundUser.email,
        username: foundUser.username,
        role: foundUser.role,
        arbitrumWallet: foundUser.arbitrumWallet,
        betaAccess: foundUser.betaAccess,
        whitelistStatus: foundUser.whitelistStatus,
        isWhitelisted: foundUser.isWhitelisted,
        profile_image: foundUser.profile_image || "",
      },
      token: token,
    });
  } catch (error) {
    console.error("Login error:", error);
    return res.status(500).json({
      errors: [{ detail: "An error occurred during login" }],
    });
  }
};

export const registerRouteHandler = async (req, res) => {
  try {
    const { name, email, password, arbitrumWallet, username } =
      req.body.data.attributes;

    let foundUser = await userModel.findOne({ email: email });
    if (foundUser) {
      return res.status(400).json({ message: "The email is already in use" });
    }

    foundUser = await userModel.findOne({ arbitrumWallet: arbitrumWallet });
    if (foundUser) {
      return res
        .status(400)
        .json({ message: "The Arbitrum wallet is already in use" });
    }

    if (!password || password.length < 8) {
      return res
        .status(400)
        .json({ message: "The password must be at least 8 characters long." });
    }

    const newUser = new userModel({
      username,
      name,
      email,
      password,
      arbitrumWallet,
      role: "member",
      betaAccess: false,
      whitelistStatus: "none",
    });

    await newUser.save();

    const token = await generateToken({
      id: newUser.id,
      email: newUser.email,
      role: newUser.role,
    });

    return res.status(200).json({
      message: "Registered successfully",
      user: {
        id: newUser.id,
        name: newUser.name,
        email: newUser.email,
        role: newUser.role,
        arbitrumWallet: newUser.arbitrumWallet,
        betaAccess: newUser.betaAccess,
        whitelistStatus: newUser.whitelistStatus,
      },
      token: token,
    });
  } catch (error) {
    console.error("Error in registerRouteHandler:", error);
    return res.status(500).json({
      message: "An error occurred during registration",
      error: error.message,
    });
  }
};

export const forgotPasswordRouteHandler = async (req, res) => {
  const { email } = req.body;
  let foundUser = await userModel.findOne({ email: email });

  if (!foundUser) {
    return res.status(400).json({
      errors: { email: ["The email does not match any existing user."] },
    });
  }

  let token = generateSecureToken();
  let info = await transporter.sendMail({
    from: '"PROSPERA DeFi" <noreply@prosperadefi.com>',
    to: email,
    subject: "Reset Password",
    html: `<p>You requested to change your password. If this request was not made by you, please contact us. Access <a href='${process.env.FRONTEND_URL}/auth/reset-password?token=${token}&email=${email}'>this link</a> to reset your password </p>`,
  });

  await passwordResetModel.create({
    email: foundUser.email,
    token: token,
    created_at: new Date(),
  });

  return res.status(200).json({ message: "Password reset email sent" });
};

export const resetPasswordRouteHandler = async (req, res) => {
  const { email, token, password, password_confirmation } = req.body;

  const foundUser = await userModel.findOne({ email: email });
  const foundToken = await passwordResetModel.findOne({
    email: email,
    token: token,
  });

  if (!foundUser || !foundToken) {
    return res
      .status(400)
      .json({ errors: { email: ["The email or token is invalid."] } });
  }

  if (password.length < 8) {
    return res.status(400).json({
      errors: { password: ["The password should have at least 8 characters."] },
    });
  }

  if (password !== password_confirmation) {
    return res.status(400).json({
      errors: {
        password: ["The password and password confirmation must match."],
      },
    });
  }

  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(password, salt);

  await passwordResetModel.deleteOne({ email: foundUser.email });

  await userModel.updateOne(
    { email: foundUser.email },
    { $set: { password: hashPassword } }
  );

  return res.status(200).json({ message: "Password reset successfully" });
};

export const verifyAuth = async (req, res, next) => {
  const token = req.cookies.token || req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "Authentication required" });
  }

  try {
    const payload = await verifyToken(token);
    if (!payload) {
      return res.status(401).json({ message: "Invalid or expired token" });
    }

    req.user = payload;
    next();
  } catch (error) {
    console.error("Error verifying auth:", error);
    res.status(401).json({ message: "Authentication failed" });
  }
};

export const checkAuthRouteHandler = async (req, res) => {
  try {
    const user = req.user;
    const fullUser = await userModel.findById(user.id).select("-password");
    const { source } = req.query;

    if (
      source === "team-dashboard" &&
      !["admin", "co-admin", "prosperaTeam", "kol"].includes(fullUser.role)
    ) {
      return res.status(403).json({
        message: "You do not have permission to access the team dashboard.",
      });
    }

    if (source === "user-dashboard" && !fullUser.betaAccess) {
      return res
        .status(403)
        .json({ message: "You do not have access to the user dashboard yet." });
    }

    res.json({
      user: {
        ...fullUser.toObject(),
        hasFullAccess: fullUser.hasFullAccess(),
      },
    });
  } catch (error) {
    console.error("Error in checkAuthRouteHandler:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
