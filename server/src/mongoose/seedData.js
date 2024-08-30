import bcrypt from "bcrypt";
import mongoose from "mongoose";
import { dbConnect } from "./index.js";

import { userModel } from "../schemas/user.schema.js";
import { roleModel } from "../schemas/role.schema.js";
import { permissionModel } from "../schemas/permission.schema.js";

import dotenv from "dotenv";
dotenv.config();

async function seedDB() {
  // Connect to db
  await dbConnect();

  // Create admin user
  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(process.env.ADMIN_PASSWORD, salt);
  const admin = new userModel({
    name: "Admin",
    email: process.env.ADMIN_EMAIL,
    password: hashPassword,
    arbitrumWallet: process.env.ADMIN_WALLET,
    role: "admin",
    created_at: new Date(),
    profile_image: `${process.env.APP_URL_API}/public/images/admin.jpg`,
  });

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

  // Create permissions
  const createdPermissions = await Promise.all(
    permissions.map((name) =>
      permissionModel.findOneAndUpdate(
        { name },
        { name, created_at: new Date() },
        { upsert: true, new: true }
      )
    )
  );

  // Create role-permission mappings
  const rolePermissions = {
    admin: createdPermissions.map((perm) => perm._id),
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
    user: createdPermissions
      .filter((perm) => perm.name.startsWith("view"))
      .map((perm) => perm._id),
  };

  // Create or update roles
  for (const [roleName, permissions] of Object.entries(rolePermissions)) {
    await roleModel.findOneAndUpdate(
      { name: roleName },
      {
        name: roleName,
        permissions: permissions,
        created_at: new Date(),
        updated_at: new Date(),
      },
      { upsert: true, new: true }
    );
  }

  // Save admin user
  await admin.save();

  console.log("DB seeded with admin account, roles, and permissions");
}

seedDB().then(() => {
  mongoose.connection.close();
});
