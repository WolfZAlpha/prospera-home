import express from "express";
import http from "http";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import passport from "./passport.js";
import path from "path";
import { fileURLToPath } from "url";
import routes from "./routes/index.js";
import { dbConnect } from "./mongoose/index.js";
import cron from "node-cron";
import { initializeChat } from "./services/chat/index.js";
import cookieParser from "cookie-parser";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import { errorHandler } from "./middleware/errorHandler.js";
import { subdomainRouter } from "./middleware/subdomainRouter.js";
import logger from "./utils/logger.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.join(__dirname, "..", "..", ".env") });

const config = {
  port: process.env.PORT || 8080,
  isDev: process.env.NODE_ENV === "development",
  dbLink: process.env.DB_LINK,
  jwtSecret: process.env.JWT_SECRET,
  clientUrl:
    process.env.NODE_ENV === "development"
      ? process.env.APP_URL_CLIENT_DEV
      : process.env.APP_URL_CLIENT,
  vrUrl:
    process.env.NODE_ENV === "development"
      ? process.env.APP_URL_VR_DEV
      : process.env.APP_URL_VR,
  apiUrl:
    process.env.NODE_ENV === "development"
      ? process.env.APP_URL_API_DEV
      : process.env.APP_URL_API,
  arbiscanApiUrl: process.env.ARBISCAN_API_URL,
  arbiscanApiKey: process.env.ARBISCAN_API_KEY,
  prosTokenContract: process.env.PROS_TOKEN_CONTRACT,
  minTokenBalance: process.env.MIN_TOKEN_BALANCE,
};

const app = express();
const server = http.createServer(app);

const whitelist = [config.clientUrl, config.vrUrl, config.apiUrl, 'https://prosperadefi.com'];

const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS", "PATCH"],
  allowedHeaders: ["Accept", "Authorization", "Cache-Control", "Content-Type", "DNT", "If-Modified-Since", "Keep-Alive", "Origin", "User-Agent", "X-Requested-With"],
  exposedHeaders: ["set-cookie"],
};

app.use(cors(corsOptions));

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  standardHeaders: true,
  legacyHeaders: false,
});

const startServer = async () => {
  try {
    await dbConnect();

    app.use(helmet());
    app.use(
      bodyParser.json({ type: "application/vnd.api+json", strict: false })
    );
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(cookieParser());
    app.use(passport.initialize());
    app.use(limiter);

    app.use(subdomainRouter);

    app.get("/health", (req, res) => {
      res.status(200).json({ status: "OK", message: "Server is running" });
    });

    // API routes
    app.use("/api", routes);

    // Serve static files for different parts of the application
    app.use(express.static(path.join(__dirname, "../../homepage/build")));

    app.get(["/ar", "/ar/*"], (req, res) => {
      res.sendFile(path.join(__dirname, "../../homepage/build/index.html"));
    });

    // Serve React app for any unmatched routes
    app.get("*", (req, res) => {
      res.sendFile(path.join(__dirname, "../../homepage/build/index.html"));
    });

    if (process.env.SCHEDULE_HOUR) {
      cron.schedule(`0 */${process.env.SCHEDULE_HOUR} * * *`, () => {
        ReseedAction();
      });
    }

    initializeChat(server);

    app.use(errorHandler);

    server.listen(config.port, () => {
      logger.info(`Server listening on port ${config.port}`);
      logger.info(`Environment: ${process.env.NODE_ENV}`);
      logger.info(`DB_LINK: ${config.dbLink ? "Set" : "Not set"}`);
      logger.info(`APP_URL_CLIENT: ${config.clientUrl}`);
      logger.info(`APP_URL_VR: ${config.vrUrl}`);
      logger.info(`CORS Whitelist: ${whitelist.join(", ")}`);
      logger.info(`API Base URL: ${config.apiUrl}/api`);

      // Log Arbiscan-related environment variables
      logger.info(
        `ARBISCAN_API_URL: ${config.arbiscanApiUrl ? "Set" : "Not set"}`
      );
      logger.info(
        `ARBISCAN_API_KEY: ${config.arbiscanApiKey ? "Set" : "Not set"}`
      );
      logger.info(
        `PROS_TOKEN_CONTRACT: ${config.prosTokenContract ? "Set" : "Not set"}`
      );
      logger.info(
        `MIN_TOKEN_BALANCE: ${config.minTokenBalance ? "Set" : "Not set"}`
      );
    });
  } catch (error) {
    logger.error("Failed to start the server:", error);
    process.exit(1);
  }
};

// Graceful shutdown
process.on("SIGTERM", () => {
  logger.info("SIGTERM signal received. Closing HTTP server.");
  server.close(() => {
    logger.info("HTTP server closed.");
    process.exit(0);
  });
});

startServer();