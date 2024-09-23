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

function FullBody() {
  return (
    <Card sx={{ pt: "28px", height: "100%" }}>
      <PDBox display="flex" justifyContent="space-between" alignItems="center" mb="36px">
        <PDTypography variant="lg" color="white" fontWeight="bold">
          Full Body
        </PDTypography>
        <PDBadge variant="contained" color="green" badgeContent="moderate" container />
      </PDBox>
      <PDBox>
        <PDTypography variant="body2" color="text" fontWeight="regular" pb="22px">
          What matters is the people who are sparked by it. And the people who are liked.
        </PDTypography>
      </PDBox>
    </Card>
  );
}

export default FullBody;
