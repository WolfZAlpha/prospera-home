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

// prospera defi dashboard components
import PDBox from "../../../../../components/PDBox";
import PDTypography from "../../../../../components/PDTypography";
import PDBadge from "../../../../../components/PDBadge";

function Steps() {
  return (
    <Card sx={{ height: "100%" }}>
      <PDBox sx={{ height: "100%" }}>
        <PDTypography variant="body2" color="white" fontWeight="medium" mb="72px">
          Steps
        </PDTypography>
        <PDBox mt={2} lineHeight={0}>
          <PDTypography fontSize={22} color="white" fontWeight="bold">
            11.4K
          </PDTypography>
        </PDBox>
        <PDBadge variant="contained" color="success" badgeContent="+4.3%" container />
      </PDBox>
    </Card>
  );
}

export default Steps;
