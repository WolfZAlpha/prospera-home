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

// @mui material components
import Grid from "@mui/material/Grid";

// prospera defi dashboard components
import PDBox from "../../../components/PDBox";
import PDTypography from "../../../components/PDTypography";

// prospera defi dashboard example components
import DashboardLayout from "../../../examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "../../../examples/Navbars/DashboardNavbar";
import Footer from "../../../examples/Footer";
import DefaultLineChart from "../../../examples/Charts/LineCharts/DefaultLineChart";
import GradientLineChart from "../../../examples/Charts/LineCharts/GradientLineChart";
import VerticalBarChart from "../../../examples/Charts/BarCharts/VerticalBarChart";
import HorizontalBarChart from "../../../examples/Charts/BarCharts/HorizontalBarChart";
import MixedChart from "../../../examples/Charts/MixedChart";
import BubbleChart from "../../../examples/Charts/BubbleChart";
import DefaultDoughnutChart from "../../../examples/Charts/DoughnutCharts/DefaultDoughnutChart";
import PieChart from "../../../examples/Charts/PieChart";
import RadarChart from "../../../examples/Charts/RadarChart";
import PolarChart from "../../../examples/Charts/PolarChart";

// Data
import { lineChartDataDefault, lineChartOptionsDefault } from "./data/defaultLineChartData";
import { lineChartDataGradient, lineChartOptionsGradient } from "./data/gradientLineChartData";
import { barChartDataVertical, barChartOptionsVertical } from "./data/verticalBarChartData";
import { barChartDataHorizontal, barChartOptionsHorizontal } from "./data/horizontalBarChartData";
import { mixedChartData, mixedChartOptions } from "./data/mixedChartData";
import { bubbleChartData, bubbleChartOptions } from "./data/bubbleChartData";
import { doughnutChartData, doughnutChartOptions } from "./data/defaultDoughnutChartData";
import { pieChartData, pieChartOptions } from "./data/pieChartData";
import { radarChartData, radarChartOptions } from "./data/radarChartData";
import { polarChartData, polarChartOptions } from "./data/polarChartData";

function Charts() {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <PDBox my={3}>
        <PDBox mb={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} sx={{ lineHeight: 0 }}>
              <PDTypography variant="h4" color="white" fontWeight="bold">
                Charts
              </PDTypography>
              <PDTypography variant="button" fontWeight="regular" color="text">
                Charts on this page use React-apex - Simple yet flexible JavaScript charting for
                designers & developers.
              </PDTypography>
            </Grid>
          </Grid>
        </PDBox>
        <PDBox mb={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              {useMemo(
                () => (
                  <DefaultLineChart
                    title="Line chart"
                    data={lineChartDataDefault}
                    options={lineChartOptionsDefault}
                  />
                ),
                [lineChartDataDefault, lineChartOptionsDefault]
              )}
            </Grid>
            <Grid item xs={12} md={6}>
              {useMemo(
                () => (
                  <GradientLineChart
                    title="Line chart with gradient"
                    data={lineChartDataGradient}
                    options={lineChartOptionsGradient}
                  />
                ),
                [lineChartDataGradient, lineChartOptionsGradient]
              )}
            </Grid>
          </Grid>
        </PDBox>
        <PDBox mb={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              {useMemo(
                () => (
                  <VerticalBarChart
                    title="Bar chart"
                    data={barChartDataVertical}
                    options={barChartOptionsVertical}
                  />
                ),
                [barChartDataVertical, barChartOptionsVertical]
              )}
            </Grid>
            <Grid item xs={12} md={6}>
              {useMemo(
                () => (
                  <HorizontalBarChart
                    title="Bar chart horizontal"
                    data={barChartDataHorizontal}
                    options={barChartOptionsHorizontal}
                  />
                ),
                [barChartDataHorizontal, barChartOptionsHorizontal]
              )}
            </Grid>
          </Grid>
        </PDBox>
        <PDBox mb={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              {useMemo(
                () => (
                  <MixedChart
                    title="Mixed chart"
                    data={mixedChartData}
                    options={mixedChartOptions}
                  />
                ),
                [mixedChartData, mixedChartOptions]
              )}
            </Grid>
            <Grid item xs={12} md={6}>
              {useMemo(
                () => (
                  <BubbleChart
                    title="Bubble chart"
                    data={bubbleChartData}
                    options={bubbleChartOptions}
                  />
                ),
                [bubbleChartData, bubbleChartOptions]
              )}
            </Grid>
          </Grid>
        </PDBox>
        <PDBox mb={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              {useMemo(
                () => (
                  <DefaultDoughnutChart
                    title="Doughnut chart"
                    data={doughnutChartData}
                    options={doughnutChartOptions}
                  />
                ),
                [doughnutChartData, doughnutChartOptions]
              )}
            </Grid>
            <Grid item xs={12} md={6}>
              {useMemo(
                () => (
                  <PieChart title="Pie chart" data={pieChartData} options={pieChartOptions} />
                ),
                [pieChartData, pieChartOptions]
              )}
            </Grid>
          </Grid>
        </PDBox>
        <PDBox mb={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              {useMemo(
                () => (
                  <RadarChart
                    title="Radar chart"
                    data={radarChartData}
                    options={radarChartOptions}
                  />
                ),
                [radarChartData, radarChartOptions]
              )}
            </Grid>
            <Grid item xs={12} md={6}>
              {useMemo(
                () => (
                  <PolarChart
                    title="Polar chart"
                    data={polarChartData}
                    options={polarChartOptions}
                  />
                ),
                [polarChartData, polarChartOptions]
              )}
            </Grid>
          </Grid>
        </PDBox>
      </PDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Charts;
