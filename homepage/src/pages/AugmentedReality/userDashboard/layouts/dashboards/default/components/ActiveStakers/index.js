/** 

=========================================================
* PROSPERA DEFI DASHBOARD - v1.0.0
=========================================================

* Copyright 2024 PROSPERA DEFI (https://www.prosperadefi.com/)

* Design and Coded by Z

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the PROSPERA DEFI DASHBOARD.

*/

import { Card } from "@mui/material";

// prospera defi dashboard components
import PDBox from "../../../../../components/PDBox";
import PDTypography from "../../../../../components/PDTypography";
import BasicLineChart from "../../../../../examples/Charts/LineCharts/BasicLineChart";
import { lineChartDataDashboard, lineChartOptionsDashboard } from "../../data/lineChart";

const SalesOverview = () => {
  return (
    <Card>
      <PDBox sx={{ height: "100%" }}>
        <PDTypography variant="lg" color="white" fontWeight="bold" mb="5px">
          Active Stakers (Lock-Up vs. Non Lock-Up)
        </PDTypography>
        <PDBox display="flex" alignItems="center" mb="40px">
          <PDTypography variant="button" color="success" fontWeight="bold">
            +5% more{" "}
            <PDTypography variant="button" color="text" fontWeight="regular">
              in 2024
            </PDTypography>
          </PDTypography>
        </PDBox>
        <PDBox sx={{ height: "310px" }}>
          <BasicLineChart
            lineChartData={lineChartDataDashboard}
            lineChartOptions={lineChartOptionsDashboard}
          />
        </PDBox>
      </PDBox>
    </Card>
  );
};

export default SalesOverview;
