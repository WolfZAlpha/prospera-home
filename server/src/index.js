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

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = process.env.PORT || 8080;
const app = express();
const server = http.createServer(app);

const whitelist = [
  process.env.APP_URL_CLIENT,
  process.env.APP_URL_DASHBOARD,
  process.env.APP_URL_VR,
  process.env.APP_URL_API,
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
};

const startServer = async () => {
  try {
    await dbConnect();

    app.use(cors(corsOptions));
    app.use(
      bodyParser.json({ type: "application/vnd.api+json", strict: false })
    );
    app.use(express.json());
    app.use(cookieParser());
    app.use(passport.initialize());

    // API routes
    app.use("/api", routes);

    // Serve static files for the homepage
    app.use(express.static(path.join(__dirname, "../../homepage/build")));

    // Handle any requests that don't match the above for the homepage
    app.get("*", (req, res) => {
      // Check if the request is coming from the main domain or its subdomains
      const hostname = req.hostname;
      const isMainDomain =
        hostname === process.env.FRONTEND_URL ||
        hostname.endsWith("." + process.env.FRONTEND_URL);

      if (isMainDomain) {
        res.sendFile(path.join(__dirname, "../../homepage/build/index.html"));
      } else {
        // For any other domain (including dashboard), send a JSON response
        res.status(404).json({ message: "Not found" });
      }
    });

    if (process.env.SCHEDULE_HOUR) {
      cron.schedule(`0 */${process.env.SCHEDULE_HOUR} * * *`, () => {
        ReseedAction();
      });
    }

    // Initialize chat
    initializeChat(server);

    // Error handling middleware
    app.use((err, req, res, next) => {
      console.error(err.stack);
      res.status(500).json({ message: "Internal Server Error" });
    });

    server.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
  } catch (error) {
    console.error("Failed to start the server:", error);
    process.exit(1);
  }
};

startServer();
