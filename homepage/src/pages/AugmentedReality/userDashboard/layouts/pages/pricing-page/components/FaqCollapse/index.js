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
import Collapse from "@mui/material/Collapse";

// prospera defi dashboard components
import PDBox from "../../../../../components/PDBox";
import PDTypography from "../../../../../components/PDTypography";

// React icons
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

function FaqCollapse({ title, open, children, ...rest }) {
  return (
    <PDBox mb={2}>
      <PDBox
        {...rest}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        p={2}
        sx={{ cursor: "pointer" }}
      >
        <PDTypography variant="lg" color="white" sx={{ userSelect: "none" }}>
          {title}
        </PDTypography>
        <PDBox color="white">
          {open ? <IoIosArrowUp color="dark" /> : <IoIosArrowDown color="white" />}
        </PDBox>
      </PDBox>
      <Collapse timeout={400} in={open}>
        <PDBox p={2} lineHeight={1}>
          <PDTypography variant="button" color="white" opacity={0.8} fontWeight="regular">
            {children}
          </PDTypography>
        </PDBox>
      </Collapse>
    </PDBox>
  );
}

// Typechecking props for the FaqCollapse
FaqCollapse.propTypes = {
  title: PropTypes.string.isRequired,
  open: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
};

export default FaqCollapse;
