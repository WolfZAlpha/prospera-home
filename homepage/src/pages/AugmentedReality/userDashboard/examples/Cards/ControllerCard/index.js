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
import Card from "@mui/material/Card";
import PDSwitch from "../../../components/PDSwitch";

// prospera defi dashboard components
import PDBox from "../../../components/PDBox";
import PDTypography from "../../../components/PDTypography";

function ControllerCard({ color, state, icon, title, description, onChange }) {
  return (
    <Card sx={{ height: "100%", minHeight: "220px" }}>
      <PDBox height="100%" display="flex" flexDirection="column" justifyContent="space-between">
        <PDBox display="flex" justifyContent="space-between" alignItems="center" lineHeight={1}>
          <PDTypography variant="body2" color={state ? "white" : "text"}>
            {state ? "On" : "Off"}
          </PDTypography>
          <PDBox mr={1}>
            <PDSwitch color="info" checked={state} onChange={onChange} />
          </PDBox>
        </PDBox>
        {icon}
        <PDBox lineHeight={1}>
          <PDTypography
            fontSize={16}
            color={state ? "white" : "text"}
            textTransform="capitalize"
            fontWeight="bold"
          >
            {title}
          </PDTypography>
          {description ? (
            <PDTypography variant="caption" color={state ? "white" : "text"}>
              {description}
            </PDTypography>
          ) : null}
        </PDBox>
      </PDBox>
    </Card>
  );
}

// Setting default values for the props of ControllerCard
ControllerCard.defaultProps = {
  color: "info",
  state: false,
  description: "",
};

// Typechecking props for the ControllerCard
ControllerCard.propTypes = {
  color: PropTypes.oneOf(["primary", "secondary", "info", "success", "warning", "error", "dark"]),
  state: PropTypes.bool,
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default ControllerCard;
