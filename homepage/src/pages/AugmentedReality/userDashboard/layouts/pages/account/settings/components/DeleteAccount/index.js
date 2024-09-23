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
import Switch from "@mui/material/Switch";

// prospera defi dashboard components
import PDBox from "../../../../../../components/PDBox";
import PDSwitch from "../../../../../../components/PDSwitch";
import PDTypography from "../../../../../../components/PDTypography";
import PDButton from "../../../../../../components/PDButton";

function DeleteAccount() {
  return (
    <Card id="delete-account">
      <PDBox lineHeight={1} mb="40px">
        <PDBox>
          <PDTypography variant="lg" color="white" fontWeight="bold">
            Delete Account
          </PDTypography>
        </PDBox>
        <PDTypography variant="button" color="text" fontWeight="regular">
          Once you delete your account, there is no going back. Please be certain.
        </PDTypography>
      </PDBox>
      <PDBox
        display="flex"
        justifyContent="space-between"
        alignItems={{ sm: "flex-start", md: "center" }}
        flexDirection={{ sm: "column", md: "row" }}
      >
        <PDBox display="flex" alignItems="center" mb={{ sm: 3, md: 0 }}>
          <PDSwitch color="info" />
          <PDBox ml={2} lineHeight={0}>
            <PDTypography display="block" variant="button" color="white" fontWeight="medium">
              Confirm
            </PDTypography>
            <PDTypography variant="caption" color="text">
              I want to delete my account.
            </PDTypography>
          </PDBox>
        </PDBox>
        <PDBox display="flex" flexDirection={{ xs: "column", sm: "row" }}>
          <PDButton variant="outlined" color="white">
            deactivate
          </PDButton>
          <PDBox ml={{ xs: 0, sm: 1 }} mt={{ xs: 1, sm: 0 }}>
            <PDButton variant="contained" color="error" sx={{ height: "100%" }}>
              delete account
            </PDButton>
          </PDBox>
        </PDBox>
      </PDBox>
    </Card>
  );
}

export default DeleteAccount;
