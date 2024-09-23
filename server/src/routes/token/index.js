import express from "express";
import {
  authenticate,
  authorize,
} from "../../middleware/authMiddleware/index.js";
import {
  getTokenBalance,
  checkTokenHolding,
  updateUserTokenBalance,
} from "../../services/tokenService/index.js";

const router = express.Router();

// Get token balance for a wallet address
router.get("/balance/:walletAddress", authenticate, async (req, res) => {
  try {
    const balance = await getTokenBalance(req.params.walletAddress);
    res.json({ balance });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching token balance", error: error.message });
  }
});

// Check if a wallet holds sufficient tokens
router.get("/check-holding/:walletAddress", authenticate, async (req, res) => {
  try {
    const isHoldingSufficient = await checkTokenHolding(
      req.params.walletAddress
    );
    res.json({ isHoldingSufficient });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error checking token holding", error: error.message });
  }
});

// Update user's token balance
router.post(
  "/update-balance",
  authenticate,
  authorize(["admin", "co-admin"]),
  async (req, res) => {
    try {
      const updatedUser = await updateUserTokenBalance(req.body.userId);
      res.json({ user: updatedUser });
    } catch (error) {
      res.status(500).json({
        message: "Error updating user token balance",
        error: error.message,
      });
    }
  }
);

export default router;
