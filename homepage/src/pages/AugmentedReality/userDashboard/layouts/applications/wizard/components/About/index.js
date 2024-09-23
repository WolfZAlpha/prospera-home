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
import Icon from "@mui/material/Icon";

// prospera defi dashboard components
import PDBox from "../../../../../components/PDBox";
import PDTypography from "../../../../../components/PDTypography";
import PDAvatar from "../../../../../components/PDAvatar";
import PDButton from "../../../../../components/PDButton";

// Wizard application components
import FormField from "../FormField";

// Images
import avatar from "../../../../../assets/images/SimmmpleAvatar.png";

function About() {
  return (
    <PDBox>
      <PDBox width="80%" textAlign="center" mx="auto" mb={4}>
        <PDBox mb={1}>
          <PDTypography variant="h5" fontWeight="regular" color="white">
            Let&apos;s start with the basic information
          </PDTypography>
        </PDBox>
        <PDTypography variant="body2" fontWeight="regular" color="text">
          Let us know your name and email address. Use an address you don&apos;t mind other users
          contacting you at
        </PDTypography>
      </PDBox>
      <PDBox mt={2}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4} container justifyContent="center">
            <PDBox position="relative" height="max-content" mx="auto">
              <PDAvatar
                src={avatar}
                alt="profile picture"
                sx={{ width: "150px", height: "150px" }}
                variant="rounded"
              />
              <PDBox alt="spotify logo" position="absolute" right={0} bottom={0} mr={-1} mb={-1}>
                <PDButton
                  variant="contained"
                  color="info"
                  sx={{ borderRadius: "12px", width: "35px", height: "35px" }}
                  iconOnly
                >
                  <Icon>edit</Icon>
                </PDButton>
              </PDBox>
            </PDBox>
          </Grid>
          <Grid item xs={12} md={8}>
            <PDBox mb={2}>
              <FormField type="text" label="first name" placeholder="Eg. Michael" />
            </PDBox>
            <PDBox mb={2}>
              <FormField type="text" label="last name" placeholder="Eg. Tomson" />
            </PDBox>
            <PDBox>
              <FormField type="text" label="email address" placeholder="Eg. vision@dashboard.com" />
            </PDBox>
          </Grid>
        </Grid>
      </PDBox>
    </PDBox>
  );
}

export default About;
