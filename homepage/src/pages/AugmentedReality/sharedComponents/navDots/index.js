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
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import PropTypes from "prop-types";

const DotContainer = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100%",
});

const Dot = styled(Box)(({ active }) => ({
  width: "8px",
  height: "8px",
  borderRadius: "50%",
  backgroundColor: active ? "#01ff02" : "rgba(255, 255, 255, 0.5)",
  margin: "0 4px",
  cursor: "pointer",
  transition: "background-color 0.3s ease",
}));

const NavDots = ({ currentSection, onNavigate, totalSections }) => {
  return (
    <DotContainer>
      {[...Array(totalSections)].map((_, index) => (
        <Dot key={index} active={currentSection === index} onClick={() => onNavigate(index)} />
      ))}
    </DotContainer>
  );
};

NavDots.propTypes = {
  currentSection: PropTypes.number.isRequired,
  onNavigate: PropTypes.func.isRequired,
  totalSections: PropTypes.number.isRequired,
};

export default NavDots;
