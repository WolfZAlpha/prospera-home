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
import Stack from "@mui/material/Stack";
import Icon from "@mui/material/Icon";

// PROSPERA DEFI PLATFORM components
import MKBox from "components/MKBox";
import MKButton from "components/MKButton";

function ButtonsIconLeft() {
  return (
    <MKBox component="section" py={12}>
      <Container>
        <Grid container justifyContent="center">
          <Stack direction="row" alignItems="center" spacing={1}>
            <MKButton color="info" size="small">
              <Icon sx={{ mr: 1 }}>favorite</Icon>
              small
            </MKButton>
            <MKButton color="info">
              <Icon sx={{ mr: 1 }}>favorite</Icon>
              default
            </MKButton>
            <MKButton color="info" size="large">
              <Icon sx={{ mr: 1 }}>favorite</Icon>
              large
            </MKButton>
          </Stack>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default ButtonsIconLeft;
