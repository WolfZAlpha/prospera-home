/** 
=========================================================
* PROSPERA DEFI PLATFORM - v1.0.0
=========================================================

* Copyright 2024 PROSPERA DEFI (https://www.prosperadefi.com/)

* Design and Coded by Z

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the PROSPERA DEFI PLATFORM.
*/

import { useEffect } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "assets/theme";
import Home from "layouts/pages/home";
import routes from "routes";
import AugmentedReality from "pages/AugmentedReality";
import { AuthProvider } from "contexts/AuthContext";
import { WalletProvider } from "contexts/WalletContext";
import { BetaProvider } from "contexts/BetaContext";

export default function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }, [pathname]);

  const getRoutes = (allRoutes) =>
    allRoutes.map((route) => {
      if (route.collapse) {
        return getRoutes(route.collapse);
      }

      if (route.route) {
        return <Route exact path={route.route} element={route.component} key={route.key} />;
      }

      return null;
    });

  return (
    <AuthProvider>
      <WalletProvider>
        <BetaProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Routes>
              {getRoutes(routes)}
              <Route path="/home" element={<Home />} />
              <Route path="/pages/augmented-reality" element={<AugmentedReality />} />
              <Route path="*" element={<Navigate to="/home" />} />
            </Routes>
          </ThemeProvider>
        </BetaProvider>
      </WalletProvider>
    </AuthProvider>
  );
}
