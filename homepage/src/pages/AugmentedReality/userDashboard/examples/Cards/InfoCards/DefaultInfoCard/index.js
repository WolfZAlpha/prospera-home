/** 

=========================================================
* PROSPERA DEFI DASHBOARD - v1.0.0
=========================================================

* Copyright 2024 PROSPERA DEFI (https://www.prosperadefi.com/)

* Design and Coded by Z

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the PROSPERA DEFI DASHBOARD.

*/

// prop-types is library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider";
import Icon from "@mui/material/Icon";

// prospera defi dashboard components
import PDBox from "../../../../components/PDBox";
import PDTypography from "../../../../components/PDTypography";

function DefaultInfoCard({ color, icon, title, description, value }) {
  return (
    <Card sx={{ height: "100%", pt: "25px" }}>
      <PDBox display="flex" justifyContent="center" mb="22px">
        <PDBox
          display="grid"
          justifyContent="center"
          alignItems="center"
          bgColor={color}
          color="white"
          width="64px"
          height="64px"
          shadow="md"
          borderRadius="lg"
        >
          {icon}
        </PDBox>
      </PDBox>
      <PDBox textAlign="center" lineHeight={1.25} display="flex" flexDirection="column">
        <PDTypography variant="lg" color="white" textTransform="capitalize" mb="4px">
          {title}
        </PDTypography>
        {description && (
          <PDTypography variant="caption" color="text" fontWeight="regular">
            {description}
          </PDTypography>
        )}
        {description && !value ? null : <Divider light />}
        {value && (
          <PDTypography variant="lg" color="white" fontWeight="bold" fontSize={{ xl: 20 }}>
            {value}
          </PDTypography>
        )}
      </PDBox>
    </Card>
  );
}

// Setting default values for the props of DefaultInfoCard
DefaultInfoCard.defaultProps = {
  color: "info",
  value: "",
  description: "",
};

// Typechecking props for the DefaultInfoCard
DefaultInfoCard.propTypes = {
  color: PropTypes.oneOf(["primary", "secondary", "info", "success", "warning", "error", "dark"]),
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default DefaultInfoCard;
