import express from "express";
import {
  authenticate,
  authorize,
} from "../../middleware/authMiddleware/index.js";
import {
  getProjectOverview,
  updateProjectStatus,
} from "../../services/project/index.js";

const router = express.Router();

router.get(
  "/overview",
  authenticate,
  authorize(["admin", "co-admin", "prosperaTeam", "kol"]),
  async (req, res) => {
    try {
      const overview = await getProjectOverview();
      res.json(overview);
    } catch (error) {
      res.status(500).json({
        message: "Error fetching project overview",
        error: error.message,
      });
    }
  }
);

router.patch(
  "/status",
  authenticate,
  authorize(["admin", "co-admin"]),
  async (req, res) => {
    try {
      const { status } = req.body;
      const updatedProject = await updateProjectStatus(status);
      res.json(updatedProject);
    } catch (error) {
      res.status(500).json({
        message: "Error updating project status",
        error: error.message,
      });
    }
  }
);

export default router;
