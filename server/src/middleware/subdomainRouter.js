export const subdomainRouter = (req, res, next) => {
  const hostname = req.hostname;

  if (hostname.startsWith("ar.")) {
    req.app = "ar";
  } else {
    req.app = "main";
  }

  next();
};