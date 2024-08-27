/** 
=========================================================
* PROSPERA DEFI PLATFORM - v1.0.0
=========================================================

* Copyright 2024 PROSPERA DEFI (https://www.prosperadefi.com/)

* Design and Coded by Z

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the PROSPERA DEFI PLATFORM.
*/

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// PROSPERA DEFI PLATFORM components
import MKBox from "components/MKBox";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";

// Images
import bgImage from "assets/images/bg3.jpg";

function CtaThree() {
  return (
    <MKBox
      display="flex"
      my={24}
      py={6}
      sx={{
        backgroundImage: ({ palette: { gradients }, functions: { linearGradient, rgba } }) =>
          `${linearGradient(
            rgba(gradients.dark.main, 0.8),
            rgba(gradients.dark.state, 0.8)
          )}, url(${bgImage})`,
      }}
    >
      <Container>
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} md={8} lg={5}>
            <MKTypography variant="h5" color="white" fontWeight="bold">
              For being a bright color. For standing out. But the time is now to be okay to be the
              greatest you.
            </MKTypography>
          </Grid>
          <Grid item xs={12} lg={6} sx={{ ml: "auto" }}>
            <MKBox width="12rem" ml="auto">
              <MKButton variant="gradient" color="warning" fullWidth sx={{ boxShadow: "none" }}>
                start now
              </MKButton>
            </MKBox>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default CtaThree;
