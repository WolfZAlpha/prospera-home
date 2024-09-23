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

import { Card, Icon } from "@mui/material";
import PDBox from "../../../../components/PDBox";
import PDTypography from "../../../../components/PDTypography";

import cardimgfree from "../../../../assets/images/cardimgfree.png";

const WelcomeMark = () => {
  return (
    <Card
      sx={{
        backgroundImage: `url(${cardimgfree})`,
        backgroundSize: "cover",
        backgroundPosition: "50%",
      }}
    >
      <PDBox height="100%" display="flex" flexDirection="column" justifyContent="space-between">
        <PDBox mb="59px">
          <PDTypography color="text" variant="button" fontWeight="regular" mb="12px">
            Welcome back,
          </PDTypography>
          <PDTypography color="white" variant="h3" fontWeight="bold" mb="18px">
            Zed
          </PDTypography>
          <PDTypography color="text" variant="h6" fontWeight="regular" mb="auto">
            Glad to see you again!
          </PDTypography>
        </PDBox>
      </PDBox>
    </Card>
  );
};

export default WelcomeMark;
