import Web3 from "web3";
import { userModel } from "../../schemas/user.schema.js";

const web3 = new Web3(process.env.ETHEREUM_RPC_URL);

export const connectWallet = async (userId, walletAddress) => {
  const user = await userModel.findByIdAndUpdate(
    userId,
    { walletAddress },
    { new: true }
  );
  return user;
};

export const getTokenBalance = async (walletAddress) => {
  const contract = new web3.eth.Contract(ABI, PROS_TOKEN_ADDRESS);
  const balance = await contract.methods.balanceOf(walletAddress).call();
  return web3.utils.fromWei(balance, "ether");
};

export const updateUserTokenBalance = async (userId) => {
  const user = await userModel.findById(userId);
  const balance = await getTokenBalance(user.walletAddress);
  user.prosTokenBalance = balance;
  await user.save();
  return user;
};
