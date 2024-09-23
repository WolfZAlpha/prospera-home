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
import Grid from "@mui/material/Grid";

// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

// prospera defi dashboard components
import PDBox from "../../../../../components/PDBox";
import PDTypography from "../../../../../components/PDTypography";

function Footer() {
  return (
    <PDBox component="footer" py={6}>
      <Grid container justifyContent="center">
        <Grid item xs={10} lg={8}>
          <PDBox display="flex" justifyContent="center" flexWrap="wrap" mb={3}>
            <PDBox mr={{ xs: 2, lg: 3, xl: 6 }}>
              <PDTypography
                component="a"
                href="https://simmmple.com/"
                variant="body2"
                color="white"
              >
                Simmmple
              </PDTypography>
            </PDBox>
            <PDBox mr={{ xs: 2, lg: 3, xl: 6 }}>
              <PDTypography
                component="a"
                href="https://www.creative-tim.com/"
                variant="body2"
                color="white"
              >
                Creative Tim
              </PDTypography>
            </PDBox>
            <PDBox mr={{ xs: 0, lg: 3, xl: 6 }}>
              <PDTypography
                component="a"
                href="https://www.creative-tim.com/blog"
                variant="body2"
                color="white"
              >
                Blog
              </PDTypography>
            </PDBox>
            <PDBox mr={{ xs: 2, lg: 3, xl: 6 }}>
              <PDTypography
                component="a"
                href="https://www.creative-tim.com/license"
                variant="body2"
                color="white"
              >
                License
              </PDTypography>
            </PDBox>
            <PDBox mr={{ xs: 2, lg: 3, xl: 6 }}>
              <PDTypography
                component="a"
                href="https://simmmple.com/about"
                variant="body2"
                color="white"
              >
                About
              </PDTypography>
            </PDBox>
            <PDBox>
              <PDTypography
                component="a"
                href="https://www.creative-tim.com/templates"
                variant="body2"
                color="white"
              >
                Products
              </PDTypography>
            </PDBox>
          </PDBox>
        </Grid>
        <Grid item xs={12} lg={8}>
          <PDBox display="flex" justifyContent="center" mt={1} mb={3}>
            <PDBox mr={3} color="white">
              <FacebookIcon fontSize="small" />
            </PDBox>
            <PDBox mr={3} color="white">
              <TwitterIcon fontSize="small" />
            </PDBox>
            <PDBox mr={3} color="white">
              <InstagramIcon fontSize="small" />
            </PDBox>
            <PDBox mr={3} color="white">
              <PinterestIcon fontSize="small" />
            </PDBox>
            <PDBox color="white">
              <LinkedInIcon fontSize="small" />
            </PDBox>
          </PDBox>
        </Grid>
        <Grid item xs={12} lg={8} sx={{ textAlign: "center" }}>
          <PDTypography variant="body2" color="white">
            @2021, Made with &#10084; by <strong>Creative Tim </strong>and <strong>Simmmple</strong>{" "}
            for a better web
          </PDTypography>
        </Grid>
      </Grid>
    </PDBox>
  );
}

export default Footer;
