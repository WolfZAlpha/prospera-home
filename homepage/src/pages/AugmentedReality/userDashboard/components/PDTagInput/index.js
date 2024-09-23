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

// react-tag-input components
import ReactTagInput from "@pathofdev/react-tag-input";
import "@pathofdev/react-tag-input/build/index.css";

// Custom styles for PDTagInput
import PDTagInputRoot from "./PDTagInputRoot";

const PDTagInput = forwardRef(({ size, error, success, ...rest }, ref) => (
  <PDTagInputRoot ownerState={{ size, error, success }}>
    <ReactTagInput {...rest} ref={ref} />
  </PDTagInputRoot>
));

// Setting default values for the props of PDTagInput
PDTagInput.defaultProps = {
  size: "medium",
  error: false,
  success: false,
};

// Typechecking props for the PDTagInput
PDTagInput.propTypes = {
  size: PropTypes.oneOf(["medium", "large"]),
  error: PropTypes.bool,
  success: PropTypes.bool,
};

export default PDTagInput;
