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
import { CircularProgress, Typography, Box } from "@mui/material";
import { Thermometer } from "lucide-react";

const FOMOMeter = ({ level }) => {
  const getColor = (level) => {
    if (level < 25) return "info";
    if (level < 50) return "success";
    if (level < 75) return "warning";
    return "error";
  };

  const getFOMOLevel = (level) => {
    if (level < 25) return "Chill";
    if (level < 50) return "Curious";
    if (level < 75) return "Excited";
    if (level < 100) return "Moon Soon";
    return "Galactic";
  };

  return (
    <Box
      sx={{
        position: "relative",
        display: "inline-flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <CircularProgress
        variant="determinate"
        value={level}
        color={getColor(level)}
        size={100}
        thickness={5}
      />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Thermometer size={48} color={getColor(level)} />
      </Box>
      <Typography variant="h6" component="div" color="text.primary" mt={2}>
        FOMO Level: {getFOMOLevel(level)}
      </Typography>
    </Box>
  );
};

export default FOMOMeter;
