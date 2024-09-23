export const subdomainRouter = (req, res, next) => {
  const hostname = req.hostname;

  if (hostname.startsWith("ar.")) {
    req.app = "ar";
  } else if (hostname.startsWith("dashboard.")) {
    req.app = "dashboard";
  } else if (hostname.startsWith("td.")) {
    req.app = "teamDashboard";
  } else {
    req.app = "main";
  }

  next();
};
