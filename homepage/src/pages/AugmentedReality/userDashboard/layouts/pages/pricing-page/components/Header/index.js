/** 

=========================================================
* PROSPERA DEFI DASHBOARD - v1.0.0
=========================================================

* Copyright 2024 PROSPERA DEFI (https://www.prosperadefi.com/)

* Design and Coded by Z

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the PROSPERA DEFI DASHBOARD.

*/

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Grid from "@mui/material/Grid";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

// prospera defi dashboard components
import PDBox from "../../../../../components/PDBox";
import PDTypography from "../../../../../components/PDTypography";

// prospera defi dashboard example components
import DefaultNavbar from "../../../../../examples/Navbars/DefaultNavbar";

// prospera defi dashboard page layout routes
import pageRoutes from "../../../../../page.routes";

// Images
import bgPricingPage from "../../../../../assets/images/pricing-page-background.png";

// palette colors
import colors from "../../../../../assets/theme/base/colors";
import linearGradient from "../../../../../assets/theme/functions/linearGradient";
import borders from "../../../../../assets/theme/base/borders";

function Header({ tabValue, tabHandler }) {
  const { gradients } = colors;
  const { cardContent } = gradients;
  const { borderRadius } = borders;

  return (
    <>
      <DefaultNavbar
        routes={pageRoutes}
        action={{
          type: "external",
          route: "https://creative-tim.com/product/vision-ui-dashboard-pro-react",
          label: "buy now",
          color: "dark",
        }}
        transparent
        light
      />
      <PDBox
        position="relative"
        height={{ xs: "70vh", lg: "55vh", xl: "50vh", xxl: "50vh" }}
        borderRadius="xl"
        overflow="hidden"
        sx={{ background: `url(${bgPricingPage})`, backgroundSize: "cover", overflowX: "hidden" }}
        m={2}
        pt={12}
        pb={20}
      >
        <PDBox width="105rem" position="absolute" top={0} />
        <Grid container spacing={3} justifyContent="center" sx={{ textAlign: "center" }}>
          <Grid item xs={10} lg={5}>
            <PDBox mb={1}>
              <PDTypography fontSize={32} color="white" fontWeight="bold">
                See our pricing
              </PDTypography>
            </PDBox>
            <PDBox
              mb={2}
              textAlign="center"
              display="flex"
              justifyContent="center"
              flexDirection="row"
            >
              <PDTypography
                variant="body2"
                color="white"
                fontWeight="regular"
                sx={{ maxWidth: "340px" }}
              >
                You have Free Unlimited Updates and Premium Support on each package.
              </PDTypography>
            </PDBox>
            <Grid container item xs={12} sm={10} md={8} lg={7} sx={{ mx: "auto" }}>
              <PDBox width="100%" mt={4} display="flex" justifyContent="center" alignItems="center">
                <AppBar
                  position="static"
                  sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
                >
                  <Tabs
                    value={tabValue}
                    onChange={tabHandler}
                    sx={{
                      maxWidth: "250px",
                      backgroundImage: linearGradient(
                        cardContent.main,
                        cardContent.state,
                        cardContent.deg
                      ),
                      borderRadius: borderRadius.lg,
                    }}
                  >
                    <Tab
                      id="monthly"
                      label={
                        <PDBox py={0.5}>
                          <PDTypography fontSize={10} color="white" fontWeight="bold">
                            MONTHLY
                          </PDTypography>
                        </PDBox>
                      }
                      sx={{ width: "50%" }}
                    />
                    <Tab
                      id="annual"
                      label={
                        <PDBox py={0.5}>
                          <PDTypography fontSize={10} color="white" fontWeight="bold">
                            YEARLY
                          </PDTypography>
                        </PDBox>
                      }
                      sx={{ width: "50%" }}
                    />
                  </Tabs>
                </AppBar>
              </PDBox>
            </Grid>
          </Grid>
        </Grid>
      </PDBox>
    </>
  );
}

// Typechecking props for the Header
Header.propTypes = {
  tabValue: PropTypes.number.isRequired,
  tabHandler: PropTypes.func.isRequired,
};

export default Header;
