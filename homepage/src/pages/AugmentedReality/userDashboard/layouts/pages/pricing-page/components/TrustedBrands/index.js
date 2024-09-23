/** 

=========================================================
* PROSPERA DEFI DASHBOARD - v1.0.0
=========================================================

* Copyright 2024 PROSPERA DEFI (https://www.prosperadefi.com/)

* Design and Coded by Z

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the PROSPERA DEFI DASHBOARD.

*/

// @mui material components
import Grid from "@mui/material/Grid";

// prospera defi dashboard components
import PDBox from "../../../../../components/PDBox";
import PDTypography from "../../../../../components/PDTypography";

// Images
import google from "../../../../../assets/images/logos/google.svg";
import msn from "../../../../../assets/images/logos/msn.svg";
import microsoft from "../../../../../assets/images/logos/microsoft.svg";
import zoho from "../../../../../assets/images/logos/zoho.svg";
import georgia from "../../../../../assets/images/logos/georgia.svg";
import deloitte from "../../../../../assets/images/logos/deloitte.svg";

function PricingCards() {
  return (
    <PDBox mt={8}>
      <PDBox textAlign="center">
        <PDTypography fontSize={16} color="white" fontWeight="bold">
          More than 50+ brands trust Vision
        </PDTypography>
      </PDBox>
      <PDBox mt={5} display="flex" justifyContent="center">
        <Grid
          container
          spacing={8}
          columnSpacing={{ xs: 6, lg: 8 }}
          maxWidth={{ lg: "1200px" }}
          mx={{ md: "20px", lg: "0px" }}
          sx={{ display: "flex", alignItems: "center" }}
        >
          <Grid item xs={6} md={4} lg={2}>
            <PDBox component="img" src={google} alt="google" width="90%" opacity={0.9} mb={3} />
          </Grid>
          <Grid item xs={6} md={4} lg={2}>
            <PDBox component="img" src={msn} alt="msn" width="90%" opacity={0.9} mb={3} />
          </Grid>
          <Grid item xs={6} md={4} lg={2}>
            <PDBox
              component="img"
              src={microsoft}
              alt="microsoft"
              width="90%"
              opacity={0.9}
              mb={3}
            />
          </Grid>
          <Grid item xs={6} md={4} lg={2}>
            <PDBox component="img" src={zoho} alt="zoho" width="90%" opacity={0.9} mb={3} />
          </Grid>
          <Grid item xs={6} md={4} lg={2}>
            <PDBox component="img" src={georgia} alt="georgia" width="90%" opacity={0.9} mb={3} />
          </Grid>
          <Grid item xs={6} md={4} lg={2}>
            <PDBox component="img" src={deloitte} alt="deloitte" width="90%" opacity={0.9} mb={3} />
          </Grid>
        </Grid>
      </PDBox>
    </PDBox>
  );
}

export default PricingCards;
