// Determine if we are in a development environment
const isDev = process.env.REACT_APP_NODE_ENV === "development";

const config = {
  // API URL
  apiUrl: isDev ? process.env.REACT_APP_API_URL : "https://api.prosperadefi.com",

  // Client URL
  clientUrl: isDev
    ? process.env.REACT_APP_URL_CLIENT
    : process.env.REACT_APP_URL_CLIENT_PROD || "https://www.prosperadefi.com",

  // Virtual Reality URL
  vrUrl: isDev
    ? process.env.REACT_APP_URL_VR
    : process.env.REACT_APP_URL_VR_PROD || "https://ar.prosperadefi.com",

  // Environment Flag
  isDev: isDev,
};

// Log configuration to verify correct values are loaded
console.log("Frontend Config:", config);

export default config;