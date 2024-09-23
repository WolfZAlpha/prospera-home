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
import PDBox from "../../../../../components/PDBox";
import PDTypography from "../../../../../components/PDTypography";

const WelcomeMark = () => {
  return (
    <Card sx={{ height: "340px" }}>
      <PDBox height="100%" display="flex" flexDirection="column" justifyContent="space-between">
        <PDBox>
          <PDTypography color="text" variant="button" fontWeight="regular" mb="12px">
            مرحبا بعودتك،
          </PDTypography>
          <PDTypography color="white" variant="h3" fontWeight="bold" mb="18px">
            Mark Johnson
          </PDTypography>
          <PDTypography color="text" variant="h6" fontWeight="regular" mb="auto">
            سعيد لرؤيتك مرة أخرى!
            <br /> اسألني اي شئ.
          </PDTypography>
        </PDBox>
        <PDTypography
          component="a"
          href="#"
          variant="button"
          color="white"
          fontWeight="regular"
          sx={{
            mr: "5px",
            display: "inline-flex",
            alignItems: "center",
            cursor: "pointer",

            "& .material-icons-round": {
              fontSize: "1.125rem",
              transform: `translate(2px, -0.5px)`,
              transition: "transform 0.2s cubic-bezier(0.34,1.61,0.7,1.3)",
            },

            "&:hover .material-icons-round, &:focus  .material-icons-round": {
              transform: `translate(6px, -0.5px)`,
            },
          }}
        >
          اضغط للتسجيل
          <Icon sx={{ fontWeight: "bold", ml: "5px" }}>arrow_backward</Icon>
        </PDTypography>
      </PDBox>
    </Card>
  );
};

export default WelcomeMark;
