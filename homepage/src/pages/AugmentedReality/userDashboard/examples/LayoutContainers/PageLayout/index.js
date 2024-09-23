/** 

=========================================================
* PROSPERA DEFI DASHBOARD - v1.0.0
=========================================================

* Copyright 2024 PROSPERA DEFI (https://www.prosperadefi.com/)

* Design and Coded by Z

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the PROSPERA DEFI DASHBOARD.

*/

import { useEffect } from "react";

// react-router-dom components
import { useLocation } from "react-router-dom";

// prop-types is a library for typechecking of props.
import PropTypes from "prop-types";

// Dashboard UI for prospera defi dashboard components
import PDBox from "../../../components/PDBox";

// Dashboard UI for prospera defi dashboard context
import { useDashboardUIController, setLayout } from "../../../context";

function PageLayout({ background, children }) {
  const [, dispatch] = useDashboardUIController();
  const { pathname } = useLocation();

  useEffect(() => {
    setLayout(dispatch, "page");
  }, [pathname]);

  return (
    <PDBox
      width="100vw"
      maxWidth="100%"
      height="100%"
      minHeight="100vh"
      sx={({ functions: { tripleLinearGradient }, palette: { gradients } }) => ({
        overflowX: "hidden",
        background: background
          ? `${background} !important`
          : ` ${tripleLinearGradient(
              gradients.cover.main,
              gradients.cover.state,
              gradients.cover.stateSecondary,
              gradients.cover.deg
            )} !important`,
        backgroundSize: "cover",
        position: "relative",
      })}
    >
      {children}
    </PDBox>
  );
}

// Setting default values for the props for PageLayout
PageLayout.defaultProps = {
  background: "default",
};

// Typechecking props for the PageLayout
PageLayout.propTypes = {
  background: PropTypes.oneOf(["white", "light", "default"]),
  children: PropTypes.node.isRequired,
};

export default PageLayout;
