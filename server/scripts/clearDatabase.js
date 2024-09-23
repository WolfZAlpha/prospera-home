import mongoose from "mongoose";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.join(__dirname, "..", "..", ".env") });

async function clearDatabase() {
  try {
    await mongoose.connect(process.env.DB_LINK, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      ssl: true,
      tlsAllowInvalidCertificates: true,
    });

    console.log("Connected to database. Clearing collections...");

    const collections = await mongoose.connection.db.collections();

    for (let collection of collections) {
      await collection.deleteMany({});
      console.log(`Cleared ${collection.collectionName}`);
    }

    console.log("All collections have been cleared.");
  } catch (error) {
    console.error("Error clearing database:", error);
  } finally {
    await mongoose.connection.close();
    console.log("Database connection closed");
  }
}

clearDatabase().then(() => process.exit(0));
