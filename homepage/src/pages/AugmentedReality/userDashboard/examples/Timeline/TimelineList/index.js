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

// prospera defi dashboard components
import PDBox from "../../../components/PDBox";
import PDTypography from "../../../components/PDTypography";

// Timeline context
import { TimelineProvider } from "../context";

// Colors palette
import colors from "../../../assets/theme/base/colors";

function TimelineList({ title, dark, children }) {
  const { info } = colors;

  return (
    <TimelineProvider value={dark}>
      <Card sx={{ background: dark ? info.main : null }}>
        <PDBox>
          <PDBox mb="30px">
            <PDTypography variant="lg" fontWeight="bold" color={dark ? "white" : "white"}>
              {title}
            </PDTypography>
          </PDBox>
          <PDBox>{children}</PDBox>
        </PDBox>
      </Card>
    </TimelineProvider>
  );
}

// Setting default values for the props of TimelineList
TimelineList.defaultProps = {
  dark: false,
};

// Typechecking props for the TimelineList
TimelineList.propTypes = {
  title: PropTypes.string.isRequired,
  dark: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

export default TimelineList;
