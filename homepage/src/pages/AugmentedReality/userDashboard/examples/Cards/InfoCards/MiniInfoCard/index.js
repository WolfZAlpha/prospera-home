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
import Icon from "@mui/material/Icon";

// prospera defi dashboard components
import PDBox from "../../../../components/PDBox";
import PDTypography from "../../../../components/PDTypography";

function MiniInfoCard({ color, icon, title, description }) {
  return (
    <Card sx={{ height: "100%" }}>
      <PDBox>
        <PDBox
          display="grid"
          justifyContent="center"
          alignItems="center"
          bgColor={color}
          color="white"
          width="45px"
          height="45px"
          shadow="md"
          borderRadius="lg"
          mb="65px"
        >
          {icon}
        </PDBox>
        <PDBox>
          <PDTypography fontSize={22} color="white" fontWeight="bold" textTransform="capitalize">
            {title}
          </PDTypography>
          <PDTypography variant="body2" color="text" fontWeight="regular">
            {description}
          </PDTypography>
        </PDBox>
      </PDBox>
    </Card>
  );
}

// Setting default values for the props of MiniInfoCard
MiniInfoCard.defaultProps = {
  color: "info",
};

// Typechecking props for the MiniInfoCard
MiniInfoCard.propTypes = {
  color: PropTypes.oneOf(["primary", "secondary", "info", "success", "warning", "error", "dark"]),
  icon: PropTypes.node.isRequired,
  title: PropTypes.node.isRequired,
  description: PropTypes.string.isRequired,
};

export default MiniInfoCard;
