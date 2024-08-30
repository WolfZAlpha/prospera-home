import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export const dbConnect = async () => {
  try {
    if (!process.env.DB_LINK) {
      throw new Error("DB_LINK is not defined in the environment variables");
    }

    await mongoose.connect(process.env.DB_LINK, {
      ssl: true,
      tlsAllowInvalidCertificates: true, // Only use this for testing. Remove in production.
    });
    console.log("MongoDB connection established successfully");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1);
  }

  mongoose.connection.on("error", (err) => {
    console.error("MongoDB connection error:", err);
  });

  mongoose.connection.on("disconnected", () => {
    console.warn("MongoDB disconnected. Attempting to reconnect...");
  });

  mongoose.connection.on("reconnected", () => {
    console.log("MongoDB reconnected");
  });
};
