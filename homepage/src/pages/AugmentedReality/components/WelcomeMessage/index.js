import React from "react";
import PropTypes from "prop-types";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: theme.spacing(3),
  borderRadius: theme.shape.borderRadius,
  background: "rgba(255, 255, 255, 0.1)",
  backdropFilter: "blur(10px)",
  color: "white",
  maxWidth: "600px",
  width: "100%",
}));

const WelcomeMessage = ({ userName }) => {
  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good morning";
    if (hour < 18) return "Good afternoon";
    return "Good evening";
  };

  return (
    <StyledBox>
      <Typography variant="h3" component="div" sx={{ fontWeight: "bold", marginBottom: 2 }}>
        {getGreeting()}, {userName}
      </Typography>
      <Typography variant="h5" component="div">
        Welcome to PROSPERA DEFI
      </Typography>
    </StyledBox>
  );
};

WelcomeMessage.propTypes = {
  userName: PropTypes.string.isRequired,
};

export default WelcomeMessage;
