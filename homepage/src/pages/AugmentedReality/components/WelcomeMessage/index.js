import React from "react";
import PropTypes from "prop-types";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import { styled } from "@mui/material/styles";

const GlassmorphicBox = styled(MKBox)({
  display: "flex",
  flexDirection: "column", // Stack elements vertically
  justifyContent: "center",
  alignItems: "center",
  padding: "8px 24px", // Smaller padding to reduce size
  boxShadow:
    "0 0.3px 0.7px rgba(0, 0, 0, 0.126), 0 0.9px 1.7px rgba(0, 0, 0, 0.179), 0 1.8px 3.5px rgba(0, 0, 0, 0.224), 0 3.7px 7.3px rgba(0, 0, 0, 0.277), 0 10px 20px rgba(0, 0, 0, 0.4)",
  backdropFilter: "blur(20px)",
  borderRadius: "10px",
  transition: "0.3s ease", // Faster transition for a smoother effect
  position: "absolute",
  top: "calc(33% + 10px)", // Positioned slightly above the DashboardBar
  left: "50%",
  transform: "translateX(-50%)",
  zIndex: 1000,
  width: "auto", // Auto width to fit the content
  maxWidth: "60%", // Reduce the maximum width to keep it compact
  "&:hover": {
    boxShadow:
      "0 0.7px 1px rgba(0, 0, 0, 0.157), 0 1.7px 2.6px rgba(0, 0, 0, 0.224), 0 3.5px 5.3px rgba(0, 0, 0, 0.28), 0 7.3px 11px rgba(0, 0, 0, 0.346), 0 20px 30px rgba(0, 0, 0, 0.5)",
    transform: "translateX(-50%)", // Keep the element in place on hover
  },
});

const GradientText = styled(MKTypography)({
  fontFamily: "Lato, sans-serif",
  fontWeight: 200,
  fontSize: "1.2em", // Smaller font size
  letterSpacing: "0.25em",
  color: "white",
  paddingLeft: "0.1em",
  background: "linear-gradient(45deg, #00ffff, #00ff00, #00aaff)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
});

const WelcomeMessage = ({ userName }) => {
  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good Morning";
    if (hour < 18) return "Good Afternoon";
    return "Good Evening";
  };

  return (
    <GlassmorphicBox>
      <GradientText variant="h6">
        {" "}
        {/* Reduced text size */}
        {getGreeting()}, {userName}
      </GradientText>
      <MKTypography
        variant="subtitle1" // Smaller variant for the welcome message
        sx={{
          color: "rgba(255, 255, 255, 0.9)",
          marginTop: "4px",
          fontFamily: "Lato, sans-serif",
          fontWeight: 200,
          fontSize: "0.9em", // Smaller font size
          textAlign: "center",
          textShadow: "0px 0px 10px rgba(255, 255, 255, 0.5)",
        }}
      >
        Welcome to PROSPERA
      </MKTypography>
    </GlassmorphicBox>
  );
};

WelcomeMessage.propTypes = {
  userName: PropTypes.string.isRequired,
};

export default WelcomeMessage;
