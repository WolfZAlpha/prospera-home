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
import PropTypes from "prop-types";
import { Box } from "@mui/material";
import PDBox from "../../../../../components/PDBox";
import PDTypography from "../../../../../components/PDTypography";
import SpaceBackground from "./SpaceBackground";
import { Rocket } from "lucide-react";

function MoonShotIndicatorContent({ sentiment }) {
  return (
    <PDBox position="relative" height="100%" width="100%" overflow="hidden">
      <SpaceBackground />
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        height="100%"
        width="100%"
        position="relative"
        zIndex={1}
        sx={{ pointerEvents: "none" }}
      >
        <Rocket size={64} color={sentiment > 50 ? "#00ff00" : "#000000"} />
        <PDTypography variant="h4" fontWeight="bold" color="white" mt={2}>
          {sentiment}%
        </PDTypography>
        <PDTypography variant="button" color="text" fontWeight="regular">
          Moon Shot Probability
        </PDTypography>
      </Box>
    </PDBox>
  );
}

MoonShotIndicatorContent.propTypes = {
  sentiment: PropTypes.number.isRequired,
};

export default MoonShotIndicatorContent;
