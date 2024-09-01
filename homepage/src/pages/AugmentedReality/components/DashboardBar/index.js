import React, { useEffect, useState } from "react";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import { styled } from "@mui/material/styles";
import WeatherForecast from "../WeatherForecast"; // Correct path to WeatherForecast

// Apply the frosted glass color settings from WelcomeMessage
const FrostedGlassBar = styled(MKBox)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "12px 24px",
  boxShadow:
    "0 0.3px 0.7px rgba(0, 0, 0, 0.126), 0 0.9px 1.7px rgba(0, 0, 0, 0.179), 0 1.8px 3.5px rgba(0, 0, 0, 0.224), 0 3.7px 7.3px rgba(0, 0, 0, 0.277), 0 10px 20px rgba(0, 0, 0, 0.4)",
  backdropFilter: "blur(20px)",
  borderRadius: "10px",
  transition: "0.3s ease",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)", // Center horizontally and vertically
  zIndex: 1000,
  width: "100vw",
  maxWidth: "100%",
  background: "rgba(255, 255, 255, 0.1)", // Adjusted to match the WelcomeMessage
  color: "white",
  "&:hover": {
    boxShadow:
      "0 0.7px 1px rgba(0, 0, 0, 0.157), 0 1.7px 2.6px rgba(0, 0, 0, 0.224), 0 3.5px 5.3px rgba(0, 0, 0, 0.28), 0 7.3px 11px rgba(0, 0, 0, 0.346), 0 20px 30px rgba(0, 0, 0, 0.5)",
    transform: "translate(-50%, -50%)",
  },
});

// Larger Clock Circle with matching frosted glass color settings
const ClockCircle = styled(MKBox)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "300px", // Size for a clean look
  height: "300px", // Match the width for a perfect circle
  borderRadius: "50%",
  background: "rgba(255, 255, 255, 0.1)", // Matching the WelcomeMessage background
  backdropFilter: "blur(20px)",
  boxShadow:
    "0 0.3px 0.7px rgba(0, 0, 0, 0.126), 0 0.9px 1.7px rgba(0, 0, 0, 0.179), 0 1.8px 3.5px rgba(0, 0, 0, 0.224), 0 3.7px 7.3px rgba(0, 0, 0, 0.277), 0 10px 20px rgba(0, 0, 0, 0.4)",
  position: "absolute",
  top: "50%", // Center vertically within the bar
  left: "50%",
  transform: "translate(-50%, -50%)",
  zIndex: 1100,
});

const GlassmorphicClock = styled(MKBox)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  height: "100%",
  color: "rgba(255, 255, 255, 0.9)",
  fontFamily: "Helvetica Monospaced, sans-serif",
  fontWeight: 200,
  fontSize: "2em",
  textAlign: "center",
  textShadow: "0px 0px 10px rgba(255, 255, 255, 0.5)",
});

const DashboardBar = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000); // Update every second

    return () => clearInterval(intervalId);
  }, []);

  const formattedTime = time.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
  const formattedDate = time.toLocaleDateString([], {
    weekday: "long",
    day: "numeric",
    month: "long",
  });

  return (
    <FrostedGlassBar>
      {/* Left Side: System Usage */}
      <MKBox display="flex" flexDirection="column" alignItems="flex-start">
        <MKTypography
          variant="body2"
          sx={{ color: "white", fontFamily: "Helvetica Monospaced, sans-serif" }}
        >
          CPU Usage: 4%
        </MKTypography>
        <MKTypography
          variant="body2"
          sx={{ color: "white", fontFamily: "Helvetica Monospaced, sans-serif" }}
        >
          RAM Usage: 43%
        </MKTypography>
        <MKTypography
          variant="body2"
          sx={{ color: "white", fontFamily: "Helvetica Monospaced, sans-serif" }}
        >
          Virtual Memory Usage: 24%
        </MKTypography>
      </MKBox>

      {/* Center: Glassmorphic Clock */}
      <ClockCircle>
        <GlassmorphicClock>
          <MKTypography variant="h5" sx={{ marginBottom: "8px" }}>
            {formattedDate}
          </MKTypography>
          <MKTypography variant="h3">{formattedTime}</MKTypography>
        </GlassmorphicClock>
      </ClockCircle>

      {/* Right Side: Current Weather */}
      <WeatherForecast />
    </FrostedGlassBar>
  );
};

export default DashboardBar;
