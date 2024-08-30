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

// PROSPERA DEFI PLATFORM components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

function SimpleInfoCard({ color, icon, title, description, direction }) {
  let alignment = "flex-start";

  if (direction === "center") {
    alignment = "center";
  } else if (direction === "right") {
    alignment = "flex-end";
  }

  return (
    <MKBox
      display="flex"
      flexDirection="column"
      alignItems={alignment}
      textAlign={direction}
      p={direction === "center" ? 2 : 0}
      lineHeight={1}
    >
      <MKBox
        display="flex"
        justifyContent="center"
        alignItems="center"
        width="3rem"
        height="3rem"
        borderRadius="xl"
        variant="gradient"
        color="white"
        bgColor={color}
        coloredShadow={color}
      >
        {typeof icon === "string" ? <Icon fontSize="small">{icon}</Icon> : icon}
      </MKBox>
      <MKTypography display="block" variant="5" fontWeight="bold" mt={2.5} mb={1.5}>
        {title}
      </MKTypography>
      <MKTypography display="block" variant="body2" color="text">
        {description}
      </MKTypography>
    </MKBox>
  );
}

// Setting default props for the SimpleInfoCard
SimpleInfoCard.defaultProps = {
  color: "pros",
  direction: "left",
};

// Typechecking props for the SimpleInfoCard
SimpleInfoCard.propTypes = {
  color: PropTypes.oneOf([
    "primary",
    "secondary",
    "black",
    "pros",
    "info",
    "success",
    "warning",
    "error",
    "light",
    "dark",
  ]),
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  direction: PropTypes.oneOf(["left", "right", "center"]),
};

export default SimpleInfoCard;
