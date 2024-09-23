import bcrypt from "bcrypt";
import mongoose from "mongoose";
import { dbConnect } from "./index.js";
import { userModel } from "../schemas/user.schema.js";
import { roleModel } from "../schemas/role.schema.js";
import { permissionModel } from "../schemas/permission.schema.js";
import { tagModel } from "../schemas/tag.schema.js";
import { categoryModel } from "../schemas/category.schema.js";
import { itemModel } from "../schemas/item.schema.js";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Try to load .env from the project root if it hasn't been loaded yet
if (!process.env.DB_LINK) {
  const envPath = path.resolve(__dirname, "../../../.env");
  dotenv.config({ path: envPath });
  console.log("Loaded environment variables from:", envPath);
}

if (!process.env.DB_LINK) {
  console.error(
    "DB_LINK is not defined in the environment variables. Make sure .env file is properly configured."
  );
  process.exit(1);
}

const ReSeedAction = async () => {
  try {
    await dbConnect();

    // Clear existing data
    await roleModel.deleteMany({});
    await permissionModel.deleteMany({});
    await userModel.deleteMany({});
    await tagModel.deleteMany({});
    await categoryModel.deleteMany({});
    await itemModel.deleteMany({});
    console.log("DB cleared");

    // Define permissions
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
      "approve whitelist",
    ];

    const createdPermissions = await Promise.all(
      permissions.map((name) =>
        permissionModel.create({
          name,
          createdAt: new Date(),
          updatedAt: new Date(),
        })
      )
    );

    console.log(`Created ${createdPermissions.length} permissions.`);

    // Create a map of permission names to their ObjectIds
    const permissionMap = createdPermissions.reduce((map, permission) => {
      map[permission.name] = permission._id;
      return map;
    }, {});

    // Create roles
    const roles = [
      {
        name: "admin",
        permissions: permissions.map((p) => permissionMap[p]),
      },
      {
        name: "co-admin",
        permissions: permissions
          .filter((p) => p !== "delete users")
          .map((p) => permissionMap[p]),
      },
      {
        name: "kol",
        permissions: permissions
          .filter(
            (p) => !["delete users", "edit users", "create users"].includes(p)
          )
          .map((p) => permissionMap[p]),
      },
      {
        name: "prosperaTeam",
        permissions: permissions
          .filter(
            (p) =>
              p.startsWith("view") || ["create items", "edit items"].includes(p)
          )
          .map((p) => permissionMap[p]),
      },
      {
        name: "member",
        permissions: permissions
          .filter((p) => p.startsWith("view"))
          .map((p) => permissionMap[p]),
      },
    ];

    const createdRoles = await Promise.all(
      roles.map((role) => roleModel.create(role))
    );

    console.log(`Created ${createdRoles.length} roles.`);

    // Create admin user
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(process.env.ADMIN_PASSWORD, salt);

    const adminUser = await userModel.create({
      name: "Zed Wolf",
      username: "unknownZ",
      email: process.env.ADMIN_EMAIL,
      password: hashedPassword,
      role: "admin", // Using string role instead of role ID
      arbitrumWallet: process.env.ADMIN_WALLET,
      betaAccess: true,
      whitelistStatus: "approved",
      isWhitelisted: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    console.log("Admin user created:", adminUser.email);

    // Create sample categories
    const categories = [
      { name: "Travel", description: "Travel ideas for everyone" },
      { name: "Food", description: "Our favourite recipes" },
      { name: "Home", description: "The latest trends in home decorations" },
      { name: "Fashion", description: "Stay in touch with the latest trends" },
      { name: "Health", description: "An apple a day keeps the doctor away" },
    ];

    const createdCategories = await Promise.all(
      categories.map((cat) =>
        categoryModel.create({
          ...cat,
          createdAt: new Date(),
          updatedAt: new Date(),
        })
      )
    );

    console.log(`Created ${createdCategories.length} categories.`);

    // Create sample tags
    const tags = [
      { name: "Hot", color: "#f44336" },
      { name: "Trending", color: "#9c27b0" },
      { name: "New", color: "#00bcd4" },
    ];

    const createdTags = await Promise.all(
      tags.map((tag) =>
        tagModel.create({
          ...tag,
          createdAt: new Date(),
          updatedAt: new Date(),
        })
      )
    );

    console.log(`Created ${createdTags.length} tags.`);

    // Create sample items
    const items = [
      {
        name: "5 citybreak ideas for this year",
        status: "published",
        excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sit amet nulla nulla...",
        image: `${process.env.APP_URL_API}/public/images/product.jpg`,
        isOnHomepage: false,
        category: createdCategories[0]._id,
        tags: [createdTags[0]._id, createdTags[1]._id],
      },
      {
        name: "Top 10 restaurants in Italy",
        status: "published",
        excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sit amet nulla nulla...",
        image: `${process.env.APP_URL_API}/public/images/product.jpg`,
        isOnHomepage: false,
        category: createdCategories[1]._id,
        tags: [createdTags[1]._id, createdTags[2]._id],
      },
      {
        name: "Cocktail ideas for your birthday party",
        status: "published",
        excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sit amet nulla nulla...",
        image: `${process.env.APP_URL_API}/public/images/product.jpg`,
        isOnHomepage: false,
        category: createdCategories[2]._id,
        tags: [createdTags[0]._id, createdTags[1]._id, createdTags[2]._id],
      },
    ];

    const createdItems = await Promise.all(
      items.map((item) =>
        itemModel.create({
          ...item,
          createdAt: new Date(),
          updatedAt: new Date(),
        })
      )
    );

    console.log(`Created ${createdItems.length} items.`);

    console.log("ReSeed process completed successfully.");
  } catch (error) {
    console.error("An error occurred during the ReSeed process:", error);
  } finally {
    await mongoose.connection.close();
    console.log("Database connection closed.");
  }
};

// Immediately invoke the ReSeedAction function
ReSeedAction()
  .then(() => {
    console.log("ReSeed script execution completed.");
    process.exit(0);
  })
  .catch((error) => {
    console.error("ReSeed script failed:", error);
    process.exit(1);
  });
