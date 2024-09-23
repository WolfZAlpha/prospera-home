import { ethers } from "ethers";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import { readFileSync } from "fs";
import { join } from "path";
import { userModel } from "../../schemas/user.schema.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.join(__dirname, "..", "..", "..", ".env") });

const PROSPERA_ICO_CONTRACT = process.env.PROSPERA_ICO_CONTRACT;
const ARBITRUM_RPC_URL = process.env.ARBITRUM_RPC_URL;

if (!ARBITRUM_RPC_URL) {
  throw new Error(
    "ARBITRUM_RPC_URL is not defined in the environment variables"
  );
}

const ICO_ABI = JSON.parse(
  readFileSync(join(__dirname, "pros_abi.json"), "utf8")
);

const provider = new ethers.providers.JsonRpcProvider(ARBITRUM_RPC_URL);
const icoContract = new ethers.Contract(
  PROSPERA_ICO_CONTRACT,
  ICO_ABI,
  provider
);

export const getICOProgress = async () => {
  try {
    const soldTokens = await icoContract.totalTokensSold();
    const currentTier = await icoContract.currentTier();
    const [tierTokens, tierPrice] = await icoContract.tierTokensPrices(
      currentTier
    );
    const icoSupply = await icoContract.ICO_SUPPLY();
    const currentPrice = await icoContract.getTokenPrice();

    const totalRaised = ethers.utils.formatEther(soldTokens.mul(currentPrice));
    const target = ethers.utils.formatEther(icoSupply.mul(currentPrice));

    const investors = await userModel.countDocuments({
      prosTokenBalance: { $gt: 0 },
    });
    const averageInvestment = investors > 0 ? totalRaised / investors : 0;

    return {
      raised: parseFloat(totalRaised),
      target: parseFloat(target),
      stage: currentTier.toNumber(),
      currentPrice: ethers.utils.formatEther(currentPrice),
      investors,
      averageInvestment,
      soldTokens: ethers.utils.formatEther(soldTokens),
      remainingTokens: ethers.utils.formatEther(icoSupply.sub(soldTokens)),
    };
  } catch (error) {
    console.error("Error fetching ICO progress:", error);
    throw error;
  }
};

export const getTokenSalesByCountry = async () => {
  try {
    const users = await userModel.aggregate([
      { $match: { prosTokenBalance: { $gt: 0 } } },
      {
        $group: { _id: "$country", tokenAmount: { $sum: "$prosTokenBalance" } },
      },
    ]);

    const totalTokens = users.reduce((sum, user) => sum + user.tokenAmount, 0);

    return users.map((user) => ({
      country: user._id,
      tokenAmount: user.tokenAmount,
      percentage: ((user.tokenAmount / totalTokens) * 100).toFixed(2),
    }));
  } catch (error) {
    console.error("Error fetching token sales by country:", error);
    throw error;
  }
};

export const getDailyTokenSales = async () => {
  try {
    const thirtyDaysAgo = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000);
    const sales = await userModel.aggregate([
      {
        $match: {
          prosTokenBalance: { $gt: 0 },
          createdAt: { $gte: thirtyDaysAgo },
        },
      },
      {
        $group: {
          _id: { $dateToString: { format: "%Y-%m-%d", date: "$createdAt" } },
          dailySales: { $sum: "$prosTokenBalance" },
        },
      },
      { $sort: { _id: 1 } },
    ]);

    let cumulativeSales = 0;
    return sales.map((sale) => {
      cumulativeSales += sale.dailySales;
      return {
        date: sale._id,
        dailySales: sale.dailySales,
        cumulativeSales,
      };
    });
  } catch (error) {
    console.error("Error fetching daily token sales:", error);
    throw error;
  }
};

export const validateICOPurchase = async (amount) => {
  const minBuy = 150; // $150 USD in ETH
  const maxBuy = 500000; // $500,000 USD in ETH

  if (amount < minBuy) {
    throw new Error(`Minimum ICO purchase is $${minBuy}`);
  }
  if (amount > maxBuy) {
    throw new Error(`Maximum ICO purchase is $${maxBuy}`);
  }
  return true;
};
