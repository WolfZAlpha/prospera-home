import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";
import mongoose from "mongoose";
import bcrypt from "bcrypt";

import { roleModel } from "../schemas/role.schema.js";
import { permissionModel } from "../schemas/permission.schema.js";
import { userModel } from "../schemas/user.schema.js";

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

async function seedDB() {
  try {
    await dbConnect();

    console.log("Connected to database. Starting seeding process...");

    // Define all permissions
    const permissions = [
      "view users",
      "create users",
      "edit users",
      "delete users",
      "view roles",
      "create roles",
      "edit roles",
      "delete roles",
      "view permissions",
      "view tags",
      "create tags",
      "edit tags",
      "delete tags",
      "view categories",
      "create categories",
      "edit categories",
      "delete categories",
      "view items",
      "create items",
      "edit items",
      "delete items",
    ];

    console.log("Creating permissions...");
    const createdPermissions = await Promise.all(
      permissions.map((name) =>
        permissionModel.findOneAndUpdate(
          { name },
          { name, createdAt: new Date(), updatedAt: new Date() },
          { upsert: true, new: true }
        )
      )
    );

    console.log(`Created ${createdPermissions.length} permissions.`);

    // Create role-permission mappings
    const rolePermissions = {
      admin: createdPermissions.map((perm) => perm._id),
      "co-admin": createdPermissions.map((perm) => perm._id),
      prosperaTeam: createdPermissions
        .filter(
          (perm) => !perm.name.includes("users") && !perm.name.includes("roles")
        )
        .map((perm) => perm._id),
      kol: createdPermissions
        .filter(
          (perm) =>
            perm.name.startsWith("view") ||
            perm.name.includes("create") ||
            perm.name.includes("edit")
        )
        .map((perm) => perm._id),
      member: createdPermissions
        .filter((perm) => perm.name.startsWith("view"))
        .map((perm) => perm._id),
    };

    console.log("Creating roles...");
    const createdRoles = await Promise.all(
      Object.entries(rolePermissions).map(([roleName, permissions]) =>
        roleModel.findOneAndUpdate(
          { name: roleName },
          {
            name: roleName,
            permissions: permissions,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          { upsert: true, new: true }
        )
      )
    );

    console.log(`Created ${createdRoles.length} roles.`);

    // Create admin user
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(process.env.ADMIN_PASSWORD, salt);

    const adminUser = await userModel.findOneAndUpdate(
      { email: process.env.ADMIN_EMAIL },
      {
        name: "Zed Wolf",
        username: "unknownZ",
        email: process.env.ADMIN_EMAIL,
        password: hashedPassword,
        role: "admin",
        arbitrumWallet: process.env.ADMIN_WALLET,
        betaAccess: true,
        whitelistStatus: "approved",
        isWhitelisted: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      { upsert: true, new: true }
    );

    console.log("Admin user created or updated.");

    console.log("Seeding process completed successfully.");
  } catch (error) {
    console.error("An error occurred during the seeding process:", error);
  } finally {
    await mongoose.connection.close();
    console.log("Database connection closed.");
  }
}

seedDB()
  .then(() => {
    console.log("Seeding script finished execution.");
    process.exit(0);
  })
  .catch((error) => {
    console.error("Seeding script encountered an error:", error);
    process.exit(1);
  });
