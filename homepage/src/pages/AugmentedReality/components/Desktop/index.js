import React from "react";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import PropTypes from "prop-types";
import bgImage from "assets/images/backgrounds/Games/Firewatch/Firewatch1.jpeg";

const DesktopContainer = styled(Box)({
  height: "100vh",
  width: "100vw",
  backgroundImage: `url(${bgImage})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  overflow: "hidden",
  position: "relative",
});

const Desktop = ({ children }) => {
  return <DesktopContainer>{children}</DesktopContainer>;
};

export default Desktop;

Desktop.propTypes = {
  children: PropTypes.node.isRequired,
};
