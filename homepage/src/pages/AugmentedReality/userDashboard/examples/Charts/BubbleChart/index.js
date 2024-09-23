/** 

=========================================================
* PROSPERA DEFI DASHBOARD - v1.0.0
=========================================================

* Copyright 2024 PROSPERA DEFI (https://www.prosperadefi.com/)

* Design and Coded by Z

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the PROSPERA DEFI DASHBOARD.

*/

import { useMemo, useState, useEffect } from "react";

// @mui material components
import Card from "@mui/material/Card";

// prospera defi dashboard components
import PDBox from "../../../components/PDBox";
import PDTypography from "../../../components/PDTypography";

// react-apex components
import BasicBubbleChart from "./BasicBubbleChart";

// porp-types is a library for typechecking of props
import PropTypes from "prop-types";

function BubbleChart({ title, description, data, options }) {
  const [chartData, setChartData] = useState([...data]);
  const [chartOptions, setChartOptions] = useState({ ...options });

  useEffect(() => {
    setChartData(data);
    setChartOptions(options);
  }, [chartData, chartOptions]);

  return (
    <Card>
      <PDBox px={description ? 1 : 0} pt={description ? 1 : 0}>
        <PDBox mb={1}>
          <PDTypography variant="lg" color="white">
            {title}
          </PDTypography>
        </PDBox>
        <PDBox mb={2}>
          <PDTypography component="div" variant="button" fontWeight="regular" color="text">
            {description}
          </PDTypography>
        </PDBox>
      </PDBox>
      {useMemo(
        () => (
          <PDBox sx={{ minHeight: "300px" }}>
            <BasicBubbleChart bubbleChartData={chartData} bubbleChartOptions={chartOptions} />
          </PDBox>
        ),
        [data, options]
      )}
    </Card>
  );
}

// Setting default values for the props of BubbleChart
BubbleChart.defaultProps = {
  title: "",
  description: "",
};

// Typechecking props for the BubbleChart
BubbleChart.propTypes = {
  title: PropTypes.string,
  description: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  data: PropTypes.objectOf(PropTypes.array).isRequired,
  options: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default BubbleChart;
