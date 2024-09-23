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
import PDBox from "../../../../../components/PDBox";
import PDTypography from "../../../../../components/PDTypography";
import BasicLineChart from "../../../../../examples/Charts/LineCharts/BasicLineChart";

// porp-types is a library for typechecking of props
import PropTypes from "prop-types";
import { useEffect, useMemo, useState } from "react";

function Chart({ title, count, percentage, data, options }) {
  const [chartData, setChartData] = useState([...data]);
  const [chartOptions, setChartOptions] = useState({ ...options });

  useEffect(() => {
    setChartData(data);
    setChartOptions(options);
  }, [chartData, chartOptions]);

  return (
    <Card sx={{ height: "100%", padding: "0px" }}>
      <PDBox lineHeight={1} display="flex" flexDirection="column" p="22px" pb={0}>
        <PDTypography variant="button" color="white" textTransform="capitalize" fontWeight="medium">
          {title}
        </PDTypography>
        <PDTypography variant="button" fontWeight="medium" color="text" display="flex">
          <PDTypography variant="button" fontWeight="bold" color={percentage.color} display="flex">
            {percentage.label}&nbsp;
            <PDTypography variant="button" fontWeight="bold" color="white">
              {percentage.status}
            </PDTypography>
          </PDTypography>
          &nbsp;in 2021
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
