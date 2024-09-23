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
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";

// prospera defi dashboard components
import PDBox from "../../../../../../components/PDBox";
import PDTypography from "../../../../../../components/PDTypography";
import PDButton from "../../../../../../components/PDButton";

// Settings page components
import FormField from "../../../components/FormField";

function ChangePassword() {
  const passwordRequirements = [
    "One special characters",
    "Min 6 characters",
    "One number (2 are recommended)",
    "Change it often",
  ];

  const renderPasswordRequirements = passwordRequirements.map((item, key) => {
    const itemKey = `element-${key}`;

    return (
      <PDBox key={itemKey} component="li" color="text" fontSize="1.25rem" lineHeight={1}>
        <PDTypography variant="button" color="text" fontWeight="regular" verticalAlign="middle">
          {item}
        </PDTypography>
      </PDBox>
    );
  });

  return (
    <Card id="change-password" sx={{ zIndex: "-1" }}>
      <PDBox mb="40px">
        <PDTypography variant="lg" color="white" fontWeight="bold">
          Change Password
        </PDTypography>
      </PDBox>
      <PDBox component="form">
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <FormField
              label="current password"
              placeholder="Current Password"
              inputProps={{ type: "password", autoComplete: "" }}
            />
          </Grid>
          <Grid item xs={12}>
            <FormField
              label="new password"
              placeholder="New Password"
              inputProps={{ type: "password", autoComplete: "" }}
            />
          </Grid>
          <Grid item xs={12}>
            <FormField
              label="confirm new password"
              placeholder="Confirm Password"
              inputProps={{ type: "password", autoComplete: "" }}
            />
          </Grid>
        </Grid>
        <PDBox mt={6} mb={1}>
          <PDTypography variant="lg" color="white" fontWeight="bold">
            Password requirements
          </PDTypography>
        </PDBox>
        <PDBox mb={1}>
          <PDTypography variant="body2" color="text">
            Please follow this guide for a strong password
          </PDTypography>
        </PDBox>
        <PDBox display="flex" justifyContent="space-between" alignItems="flex-end" flexWrap="wrap">
          <PDBox component="ul" m={0} pl={3.25} mb={{ xs: 8, sm: 0 }}>
            {renderPasswordRequirements}
          </PDBox>
          <PDBox ml="auto">
            <PDButton variant="contained" color="info" size="small">
              update password
            </PDButton>
          </PDBox>
        </PDBox>
      </PDBox>
    </Card>
  );
}

export default ChangePassword;
