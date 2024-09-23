/** 

=========================================================
* PROSPERA DEFI DASHBOARD - v1.0.0
=========================================================

* Copyright 2024 PROSPERA DEFI (https://www.prosperadefi.com/)

* Design and Coded by Z

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the PROSPERA DEFI DASHBOARD.

*/

import { useRef, useEffect, useState, useMemo } from "react";

// porp-types is a library for typechecking of props
import PropTypes from "prop-types";

import BasicLineChart from "../../../../../examples/Charts/LineCharts/BasicLineChart";

// @mui material components
import Card from "@mui/material/Card";

// prospera defi dashboard components
import PDBox from "../../../../../components/PDBox";
import PDTypography from "../../../../../components/PDTypography";

function Chart({ title, count, percentage, chart }) {
  const [chartData, setChartData] = useState([...data]);
  const [chartOptions, setChartOptions] = useState({ ...options });

  useEffect(() => {
    setChartData(data);
    setChartOptions(options);
  }, [chartData, chartOptions]);

  return (
    <Card>
      <PDBox p={2}>
        <PDTypography variant="button" textTransform="capitalize" fontWeight="medium" color="text">
          {title}
        </PDTypography>
        <PDTypography variant="h5" fontWeight="bold" color="dark">
          {count}&nbsp;
          <PDTypography variant="button" fontWeight="bold" color={percentage.color}>
            {percentage.label}
          </PDTypography>
        </PDTypography>
      </PDBox>
      <PDBox sx={{ maxHeight: "150px" }}>
        {useMemo(
          () => (
            <BasicLineChart lineChartData={chartData} lineChartOptions={chartOptions} />
          ),
          [data, options]
        )}
      </PDBox>
    </Card>
  );
}

// Typechecking props for the Chart
Chart.propTypes = {
  title: PropTypes.string.isRequired,
  count: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  percentage: PropTypes.shape({
    color: PropTypes.oneOf(["primary", "secondary", "info", "success", "warning", "error", "dark"]),
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  }).isRequired,
  data: PropTypes.objectOf(PropTypes.array).isRequired,
  options: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default Chart;
