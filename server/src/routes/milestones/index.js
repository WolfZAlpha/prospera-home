import express from "express";
import {
  authenticate,
  authorize,
} from "../../middleware/authMiddleware/index.js";
import {
  getMilestones,
  createMilestone,
  updateMilestone,
  deleteMilestone,
} from "../../services/milestones/index.js";

const router = express.Router();

router.get(
  "/",
  authenticate,
  authorize(["admin", "co-admin", "prosperaTeam", "kol"]),
  async (req, res) => {
    try {
      const milestones = await getMilestones();
      res.json(milestones);
    } catch (error) {
      res
        .status(500)
        .json({ message: "Error fetching milestones", error: error.message });
    }
  }
);

router.post(
  "/",
  authenticate,
  authorize(["admin", "co-admin"]),
  async (req, res) => {
    try {
      const newMilestone = await createMilestone(req.body);
      res.status(201).json(newMilestone);
    } catch (error) {
      res
        .status(500)
        .json({ message: "Error creating milestone", error: error.message });
    }
  }
);

router.patch(
  "/:id",
  authenticate,
  authorize(["admin", "co-admin"]),
  async (req, res) => {
    try {
      const updatedMilestone = await updateMilestone(req.params.id, req.body);
      res.json(updatedMilestone);
    } catch (error) {
      res
        .status(500)
        .json({ message: "Error updating milestone", error: error.message });
    }
  }
);

router.delete("/:id", authenticate, authorize(["admin"]), async (req, res) => {
  try {
    await deleteMilestone(req.params.id);
    res.status(204).send();
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error deleting milestone", error: error.message });
  }
});

export default router;
