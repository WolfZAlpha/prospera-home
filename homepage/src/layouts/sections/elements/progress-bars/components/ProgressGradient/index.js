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

// PROSPERA DEFI PLATFORM components
import MKBox from "components/MKBox";
import MKProgress from "components/MKProgress";

function ProgressGradient() {
  return (
    <MKBox component="section" bgColor="white" py={12}>
      <Container>
        <Grid container item xs={12} lg={6} justifyContent="center" mx="auto">
          <Stack spacing={2} width="100%">
            <MKProgress variant="gradient" color="primary" value={50} />
            <MKProgress variant="gradient" color="secondary" value={50} />
            <MKProgress variant="gradient" color="success" value={50} />
            <MKProgress variant="gradient" color="info" value={50} />
            <MKProgress variant="gradient" color="warning" value={50} />
            <MKProgress variant="gradient" color="error" value={50} />
            <MKProgress variant="gradient" color="dark" value={50} />
          </Stack>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default ProgressGradient;
