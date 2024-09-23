import express from "express";
import {
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../../services/products/index.js";
import {
  authenticate,
  authorize,
} from "../../middleware/authMiddleware/index.js";

const router = express.Router();

router.get("/", authenticate, getProducts);
router.post("/", authenticate, authorize(["admin", "co-admin"]), createProduct);
router.put(
  "/:id",
  authenticate,
  authorize(["admin", "co-admin"]),
  updateProduct
);
router.delete("/:id", authenticate, authorize(["admin"]), deleteProduct);

export default router;
