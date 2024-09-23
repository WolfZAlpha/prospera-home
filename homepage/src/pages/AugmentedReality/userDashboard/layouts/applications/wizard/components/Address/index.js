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

// Wizard application components
import FormField from "../FormField";

function Address() {
  return (
    <PDBox>
      <PDBox width="80%" textAlign="center" mx="auto" mb={4}>
        <PDBox mb={1}>
          <PDTypography variant="lg" fontWeight="bold" color="white">
            Are you living in a nice area?
          </PDTypography>
        </PDBox>
        <PDTypography variant="button" fontWeight="regular" color="text">
          One thing I love about the later sunsets is the chance to go for a walk through the
          neighborhood woods before dinner
        </PDTypography>
      </PDBox>
      <PDBox mt={2}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <FormField type="text" label="Address 1" placeholder="eg. Street 120" />
          </Grid>
          <Grid item xs={12}>
            <FormField type="text" label="Address 2" placeholder="eg. Street 220" />
          </Grid>
          <Grid item xs={12} md={6}>
            <FormField type="text" label="City" placeholder="eg. Tokyo" />
          </Grid>
          <Grid item xs={12} md={3}>
            <FormField type="text" label="State" placeholder="..." />
          </Grid>
          <Grid item xs={12} md={3}>
            <FormField type="text" label="ZIP" placeholder="7 letters" />
          </Grid>
        </Grid>
      </PDBox>
    </PDBox>
  );
}

export default Address;
