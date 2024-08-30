import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import mongoose from "mongoose";
import bcrypt from "bcrypt";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.join(__dirname, "..", "..", ".env") });

import { userModel } from "../src/schemas/user.schema.js";

async function updateAdminPassword() {
  try {
    await mongoose.connect(process.env.DB_LINK, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      ssl: true,
      tlsAllowInvalidCertificates: true,
    });

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(process.env.ADMIN_PASSWORD, salt);

    const updatedUser = await userModel.findOneAndUpdate(
      { email: process.env.ADMIN_EMAIL },
      { password: hashedPassword },
      { new: true }
    );

    if (updatedUser) {
      console.log("Admin password updated successfully");
      console.log("New hashed password:", hashedPassword);

      // Verify the password
      const isMatch = await bcrypt.compare(
        process.env.ADMIN_PASSWORD,
        hashedPassword
      );
      console.log("Password verification result:", isMatch);
    } else {
      console.log("Admin user not found");
    }
  } catch (error) {
    console.error("Error updating admin password:", error);
  } finally {
    await mongoose.connection.close();
  }
}

updateAdminPassword();
