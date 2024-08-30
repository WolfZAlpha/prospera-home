import mongoose from "mongoose";
import { dbConnect } from "./index.js";
import dotenv from "dotenv";

import { userModel } from "../schemas/user.schema.js";
import { roleModel } from "../schemas/role.schema.js";
import { permissionModel } from "../schemas/permission.schema.js";
import { tagModel } from "../schemas/tag.schema.js";
import { categoryModel } from "../schemas/category.schema.js";
import { itemModel } from "../schemas/item.schema.js";

dotenv.config();

async function clearDevDbs() {
  if (process.env.NODE_ENV === "production") {
    console.error("This script cannot be run in production!");
    process.exit(1);
  }

  dbConnect();
  await roleModel.deleteMany({});
  await permissionModel.deleteMany({});
  await userModel.deleteMany({});
  await tagModel.deleteMany({});
  await categoryModel.deleteMany({});
  await itemModel.deleteMany({});
  console.log("Development DB cleared");
}

clearDevDbs().then(() => {
  mongoose.connection.close();
});
