/** 

=========================================================
* PROSPERA DEFI DASHBOARD - v1.0.0
=========================================================

* Copyright 2024 PROSPERA DEFI (https://www.prosperadefi.com/)

* Design and Coded by Z

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the PROSPERA DEFI DASHBOARD.

*/

import { useState, useEffect } from "react";

// react-router components
import { Link } from "react-router-dom";

// prop-types is a library for typechecking of props.
import PropTypes from "prop-types";

// @mui material components
import Container from "@mui/material/Container";
import Icon from "@mui/material/Icon";

// prospera defi dashboard components
import PDBox from "../../../components/PDBox";
import PDTypography from "../../../components/PDTypography";
import PDButton from "../../../components/PDButton";

// prospera defi dashboard example components
import DefaultNavbarLink from "./DefaultNavbarLink";
import DefaultNavbarMobile from "./DefaultNavbarMobile";

// prospera defi dashboard base styles
import breakpoints from "../../../assets/theme/base/breakpoints";
import colors from "../../../assets/theme/base/colors";
import borders from "../../../assets/theme/base/borders";

// DefaultNavbar dropdown menus
import PagesMenu from "./Menus/PagesMenu";
import AuthenticationMenu from "./Menus/AuthenticationMenu";
import EcommerceMenu from "./Menus/EcommerceMenu";
import ApplicationsMenu from "./Menus/ApplicationsMenu";

function DefaultNavbar({ routes, transparent, light, action }) {
  const { borderCol } = colors;
  const { borderWidth } = borders;
  const [pagesMenu, setPagesMenu] = useState(false);
  const [authenticationMenu, setAuthenticationMenu] = useState(false);
  const [ecommerceMenu, setEcommerceMenu] = useState(false);
  const [applicationsMenu, setApplicationsMenu] = useState(false);
  const [mobileNavbar, setMobileNavbar] = useState(false);
  const [mobileView, setMobileView] = useState(false);

  const openPagesMenu = ({ currentTarget }) => setPagesMenu(currentTarget);
  const closePagesMenu = () => setPagesMenu(false);
  const openAuthenticationMenu = ({ currentTarget }) => setAuthenticationMenu(currentTarget);
  const closeAuthenticationMenu = () => setAuthenticationMenu(false);
  const openEcommerceMenu = ({ currentTarget }) => setEcommerceMenu(currentTarget);
  const closeEcommerceMenu = () => setEcommerceMenu(false);
  const openApplicationsMenu = ({ currentTarget }) => setApplicationsMenu(currentTarget);
  const closeApplicationsMenu = () => setApplicationsMenu(false);
  const openMobileNavbar = ({ currentTarget }) => setMobileNavbar(currentTarget.parentNode);
  const closeMobileNavbar = () => setMobileNavbar(false);

  useEffect(() => {
    // A function that sets the display state for the DefaultNavbarMobile.
    function displayMobileNavbar() {
      if (window.innerWidth < breakpoints.values.lg) {
        setMobileView(true);
        setMobileNavbar(false);
      } else {
        setMobileView(false);
        setMobileNavbar(false);
      }
    }

    /** 
     The event listener that's calling the displayMobileNavbar function when 
     resizing the window.
    */
    window.addEventListener("resize", displayMobileNavbar);

    // Call the displayMobileNavbar function to set the state with the initial value.
    displayMobileNavbar();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", displayMobileNavbar);
  }, []);

  return (
    <Container>
      <PDBox
        py={2}
        px={{ xs: transparent ? 4 : 3, sm: transparent ? 2 : 3, lg: transparent ? 0 : 3 }}
        my={2}
        border={transparent ? "unset" : `${borderWidth[1]} solid ${borderCol.navbar}`}
        width="calc(100% - 48px)"
        borderRadius="xl"
        shadow={transparent ? "none" : "md"}
        color={light ? "white" : "dark"}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        position="absolute"
        left="50%"
        zIndex={3}
        maxWidth="1044px"
        sx={({ palette: { gradients }, functions: { linearGradient } }) => ({
          background: transparent
            ? "transparent"
            : linearGradient(gradients.navbar.main, gradients.navbar.state, gradients.navbar.deg),
          backdropFilter: transparent ? "unset" : "blur(42px)",
          transform: "translate(-50%, 0px)",
        })}
      >
        <PDBox component={Link} to="/" py={transparent ? 1.5 : 0.75} lineHeight={1}>
          <PDTypography
            variant="button"
            textGradient={true}
            color="logo"
            fontSize={14}
            letterSpacing={2}
            fontWeight="medium"
            sx={{
              margin: "0 auto",
            }}
          >
            PROSPERA DEFI DASHBOARD
          </PDTypography>
        </PDBox>
        <PDBox color="inherit" display={{ xs: "none", lg: "flex" }} m={0} p={0}>
          <DefaultNavbarLink
            name="pages"
            openHandler={openPagesMenu}
            closeHandler={closePagesMenu}
            light={light}
          />
          <DefaultNavbarLink
            name="authentication"
            openHandler={openAuthenticationMenu}
            closeHandler={closeAuthenticationMenu}
            light={light}
          />

          <DefaultNavbarLink
            name="application"
            openHandler={openApplicationsMenu}
            closeHandler={closeApplicationsMenu}
            light={light}
          />
          <DefaultNavbarLink
            name="ecommerce"
            openHandler={openEcommerceMenu}
            closeHandler={closeEcommerceMenu}
            light={light}
          />
        </PDBox>
        {action &&
          (action.type === "internal" ? (
            <PDBox display={{ xs: "none", lg: "inline-block" }}>
              <PDButton
                component={Link}
                to={action.route}
                variant="gradient"
                color={action.color ? action.color : "info"}
                size="small"
              >
                {action.label}
              </PDButton>
            </PDBox>
          ) : (
            <PDBox display={{ xs: "none", lg: "inline-block" }}>
              <PDButton
                minWidth="110px"
                component="a"
                href={action.route}
                target="_blank"
                rel="noreferrer"
                color={transparent ? "white" : action.color ? action.color : "info"}
                sx={({
                  typography: { size },
                  functions: { pxToRem },
                  borders: { borderRadius },
                }) => ({
                  fontSize: pxToRem(size.sm),
                  minWidth: "110px",
                  color: transparent ? "black !important" : "",
                  borderRadius: transparent ? borderRadius.xl : "",
                })}
              >
                {action.label}
              </PDButton>
            </PDBox>
          ))}
        <PDBox
          display={{ xs: "inline-block", lg: "none" }}
          lineHeight={0}
          py={1.5}
          pl={1.5}
          color="white"
          sx={{ cursor: "pointer" }}
          onClick={openMobileNavbar}
        >
          <Icon fontSize="default">{mobileNavbar ? "close" : "menu"}</Icon>
        </PDBox>
      </PDBox>
      <PagesMenu routes={routes} open={pagesMenu} close={closePagesMenu} />
      <AuthenticationMenu
        routes={routes}
        open={authenticationMenu}
        close={closeAuthenticationMenu}
      />
      <EcommerceMenu routes={routes} open={ecommerceMenu} close={closeEcommerceMenu} />
      <ApplicationsMenu routes={routes} open={applicationsMenu} close={closeApplicationsMenu} />
      {mobileView && (
        <DefaultNavbarMobile routes={routes} open={mobileNavbar} close={closeMobileNavbar} />
      )}
    </Container>
  );
}

// Setting default values for the props of DefaultNavbar
DefaultNavbar.defaultProps = {
  transparent: false,
  light: false,
  action: false,
};

// Typechecking props for the DefaultNavbar
DefaultNavbar.propTypes = {
  routes: PropTypes.arrayOf(PropTypes.object).isRequired,
  transparent: PropTypes.bool,
  light: PropTypes.bool,
  action: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.shape({
      type: PropTypes.oneOf(["external", "internal"]).isRequired,
      route: PropTypes.string.isRequired,
      color: PropTypes.oneOf([
        "primary",
        "secondary",
        "info",
        "success",
        "warning",
        "error",
        "dark",
        "light",
      ]),
      label: PropTypes.string.isRequired,
    }),
  ]),
};

export default DefaultNavbar;
