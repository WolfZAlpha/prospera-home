/** 
=========================================================
* PROSPERA DEFI DASHBOARD - v1.0.0
=========================================================

* Copyright 2024 PROSPERA DEFI (https://www.prosperadefi.com/)

* Design and Coded by Z

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the PROSPERA DEFI DASHBOARD.
*/

import { useState, useEffect, useMemo, useCallback } from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Icon from "@mui/material/Icon";
import PDBox from "./components/PDBox";
import Sidenav from "./examples/Sidenav";
import Configurator from "./examples/Configurator";
import theme from "./assets/theme";
import themeRTL from "./assets/theme/theme-rtl";
import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import routes from "./routes";
import { useDashboardUIController, setMiniSidenav, setOpenConfigurator } from "./context";
import "./assets/theme/base/plugins.css";
import ParticleVortex from "./assets/theme/components/backgrounds/ParticleVortex";
import { Outlet, useLocation, useNavigate, Routes, Route, useParams } from "react-router-dom";
import PropTypes from "prop-types";

function App({ onInternalNavigation }) {
  const [controller, dispatch] = useDashboardUIController();
  const { miniSidenav, direction, layout, openConfigurator, sidenavColor } = controller;
  const [onMouseEnter, setOnMouseEnter] = useState(false);
  const [rtlCache, setRtlCache] = useState(null);
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const params = useParams();

  // Cache for the rtl
  useMemo(() => {
    const cacheRtl = createCache({
      key: "rtl",
      stylisPlugins: [rtlPlugin],
    });

    setRtlCache(cacheRtl);
  }, []);

  // Open sidenav when mouse enter on mini sidenav
  const handleOnMouseEnter = () => {
    if (miniSidenav && !onMouseEnter) {
      setMiniSidenav(dispatch, false);
      setOnMouseEnter(true);
    }
  };

  // Close sidenav when mouse leave mini sidenav
  const handleOnMouseLeave = () => {
    if (onMouseEnter) {
      setMiniSidenav(dispatch, true);
      setOnMouseEnter(false);
    }
  };

  // Change the openConfigurator state
  const handleConfiguratorOpen = () => setOpenConfigurator(dispatch, !openConfigurator);

  // Setting the dir attribute for the body element
  useEffect(() => {
    document.body.setAttribute("dir", direction);
  }, [direction]);

  // Setting page scroll to 0 when changing the route
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }, [pathname]);

  const handleLinkClick = useCallback(
    (path) => {
      console.log("Link clicked in userDashboard:", path);
      if (typeof onInternalNavigation === "function") {
        onInternalNavigation(path);
      } else {
        console.error("onInternalNavigation is not a function");
        // Fallback behavior
        const route = routes.find(
          (r) => r.route === path || (r.collapse && r.collapse.some((subR) => subR.route === path))
        );
        if (route) {
          const component =
            route.component ||
            (route.collapse && route.collapse.find((subR) => subR.route === path).component);
          if (component) {
            navigate(path);
          } else {
            console.error("No component found for path:", path);
          }
        } else {
          console.error("No route found for path:", path);
          navigate("/");
        }
      }
    },
    [onInternalNavigation, navigate, routes]
  );

  const configsButton = (
    <PDBox
      display="flex"
      justifyContent="center"
      alignItems="center"
      width="3.5rem"
      height="3.5rem"
      bgColor="white"
      shadow="sm"
      borderRadius="50%"
      position="fixed"
      right="2rem"
      bottom="2rem"
      zIndex={99}
      color="white"
      sx={{ cursor: "pointer" }}
      onClick={handleConfiguratorOpen}
    >
      <Icon fontSize="default" color="inherit">
        settings
      </Icon>
    </PDBox>
  );

  const renderRoutes = () => (
    <Routes>
      {routes.map((route) => {
        if (route.route) {
          return <Route key={route.key} path={route.route} element={route.component} />;
        }
        return null;
      })}
    </Routes>
  );

  const content = (
    <>
      <CssBaseline />
      <ParticleVortex />
      {layout === "dashboard" && (
        <>
          <Sidenav
            color={sidenavColor}
            brandName="PROSPERA"
            routes={routes}
            onMouseEnter={handleOnMouseEnter}
            onMouseLeave={handleOnMouseLeave}
            handleLinkClick={handleLinkClick}
          />
          <Configurator />
          {configsButton}
        </>
      )}
      {layout === "vr" && <Configurator />}
      {renderRoutes()}
      <Outlet />
    </>
  );

  return direction === "rtl" ? (
    <CacheProvider value={rtlCache}>
      <ThemeProvider theme={themeRTL}>{content}</ThemeProvider>
    </CacheProvider>
  ) : (
    <ThemeProvider theme={theme}>{content}</ThemeProvider>
  );
}

App.propTypes = {
  onInternalNavigation: PropTypes.func.isRequired,
};

export default App;
