import mongoose from "mongoose";
import dotenv from "dotenv";
import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";
import { userModel } from "../schemas/user.schema.js";
import { roleModel } from "../schemas/role.schema.js";
import { permissionModel } from "../schemas/permission.schema.js";
import { tagModel } from "../schemas/tag.schema.js";
import { categoryModel } from "../schemas/category.schema.js";
import { itemModel } from "../schemas/item.schema.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const envPath = path.join(__dirname, "..", "..", "..", ".env");
console.log("Attempting to load .env file from:", envPath);

async function loadEnvFile() {
  try {
    await fs.access(envPath);
    console.log(".env file found");
    dotenv.config({ path: envPath });
    console.log("Environment variables loaded. DB_LINK:", process.env.DB_LINK);
  } catch (error) {
    console.log(".env file not found or not accessible");
    console.log("Current working directory:", process.cwd());
    console.log("__dirname:", __dirname);
    process.exit(1);
  }
}

const fetchSeededData = async () => {
  try {
    await loadEnvFile();

    if (!process.env.DB_LINK) {
      throw new Error("DB_LINK is not defined in the environment variables");
    }

    await mongoose.connect(process.env.DB_LINK, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      ssl: true,
      tlsAllowInvalidCertificates: true, // Only use this for testing. Remove in production.
    });

    console.log("Connected to MongoDB");

    const users = await userModel.find().lean();
    const roles = await roleModel.find().lean();
    const permissions = await permissionModel.find().lean();
    const tags = await tagModel.find().lean();
    const categories = await categoryModel.find().lean();
    const items = await itemModel.find().lean();

    const data = {
      users,
      roles,
      permissions,
      tags,
      categories,
      items,
    };

    // Create a timestamp for the filename
    const timestamp = new Date().toISOString().replace(/:/g, "-");
    const filename = `seededData_${timestamp}.json`;

    // Write data to file
    await fs.writeFile(filename, JSON.stringify(data, null, 2));
    console.log(`Seeded data has been written to ${filename}`);

    // Log summary to console
    console.log("Data summary:");
    console.log(`Users: ${users.length}`);
    console.log(`Roles: ${roles.length}`);
    console.log(`Permissions: ${permissions.length}`);
    console.log(`Tags: ${tags.length}`);
    console.log(`Categories: ${categories.length}`);
    console.log(`Items: ${items.length}`);
  } catch (error) {
    console.error("Error fetching seeded data:", error);
  } finally {
    if (mongoose.connection.readyState === 1) {
      await mongoose.connection.close();
      console.log("MongoDB connection closed");
    }
  }
};

// Use an immediately invoked async function to allow top-level await
(async () => {
  try {
    await fetchSeededData();
  } catch (error) {
    console.error("An unexpected error occurred:", error);
  }
})();
