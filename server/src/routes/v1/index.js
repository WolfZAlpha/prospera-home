import express from "express";
import authRoutes from "../auth/index.js";
import userRoutes from "../users/index.js";
import roleRoutes from "../roles/index.js";
import settingsRoutes from "../settings/index.js";
import productRoutes from "../products/index.js";
import categoryRoutes from "../categories/index.js";
import itemRoutes from "../items/index.js";
import tagRoutes from "../tags/index.js";
import uploadRoutes from "../uploads/index.js";
import meRoutes from "../me/index.js";
import permissionRoutes from "../permissions/index.js";
import { getTokenBalance } from "../../services/tokenService/index.js";
import { authenticate } from "../../middleware/authMiddleware/index.js";

const router = express.Router();

router.use("/auth", authRoutes);
router.use("/users", userRoutes);
router.use("/roles", roleRoutes);
router.use("/settings", settingsRoutes);
router.use("/products", productRoutes);
router.use("/categories", categoryRoutes);
router.use("/items", itemRoutes);
router.use("/tags", tagRoutes);
router.use("/uploads", uploadRoutes);
router.use("/me", meRoutes);
router.use("/permissions", permissionRoutes);

router.get("/wallet/balance/:walletAddress", authenticate, async (req, res) => {
  try {
    const balance = await getTokenBalance(req.params.walletAddress);
    res.json({ balance });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching token balance", error: error.message });
  }
});

export default router;
