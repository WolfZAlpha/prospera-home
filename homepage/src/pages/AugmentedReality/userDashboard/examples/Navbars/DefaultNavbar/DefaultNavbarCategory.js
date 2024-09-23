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
import Icon from "@mui/material/Icon";

// prospera defi dashboard components
import PDBox from "../../../components/PDBox";
import PDTypography from "../../../components/PDTypography";

// prospera defi dashboard theme
import borders from "../../../assets/theme/base/borders";

function DefaultNavbarCategory({ color, icon, title }) {
  const { borderRadius } = borders;
  return (
    <PDBox width="100%" display="flex" alignItems="center" py={1}>
      <PDBox
        display="flex"
        justifyContent="center"
        alignItems="center"
        p="7px"
        borderRadius={borderRadius.button}
        color="white"
        bgColor={color}
        mr={1}
      >
        {typeof icon === "string" ? <Icon>{icon}</Icon> : icon}
      </PDBox>
      <PDTypography variant="button" fontWeight="bold" color="white">
        {title}
      </PDTypography>
    </PDBox>
  );
}

// Setting default value for the props of DefaultNavbarCategory
DefaultNavbarCategory.defaultProps = {
  color: "info",
};

// Typechecking props for the DefaultNavbarCategory
DefaultNavbarCategory.propTypes = {
  color: PropTypes.oneOf(["primary", "secondary", "info", "success", "warning", "error", "dark"]),
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
};

export default DefaultNavbarCategory;
