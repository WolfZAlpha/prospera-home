import React, { useState, lazy, Suspense, useCallback, useEffect } from "react";
import ReactDOM from "react-dom";
import { Box, CircularProgress } from "@mui/material";
import { styled } from "@mui/material/styles";
import PropTypes from "prop-types";
import { useLocation, useNavigate } from "react-router-dom";
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

const UserDashboardPortal = ({ isVisible, currentDashboardComponent, onInternalNavigation }) => {
  if (!isVisible) return null;

  return ReactDOM.createPortal(
    <DashboardUIControllerProvider>
      <Suspense fallback={<CircularProgress />}>
        <UserDashboard onInternalNavigation={onInternalNavigation}>
          {currentDashboardComponent || <div>Select a dashboard component</div>}
        </UserDashboard>
      </Suspense>
    </DashboardUIControllerProvider>,
    document.getElementById("user-dashboard-root")
  );
};

UserDashboardPortal.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  currentDashboardComponent: PropTypes.element,
  onInternalNavigation: PropTypes.func.isRequired,
};

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    console.error("Caught an error:", error);
    return { hasError: true };
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
  const [currentDashboardComponent, setCurrentDashboardComponent] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavigation = useCallback((index) => {
    setCurrentSection(index);
  }, []);

  const handleInternalNavigation = useCallback(
    (path) => {
      console.log("Navigating to:", path);
      const route = userDashboardRoutes.find(
        (r) => r.route === path || (r.collapse && r.collapse.some((subR) => subR.route === path))
      );
      if (route) {
        console.log("Found route:", route);
        const component =
          route.component ||
          (route.collapse && route.collapse.find((subR) => subR.route === path).component);
        if (component) {
          setCurrentDashboardComponent(component);
          setCurrentSection(1); // Ensure we're on the UserDashboard section
        } else {
          console.error("No component found for path:", path);
        }
      } else {
        console.error("No route found for path:", path);
        navigate("/augmented-reality"); // Fallback to main AR view if route not found
      }
    },
    [navigate, userDashboardRoutes]
  );

  useEffect(() => {
    // Only reset to MainAR view when navigating to the augmented reality root
    if (location.pathname === "/augmented-reality") {
      setCurrentSection(0);
    }
  }, [location.pathname]);

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
              currentDashboardComponent={currentDashboardComponent}
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
