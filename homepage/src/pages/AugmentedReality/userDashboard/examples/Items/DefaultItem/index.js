/** 

=========================================================
* PROSPERA DEFI DASHBOARD - v1.0.0
=========================================================

* Copyright 2024 PROSPERA DEFI (https://www.prosperadefi.com/)

* Design and Coded by Z

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the PROSPERA DEFI DASHBOARD.

*/

import { forwardRef } from "react";

// prop-types is a library for typechecking of props.
import PropTypes from "prop-types";

// @mui material components
import Icon from "@mui/material/Icon";

// prosperad defi dashboard components
import PDBox from "../../../components/PDBox";
import PDTypography from "../../../components/PDTypography";

// custom styles for the DefaultItem
import { defaultItemIconBox } from "./styles";

const DefaultItem = forwardRef(({ color, icon, title, description, ...rest }, ref) => (
  <PDBox {...rest} ref={ref} display="flex" alignItems="center">
    <PDBox sx={(theme) => defaultItemIconBox(theme, { color })}>{icon}</PDBox>
    <PDBox ml={2} lineHeight={1}>
      <PDTypography display="block" variant="button" color="white" fontWeight="bold">
        {title}
      </PDTypography>
      <PDTypography variant="button" fontWeight="regular" color="text">
        {description}
      </PDTypography>
    </PDBox>
  </PDBox>
));

// Setting default values for the props of DefaultItem
DefaultItem.defaultProps = {
  color: "info",
};

// Typechecking props for the DefaultItem
DefaultItem.propTypes = {
  color: PropTypes.oneOf(["primary", "secondary", "info", "success", "warning", "error", "dark"]),
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default DefaultItem;
