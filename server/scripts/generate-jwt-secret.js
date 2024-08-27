import crypto from "crypto";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function generateJWTSecret(length = 128) {
  return crypto.randomBytes(length).toString("hex");
}

const jwtSecret = generateJWTSecret();

const envPath = path.join(__dirname, "../.env");

let envContent = "";

// Check if .env file exists, if not create it
if (fs.existsSync(envPath)) {
  envContent = fs.readFileSync(envPath, "utf8");
}

// Replace existing JWT_SECRET or append a new one
if (envContent.includes("JWT_SECRET=")) {
  envContent = envContent.replace(/JWT_SECRET=.*/, `JWT_SECRET="${jwtSecret}"`);
} else {
  envContent += `\nJWT_SECRET="${jwtSecret}"`;
}

fs.writeFileSync(envPath, envContent);

console.log("JWT_SECRET has been generated and added to server/.env file");
