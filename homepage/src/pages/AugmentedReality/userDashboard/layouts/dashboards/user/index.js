/** 

=========================================================
* PROSPERA DEFI DASHBOARD - v1.0.0
=========================================================

* Copyright 2024 PROSPERA DEFI (https://www.prosperadefi.com/)

* Design and Coded by Z

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the PROSPERA DEFI DASHBOARD.

*/

import React from "react";
import { Grid } from "@mui/material";
import PDBox from "../../../components/PDBox";
import PDTypography from "../../../components/PDTypography";
import DashboardLayout from "../../../examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "../../../examples/Navbars/DashboardNavbar";
import Footer from "../../../examples/Footer";
import Calendar from "./components/Calendar";
import MiniGradientLineChart from "../../../examples/Charts/LineCharts/MiniGradientLineChart";
import BasicLineChart from "../../../examples/Charts/LineCharts/BasicLineChart";
import Welcome from "./components/Welcome";
import AchievementBadges from "./components/AchievementBadges";
import CryptoNewsFeed from "./components/CryptoNewsFeed";
import CryptoChart from "./components/CryptoCharts/CryptoChart";
import MoonShotIndicator from "./components/MoonShotIndicator";
import HeatMaps from "./components/HeatMaps";

import calendarEventsData from "./data/calendarEventsData";
import { lineChartDataCRM2, lineChartOptionsCRM2 } from "./data/lineChart";

function UserDashboard() {
  const earnedBadges = ["first-stake", "diamond-hands"];
  const marketSentiment = 60;

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <PDBox py={3}>
        <Grid container spacing={3}>
          {/* Left column */}
          <Grid item xs={12} lg={6}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Welcome />
              </Grid>
              <Grid item xs={12}>
                <PDBox sx={{ height: { xs: "400px", md: "500px", lg: "600px" } }}>
                  <Calendar
                    header={{ title: "Calendar" }}
                    initialView="dayGridMonth"
                    initialDate="2021-08-10"
                    events={calendarEventsData}
                    selectable
                    editable
                  />
                </PDBox>
              </Grid>
              <Grid item xs={12}>
                <PDBox sx={{ height: { xs: "400px", md: "500px", lg: "600px" } }}>
                  <HeatMaps title="Market Heatmaps" />
                </PDBox>
              </Grid>
            </Grid>
          </Grid>

          {/* Right column */}
          <Grid item xs={12} lg={6}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <MiniGradientLineChart
                  title="OMN_v3 Live Testing Account"
                  description={
                    <PDTypography variant="lg" color="white" fontWeight="bold">
                      $2,237,832{" "}
                      <PDTypography variant="button" color="success" fontWeight="bold">
                        +10%
                      </PDTypography>
                    </PDTypography>
                  }
                  chart={
                    <BasicLineChart
                      lineChartData={lineChartDataCRM2}
                      lineChartOptions={lineChartOptionsCRM2}
                    />
                  }
                />
              </Grid>
              <Grid item xs={12}>
                <PDBox
                  sx={{
                    height: { xs: "400px", md: "500px", lg: "600px" },
                    overflow: "auto",
                  }}
                >
                  <CryptoNewsFeed title="Crypto News" />
                </PDBox>
              </Grid>
              <Grid item xs={12}>
                <PDBox
                  sx={{
                    height: { xs: "400px", md: "500px", lg: "600px" },
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <AchievementBadges title="Achievement Badges" earnedBadges={earnedBadges} />
                  <PDBox
                    mt={3}
                    sx={{
                      flexGrow: 1,
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "flex-end",
                    }}
                  >
                    <MoonShotIndicator title="Moon Shot Indicator" sentiment={marketSentiment} />
                  </PDBox>
                </PDBox>
              </Grid>
            </Grid>
          </Grid>

          {/* Full-width TradingView chart at the bottom */}
          <Grid item xs={12}>
            <PDBox mt={3} sx={{ height: { xs: "400px", md: "600px", lg: "800px" } }}>
              <CryptoChart title="Live Feed Chart" />
            </PDBox>
          </Grid>
        </Grid>
      </PDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default UserDashboard;
