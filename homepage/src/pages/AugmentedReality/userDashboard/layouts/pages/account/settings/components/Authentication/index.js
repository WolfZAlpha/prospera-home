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
import Divider from "@mui/material/Divider";

// prospera defi dashboard components
import PDBox from "../../../../../../components/PDBox";
import PDTypography from "../../../../../../components/PDTypography";
import PDButton from "../../../../../../components/PDButton";
import PDBadge from "../../../../../../components/PDBadge";

function Authentication() {
  return (
    <Card id="2fa" sx={{ overflow: "visible" }}>
      <PDBox display="flex" justifyContent="space-between" alignItems="center" mb="32px">
        <PDTypography variant="lg" color="white" fontWeight="bold">
          Two-factor authentication
        </PDTypography>
        <PDBadge variant="contained" color="green" badgeContent="enabled" container />
      </PDBox>
      <PDBox>
        <PDBox
          display="flex"
          justifyContent="space-between"
          alignItems={{ xs: "flex-start", sm: "center" }}
          flexDirection={{ sm: "column", md: "row" }}
        >
          <PDTypography variant="body2" color="text">
            Security keys
          </PDTypography>
          <PDBox
            display="flex"
            alignItems={{ xs: "flex-start", sm: "center" }}
            flexDirection={{ xs: "column", sm: "row" }}
          >
            <PDBox mx={{ xs: 0, sm: 2 }} mb={{ sm: 1, md: 0 }}>
              <PDTypography variant="button" color="text" fontWeight="regular">
                No Security keys
              </PDTypography>
            </PDBox>
            <PDButton variant="contained" color="info" size="small">
              add
            </PDButton>
          </PDBox>
        </PDBox>
        <Divider light sx={{ my: "22px" }} />
        <PDBox
          display="flex"
          justifyContent="space-between"
          alignItems={{ xs: "flex-start", sm: "center" }}
          flexDirection={{ sm: "column", md: "row" }}
        >
          <PDTypography variant="body2" color="text">
            SMS number
          </PDTypography>
          <PDBox
            display="flex"
            alignItems={{ xs: "flex-start", sm: "center" }}
            flexDirection={{ xs: "column", sm: "row" }}
          >
            <PDBox mx={{ xs: 0, sm: 2 }} mb={{ sm: 1, md: 0 }}>
              <PDTypography variant="button" color="text" fontWeight="regular">
                +3012374423
              </PDTypography>
            </PDBox>
            <PDButton variant="contained" color="info" size="small">
              edit
            </PDButton>
          </PDBox>
        </PDBox>
        <Divider light sx={{ my: "22px" }} />
        <PDBox
          display="flex"
          justifyContent="space-between"
          alignItems={{ xs: "flex-start", sm: "center" }}
          flexDirection={{ sm: "column", md: "row" }}
        >
          <PDTypography variant="body2" color="text">
            Authenticator app
          </PDTypography>
          <PDBox
            display="flex"
            alignItems={{ xs: "flex-start", sm: "center" }}
            flexDirection={{ xs: "column", sm: "row" }}
          >
            <PDBox mx={{ xs: 0, sm: 2 }} mb={{ sm: 1, md: 0 }}>
              <PDTypography variant="button" color="text" fontWeight="regular">
                Not Configured
              </PDTypography>
            </PDBox>
            <PDButton variant="contained" color="info" size="small">
              set up
            </PDButton>
          </PDBox>
        </PDBox>
      </PDBox>
    </Card>
  );
}

export default Authentication;
