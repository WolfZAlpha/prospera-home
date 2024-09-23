/** 

=========================================================
* PROSPERA DEFI DASHBOARD - v1.0.0
=========================================================

* Copyright 2024 PROSPERA DEFI (https://www.prosperadefi.com/)

* Design and Coded by Z

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the PROSPERA DEFI DASHBOARD.

*/

// @mui material components
import Card from "@mui/material/Card";

// prospera defi dashboard components
import PDBox from "../../../../components/PDBox";
import PDTypography from "../../../../components/PDTypography";

// react-apex chart
import BarChart from "../BasicBarChart";

// porp-types is a library for typechecking of props
import PropTypes from "prop-types";
import { useMemo } from "react";

function HorizontalBarChart({ title, description, data, options }) {
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
            <BarChart barChartData={data} barChartOptions={options} />
          </PDBox>
        ),
        [data, options]
      )}
    </PDBox>
  );

  return title || description ? <Card>{renderChart}</Card> : renderChart;
}

// Setting default values for the props of HorizontalBarChart
HorizontalBarChart.defaultProps = {
  title: "",
  description: "",
};

// Typechecking props for the HorizontalBarChart
HorizontalBarChart.propTypes = {
  title: PropTypes.string,
  description: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  data: PropTypes.objectOf(PropTypes.array).isRequired,
  options: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default HorizontalBarChart;
