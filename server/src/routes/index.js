import express from "express";
import userRoutes from "./users/index.js";
import authRoutes from "./auth/index.js";
import roleRoutes from "./roles/index.js";
import settingsRoutes from "./settings/index.js";
import productRoutes from "./products/index.js";

const router = express.Router();

router.use("/auth", authRoutes);
router.use("/users", userRoutes);
router.use("/roles", roleRoutes);
router.use("/settings", settingsRoutes);
router.use("/products", productRoutes);

export default router;
