/** 

=========================================================
* PROSPERA DEFI DASHBOARD - v1.0.0
=========================================================

* Copyright 2024 PROSPERA DEFI (https://www.prosperadefi.com/)

* Design and Coded by Z

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the PROSPERA DEFI DASHBOARD.

*/

import { useState } from "react";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Fade from "@mui/material/Fade";

// prospera defi dashboard components
import PDBox from "../PDBox";

// Custom styles for the PDAlert
import PDAlertRoot from "./PDAlertRoot";
import PDAlertCloseIcon from "./PDAlertCloseIcon";

function PDAlert({ color, dismissible, children, ...rest }) {
  const [alertStatus, setAlertStatus] = useState("mount");

  const handleAlertStatus = () => setAlertStatus("fadeOut");

  // The base template for the alert
  const alertTemplate = (mount = true) => (
    <Fade in={mount} timeout={300}>
      <PDAlertRoot ownerState={{ color }} {...rest}>
        <PDBox display="flex" alignItems="center" color="white">
          {children}
        </PDBox>
        {dismissible ? (
          <PDAlertCloseIcon onClick={mount ? handleAlertStatus : null}>&times;</PDAlertCloseIcon>
        ) : null}
      </PDAlertRoot>
    </Fade>
  );

  switch (true) {
    case alertStatus === "mount":
      return alertTemplate();
    case alertStatus === "fadeOut":
      setTimeout(() => setAlertStatus("unmount"), 400);
      return alertTemplate(false);
    default:
      alertTemplate();
      break;
  }

  return null;
}

// Setting default values for the props of PDAlert
PDAlert.defaultProps = {
  color: "info",
  dismissible: false,
};

// Typechecking props of the PDAlert
PDAlert.propTypes = {
  color: PropTypes.oneOf([
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "error",
    "light",
    "dark",
  ]),
  dismissible: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

export default PDAlert;
