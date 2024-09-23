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
import FOMOMeterContent from "./FOMOMeterContent";

function FOMOMeter({ title, level }) {
  return (
    <Card sx={{ height: "100%" }}>
      <PDBox display="flex" justifyContent="space-between" alignItems="center" mb={3}>
        <PDTypography variant="lg" fontWeight="bold" color="white" textTransform="capitalize">
          {title}
        </PDTypography>
      </PDBox>
      <PDBox>
        <FOMOMeterContent level={level} />
      </PDBox>
    </Card>
  );
}

FOMOMeter.propTypes = {
  title: PropTypes.string.isRequired,
  level: PropTypes.number.isRequired,
};

export default FOMOMeter;
