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

// New components
import Navbar from "./components/Navbar";
import Desktop from "./components/Desktop";
import Window from "./components/Window";
import WelcomeMessage from "./components/WelcomeMessage";
import DashboardBar from "./components/DashboardBar";

// Images
import bgImage from "assets/images/backgrounds/DesktopBackgrounds/Mountains/blackandwhitemountains.jpg";

// Contexts
import { AuthContext } from "contexts/AuthContext";
import { WalletContext } from "contexts/WalletContext";
import { BetaContext } from "contexts/BetaContext";

// API services
import { fetchUserData } from "services/api";
import { getTokenBalance, checkTokenHolding } from "services/tokenService";

// Custom styles
import "assets/css/customStyles.css";

const MemoizedOmniRobot = React.memo(OmniRobot);

function AugmentedReality() {
  const navigate = useNavigate();
  const {
    user,
    loading: authLoading,
    checkAuth,
    isInitialized,
    isLoading: authIsLoading,
  } = useContext(AuthContext);
  const { wallet } = useContext(WalletContext);
  const { isBetaMode, requestWhitelist } = useContext(BetaContext);

  const [userData, setUserData] = useState(null);
  const [openWindows, setOpenWindows] = useState({});
  const [minimizedWindows, setMinimizedWindows] = useState([]);
  const [windowPositions, setWindowPositions] = useState({});
  const [windowSizes, setWindowSizes] = useState({});
  const [robotPosition, setRobotPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isRobotVisible, setIsRobotVisible] = useState(true);
  const [tokenBalance, setTokenBalance] = useState("0");
  const [userDataLoading, setUserDataLoading] = useState(true);
  const dragOffset = useRef({ x: 0, y: 0 });
  const containerRef = useRef(null);

  const [storedUser, setStoredUser] = useState(() => {
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  });

  const currentUserData = userData || user || storedUser || null;

  const fetchTokenBalance = useCallback(async () => {
    if (currentUserData && currentUserData.arbitrumWallet) {
      try {
        const balance = await getTokenBalance(currentUserData.arbitrumWallet);
        setTokenBalance(balance);
        console.log("Fetched token balance:", balance);
      } catch (error) {
        console.error("Error fetching token balance:", error);
        setTokenBalance("0");
      }
    } else {
      console.log("No user data or arbitrum wallet found");
      setTokenBalance("0");
    }
  }, [currentUserData]);

  useEffect(() => {
    if (currentUserData) {
      fetchTokenBalance();
    }
  }, [currentUserData, fetchTokenBalance]);

  useEffect(() => {
    if (!user) {
      const storedUser = localStorage.getItem("user");
      if (storedUser) {
        setStoredUser(JSON.parse(storedUser));
      }
    }
  }, [user]);

  useEffect(() => {
    const initializeComponent = async () => {
      console.log("Initializing AugmentedReality component");
      console.log("Auth loading:", authLoading);
      console.log("User:", user);
      console.log("Is initialized:", isInitialized);
      console.log("Auth is loading:", authIsLoading);

      if (!user) {
        console.log("No user found, re-checking authentication");
        try {
          await checkAuth();
        } catch (error) {
          console.error("Authentication check failed:", error);
          navigate("/authentication/sign-in/illustration");
          return;
        }
      }

      if (user) {
        console.log("User authenticated, loading user data");
        try {
          const data = await fetchUserData(user.id);
          console.log("User data loaded:", data);
          setUserData(data.data.attributes);

          if (data.data.attributes.arbitrumWallet) {
            const balance = await getTokenBalance(data.data.attributes.arbitrumWallet);
            setTokenBalance(balance);
            console.log("Token balance fetched:", balance);
          }
        } catch (error) {
          console.error("Error fetching user data:", error);
          setUserData(user);
        }
      }

      setUserDataLoading(false);
      setIsLoading(false);
    };

    if (isInitialized && !authIsLoading) {
      initializeComponent();
    }
  }, [user, authLoading, checkAuth, navigate, isInitialized, authIsLoading]);

  const toggleWindow = useCallback(
    (appName) => {
      if (minimizedWindows.includes(appName)) {
        setMinimizedWindows(minimizedWindows.filter((w) => w !== appName));
        setOpenWindows((prev) => ({ ...prev, [appName]: true }));
      } else if (openWindows[appName]) {
        setMinimizedWindows([...minimizedWindows, appName]);
      } else {
        setOpenWindows({ ...openWindows, [appName]: true });
        setWindowPositions((prev) => ({ ...prev, [appName]: { x: 50, y: 50 } }));
        setWindowSizes((prev) => ({ ...prev, [appName]: { width: 400, height: 300 } }));
      }
    },
    [openWindows, minimizedWindows]
  );

  const closeWindow = useCallback(
    (appName) => {
      const newOpenWindows = { ...openWindows };
      delete newOpenWindows[appName];
      setOpenWindows(newOpenWindows);
      setMinimizedWindows(minimizedWindows.filter((w) => w !== appName));
      setWindowPositions((prev) => {
        const newPositions = { ...prev };
        delete newPositions[appName];
        return newPositions;
      });
      setWindowSizes((prev) => {
        const newSizes = { ...prev };
        delete newSizes[appName];
        return newSizes;
      });
    },
    [openWindows, minimizedWindows]
  );

  const handleMinimize = useCallback(
    (appName) => {
      setMinimizedWindows([...minimizedWindows, appName]);
    },
    [minimizedWindows]
  );

  const updateWindowPosition = useCallback(
    (appName, position) => {
      setWindowPositions({ ...windowPositions, [appName]: position });
    },
    [windowPositions]
  );

  const updateWindowSize = useCallback(
    (appName, size) => {
      setWindowSizes({ ...windowSizes, [appName]: size });
    },
    [windowSizes]
  );

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
    if (!currentUserData || !currentUserData.arbitrumWallet) {
      alert("Please connect your wallet to request whitelist access.");
      return;
    }

    try {
      const hasTokens = await checkTokenHolding(currentUserData.arbitrumWallet);
      const tokenBalance = await getTokenBalance(currentUserData.arbitrumWallet);

      if (hasTokens) {
        await requestWhitelist(currentUserData.arbitrumWallet);
        alert(
          `Your whitelist request has been submitted. You currently hold ${tokenBalance} $PROS tokens.`
        );
      } else {
        alert(
          `To participate in the beta, you need at least 5000 $PROS tokens. Your current balance is ${tokenBalance} $PROS. Please visit https://www.prosperaico.com to purchase more $PROS tokens.`
        );
      }
    } catch (error) {
      console.error("Error checking token balance or requesting whitelist:", error);
      alert("An error occurred while processing your request. Please try again later.");
    }
  }, [currentUserData, requestWhitelist]);

  const toggleRobotVisibility = useCallback(() => {
    setIsRobotVisible((prev) => !prev);
  }, []);

  const calculateInitialRobotPosition = useCallback(() => {
    if (containerRef.current) {
      const { width, height } = containerRef.current.getBoundingClientRect();
      return {
        x: width * 0.1,
        y: height * 0.8,
      };
    }
    return { x: 100, y: 500 };
  }, []);

  useEffect(() => {
    setRobotPosition(calculateInitialRobotPosition());
  }, [calculateInitialRobotPosition]);

  const welcomeElement = useMemo(
    () => (
      <MKBox
        sx={{
          position: "relative",
          top: "20%",
          width: "100%",
          zIndex: 1000,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <WelcomeMessage userName={currentUserData?.name || "User"} />
      </MKBox>
    ),
    [currentUserData]
  );

  const robotElement = useMemo(
    () =>
      isRobotVisible && (
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
    [
      robotPosition.x,
      robotPosition.y,
      isDragging,
      handleDragStart,
      handleRobotPositionChange,
      isRobotVisible,
    ]
  );

  const checkBetaAccess = useCallback(() => {
    const hasFullAccess =
      ["admin", "co-admin", "prosperaTeam", "kol"].includes(currentUserData?.role) ||
      currentUserData?.isWhitelisted;

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
              {currentUserData?.hasRequestedWhitelist
                ? "Your whitelist request is being processed. Please check back later."
                : "You are not an approved member to access during beta-testing."}
            </MKTypography>
            {!currentUserData?.hasRequestedWhitelist && (
              <MKButton variant="gradient" color="info" onClick={handleRequestWhitelist}>
                Request Whitelist Access
              </MKButton>
            )}
          </MKBox>
        </MKBox>
      );
    }
    return null;
  }, [isBetaMode, currentUserData, handleRequestWhitelist]);

  if (authIsLoading || isLoading || userDataLoading) {
    return (
      <MKBox display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
        <MKTypography variant="h4">Loading...</MKTypography>
      </MKBox>
    );
  }

  if (!currentUserData) {
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
          <MKButton
            variant="gradient"
            color="info"
            onClick={() => navigate("/authentication/sign-in/illustration")}
          >
            Sign In
          </MKButton>
        </MKBox>
      </MKBox>
    );
  }

  const betaAccessCheck = checkBetaAccess();
  if (betaAccessCheck) return betaAccessCheck;

  return (
    <MKBox
      ref={containerRef}
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
      {welcomeElement}
      <DashboardBar />
      <Desktop>
        {Object.entries(openWindows).map(
          ([appName, isOpen]) =>
            isOpen &&
            !minimizedWindows.includes(appName) && (
              <Window
                key={appName}
                title={appName}
                onClose={() => closeWindow(appName)}
                onMinimize={() => handleMinimize(appName)}
                initialPosition={windowPositions[appName]}
                initialSize={windowSizes[appName]}
                isMinimized={minimizedWindows.includes(appName)}
                onPositionChange={(position) => updateWindowPosition(appName, position)}
                onSizeChange={(size) => updateWindowSize(appName, size)}
              >
                {appName === "todoList" && <TodoList />}
                {appName === "todoCard" && <TodoCard />}
                {appName === "emails" && <Emails />}
                {appName === "mediaPlayer" && <MediaPlayer />}
                {appName === "messages" && <Messages />}
              </Window>
            )
        )}
      </Desktop>
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
      <MKTypography
        variant="body2"
        color="white"
        sx={{
          position: "absolute",
          top: 5,
          right: 20,
          zIndex: 1001,
        }}
      >
        $PROS Balance: {tokenBalance}
      </MKTypography>
      <Navbar
        onItemClick={toggleWindow}
        onDashboardClick={handleDashboardClick}
        minimizedWindows={minimizedWindows}
        onRobotToggle={toggleRobotVisibility}
        isRobotVisible={isRobotVisible}
      />
    </MKBox>
  );
}

export default AugmentedReality;
