/** 
=========================================================
* PROSPERA DEFI PLATFORM - v1.0.0
=========================================================

* Copyright 2024 PROSPERA DEFI (https://www.prosperadefi.com/)

* Design and Coded by Z

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the PROSPERA DEFI PLATFORM.
*/

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Grid from "@mui/material/Grid";

// PROSPERA DEFI PLATFORM components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// PROSPERA DEFI PLATFORM example components
import DefaultNavbar from "examples/Navbars/DefaultNavbar";

// PROSPERA DEFI PLATFORM page layout routes
import routes from "routes";

function IllustrationLayout({ header, title, description, illustration, children }) {
  return (
    <MKBox width="100%" height="100vh" bgColor="#000000">
      <MKBox position="absolute" width="100%" mt={1}>
        <DefaultNavbar
          routes={routes}
          action={{
            type: "external",
            route: "https://prosperaico.com",
            label: "buy now",
            color: "light",
          }}
        />
      </MKBox>
      <Grid container sx={{ height: "100%" }}>
        <Grid item xs={12} lg={6}>
          <MKBox
            display={{ xs: "none", lg: "flex" }}
            width="100%"
            height="100%"
            sx={{
              backgroundImage: `url(${illustration.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <MKBox
              width="100%"
              height="100%"
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              textAlign="center"
              bgcolor="rgba(0, 0, 0, 0.7)"
              p={4}
            >
              <MKTypography variant="h1" color="white" mb={3}>
                {illustration.title}
              </MKTypography>
              <MKTypography variant="body1" color="white">
                {illustration.description}
              </MKTypography>
            </MKBox>
          </MKBox>
        </Grid>
        <Grid
          item
          xs={12}
          lg={6}
          sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
        >
          <MKBox
            width="100%"
            maxWidth="400px"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            p={3}
            sx={{
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              backdropFilter: "blur(10px)",
              borderRadius: "10px",
            }}
          >
            <MKBox textAlign="center" mb={3}>
              {!header ? (
                <>
                  <MKTypography variant="h3" color="white" fontWeight="bold" mb={1}>
                    {title}
                  </MKTypography>
                  <MKTypography variant="body2" color="white" opacity={0.8}>
                    {description}
                  </MKTypography>
                </>
              ) : (
                header
              )}
            </MKBox>
            {children}
          </MKBox>
        </Grid>
      </Grid>
    </MKBox>
  );
}

// Setting default values for the props of IllustrationLayout
IllustrationLayout.defaultProps = {
  header: "",
  title: "",
  description: "",
  illustration: {
    image: "",
    title: "",
    description: "",
  },
};

// Typechecking props for the IllustrationLayout
IllustrationLayout.propTypes = {
  header: PropTypes.node,
  title: PropTypes.string,
  description: PropTypes.string,
  children: PropTypes.node.isRequired,
  illustration: PropTypes.shape({
    image: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
  }),
};

export default IllustrationLayout;
