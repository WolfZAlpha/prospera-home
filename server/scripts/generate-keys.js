import { generateKeyPair } from "jose";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function generateAndSaveKeys() {
  const { publicKey, privateKey } = await generateKeyPair("EdDSA");

  const keysDir = path.join(__dirname, "../config/keys");

  // Ensure the keys directory exists
  if (!fs.existsSync(keysDir)) {
    fs.mkdirSync(keysDir, { recursive: true });
  }

  fs.writeFileSync(
    path.join(keysDir, "ed25519-private.key"),
    privateKey.export({ format: "pem", type: "pkcs8" })
  );
  fs.writeFileSync(
    path.join(keysDir, "ed25519-public.key"),
    publicKey.export({ format: "pem", type: "spki" })
  );

  console.log("Ed25519 keys generated and saved in server/config/keys/");
}

generateAndSaveKeys();
