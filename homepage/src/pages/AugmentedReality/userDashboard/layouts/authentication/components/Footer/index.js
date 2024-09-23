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
import PDBox from "../../../../components/PDBox";
import PDTypography from "../../../../components/PDTypography";

function Footer({ full }) {
  return (
    <PDBox
      component="footer"
      py={6}
      sx={({ breakpoints }) => ({
        maxWidth: full ? "100%" : "450px",
        [breakpoints.down("xl")]: {
          maxWidth: full ? "100%" : "400px",
        },
      })}
    >
      <Grid
        container
        justifyContent={{ xs: "center", lg: full ? "space-between" : "center" }}
        sx={({ breakpoints }) => ({
          maxWidth: full ? "100%" : "450px",
          [breakpoints.down("xl")]: {
            maxWidth: full ? "100%" : "400px",
          },
        })}
      >
        <Grid item xs={full ? 12 : 12} lg={full ? 6 : 12} sx={{ textAlign: "center" }}>
          <PDTypography
            variant="button"
            sx={{ textAlign: "center", fontWeight: "400 !important" }}
            color="white"
          >
            @ 2021, Made with ❤️&nbsp;&nbsp;&nbsp; by{" "}
            <PDTypography
              component="a"
              variant="button"
              href="#"
              sx={{ textAlign: "center", fontWeight: "500 !important" }}
              color="white"
              mr="2px"
            >
              Simmmple
            </PDTypography>
            &
            <PDTypography
              ml="2px"
              mr="2px"
              component="a"
              variant="button"
              href="#"
              sx={{ textAlign: "center", fontWeight: "500 !important" }}
              color="white"
            >
              Creative Tim
            </PDTypography>
            for a better web
          </PDTypography>
        </Grid>
        <Grid item xs={full ? 10 : 10} lg={full ? 6 : 10}>
          <PDBox display="flex" justifyContent="center" flexWrap="wrap" mb={3}>
            <PDBox mr={{ xs: "20px", lg: "46px" }}>
              <PDTypography component="a" href="#" variant="body2" color="white">
                Marketplace
              </PDTypography>
            </PDBox>
            <PDBox mr={{ xs: "20px", lg: "46px" }}>
              <PDTypography component="a" href="#" variant="body2" color="white">
                Blog
              </PDTypography>
            </PDBox>
            <PDBox>
              <PDTypography component="a" href="#" variant="body2" color="white">
                License
              </PDTypography>
            </PDBox>
          </PDBox>
        </Grid>
      </Grid>
    </PDBox>
  );
}

export default Footer;
