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
import welcome from "../../../../../../assets/images/welcome-profile.png";
import PDTypography from "../../../../../../components/PDTypography/index";
import PDBox from "../../../../../../components/PDBox/index";

const Welcome = () => {
  return (
    <Card
      sx={({ breakpoints }) => ({
        background: `url(${welcome})`,
        backgroundSize: "cover",
        borderRadius: "20px",
        height: "100%",
        [breakpoints.only("xl")]: {
          gridArea: "1 / 1 / 2 / 2",
        },
      })}
    >
      <PDBox display="flex" flexDirection="column" sx={{ height: "100%" }}>
        <PDBox display="flex" flexDirection="column" mb="auto">
          <PDTypography color="white" variant="h3" fontWeight="bold" mb="3px">
            Welcome back!
          </PDTypography>
          <PDTypography color="white" variant="button" fontWeight="regular">
            Nice to see you, Mark Johnson!
          </PDTypography>
        </PDBox>
        <PDBox justifySelf="flex-end">
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
              justifySelf: "flex-end",
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
            Tap to record
            <Icon sx={{ fontWeight: "bold", ml: "5px" }}>arrow_forward</Icon>
          </PDTypography>
        </PDBox>
      </PDBox>
    </Card>
  );
};

export default Welcome;
