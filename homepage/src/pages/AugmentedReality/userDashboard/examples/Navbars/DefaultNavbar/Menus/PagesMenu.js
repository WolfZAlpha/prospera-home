/** 

=========================================================
* PROSPERA DEFI DASHBOARD - v1.0.0
=========================================================

* Copyright 2024 PROSPERA DEFI (https://www.prosperadefi.com/)

* Design and Coded by Z

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the PROSPERA DEFI DASHBOARD.

*/

import { Fragment } from "react";

// prop-types is a library for typechecking of props.
import PropTypes from "prop-types";

// react-router components
import { Link } from "react-router-dom";

// @mui material components
import Grid from "@mui/material/Grid";
import MenuItem from "@mui/material/MenuItem";

// prospera defi dashboard components
import PDBox from "../../../../components/PDBox";

// prospera defi dashboard example components
import DefaultNavbarCategory from "../DefaultNavbarCategory";
import DefaultNavbarMenu from "../DefaultNavbarMenu";

function PagesMenu({ routes, open, close, mobileMenu }) {
  const renderPagesMenuRoute = (routeName) =>
    routes.map(
      ({ key, name, icon, collapse }) =>
        key === routeName && (
          <Fragment key={key}>
            <DefaultNavbarCategory icon={icon} title={name} />
            {collapse.map(({ key: collapseKey, route, name: collapseName }) => (
              <MenuItem
                key={collapseKey}
                component={Link}
                to={route}
                onClick={mobileMenu ? undefined : close}
                sx={{ "&:hover": { background: "transparent" } }}
              >
                <PDBox color="text" pl={2}>
                  {collapseName}
                </PDBox>
              </MenuItem>
            ))}
          </Fragment>
        )
    );

  const renderMenuContent = (
    <PDBox py={1} px={2}>
      <Grid container spacing={3} justifyContent="space-between">
        <Grid item xs={12} lg={4}>
          {renderPagesMenuRoute("dashboards")}
          <PDBox mt={2}>{renderPagesMenuRoute("account")}</PDBox>
        </Grid>
        <Grid item xs={12} lg={4}>
          <PDBox display={{ xs: "none", lg: "block" }}>{renderPagesMenuRoute("profile")}</PDBox>
          <PDBox>
            <PDBox mt={2}>{renderPagesMenuRoute("projects")}</PDBox>
          </PDBox>
        </Grid>
        <Grid item xs={12} lg={4} sx={{ display: "flex" }}>
          <PDBox display={{ xs: "none", lg: "block" }}></PDBox>
          <PDBox width="100%">
            {renderPagesMenuRoute("users")}
            <PDBox mt={2}>{renderPagesMenuRoute("extra")}</PDBox>
          </PDBox>
        </Grid>
      </Grid>
    </PDBox>
  );

  return mobileMenu ? (
    renderMenuContent
  ) : (
    <DefaultNavbarMenu open={open} close={close}>
      {renderMenuContent}
    </DefaultNavbarMenu>
  );
}

// Setting default values for the props of PagesMenu
PagesMenu.defaultProps = {
  mobileMenu: false,
  open: false,
  close: false,
};

// Typechecking props for the PagesMenu
PagesMenu.propTypes = {
  routes: PropTypes.arrayOf(PropTypes.object).isRequired,
  open: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
  close: PropTypes.oneOfType([PropTypes.bool, PropTypes.func]),
  mobileMenu: PropTypes.bool,
};

export default PagesMenu;
