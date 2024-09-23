/** 

=========================================================
* PROSPERA DEFI DASHBOARD - v1.0.0
=========================================================

* Copyright 2024 PROSPERA DEFI (https://www.prosperadefi.com/)

* Design and Coded by Z

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the PROSPERA DEFI DASHBOARD.

*/

// prop-types is a library for typechecking of props.
import PropTypes from "prop-types";

// @mui material components
import MenuItem from "@mui/material/MenuItem";
import Icon from "@mui/material/Icon";
import Link from "@mui/material/Link";

// prospera defi dashboard components
import PDBox from "../../../../components/PDBox";
import PDTypography from "../../../../components/PDTypography";

// prospera defi dashboard example components
import DefaultNavbarMenu from "../DefaultNavbarMenu";

function DocsMenu({ routes, open, close, mobileMenu }) {
  const renderDocsMenuRoute = (routeName) =>
    routes.map(
      ({ key, collapse }) =>
        key === routeName &&
        collapse.map(({ key: collapseKey, href, name, icon, description }) => (
          <MenuItem
            key={collapseKey}
            component={Link}
            href={href}
            target="_blank"
            rel="noreferrer"
            onClick={mobileMenu ? undefined : close}
            sx={{ "&:hover": { background: "transparent" } }}
          >
            <PDBox display="flex" py={0.25}>
              {typeof icon === "string" ? <Icon>{icon}</Icon> : <PDBox mt={0.5}>{icon}</PDBox>}
              <PDBox pl={2} lineHeight={0}>
                <PDTypography variant="h6" fontWeight="bold">
                  {name}
                </PDTypography>
                <PDTypography variant="button" fontWeight="regular" color="text">
                  {description}
                </PDTypography>
              </PDBox>
            </PDBox>
          </MenuItem>
        ))
    );

  return mobileMenu ? (
    renderDocsMenuRoute("docs")
  ) : (
    <DefaultNavbarMenu open={open} close={close}>
      {renderDocsMenuRoute("docs")}
    </DefaultNavbarMenu>
  );
}

// Setting default values for the props of DocsMenu
DocsMenu.defaultProps = {
  mobileMenu: false,
  open: false,
  close: false,
};

// Typechecking props for the DocsMenu
DocsMenu.propTypes = {
  routes: PropTypes.arrayOf(PropTypes.object).isRequired,
  open: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
  close: PropTypes.oneOfType([PropTypes.bool, PropTypes.func]),
  mobileMenu: PropTypes.bool,
};

export default DocsMenu;
