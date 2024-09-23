// File: prospera-home/homepage/src/pages/AugmentedReality/sharedComponents/TopNavBar/index.js

import React, { useState, useEffect } from "react";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import { styled, keyframes } from "@mui/material/styles";

const FrostedGlassBar = styled(MKBox)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "0 24px",
  boxShadow:
    "0 0.3px 0.7px rgba(0, 0, 0, 0.126), 0 0.9px 1.7px rgba(0, 0, 0, 0.179), 0 1.8px 3.5px rgba(0, 0, 0, 0.224), 0 3.7px 7.3px rgba(0, 0, 0, 0.277), 0 10px 20px rgba(0, 0, 0, 0.4)",
  backdropFilter: "blur(20px)",
  borderBottomLeftRadius: "10px",
  borderBottomRightRadius: "10px",
  transition: "0.3s ease",
  position: "fixed",
  top: 0,
  left: 0,
  zIndex: 1000,
  width: "100vw",
  height: "1vh",
  background: "rgba(255, 255, 255, 0.1)",
  color: "white",
  "&:hover": {
    boxShadow:
      "0 0.7px 1px rgba(0, 0, 0, 0.157), 0 1.7px 2.6px rgba(0, 0, 0, 0.224), 0 3.5px 5.3px rgba(0, 0, 0, 0.28), 0 7.3px 11px rgba(0, 0, 0, 0.346), 0 20px 30px rgba(0, 0, 0, 0.5)",
  },
});

const glitchAnimation = keyframes`
  0% {
    text-shadow: 0.05em 0 0 rgba(255, 0, 0, 0.75),
                 -0.05em -0.025em 0 rgba(0, 255, 0, 0.75),
                 -0.025em 0.05em 0 rgba(0, 0, 255, 0.75);
  }
  14% {
    text-shadow: 0.05em 0 0 rgba(255, 0, 0, 0.75),
                 -0.05em -0.025em 0 rgba(0, 255, 0, 0.75),
                 -0.025em 0.05em 0 rgba(0, 0, 255, 0.75);
  }
  15% {
    text-shadow: -0.05em -0.025em 0 rgba(255, 0, 0, 0.75),
                 0.025em 0.025em 0 rgba(0, 255, 0, 0.75),
                 -0.05em -0.05em 0 rgba(0, 0, 255, 0.75);
  }
  49% {
    text-shadow: -0.05em -0.025em 0 rgba(255, 0, 0, 0.75),
                 0.025em 0.025em 0 rgba(0, 255, 0, 0.75),
                 -0.05em -0.05em 0 rgba(0, 0, 255, 0.75);
  }
  50% {
    text-shadow: 0.025em 0.05em 0 rgba(255, 0, 0, 0.75),
                 0.05em 0 0 rgba(0, 255, 0, 0.75),
                 0 -0.05em 0 rgba(0, 0, 255, 0.75);
  }
  99% {
    text-shadow: 0.025em 0.05em 0 rgba(255, 0, 0, 0.75),
                 0.05em 0 0 rgba(0, 255, 0, 0.75),
                 0 -0.05em 0 rgba(0, 0, 255, 0.75);
  }
  100% {
    text-shadow: -0.025em 0 0 rgba(255, 0, 0, 0.75),
                 -0.025em -0.025em 0 rgba(0, 255, 0, 0.75),
                 -0.025em -0.05em 0 rgba(0, 0, 255, 0.75);
  }
`;

const GlitchText = styled(MKTypography)({
  fontFamily: "'Orbitron', sans-serif",
  fontSize: "0.8rem",
  fontWeight: 500,
  letterSpacing: "0.1em",
  animation: `${glitchAnimation} 2s infinite linear alternate-reverse`,
});

const TopNavBar = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formattedDate = `${time.toLocaleString("default", { month: "short" })} ${String(
    time.getDate()
  ).padStart(2, "0")}`;
  const formattedTime = time.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  return (
    <FrostedGlassBar>
      <MKBox display="flex" justifyContent="center" alignItems="center" width="100%">
        <GlitchText>{formattedDate}</GlitchText>
        <MKBox mx={2} />
        <GlitchText>{formattedTime}</GlitchText>
      </MKBox>
    </FrostedGlassBar>
  );
};

export default TopNavBar;
