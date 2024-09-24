import axios from "axios";
import config from "../config";

const API_URL = config.apiUrl;

const api = axios.create({
  baseURL: API_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const fetchUserData = async (userId) => {
  try {
    const response = await api.get(`/v1/users/${userId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching user data:", error);
    throw error;
  }
};

export const checkTokenHolding = async (arbitrumWallet) => {
  try {
    const response = await api.get(`/v1/wallet/${arbitrumWallet}/token-holding`);
    return response.data.hasTokens;
  } catch (error) {
    console.error("Error checking token holding:", error);
    throw error;
  }
};

export const getTokenBalance = async (arbitrumWallet) => {
  try {
    const response = await api.get(`/v1/wallet/balance/${arbitrumWallet}`);
    return response.data.balance;
  } catch (error) {
    console.error("Error getting token balance:", error);
    throw error;
  }
};

export const registerUser = async (userData) => {
  try {
    console.log("Sending registration request to:", `${API_URL}/v1/auth/register`);
    console.log("Registration data:", userData);

    const response = await api.post("/v1/auth/register", userData);

    console.log("Registration response:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error registering user:", error);
    console.error("Error response:", error.response);
    throw error;
  }
};

export const loginUser = async (credentials) => {
  try {
    const response = await api.post("/v1/auth/login", credentials);
    return response.data;
  } catch (error) {
    console.error("Error logging in:", error);
    throw error;
  }
};

export const logoutUser = async () => {
  try {
    const response = await api.post("/v1/auth/logout");
    localStorage.removeItem("token");
    return response.data;
  } catch (error) {
    console.error("Error logging out:", error);
    throw error;
  }
};

export const forgotPassword = async (email) => {
  try {
    const response = await api.post("/v1/auth/password-forgot", { email });
    return response.data;
  } catch (error) {
    console.error("Error requesting password reset:", error);
    throw error;
  }
};

export default api;
