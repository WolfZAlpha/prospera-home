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
import Card from "@mui/material/Card";
import Tooltip from "@mui/material/Tooltip";

// PROSPERA DEFI PLATFORM React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

function Emails() {
  return (
    <Card>
      <MKBox display="flex" justifyContent="space-between" p={3} lineHeight={1}>
        <MKTypography variant="body2" color="text">
          Emails (21)
        </MKTypography>
        <Tooltip title="Check your emails" placement="top">
          <MKBox component="a" href="#">
            <MKTypography variant="body2" fontWeight="regular">
              Check
            </MKTypography>
          </MKBox>
        </Tooltip>
      </MKBox>
    </Card>
  );
}

export default Emails;
