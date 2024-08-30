import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import mongoose from "mongoose";
import bcrypt from "bcrypt";
import fs from "fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load environment variables from the root .env file
const envPath = path.join(__dirname, "..", "..", ".env");
console.log("Attempting to load .env file from:", envPath);

if (fs.existsSync(envPath)) {
  console.log(".env file found");
  dotenv.config({ path: envPath });
} else {
  console.log(".env file not found");
  process.exit(1);
}

// Import the user model
import { userModel } from "../src/schemas/user.schema.js";

async function createAdminUser() {
  console.log("DB_LINK:", process.env.DB_LINK);
  console.log("ADMIN_EMAIL:", process.env.ADMIN_EMAIL);
  console.log(
    "ADMIN_PASSWORD:",
    process.env.ADMIN_PASSWORD ? "[REDACTED]" : "undefined"
  );
  console.log("ADMIN_WALLET:", process.env.ADMIN_WALLET);

  if (!process.env.DB_LINK) {
    throw new Error("DB_LINK is not defined in the environment variables");
  }

  if (
    !process.env.ADMIN_EMAIL ||
    !process.env.ADMIN_PASSWORD ||
    !process.env.ADMIN_WALLET
  ) {
    throw new Error(
      "ADMIN_EMAIL, ADMIN_PASSWORD, and ADMIN_WALLET must be defined in the environment variables"
    );
  }

  try {
    await mongoose.connect(process.env.DB_LINK, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      ssl: true,
      tlsAllowInvalidCertificates: true,
    });

    console.log("Connected to database successfully");

    const existingUser = await userModel.findOne({
      email: process.env.ADMIN_EMAIL,
    });
    if (existingUser) {
      console.log("Admin user already exists. Updating password...");
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(
        process.env.ADMIN_PASSWORD,
        salt
      );
      console.log("New hashed password:", hashedPassword);

      existingUser.password = hashedPassword;
      await existingUser.save();
      console.log("Admin user password updated successfully");
    } else {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(
        process.env.ADMIN_PASSWORD,
        salt
      );
      console.log("Hashed password:", hashedPassword);

      const adminUser = new userModel({
        name: "Zed Wolf",
        username: "z",
        email: process.env.ADMIN_EMAIL,
        password: hashedPassword,
        role: "admin",
        arbitrumWallet: process.env.ADMIN_WALLET,
      });

      await adminUser.save();
      console.log("Admin user created successfully");
    }

    // Verify the user was created/updated correctly
    const verifyUser = await userModel.findOne({
      email: process.env.ADMIN_EMAIL,
    });
    if (verifyUser) {
      console.log("Verified admin user:");
      console.log("Name:", verifyUser.name);
      console.log("Username:", verifyUser.username);
      console.log("Email:", verifyUser.email);
      console.log("Role:", verifyUser.role);
      console.log("Arbitrum Wallet:", verifyUser.arbitrumWallet);
    } else {
      console.log("Failed to verify admin user creation/update");
    }
  } catch (error) {
    console.error("Error creating/updating admin user:", error);
  } finally {
    await mongoose.connection.close();
    console.log("Database connection closed");
  }
}

createAdminUser();
