/** 

=========================================================
* PROSPERA DEFI DASHBOARD - v1.0.0
=========================================================

* Copyright 2024 PROSPERA DEFI (https://www.prosperadefi.com/)

* Design and Coded by Z

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the PROSPERA DEFI DASHBOARD.

*/

import { useState } from "react";

// @mui material components
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import PDSwitch from "../../../../../../components/PDSwitch";

// prospera defi dashboard components
import PDBox from "../../../../../../components/PDBox";
import PDTypography from "../../../../../../components/PDTypography";
import PDAvatar from "../../../../../../components/PDAvatar";

// Images
import burceMars from "../../../../../../assets/images/avatar-simmmple.png";

function Header() {
  const [visible, setVisible] = useState(true);

  const handleSetVisible = () => setVisible(!visible);

  return (
    <Card id="profile">
      <PDBox>
        <Grid container spacing={3} alignItems="center">
          <Grid item>
            <PDAvatar src={burceMars} alt="profile-image" variant="rounded" size="xl" shadow="sm" />
          </Grid>
          <Grid item>
            <PDBox height="100%" display="flex" flexDirection="column" mt={0.5} lineHeight={1}>
              <PDTypography variant="lg" color="white" fontWeight="bold">
                Mark Johnson
              </PDTypography>
              <PDTypography variant="button" color="text" fontWeight="regular">
                mark@simmmple.com
              </PDTypography>
            </PDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3} sx={{ ml: "auto" }}>
            <PDBox
              display="flex"
              justifyContent={{ md: "flex-end" }}
              alignItems="center"
              lineHeight={1}
            >
              <PDTypography variant="caption" color="white" fontWeight="regular">
                Switch to {visible ? "invisible" : "visible"}
              </PDTypography>
              <PDBox mx={1}>
                <PDSwitch color="info" checked={visible} onChange={handleSetVisible} />
              </PDBox>
            </PDBox>
          </Grid>
        </Grid>
      </PDBox>
    </Card>
  );
}

export default Header;
