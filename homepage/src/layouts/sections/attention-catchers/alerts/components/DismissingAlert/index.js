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
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// PROSPERA DEFI PLATFORM components
import MKBox from "components/MKBox";
import MKAlert from "components/MKAlert";

function DismissingAlert() {
  return (
    <MKBox component="section" py={6}>
      <Container>
        <Grid container item xs={12} lg={10} mx="auto">
          <Grid item xs={12}>
            <MKAlert color="warning" dismissible>
              <strong>Holy molly!</strong>&nbsp; You should check in on some of those fields below.
            </MKAlert>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default DismissingAlert;
