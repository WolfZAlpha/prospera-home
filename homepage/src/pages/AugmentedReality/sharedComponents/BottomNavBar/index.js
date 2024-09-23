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
import MKBox from "components/MKBox";
import { styled } from "@mui/material/styles";
import PropTypes from "prop-types";

const FrostedGlassBar = styled(MKBox)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  boxShadow:
    "0 0.3px 0.7px rgba(0, 0, 0, 0.126), 0 0.9px 1.7px rgba(0, 0, 0, 0.179), 0 1.8px 3.5px rgba(0, 0, 0, 0.224), 0 3.7px 7.3px rgba(0, 0, 0, 0.277), 0 10px 20px rgba(0, 0, 0, 0.4)",
  backdropFilter: "blur(20px)",
  transition: "0.3s ease",
  position: "fixed",
  bottom: 0,
  left: 0,
  zIndex: 1000,
  width: "100vw",
  height: "1.5vh",
  background: "rgba(255, 255, 255, 0.1)",
  color: "white",
});

const Dot = styled(MKBox)(({ active }) => ({
  width: "10px",
  height: "10px",
  borderRadius: "50%",
  backgroundColor: active ? "#01ff02" : "rgba(255, 255, 255, 0.5)",
  margin: "0 5px",
  cursor: "pointer",
  transition: "background-color 0.3s ease",
}));

const BottomNavBar = ({ currentSection, onNavigate, totalSections }) => {
  return (
    <FrostedGlassBar>
      {[...Array(totalSections)].map((_, index) => (
        <Dot
          key={index}
          active={currentSection === index}
          onClick={(e) => {
            e.preventDefault();
            onNavigate(index);
          }}
        />
      ))}
    </FrostedGlassBar>
  );
};

BottomNavBar.propTypes = {
  currentSection: PropTypes.number.isRequired,
  onNavigate: PropTypes.func.isRequired,
  totalSections: PropTypes.number.isRequired,
};

export default BottomNavBar;
