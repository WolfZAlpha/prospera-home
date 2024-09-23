import express from "express";
import {
  authenticate,
  authorize,
} from "../../middleware/authMiddleware/index.js";
import {
  getICOProgress,
  getTokenSalesByCountry,
  getDailyTokenSales,
  validateICOPurchase,
} from "../../services/ico/index.js";

const router = express.Router();

router.get(
  "/progress",
  authenticate,
  authorize(["admin", "co-admin", "prosperaTeam", "kol"]),
  async (req, res) => {
    try {
      const progress = await getICOProgress();
      res.json(progress);
    } catch (error) {
      res
        .status(500)
        .json({ message: "Error fetching ICO progress", error: error.message });
    }
  }
);

router.get(
  "/token-sales/country",
  authenticate,
  authorize(["admin", "co-admin", "prosperaTeam", "kol"]),
  async (req, res) => {
    try {
      const salesByCountry = await getTokenSalesByCountry();
      res.json(salesByCountry);
    } catch (error) {
      res.status(500).json({
        message: "Error fetching token sales by country",
        error: error.message,
      });
    }
  }
);

router.get(
  "/token-sales/daily",
  authenticate,
  authorize(["admin", "co-admin", "prosperaTeam", "kol"]),
  async (req, res) => {
    try {
      const dailySales = await getDailyTokenSales();
      res.json(dailySales);
    } catch (error) {
      res.status(500).json({
        message: "Error fetching daily token sales",
        error: error.message,
      });
    }
  }
);

router.post("/validate-purchase", authenticate, async (req, res) => {
  try {
    const { amount } = req.body;
    await validateICOPurchase(amount);
    res.json({ valid: true });
  } catch (error) {
    res.status(400).json({ valid: false, message: error.message });
  }
});

export default router;
