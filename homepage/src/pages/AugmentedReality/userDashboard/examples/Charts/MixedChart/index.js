/** 

=========================================================
* PROSPERA DEFI DASHBOARD - v1.0.0
=========================================================

* Copyright 2024 PROSPERA DEFI (https://www.prosperadefi.com/)

* Design and Coded by Z

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the PROSPERA DEFI DASHBOARD.

*/

import { useMemo } from "react";

// porp-types is a library for typechecking of props
import PropTypes from "prop-types";

// react-apex chart
import BasicMixedChart from "./BasicMixedChart";

// @mui material components
import Card from "@mui/material/Card";

// prospera defi dashboard components
import PDBox from "../../../components/PDBox";
import PDTypography from "../../../components/PDTypography";

function MixedChart({ title, description, data, options }) {
  const renderChart = (
    <PDBox>
      {title || description ? (
        <PDBox px={description ? 1 : 0} pt={description ? 1 : 0}>
          {title && (
            <PDBox mb={1}>
              <PDTypography variant="lg" color="white">
                {title}
              </PDTypography>
            </PDBox>
          )}
          <PDBox mb={2}>
            <PDTypography component="div" variant="button" fontWeight="regular" color="text">
              {description}
            </PDTypography>
          </PDBox>
        </PDBox>
      ) : null}
      {useMemo(
        () => (
          <PDBox sx={{ minHeight: "300px" }}>
            <BasicMixedChart mixedChartData={data} mixedChartOptions={options} />
          </PDBox>
        ),
        [data, options]
      )}
    </PDBox>
  );

  return title || description ? <Card>{renderChart}</Card> : renderChart;
}

// Setting default values for the props of MixedChart
MixedChart.defaultProps = {
  title: "",
  description: "",
};

// Typechecking props for the MixedChart
MixedChart.propTypes = {
  title: PropTypes.string,
  description: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  data: PropTypes.objectOf(PropTypes.array).isRequired,
  options: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default MixedChart;
