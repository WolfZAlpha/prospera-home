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
import ReseedAction from "./mongoose/RessedAction.js";
import { initializeChat } from "./services/chat/index.js";
import cookieParser from "cookie-parser";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load environment variables from the root .env file
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
  dashboardUrl:
    process.env.NODE_ENV === "development"
      ? process.env.APP_URL_DASHBOARD_DEV
      : process.env.APP_URL_DASHBOARD,
  vrUrl:
    process.env.NODE_ENV === "development"
      ? process.env.APP_URL_VR_DEV
      : process.env.APP_URL_VR,
  apiUrl:
    process.env.NODE_ENV === "development"
      ? process.env.APP_URL_API_DEV
      : process.env.APP_URL_API,
  teamDashboardUrl:
    process.env.NODE_ENV === "development"
      ? process.env.APP_URL_TEAMDASHBOARD_DEV
      : process.env.APP_URL_TEAMDASHBOARD,
};

const app = express();
const server = http.createServer(app);

const whitelist = [
  config.clientUrl,
  config.dashboardUrl,
  config.vrUrl,
  config.apiUrl,
  config.teamDashboardUrl,
  "http://localhost:3000",
  "http://localhost:3001",
  "http://localhost:3002",
  "http://localhost:3003",
];

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
  allowedHeaders: ["Content-Type", "Authorization"],
  exposedHeaders: ["set-cookie"],
};

const startServer = async () => {
  try {
    await dbConnect();

    app.use(cors(corsOptions));
    app.use(
      bodyParser.json({ type: "application/vnd.api+json", strict: false })
    );
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(cookieParser());
    app.use(passport.initialize());

    app.get("/health", (req, res) => {
      res.status(200).json({ status: "OK", message: "Server is running" });
    });

    app.use("/api", routes);

    // Serve static files from the React app
    app.use(express.static(path.join(__dirname, "../../homepage/build")));

    // Handle requests to the AR subdomain
    app.use((req, res, next) => {
      if (req.hostname === "ar.prosperadefi.com") {
        req.url = "/augmented-reality";
      }
      next();
    });

    // The "catchall" handler: for any request that doesn't match one above, send back React's index.html file.
    app.get("*", (req, res) => {
      res.sendFile(path.join(__dirname, "../../homepage/build/index.html"));
    });

    if (process.env.SCHEDULE_HOUR) {
      cron.schedule(`0 */${process.env.SCHEDULE_HOUR} * * *`, () => {
        ReseedAction();
      });
    }

    initializeChat(server);

    app.use((err, req, res, next) => {
      console.error("Error:", err);
      res.status(err.status || 500).json({
        message: err.message || "Internal Server Error",
        stack: config.isDev ? err.stack : "🥞",
      });
    });

    server.listen(config.port, () => {
      console.log(`Server listening on port ${config.port}`);
      console.log("Environment:", process.env.NODE_ENV);
      console.log("DB_LINK:", config.dbLink ? "Set" : "Not set");
      console.log("APP_URL_CLIENT:", config.clientUrl);
      console.log("CORS Whitelist:", whitelist);
      console.log("API Base URL:", `${config.apiUrl}/api`);
    });
  } catch (error) {
    console.error("Failed to start the server:", error);
    process.exit(1);
  }
};

startServer();
