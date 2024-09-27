/** 
=========================================================
* PROSPERA DEFI DASHBOARD - v1.0.0
=========================================================

* Copyright 2024 PROSPERA DEFI (https://www.prosperadefi.com/)

* Design and Coded by Z

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the PROSPERA DEFI DASHBOARD.
*/

import React, { useState, lazy, Suspense, useCallback, useEffect } from "react";
import ReactDOM from "react-dom";
import { Box, CircularProgress } from "@mui/material";
import { styled } from "@mui/material/styles";
import PropTypes from "prop-types";
import { Routes, Route, useLocation, useRoutes, useNavigate } from "react-router-dom";
import BottomNavBar from "../BottomNavBar";
import TopNavBar from "../TopNavBar";
import { DashboardUIControllerProvider } from "../../userDashboard/context";
import userDashboardRoutes from "../../userDashboard/routes";

const MainAR = lazy(() => import("../../main"));
const UserDashboard = lazy(() => import("../../userDashboard/App"));

const ParallaxContainer = styled(Box)({
  display: "flex",
  transition: "transform 0.5s ease",
  height: "calc(100vh - 2vh)", // Adjust for TopNavBar and BottomNavBar
  width: "100vw",
  position: "fixed",
  top: "1vh",
  left: 0,
});

const Section = styled(Box)({
  flex: "0 0 100%",
  height: "100%",
  overflow: "hidden",
});

const UserDashboardPortal = ({ isVisible, currentSection, onInternalNavigation }) => {
  const location = useLocation();
  const routes = useRoutes(userDashboardRoutes);

  if (!isVisible) return null;

  return ReactDOM.createPortal(
    <DashboardUIControllerProvider>
      <Suspense fallback={<CircularProgress />}>
        <UserDashboard onInternalNavigation={onInternalNavigation}>
          <Routes>
            {userDashboardRoutes.map((route) => (
              <Route
                key={route.key}
                path={`${location.pathname}${route.route}`}
                element={route.component}
              />
            ))}
          </Routes>
          {routes}
        </UserDashboard>
      </Suspense>
    </DashboardUIControllerProvider>,
    document.getElementById("user-dashboard-root")
  );
};

UserDashboardPortal.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  currentSection: PropTypes.number.isRequired,
  onInternalNavigation: PropTypes.func.isRequired,
};

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Caught an error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <Box>Error loading component. Please try again.</Box>;
    }

    return this.props.children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.node.isRequired,
};

const AugmentedRealityController = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavigation = useCallback((index) => {
    setCurrentSection(index);
  }, []);

  const handleInternalNavigation = useCallback(
    (path) => {
      console.log("Navigating to:", path);
      navigate(path);
    },
    [navigate]
  );

  const handleLinkClick = useCallback(
    (path) => {
      console.log("Link clicked in userDashboard:", path);
      if (typeof handleInternalNavigation === "function") {
        handleInternalNavigation(path);
      } else {
        console.error("handleInternalNavigation is not a function");
        // Fallback behavior
        navigate(path);
      }
    },
    [handleInternalNavigation, navigate]
  );

  useEffect(() => {
    // Reset to MainAR view when location changes
    setCurrentSection(0);
  }, [location]);

  return (
    <Box sx={{ height: "100vh", width: "100vw", position: "relative", overflow: "hidden" }}>
      <TopNavBar />
      <ParallaxContainer sx={{ transform: `translateX(-${currentSection * 100}%)` }}>
        <Section>
          <ErrorBoundary>
            <Suspense fallback={<CircularProgress />}>
              <MainAR />
            </Suspense>
          </ErrorBoundary>
        </Section>
        <Section>
          <ErrorBoundary>
            <UserDashboardPortal
              isVisible={currentSection === 1}
              currentSection={currentSection}
              onInternalNavigation={handleInternalNavigation}
            />
          </ErrorBoundary>
        </Section>
      </ParallaxContainer>
      <BottomNavBar
        currentSection={currentSection}
        onNavigate={handleNavigation}
        totalSections={2}
      />
    </Box>
  );
};

export default React.memo(AugmentedRealityController);
