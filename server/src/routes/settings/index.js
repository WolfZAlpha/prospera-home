import express from "express";
import { getSettings, updateSettings } from "../../services/settings/index.js";
import { protect, authorize } from "../../middleware/authMiddleware/index.js";

const router = express.Router();

router.get("/", protect, getSettings);
router.put("/", protect, updateSettings);

export default router;
