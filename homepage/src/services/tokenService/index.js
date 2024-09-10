import axios from "axios";
import config from "../../config";

const ARBISCAN_API_URL = config.arbiscanApiUrl;
const ARBISCAN_API_KEY = config.arbiscanApiKey;
const PROS_TOKEN_CONTRACT = config.prosTokenContract;
const MIN_BALANCE = config.minTokenBalance;

const fetchTokenBalance = async (arbitrumWallet) => {
  console.log("Fetching token balance for wallet:", arbitrumWallet);
  console.log("API URL:", ARBISCAN_API_URL);
  console.log("API Key:", ARBISCAN_API_KEY);
  console.log("PROS Token Contract:", PROS_TOKEN_CONTRACT);

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

  console.log("Full API response:", response.data);

  if (response.data.status !== "1" || response.data.message !== "OK") {
    throw new Error(`Error fetching token balance: ${response.data.message}`);
  }

  // The balance is already in whole tokens, no need for conversion
  return response.data.result;
};

const fetchTokenHolders = async (page, offset) => {
  const response = await axios.get(ARBISCAN_API_URL, {
    params: {
      module: "token",
      action: "tokenholderlist",
      contractaddress: PROS_TOKEN_CONTRACT,
      page,
      offset,
      apikey: ARBISCAN_API_KEY,
    },
  });

  console.log("Token holders API response:", response.data);

  if (response.data.status !== "1" || response.data.message !== "OK") {
    throw new Error(`Error fetching token holders: ${response.data.message}`);
  }

  return response.data.result;
};

export const checkTokenHolding = async (arbitrumWallet) => {
  try {
    console.log("Checking token holding for wallet:", arbitrumWallet);

    const balance = await fetchTokenBalance(arbitrumWallet);
    console.log("Token balance:", balance);

    if (Number(balance) >= Number(MIN_BALANCE)) {
      return true;
    }

    // If the direct balance check fails, we'll check the token holder list
    let page = 1;
    const offset = 1000;
    let continueChecking = true;

    while (continueChecking) {
      const holders = await fetchTokenHolders(page, offset);
      if (holders.length === 0) {
        continueChecking = false;
        break;
      }

      const holder = holders.find(
        (h) => h.TokenHolderAddress.toLowerCase() === arbitrumWallet.toLowerCase()
      );

      if (holder) {
        const listBalance = holder.TokenHolderQuantity;
        console.log("Listed balance:", listBalance);
        return Number(listBalance) >= Number(MIN_BALANCE);
      }

      page++;
    }

    return false;
  } catch (error) {
    console.error("Error checking token holding:", error);
    return false;
  }
};

export const getTokenBalance = async (arbitrumWallet) => {
  try {
    console.log("Getting token balance for wallet:", arbitrumWallet);
    const balance = await fetchTokenBalance(arbitrumWallet);
    console.log("Token balance:", balance);
    return balance;
  } catch (error) {
    console.error("Error getting token balance:", error);
    return "0";
  }
};
