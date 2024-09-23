import express from "express";
import { authorize } from "../../middleware/authMiddleware/index.js";

const router = express.Router();

// Example route
router.get(
  "/",
  authorize("admin", "co-admin", "prosperaTeam", "kol", "member"),
  (req, res) => {
    res.json({ message: "Dashboard data" });
  }
);

export default router;
