import express from "express";
import {
  getSettings,
  updateSettings,
  updateSpecificSettings,
} from "../../services/settings/index.js";
import { authenticate } from "../../middleware/authMiddleware/index.js";

const router = express.Router();

router.get("/", authenticate, async (req, res) => {
  try {
    const settings = await getSettings(req.user.id);
    res.json(settings);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching settings", error: error.message });
  }
});

router.put("/", authenticate, async (req, res) => {
  try {
    const updatedSettings = await updateSettings(req.user.id, req.body);
    res.json(updatedSettings);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error updating settings", error: error.message });
  }
});

router.patch("/:settingsType", authenticate, async (req, res) => {
  try {
    const { settingsType } = req.params;
    const updatedSettings = await updateSpecificSettings(
      req.user.id,
      settingsType,
      req.body
    );
    res.json({ [settingsType]: updatedSettings });
  } catch (error) {
    res.status(500).json({
      message: "Error updating specific settings",
      error: error.message,
    });
  }
});

export default router;
