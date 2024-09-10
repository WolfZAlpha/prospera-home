import dotenv from "dotenv";
import nodemailer from "nodemailer";
import crypto from "crypto";
import bcrypt from "bcrypt";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { SignJWT, jwtVerify, importPKCS8, importSPKI } from "jose";
import { userModel } from "../../schemas/user.schema.js";
import { roleModel } from "../../schemas/role.schema.js";
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
  console.log(
    "Login handler. Request body:",
    JSON.stringify(req.body, null, 2)
  );
  const { emailOrUsername, password } = req.body.data.attributes;

  console.log("Attempting to find user with:", { emailOrUsername });

  let foundUser = await userModel.findOne({
    $or: [{ email: emailOrUsername }, { username: emailOrUsername }],
  });

  if (!foundUser) {
    console.log("User not found");
    return res.status(400).json({
      errors: [{ detail: "Invalid credentials" }],
    });
  }

  console.log("User found:", JSON.stringify(foundUser, null, 2));
  console.log("Stored hashed password:", foundUser.password);
  console.log("Provided password:", password);

  const validPassword = await foundUser.matchPassword(password);
  console.log("Password valid:", validPassword);

  if (!validPassword) {
    console.log("Invalid password");
    return res.status(400).json({
      errors: [{ detail: "Invalid credentials" }],
    });
  }

  console.log("Password valid, generating token");

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

  return res.json({
    message: "Logged in successfully",
    user: {
      id: foundUser.id,
      name: foundUser.name,
      email: foundUser.email,
      username: foundUser.username,
      role: foundUser.role,
      arbitrumWallet: foundUser.arbitrumWallet,
    },
  });
};

export const logoutRouteHandler = (req, res) => {
  res.clearCookie("token", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    domain: ".prosperadefi.com",
  });

  res.json({ message: "Logged out successfully" });
};

export const registerRouteHandler = async (req, res) => {
  try {
    console.log(
      "Registration attempt. Request body:",
      JSON.stringify(req.body, null, 2)
    );
    const { name, email, password, arbitrumWallet, username } =
      req.body.data.attributes;

    console.log("Checking for existing user with email:", email);
    let foundUser = await userModel.findOne({ email: email });
    if (foundUser) {
      console.log("User with this email already exists");
      return res.status(400).json({ message: "The email is already in use" });
    }

    console.log(
      "Checking for existing user with Arbitrum wallet:",
      arbitrumWallet
    );
    foundUser = await userModel.findOne({ arbitrumWallet: arbitrumWallet });
    if (foundUser) {
      console.log("User with this Arbitrum wallet already exists");
      return res
        .status(400)
        .json({ message: "The Arbitrum wallet is already in use" });
    }

    if (!password || password.length < 8) {
      console.log("Password is too short");
      return res
        .status(400)
        .json({ message: "The password must be at least 8 characters long." });
    }

    console.log("Finding member role");
    let memberRole = await roleModel.findOne({ name: "member" });
    if (!memberRole) {
      console.error("Member role not found");
      return res.status(500).json({ message: "Error setting user role" });
    }

    console.log("Creating new user");
    const newUser = new userModel({
      username,
      name,
      email,
      password, // Using the plain password here
      arbitrumWallet,
      role: memberRole.name,
    });

    console.log("New user object:", JSON.stringify(newUser, null, 2));

    console.log("Saving new user to database");
    await newUser.save();

    console.log("User saved. Hashed password:", newUser.password);

    console.log("Generating token for new user");
    const token = await generateToken({
      id: newUser.id,
      email: newUser.email,
      role: newUser.role,
    });

    console.log("Registration successful");
    return res.status(200).json({
      message: "Registered successfully",
      user: {
        id: newUser.id,
        name: newUser.name,
        email: newUser.email,
        role: newUser.role,
        arbitrumWallet: newUser.arbitrumWallet,
      },
      token: token,
    });
  } catch (error) {
    console.error("Error in registerRouteHandler:", error);
    return res.status(500).json({
      message: "An error occurred during registration",
      error: error.message,
      stack: process.env.NODE_ENV === "development" ? error.stack : undefined,
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
      errors: {
        password: ["The password should have at least 8 characters."],
      },
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
    // At this point, the user is already authenticated due to the verifyAuth middleware
    const user = req.user;
    const fullAccessRoles = ["admin", "co-admin", "prosperaTeam", "kol"];
    const hasFullAccess =
      fullAccessRoles.includes(user.role) || user.isWhitelisted;

    res.json({
      user: {
        ...user,
        hasFullAccess,
      },
    });
  } catch (error) {
    console.error("Error in checkAuthRouteHandler:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
