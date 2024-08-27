import express from "express";
import {
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../../services/products/index.js";
import { protect, authorize } from "../../middleware/authMiddleware/index.js";

const router = express.Router();

router.get("/", getProducts);
router.post("/", protect, authorize("admin"), createProduct);
router.put("/:id", protect, authorize("admin"), updateProduct);
router.delete("/:id", protect, authorize("admin"), deleteProduct);

export default router;
