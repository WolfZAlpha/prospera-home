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

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// Custom styles for PDInput
import PDInputRoot from "./PDInputRoot";
import PDInputWithIconRoot from "./PDInputWithIconRoot";
import PDInputIconBoxRoot from "./PDInputIconBoxRoot";
import PDInputIconRoot from "./PDInputIconRoot";

// prospera defi dashboard contexts
import { useDashboardUIController } from "../../context";

const PDInput = forwardRef(({ size, icon, error, success, disabled, ...rest }, ref) => {
  let template;
  const [controller] = useDashboardUIController();
  const { direction } = controller;
  const iconDirection = icon.direction;

  if (icon.component && icon.direction === "left") {
    template = (
      <PDInputWithIconRoot ref={ref} ownerState={{ error, success, disabled }}>
        <PDInputIconBoxRoot ownerState={{ size }}>
          <PDInputIconRoot fontSize="small" ownerState={{ size }}>
            {icon.component}
          </PDInputIconRoot>
        </PDInputIconBoxRoot>
        <PDInputRoot
          {...rest}
          ownerState={{ size, error, success, iconDirection, direction, disabled }}
        />
      </PDInputWithIconRoot>
    );
  } else if (icon.component && icon.direction === "right") {
    template = (
      <PDInputWithIconRoot ref={ref} ownerState={{ error, success, disabled }}>
        <PDInputRoot
          {...rest}
          ownerState={{ size, error, success, iconDirection, direction, disabled }}
        />
        <PDInputIconBoxRoot ownerState={{ size }}>
          <PDInputIconRoot fontSize="small" ownerState={{ size }}>
            {icon.component}
          </PDInputIconRoot>
        </PDInputIconBoxRoot>
      </PDInputWithIconRoot>
    );
  } else {
    template = <PDInputRoot {...rest} ref={ref} ownerState={{ size, error, success, disabled }} />;
  }

  return template;
});

// Setting default values for the props of PDInput
PDInput.defaultProps = {
  size: "medium",
  icon: {
    component: false,
    direction: "none",
  },
  error: false,
  success: false,
  disabled: false,
};

// Typechecking props for the PDInput
PDInput.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]),
  icon: PropTypes.shape({
    component: PropTypes.oneOfType([PropTypes.node, PropTypes.bool]),
    direction: PropTypes.oneOf(["none", "left", "right"]),
  }),
  error: PropTypes.bool,
  success: PropTypes.bool,
  disabled: PropTypes.bool,
};

export default PDInput;
