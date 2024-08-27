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

// PROSPERA DEFI PLATFORM React components
import MKBox from "components/MKBox";
import MKInput from "components/MKInput";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";

function ContactUs() {
  return (
    <MKBox component="section" py={12}>
      <Container>
        <Grid
          container
          item
          justifyContent="center"
          xs={10}
          lg={6}
          sx={{ mx: "auto", mb: { xs: 0, md: 6 }, textAlign: "center" }}
        >
          <MKTypography variant="h3" mb={1}>
            We are here for you
          </MKTypography>
          <MKTypography variant="body2" color="text">
            For further questions, including partnership opportunities
          </MKTypography>
        </Grid>
        <Grid container item xs={12} lg={8} sx={{ mx: "auto" }}>
          <MKBox width="100%" component="form" method="post" autoComplete="off">
            <MKBox p={3}>
              <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                  <MKInput
                    variant="standard"
                    label="Full Name"
                    InputLabelProps={{ shrink: true }}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <MKInput
                    type="email"
                    variant="standard"
                    label="Email"
                    InputLabelProps={{ shrink: true }}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
                  <MKInput
                    variant="standard"
                    label="What can we help you?"
                    placeholder="Describe your problem in at least 250 characters"
                    InputLabelProps={{ shrink: true }}
                    multiline
                    fullWidth
                    rows={6}
                  />
                </Grid>
              </Grid>
              <Grid container item justifyContent="center" xs={12} my={6}>
                <MKButton type="submit" variant="gradient" color="dark">
                  Send Message
                </MKButton>
              </Grid>
            </MKBox>
          </MKBox>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default ContactUs;
