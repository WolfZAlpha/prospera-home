import axios from "axios";

const ARBISCAN_API_URL = "https://api.arbiscan.io/api";
const ARBISCAN_API_KEY = "YOUR_ARBISCAN_API_KEY"; // Replace with your actual API key
const PROS_TOKEN_CONTRACT = "0x4fd38270BAF7E61453BA9555c6e17512a6db9b30";
const MIN_BALANCE = 5000; // 5000 $PROS tokens (with 0 decimals)

export const checkTokenHolding = async (walletAddress) => {
  try {
    const response = await axios.get(ARBISCAN_API_URL, {
      params: {
        module: "account",
        action: "tokenbalance",
        contractaddress: PROS_TOKEN_CONTRACT,
        address: walletAddress,
        tag: "latest",
        apikey: ARBISCAN_API_KEY,
      },
    });

    if (response.data.status === "1" && response.data.message === "OK") {
      const balance = parseInt(response.data.result, 10);
      return balance >= MIN_BALANCE;
    } else {
      console.error("Error fetching token balance:", response.data.message);
      return false;
    }
  } catch (error) {
    console.error("Error checking token holding:", error);
    return false;
  }
};

export const getTokenBalance = async (walletAddress) => {
  try {
    const response = await axios.get(ARBISCAN_API_URL, {
      params: {
        module: "account",
        action: "tokenbalance",
        contractaddress: PROS_TOKEN_CONTRACT,
        address: walletAddress,
        tag: "latest",
        apikey: ARBISCAN_API_KEY,
      },
    });

    if (response.data.status === "1" && response.data.message === "OK") {
      return parseInt(response.data.result, 10);
    } else {
      console.error("Error fetching token balance:", response.data.message);
      return 0;
    }
  } catch (error) {
    console.error("Error getting token balance:", error);
    return 0;
  }
};
