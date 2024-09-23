import express from "express";
import passport from "passport";
import {
  createUserRoute,
  deleteUserRoute,
  editUserRoute,
  getUserRoute,
  getUsersRoute,
  updateBetaAccess,
  updateWhitelistStatus,
  getWhitelistStatus,
} from "../../services/users/index.js";
import {
  authenticate,
  authorize,
} from "../../middleware/authMiddleware/index.js";

const router = express.Router();

router.get(
  "/",
  authenticate,
  authorize(["admin", "co-admin"]),
  async (req, res) => {
    await getUsersRoute(req, res);
  }
);

router.post("/", authenticate, authorize(["admin"]), async (req, res) => {
  await createUserRoute(req, res);
});

router.get("/:id", authenticate, async (req, res) => {
  await getUserRoute(req, res);
});

router.patch(
  "/:id",
  authenticate,
  authorize(["admin", "co-admin"]),
  async (req, res) => {
    await editUserRoute(req, res);
  }
);

router.delete("/:id", authenticate, authorize(["admin"]), async (req, res) => {
  await deleteUserRoute(req, res);
});

router.patch(
  "/:id/beta-access",
  authenticate,
  authorize(["admin"]),
  async (req, res) => {
    try {
      const { betaAccess } = req.body;
      const updatedUser = await updateBetaAccess(req.params.id, betaAccess);
      res.json({ user: updatedUser });
    } catch (error) {
      res
        .status(500)
        .json({ message: "Error updating beta access", error: error.message });
    }
  }
);

router.patch(
  "/:id/whitelist-status",
  authenticate,
  authorize(["admin"]),
  async (req, res) => {
    try {
      const { status } = req.body;
      const updatedUser = await updateWhitelistStatus(req.params.id, status);
      res.json({ user: updatedUser });
    } catch (error) {
      res.status(500).json({
        message: "Error updating whitelist status",
        error: error.message,
      });
    }
  }
);

router.get("/:id/whitelist-status", authenticate, async (req, res) => {
  try {
    const status = await getWhitelistStatus(req.params.id);
    res.json(status);
  } catch (error) {
    res.status(500).json({
      message: "Error fetching whitelist status",
      error: error.message,
    });
  }
});

export default router;
