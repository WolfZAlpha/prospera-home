/** 

=========================================================
* PROSPERA DEFI DASHBOARD - v1.0.0
=========================================================

* Copyright 2024 PROSPERA DEFI (https://www.prosperadefi.com/)

* Design and Coded by Z

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the PROSPERA DEFI DASHBOARD.

*/

import { useState } from "react";

// @mui material components
import Grid from "@mui/material/Grid";

// prospera defi dashboard components
import PDBox from "../../../../../components/PDBox";
import PDTypography from "../../../../../components/PDTypography";
import PDButton from "../../../../../components/PDButton";

// prospera defi dashboard icons
import Settings from "../../../../../examples/Icons/Settings";
import Cube from "../../../../../examples/Icons/Cube";
import SpaceShip from "../../../../../examples/Icons/SpaceShip";
import { IoBuild } from "react-icons/io5";
import { IoCube } from "react-icons/io5";
import { RiPencilFill } from "react-icons/ri";

function Account() {
  const [design, setDesign] = useState(false);
  const [development, setDevelopment] = useState(false);
  const [marketing, setMarketing] = useState(false);

  const handleSetDesign = () => setDesign(!design);
  const handleSetDevelopment = () => setDevelopment(!development);
  const handleSetMarketing = () => setMarketing(!marketing);

  const customButtonStyles = ({
    functions: { pxToRem },
    borders: { borderWidth },
    palette: { transparent, info },
  }) => ({
    width: pxToRem(150),
    height: pxToRem(150),
    borderWidth: borderWidth[2],
    mb: 1,
    ml: 0.5,

    "&.MuiButton-contained, &.MuiButton-contained:hover": {
      boxShadow: "none",
      border: `${borderWidth[2]} solid ${transparent.main}`,
    },

    "&:hover": {
      backgroundColor: `${info.main} !important`,
      border: `${borderWidth[2]} solid ${info.main} !important`,
    },
  });

  return (
    <PDBox>
      <PDBox width="80%" textAlign="center" mx="auto" mb={4}>
        <PDBox mb={1}>
          <PDTypography variant="lg" fontWeight="bold" color="white">
            What are you doing? (checkboxes)
          </PDTypography>
        </PDBox>
        <PDTypography variant="button" fontWeight="regular" color="text">
          Give us more details about you. What do you enjoy doing in your spare time?
        </PDTypography>
      </PDBox>
      <PDBox mt={2}>
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={12} md={2.5}>
            <PDBox textAlign="center">
              <PDButton
                color="info"
                variant={design ? "contained" : "outlined"}
                onClick={handleSetDesign}
                sx={customButtonStyles}
              >
                <IoBuild size="54px" color="white" />
              </PDButton>
              <PDTypography variant="h6" color="white">
                Design
              </PDTypography>
            </PDBox>
          </Grid>
          <Grid item xs={12} md={2.5}>
            <PDBox textAlign="center">
              <PDButton
                color="info"
                variant={development ? "contained" : "outlined"}
                onClick={handleSetDevelopment}
                sx={customButtonStyles}
              >
                <IoCube size="54px" color="white" />
              </PDButton>
              <PDTypography variant="h6" color="white">
                Development
              </PDTypography>
            </PDBox>
          </Grid>
          <Grid item xs={12} md={2.5}>
            <PDBox textAlign="center">
              <PDButton
                color="info"
                variant={marketing ? "contained" : "outlined"}
                onClick={handleSetMarketing}
                sx={customButtonStyles}
              >
                <RiPencilFill size="54px" color="white" />
              </PDButton>
              <PDTypography variant="h6" color="white">
                Marketing
              </PDTypography>
            </PDBox>
          </Grid>
        </Grid>
      </PDBox>
    </PDBox>
  );
}

export default Account;
