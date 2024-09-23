import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";
import mongoose from "mongoose";

// Import your models
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

if (fs.existsSync(envPath)) {
  console.log(".env file found");
  dotenv.config({ path: envPath });
  console.log("Environment variables loaded. DB_LINK:", process.env.DB_LINK);
} else {
  console.log(".env file not found");
  console.log("Current working directory:", process.cwd());
  console.log("__dirname:", __dirname);
  process.exit(1);
}

async function dbConnect() {
  try {
    if (!process.env.DB_LINK) {
      throw new Error("DB_LINK is not defined in the environment variables");
    }

    await mongoose.connect(process.env.DB_LINK, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      ssl: true,
    });
    console.log("MongoDB connection established successfully");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1);
  }
}

async function clearDatabase() {
  try {
    await dbConnect();

    console.log("Connected to database. Starting clearing process...");

    // Clear specific collections
    await userModel.deleteMany({});
    console.log("Cleared users collection");

    await roleModel.deleteMany({});
    console.log("Cleared roles collection");

    await permissionModel.deleteMany({});
    console.log("Cleared permissions collection");

    await tagModel.deleteMany({});
    console.log("Cleared tags collection");

    await categoryModel.deleteMany({});
    console.log("Cleared categories collection");

    await itemModel.deleteMany({});
    console.log("Cleared items collection");

    console.log("All specified collections have been cleared.");
  } catch (error) {
    console.error("An error occurred during the clearing process:", error);
  } finally {
    await mongoose.connection.close();
    console.log("Database connection closed.");
  }
}

clearDatabase()
  .then(() => {
    console.log("Database clearing script finished execution.");
    process.exit(0);
  })
  .catch((error) => {
    console.error("Database clearing script encountered an error:", error);
    process.exit(1);
  });
