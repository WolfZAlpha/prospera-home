import { verifyToken } from "../../services/auth/index.js";
import { userModel } from "../../schemas/user.schema.js";

export const protect = async (req, res, next) => {
  let token = req.cookies.token;

  if (!token) {
    return res.status(401).json({ message: "Not authorized, no token" });
  }

  try {
    const payload = await verifyToken(token);
    if (!payload) {
      return res.status(401).json({ message: "Not authorized, token failed" });
    }
    req.user = await userModel
      .findById(payload.id)
      .select("-password")
      .populate("role");
    next();
  } catch (error) {
    console.error("Token verification error:", error);
    res.status(401).json({ message: "Not authorized, token failed" });
  }
};

export const authorize = (...roles) => {
  return (req, res, next) => {
    if (!req.user || !roles.includes(req.user.role.name)) {
      return res
        .status(403)
        .json({ message: "Not authorized to access this route" });
    }
    next();
  };
};
