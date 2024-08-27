/* eslint-disable no-param-reassign */
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
import MKInput from "components/MKInput";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";

function NewsletterOne() {
  return (
    <MKBox component="section" py={12}>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={5} mr="auto">
            <MKTypography variant="h4" mb={1}>
              Get Tips &amp; Tricks every Week!
            </MKTypography>
            <MKTypography variant="body2" color="text">
              Join our newsletter and get news in your inbox every week!
            </MKTypography>
          </Grid>
          <Grid item xs={12} lg={6} flexDirection="column" justifyContent="center" ml="auto">
            <MKBox component="form" method="" action="">
              <Grid container spacing={2}>
                <Grid item xs={12} sm={8}>
                  <MKInput label="Your Email..." fullWidth />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <MKButton variant="gradient" color="info" fullWidth sx={{ height: "100%" }}>
                    Subscribe
                  </MKButton>
                </Grid>
              </Grid>
            </MKBox>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default NewsletterOne;
