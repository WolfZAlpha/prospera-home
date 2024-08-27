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
  const { email, password } = req.body;

  let foundUser = await userModel.findOne({ email: email });
  if (!foundUser) {
    return res.status(400).json({
      errors: [{ detail: "Invalid credentials" }],
    });
  }

  const validPassword = await bcrypt.compare(password, foundUser.password);
  if (!validPassword) {
    return res.status(400).json({
      errors: [{ detail: "Invalid credentials" }],
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

  return res.json({
    message: "Logged in successfully",
    user: {
      id: foundUser.id,
      name: foundUser.name,
      email: foundUser.email,
      role: foundUser.role,
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
  const { name, email, password } = req.body;

  let foundUser = await userModel.findOne({ email: email });
  if (foundUser) {
    return res.status(400).json({ message: "The email is already in use" });
  }

  if (!password || password.length < 8) {
    return res
      .status(400)
      .json({ message: "The password must be at least 8 characters long." });
  }

  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(password, salt);

  let userRole = await roleModel.findOne({ name: "user" });

  const newUser = new userModel({
    name: name,
    email: email,
    password: hashPassword,
    role: userRole._id,
  });
  await newUser.save();

  const token = await generateToken({
    id: newUser.id,
    email: newUser.email,
    role: newUser.role,
  });

  res.cookie("token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    domain: ".prosperadefi.com",
    maxAge: 24 * 60 * 60 * 1000, // 1 day
  });

  return res.status(200).json({
    message: "Registered successfully",
    user: {
      id: newUser.id,
      name: newUser.name,
      email: newUser.email,
      role: newUser.role,
    },
  });
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
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({ message: "Authentication required" });
  }

  const payload = await verifyToken(token);
  if (!payload) {
    return res.status(401).json({ message: "Invalid or expired token" });
  }

  req.user = payload;
  next();
};
