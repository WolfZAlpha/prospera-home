import axios from "axios";
import { userModel } from "../../schemas/user.schema.js";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import logger from "../../utils/logger.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.join(__dirname, "..", "..", "..", "..", ".env") });

const ARBISCAN_API_URL = process.env.ARBISCAN_API_URL;
const ARBISCAN_API_KEY = process.env.ARBISCAN_API_KEY;
const PROS_TOKEN_CONTRACT = process.env.PROS_TOKEN_CONTRACT;
const MIN_TOKEN_BALANCE = process.env.MIN_TOKEN_BALANCE;

logger.info("TokenService - Environment variables:");
logger.info(`ARBISCAN_API_URL: ${ARBISCAN_API_URL ? "Set" : "Not set"}`);
logger.info(`ARBISCAN_API_KEY: ${ARBISCAN_API_KEY ? "Set" : "Not set"}`);
logger.info(`PROS_TOKEN_CONTRACT: ${PROS_TOKEN_CONTRACT ? "Set" : "Not set"}`);
logger.info(`MIN_TOKEN_BALANCE: ${MIN_TOKEN_BALANCE ? "Set" : "Not set"}`);

export const getTokenBalance = async (arbitrumWallet) => {
  try {
    if (!ARBISCAN_API_URL) {
      console.error("ARBISCAN_API_URL is not defined in environment variables");
      return "0";
    }

    console.log("Making request to Arbiscan with params:", {
      module: "account",
      action: "tokenbalance",
      contractaddress: PROS_TOKEN_CONTRACT,
      address: arbitrumWallet,
      tag: "latest",
      apikey: ARBISCAN_API_KEY,
    });

    const response = await axios.get(ARBISCAN_API_URL, {
      params: {
        module: "account",
        action: "tokenbalance",
        contractaddress: PROS_TOKEN_CONTRACT,
        address: arbitrumWallet,
        tag: "latest",
        apikey: ARBISCAN_API_KEY,
      },
    });

    console.log("Arbiscan response:", response.data);

    if (response.data.status === "1" && response.data.message === "OK") {
      return response.data.result;
    } else {
      console.error("Error fetching token balance:", response.data.message);
      return "0";
    }
  } catch (error) {
    console.error("Error getting token balance:", error);
    return "0";
  }
};

export const checkTokenHolding = async (arbitrumWallet) => {
  const balance = await getTokenBalance(arbitrumWallet);
  return Number(balance) >= Number(MIN_TOKEN_BALANCE);
};

export const updateUserTokenBalance = async (userId) => {
  try {
    const user = await userModel.findById(userId);
    if (!user) {
      throw new Error("User not found");
    }

    const balance = await getTokenBalance(user.arbitrumWallet);
    user.prosTokenBalance = balance;
    await user.save();

    // Check if the user is eligible for whitelist based on token balance
    if (
      Number(balance) >= Number(MIN_TOKEN_BALANCE) &&
      user.whitelistStatus === "none"
    ) {
      user.whitelistStatus = "eligible";
      await user.save();
    }

    return user;
  } catch (error) {
    console.error("Error updating user token balance:", error);
    throw error;
  }
};
