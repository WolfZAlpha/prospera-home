/** 

=========================================================
* PROSPERA DEFI DASHBOARD - v1.0.0
=========================================================

* Copyright 2024 PROSPERA DEFI (https://www.prosperadefi.com/)

* Design and Coded by Z

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the PROSPERA DEFI DASHBOARD.

*/

import { useMemo, useEffect, useState } from "react";

// porp-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Card from "@mui/material/Card";

// prospera defi dashboard components
import PDBox from "../../../../components/PDBox";
import PDTypography from "../../../../components/PDTypography";
import PDProgress from "../../../../components/PDProgress";

// LineChart apex-chart
import BasicLineChart from "../BasicLineChart";

function ProgressLineChart({ color, icon, title, count, progress, data, options }) {
  const [chartData, setChartData] = useState([...data]);
  const [chartOptions, setChartOptions] = useState({ ...options });

  useEffect(() => {
    setChartData(data);
    setChartOptions(options);
  }, [chartData, chartOptions]);

  return (
    <Card
      sx={({ breakpoints }) => ({
        [breakpoints.up("lg")]: {
          maxHeight: "255px",
        },
      })}
    >
      <PDBox display="flex" alignItems="center">
        <PDBox
          width="45px"
          height="45px"
          display="grid"
          justifyContent="center"
          alignItems="center"
          borderRadius="md"
          shadow="md"
          color="white"
          bgColor={color}
        >
          {icon}
        </PDBox>
        <PDBox ml={2} lineHeight={1} display="flex" flexDirection="column">
          <PDTypography
            variant="button"
            fontWeight="medium"
            textTransform="capitalize"
            color="white"
          >
            {title}
          </PDTypography>
          {count ? (
            <PDTypography variant="lg" color="white" fontWeight="bold">
              {count}
            </PDTypography>
          ) : null}
        </PDBox>
        <PDBox width="25%" ml="auto">
          <PDTypography display="block" variant="caption" fontWeight="medium" color="text">
            {progress}%
          </PDTypography>
          <PDBox mt={0.25}>
            <PDProgress color={color} value={progress} sx={{ background: "#2D2E5F" }} />
          </PDBox>
        </PDBox>
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

// Setting default values for the props of ProgressLineChart
ProgressLineChart.defaultProps = {
  color: "info",
  count: 0,
};

// Typechecking props for the ProgressLineChart
ProgressLineChart.propTypes = {
  color: PropTypes.oneOf(["primary", "secondary", "info", "success", "warning", "error", "dark"]),
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  count: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  progress: PropTypes.number.isRequired,
  data: PropTypes.objectOf(PropTypes.array).isRequired,
  object: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default ProgressLineChart;
