import React, { useState, useEffect, useContext, useMemo, useCallback, useRef } from "react";
import { useNavigate } from "react-router-dom";

// PROSPERA DEFI PLATFORM React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKButton from "components/MKButton";

// AugmentedReality page components
import TodoList from "pages/AugmentedReality/components/TodoList";
import TodoCard from "pages/AugmentedReality/components/TodoCard";
import Emails from "pages/AugmentedReality/components/Emails";
import MediaPlayer from "pages/AugmentedReality/components/MediaPlayer";
import Messages from "pages/AugmentedReality/components/Messages";
import OmniRobot from "pages/AugmentedReality/components/omnRobot/OmniRobot";
import WeatherWidget from "pages/AugmentedReality/components/WeatherWidget";

// New components
import Navbar from "./components/Navbar";
import Desktop from "./components/Desktop";
import Window from "./components/Window";
import WelcomeMessage from "./components/WelcomeMessage";

// Images
import bgImage from "assets/images/backgrounds/DesktopBackgrounds/Mountains/blackandwhitemountains.jpg";
import sunCloud from "assets/images/small-logos/icon-sun-cloud.png";

// Contexts
import { AuthContext } from "contexts/AuthContext";
import { WalletContext } from "contexts/WalletContext";
import { BetaContext } from "contexts/BetaContext";

// API services
import { fetchUserData, checkTokenHolding } from "services/api";

const MemoizedOmniRobot = React.memo(OmniRobot);

function AugmentedReality() {
  const navigate = useNavigate();
  const { user, loading: authLoading, checkAuth } = useContext(AuthContext);
  const { wallet, connectWallet } = useContext(WalletContext);
  const { isBetaMode, requestWhitelist } = useContext(BetaContext);

  const [userData, setUserData] = useState(null);
  const [openWindows, setOpenWindows] = useState({});
  const [robotPosition, setRobotPosition] = useState({ x: 215, y: 1268.0 });
  const [isDragging, setIsDragging] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const dragOffset = useRef({ x: 0, y: 0 });

  const currentUserData = userData || user;

  useEffect(() => {
    const initializeComponent = async () => {
      console.log("Initializing AugmentedReality component");
      console.log("Auth loading:", authLoading);
      console.log("User:", user);

      if (!user) {
        console.log("No user found, re-checking authentication");
        try {
          await checkAuth();
        } catch (error) {
          console.error("Authentication check failed:", error);
          navigate("/login");
          return;
        }
      }

      if (user) {
        console.log("User authenticated, loading user data");
        try {
          const data = await fetchUserData(user.id);
          console.log("User data loaded:", data);
          setUserData(data.data.attributes);
        } catch (error) {
          console.error("Error fetching user data:", error);
          setUserData(user);
        }
      }

      setIsLoading(false);
    };

    initializeComponent();
  }, [user, authLoading, checkAuth, navigate]);

  const toggleWindow = useCallback((appName) => {
    setOpenWindows((prev) => ({ ...prev, [appName]: !prev[appName] }));
  }, []);

  const handleDashboardClick = useCallback(async () => {
    if (wallet && (await checkTokenHolding(wallet.address))) {
      window.location.href = "https://dashboard.prosperadefi.com";
    } else {
      alert("You need to hold $PROS tokens to access the dashboard.");
    }
  }, [wallet]);

  const handleRobotPositionChange = useCallback((newPosition) => {
    setRobotPosition(newPosition);
  }, []);

  const handleDragStart = useCallback((e) => {
    setIsDragging(true);
    document.body.style.cursor = "grabbing";
    const rect = e.currentTarget.getBoundingClientRect();
    dragOffset.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };
  }, []);

  const handleDragEnd = useCallback(() => {
    setIsDragging(false);
    document.body.style.cursor = "grab";
  }, []);

  const handleMouseMove = useCallback(
    (e) => {
      if (isDragging) {
        const newX = e.clientX - dragOffset.current.x;
        const newY = e.clientY - dragOffset.current.y;
        setRobotPosition({ x: newX, y: newY });
      }
    },
    [isDragging]
  );

  const handleRequestWhitelist = useCallback(async () => {
    if (!wallet) {
      await connectWallet();
    }
    if (wallet) {
      await requestWhitelist(wallet.address);
    } else {
      alert("Please connect your wallet to request whitelist access.");
    }
  }, [wallet, connectWallet, requestWhitelist]);

  const welcomeElement = useMemo(
    () => (
      <MKBox
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 1000,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 4,
        }}
      >
        <WelcomeMessage userName={currentUserData?.name || "User"} />
      </MKBox>
    ),
    [currentUserData]
  );

  const robotElement = useMemo(
    () => (
      <MKBox
        sx={{
          position: "fixed",
          top: robotPosition.y,
          left: robotPosition.x,
          zIndex: 1000,
          cursor: isDragging ? "grabbing" : "grab",
        }}
        onMouseDown={handleDragStart}
      >
        <MemoizedOmniRobot onPositionChange={handleRobotPositionChange} />
      </MKBox>
    ),
    [robotPosition.x, robotPosition.y, isDragging, handleDragStart, handleRobotPositionChange]
  );

  if (isLoading || authLoading) {
    return (
      <MKBox display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
        <MKTypography variant="h4">Loading...</MKTypography>
      </MKBox>
    );
  }

  if (!user && !userData) {
    return (
      <MKBox
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
        sx={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <MKBox bgColor="white" borderRadius="xl" shadow="lg" p={4} textAlign="center">
          <MKTypography variant="h4" mb={2}>
            Access Restricted
          </MKTypography>
          <MKTypography variant="body1" mb={3}>
            To access the Augmented Reality page, you must be signed in.
          </MKTypography>
          <MKButton variant="gradient" color="info" onClick={() => navigate("/login")}>
            Sign In
          </MKButton>
        </MKBox>
      </MKBox>
    );
  }

  const hasFullAccess =
    ["admin", "co-admin", "prosperaTeam", "kol"].includes(currentUserData.role) ||
    currentUserData.isWhitelisted;

  if (isBetaMode && !hasFullAccess) {
    return (
      <MKBox
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
        sx={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <MKBox bgColor="white" borderRadius="xl" shadow="lg" p={4} textAlign="center">
          <MKTypography variant="h4" mb={2}>
            Beta Access Required
          </MKTypography>
          <MKTypography variant="body1" mb={3}>
            {currentUserData.hasRequestedWhitelist
              ? "Your whitelist request is being processed. Please check back later."
              : "You are not an approved member to access during beta-testing."}
          </MKTypography>
          {!currentUserData.hasRequestedWhitelist && (
            <MKButton variant="gradient" color="info" onClick={handleRequestWhitelist}>
              Request Whitelist Access
            </MKButton>
          )}
        </MKBox>
      </MKBox>
    );
  }

  return (
    <MKBox
      component="main"
      minHeight="100vh"
      width="100vw"
      sx={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        overflow: "hidden",
        position: "relative",
      }}
      onMouseMove={handleMouseMove}
      onMouseUp={handleDragEnd}
      onMouseLeave={handleDragEnd}
    >
      <Desktop>
        {openWindows.todoList && (
          <Window title="To-Do List" onClose={() => toggleWindow("todoList")}>
            <TodoList />
          </Window>
        )}
        {openWindows.todoCard && (
          <Window title="To-Do Card" onClose={() => toggleWindow("todoCard")}>
            <TodoCard />
          </Window>
        )}
        {openWindows.emails && (
          <Window title="Emails" onClose={() => toggleWindow("emails")}>
            <Emails />
          </Window>
        )}
        {openWindows.mediaPlayer && (
          <Window title="Media Player" onClose={() => toggleWindow("mediaPlayer")}>
            <MediaPlayer />
          </Window>
        )}
        {openWindows.messages && (
          <Window title="Messages" onClose={() => toggleWindow("messages")}>
            <Messages />
          </Window>
        )}
        {openWindows.weather && (
          <Window title="Weather" onClose={() => toggleWindow("weather")}>
            <WeatherWidget temperature="28°C" condition="cloudy" icon={sunCloud} />
          </Window>
        )}
      </Desktop>

      {welcomeElement}
      {robotElement}

      <MKTypography
        variant="body2"
        color="white"
        sx={{
          position: "absolute",
          bottom: 5,
          left: 20,
          zIndex: 1001,
        }}
      >
        Robot Position: X: {robotPosition.x.toFixed(2)}, Y: {robotPosition.y.toFixed(2)}
      </MKTypography>

      <Navbar onItemClick={toggleWindow} onDashboardClick={handleDashboardClick} />
    </MKBox>
  );
}

export default AugmentedReality;
