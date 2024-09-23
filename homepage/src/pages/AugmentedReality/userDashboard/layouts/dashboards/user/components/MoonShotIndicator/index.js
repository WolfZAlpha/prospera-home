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
import { Card } from "@mui/material";
import PDBox from "../../../../../components/PDBox";
import PDTypography from "../../../../../components/PDTypography";
import MoonShotIndicatorContent from "./MoonShotIndicatorContent";

function MoonShotIndicator({ title, sentiment }) {
  return (
    <Card sx={{ height: "100%", minHeight: 300 }}>
      <PDBox
        display="flex"
        flexDirection="column"
        height="100%"
        p={2}
        position="relative"
        overflow="hidden"
      >
        <PDTypography
          variant="lg"
          fontWeight="bold"
          color="white"
          textTransform="capitalize"
          mb={2}
        >
          {title}
        </PDTypography>
        <PDBox flexGrow={1} position="relative">
          <MoonShotIndicatorContent sentiment={sentiment} />
        </PDBox>
      </PDBox>
    </Card>
  );
}

MoonShotIndicator.propTypes = {
  title: PropTypes.string.isRequired,
  sentiment: PropTypes.number.isRequired,
};

export default MoonShotIndicator;
