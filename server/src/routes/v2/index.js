import express from "express";
import {
  authenticate,
  authorize,
} from "../../middleware/authMiddleware/index.js";
import authRoutes from "../auth/index.js";
import userRoutes from "../users/index.js";
import dashboardRoutes from "../dashboard/index.js";
import teamDashboardRoutes from "../teamDashboard/index.js";
import arRoutes from "../ar/index.js";
import icoRoutes from "../ico/index.js";
import projectRoutes from "../project/index.js";
import milestonesRoutes from "../milestones/index.js";
import tokenRoutes from "../token/index.js";

const router = express.Router();

// Apply authentication middleware to all routes
router.use(authenticate);

// Public routes
router.use("/auth", authRoutes);

// Protected routes
router.use("/users", authorize(["admin", "co-admin"]), userRoutes);
router.use(
  "/dashboard",
  authorize(["admin", "co-admin", "prosperaTeam", "kol", "member"]),
  dashboardRoutes
);
router.use(
  "/team-dashboard",
  authorize(["admin", "co-admin", "prosperaTeam", "kol"]),
  teamDashboardRoutes
);
router.use(
  "/ar",
  authorize(["admin", "co-admin", "prosperaTeam", "kol", "member"]),
  arRoutes
);
router.use(
  "/ico",
  authorize(["admin", "co-admin", "prosperaTeam", "kol"]),
  icoRoutes
);
router.use(
  "/project",
  authorize(["admin", "co-admin", "prosperaTeam", "kol"]),
  projectRoutes
);
router.use(
  "/milestones",
  authorize(["admin", "co-admin", "prosperaTeam", "kol"]),
  milestonesRoutes
);
router.use("/token", tokenRoutes);

// Error handling for unauthorized access
router.use((err, req, res, next) => {
  if (err.name === "UnauthorizedError") {
    res.status(401).json({ error: "Unauthorized access" });
  } else {
    next(err);
  }
});

export default router;
