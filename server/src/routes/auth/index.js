import express from "express";
import {
  forgotPasswordRouteHandler,
  loginRouteHandler,
  registerRouteHandler,
  resetPasswordRouteHandler,
  checkAuthRouteHandler,
} from "../../services/auth/index.js";
import { verifyAuth } from "../../services/auth/index.js";

const router = express.Router();

router.post("/login", async (req, res) => {
  console.log("Login route hit. Request body:", req.body);
  await loginRouteHandler(req, res);
});

router.post("/logout", (req, res) => {
  res.clearCookie("token", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    domain: ".prosperadefi.com",
  });
  return res.sendStatus(204);
});

router.post("/register", async (req, res) => {
  try {
    console.log("Register route hit. Request body:", req.body);
    await registerRouteHandler(req, res);
  } catch (error) {
    console.error("Error in register route:", error);
    res.status(500).json({
      message: "Internal server error during registration",
      error: error.message,
    });
  }
});

router.post("/password-forgot", async (req, res) => {
  await forgotPasswordRouteHandler(req, res);
});

router.post("/password-reset", async (req, res) => {
  await resetPasswordRouteHandler(req, res);
});

router.get("/check", verifyAuth, async (req, res) => {
  try {
    await checkAuthRouteHandler(req, res);
  } catch (error) {
    console.error("Error in checkAuthRouteHandler:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

export default router;
