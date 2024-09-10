// Determine if we are in a development environment
const isDev = process.env.REACT_APP_NODE_ENV === "development";

const config = {
  // API URL
  apiUrl: isDev ? process.env.REACT_APP_API_URL : "https://api.prosperadefi.com",

  // Client URL
  clientUrl: isDev
    ? process.env.REACT_APP_URL_CLIENT
    : process.env.REACT_APP_URL_CLIENT_PROD || "https://www.prosperadefi.com",

  // Dashboard URL
  dashboardUrl: isDev
    ? process.env.REACT_APP_URL_DASHBOARD
    : process.env.REACT_APP_URL_DASHBOARD_PROD || "https://dashboard.prosperadefi.com",

  // Virtual Reality URL
  vrUrl: isDev
    ? process.env.REACT_APP_URL_VR
    : process.env.REACT_APP_URL_VR_PROD || "https://ar.prosperadefi.com",

  // Arbiscan Configuration
  arbiscanApiUrl: process.env.REACT_APP_ARBISCAN_API_URL || "https://api.arbiscan.io/api",
  arbiscanApiKey: process.env.REACT_APP_ARBISCAN_API_KEY || "8FJC44BEQGFIUCE483KV2KD51F4H5IBJJJ",

  // Token Configuration
  prosTokenContract:
    process.env.REACT_APP_PROS_TOKEN_CONTRACT || "0x4fd38270BAF7E61453BA9555c6e17512a6db9b30",
  minTokenBalance: process.env.REACT_APP_MIN_TOKEN_BALANCE || "5000",

  // Environment Flag
  isDev: isDev,
};

// Log configuration to verify correct values are loaded
console.log("Frontend Config:", config);

export default config;
