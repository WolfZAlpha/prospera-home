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

// @mui components
import { Card, Stack } from "@mui/material";

// prospera defi dashboard assets
import balance from "../../../../../../assets/images/billing-background-balance.png";
import Graph from "../../../../../../assets/images/shapes/graph-billing.svg";

import palette from "../../../../../../assets/theme/base/colors";

// prospera defi dashboard components
import PDBox from "../../../../../../components/PDBox";
import PDTypography from "../../../../../../components/PDTypography";

// React icons
import { FaEllipsisH } from "react-icons/fa";
import { MdOutlineDomain } from "react-icons/md";

const CreditBalance = () => {
  return (
    <Card sx={{ padding: "30px" }}>
      <PDBox display="flex" flexDirection="column">
        <PDBox
          mb="32px"
          p="20px"
          display="flex"
          flexDirection="column"
          sx={{ backgroundImage: `url(${balance})`, backgroundSize: "cover", borderRadius: "18px" }}
        >
          <PDBox display="flex" justifyContent="space-beetween" alignItems="center">
            <PDTypography variant="caption" color="white" fontWeight="medium" mr="auto">
              Credit Balance
            </PDTypography>
            <FaEllipsisH color="white" size="18px" sx={{ cursor: "pointer" }} />
          </PDBox>
          <PDBox display="flex" justifyContent="space-beetween" alignItems="center">
            <PDTypography variant="h2" color="white" fontWeight="bold" mr="auto">
              $25,215
            </PDTypography>
            <PDBox component="img" src={Graph} sx={{ width: "58px", height: "20px" }} />
          </PDBox>
        </PDBox>
        <PDTypography color="text" variant="xxs" fontWeight="medium" mb="8px">
          NEWEST
        </PDTypography>
        <PDBox display="flex" justifyContent="space-beetween" alignItems="center">
          <Stack direction="row" spacing="10px" mr="auto">
            <PDBox
              display="flex"
              mr="10px"
              justifyContent="center"
              alignItems="center"
              sx={{
                background: "rgba(34, 41, 78, 0.7)",
                borderRadius: "50%",
                width: "42px",
                height: "42px",
              }}
            >
              <MdOutlineDomain color={palette.success.main} size="20px" />
            </PDBox>
            <PDBox display="flex" flexDirection="column">
              <PDTypography color="white" variant="button" fontWeight="medium">
                Bill & Taxes
              </PDTypography>
              <PDTypography color="text" variant="button" fontWeight="medium">
                Today, 16:36
              </PDTypography>
            </PDBox>
          </Stack>
          <PDTypography variant="button" color="white" fontWeight="bold">
            -$154.50
          </PDTypography>
        </PDBox>
      </PDBox>
    </Card>
  );
};

export default CreditBalance;
