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
import Icon from "@mui/material/Icon";
import Collapse from "@mui/material/Collapse";

// PROSPERA DEFI PLATFORM React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// PROSPERA DEFI PLATFORM React components
import borders from "assets/theme/base/borders";

function FaqCollapse({ title, open, children, ...rest }) {
  const { borderWidth, borderColor } = borders;

  return (
    <MKBox mb={2}>
      <MKBox
        {...rest}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        py={2}
        borderBottom={`${borderWidth[1]} solid ${borderColor}`}
        sx={{ cursor: "pointer" }}
      >
        <MKTypography variant="h5" color={open ? "dark" : "text"} sx={{ userSelect: "none" }}>
          {title}
        </MKTypography>
        <MKBox color={open ? "dark" : "text"}>
          <Icon sx={{ fontWeight: "bold" }} fontSize="small">
            {open ? "remove" : "add"}
          </Icon>
        </MKBox>
      </MKBox>
      <Collapse timeout={400} in={open}>
        <MKBox py={2} lineHeight={1}>
          <MKTypography variant="button" color="text" opacity={0.8} fontWeight="regular">
            {children}
          </MKTypography>
        </MKBox>
      </Collapse>
    </MKBox>
  );
}

// Typechecking props for the FaqCollapse
FaqCollapse.propTypes = {
  title: PropTypes.string.isRequired,
  open: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
};

export default FaqCollapse;
