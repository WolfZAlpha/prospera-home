/** 

=========================================================
* PROSPERA DEFI DASHBOARD - v1.0.0
=========================================================

* Copyright 2024 PROSPERA DEFI (https://www.prosperadefi.com/)

* Design and Coded by Z

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the PROSPERA DEFI DASHBOARD.

*/

import React from "react";
import { styled, keyframes } from "@mui/material/styles";
import Popper from "@mui/material/Popper";
import PDTypography from "../../../../../components/PDTypography";
import PDBox from "../../../../../components/PDBox";

const flicker = keyframes`
  0% {
    opacity: 0.97;
    text-shadow: 0 0 1px #01ff02;
    transform: translateX(0);
  }
  2% {
    opacity: 0.96;
    text-shadow: 0 0 1px #01ff02;
    transform: translateX(0.5px);
  }
  4% {
    opacity: 0.98;
    text-shadow: 0 0 1px #01ff02;
    transform: translateX(-0.5px);
  }
  6% {
    opacity: 0.97;
    text-shadow: 0 0 1px #01ff02;
    transform: translateX(0);
  }
  8% {
    opacity: 0.96;
    text-shadow: 0 0 1px #01ff02;
    transform: translateX(0.5px);
  }
  10% {
    opacity: 0.98;
    text-shadow: 0 0 1px #01ff02;
    transform: translateX(-0.5px);
  }
  100% {
    opacity: 0.97;
    text-shadow: 0 0 1px #01ff02;
    transform: translateX(0);
  }
`;

const HolographicContent = styled(PDBox)(({ theme }) => ({
  backgroundColor: "rgba(0, 0, 0, 0.1)",
  borderRadius: theme.functions.pxToRem(15),
  padding: theme.functions.pxToRem(16),
  width: theme.functions.pxToRem(250),
  height: theme.functions.pxToRem(250),
  boxShadow: "0 4px 30px rgba(1, 255, 2, 0.2)",
  backdropFilter: "blur(8px)",
  border: "1px solid rgba(1, 255, 2, 0.2)",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
}));

const GlitchText = styled(PDTypography)(({ theme }) => ({
  color: "#01ff02",
  fontSize: theme.functions.pxToRem(14),
  lineHeight: 1.4,
  fontFamily: '"Courier New", Courier, monospace',
  textShadow: "0 0 1px #01ff02",
  animation: `${flicker} 10s linear infinite`,
  "&::selection": {
    background: "rgba(1, 255, 2, 0.2)",
    textShadow: "none",
  },
}));

const HolographicPopUp = ({ anchorEl, open, eventInfo }) => {
  if (!eventInfo || !eventInfo.event) {
    return null;
  }

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const formatTime = (date) => {
    return new Date(date).toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <Popper open={open} anchorEl={anchorEl} placement="top" style={{ zIndex: 9999 }}>
      <HolographicContent>
        <GlitchText fontWeight="bold">{eventInfo.event.title}</GlitchText>
        <GlitchText>{formatDate(eventInfo.event.start)}</GlitchText>
        <GlitchText>{formatTime(eventInfo.event.start)}</GlitchText>
        <GlitchText>{eventInfo.event.extendedProps?.description || "No description"}</GlitchText>
      </HolographicContent>
    </Popper>
  );
};

export default HolographicPopUp;
