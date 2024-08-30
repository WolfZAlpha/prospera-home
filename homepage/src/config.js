const isDev = process.env.NODE_ENV !== "production";

const config = {
  apiUrl: isDev ? process.env.REACT_APP_API_URL : "https://api.prosperadefi.com",
  clientUrl: isDev ? process.env.REACT_APP_URL_CLIENT : "https://www.prosperadefi.com",
  dashboardUrl: isDev ? process.env.REACT_APP_URL_DASHBOARD : "https://dashboard.prosperadefi.com",
  vrUrl: isDev ? process.env.REACT_APP_URL_VR : "https://vr.prosperadefi.com",
  isDev: isDev,
};

export default config;
