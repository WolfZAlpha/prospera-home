import axios from "axios";
import { userModel } from "../../schemas/user.schema.js";
import dotenv from "dotenv";

dotenv.config();

const ARBISCAN_API_URL = process.env.ARBISCAN_API_URL;
const ARBISCAN_API_KEY = process.env.ARBISCAN_API_KEY;
const PROS_TOKEN_CONTRACT = process.env.PROS_TOKEN_CONTRACT;

export const connectWallet = async (userId, arbitrumWallet) => {
  const user = await userModel.findByIdAndUpdate(
    userId,
    { arbitrumWallet },
    { new: true }
  );
  return user;
};

export const getTokenBalance = async (arbitrumWallet) => {
  try {
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

export const updateUserTokenBalance = async (userId) => {
  const user = await userModel.findById(userId);
  const balance = await getTokenBalance(user.arbitrumWallet);
  user.prosTokenBalance = balance;
  await user.save();
  return user;
};
