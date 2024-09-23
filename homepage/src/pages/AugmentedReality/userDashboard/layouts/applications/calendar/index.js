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

// prospera defi dashboard example components
import DashboardLayout from "../../../examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "../../../examples/Navbars/DashboardNavbar";
import Footer from "../../../examples/Footer";
import EventCalendar from "../../../examples/Calendar";

// Calendar application components
import Header from "./components/Header";
import NextEvents from "./components/NextEvents";
import ProductivityChart from "./components/ProductivityChart";
import {
  lineChartDataProductivity,
  lineChartOptionsProductivity,
} from "./data/productivityChartData";

// Data
import calendarEventsData from "./data/calendarEventsData";

function Calendar() {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <PDBox pt={3} mb={8}>
        <PDBox display="flex" justifyContent="flex-end" mt={1} mb={4} mx={2}>
          <Header />
        </PDBox>
        <Grid container direction="row" justifyContent="flex-end" alignItems="stretch" spacing={3}>
          <Grid item xs={12} xl={8}>
            {useMemo(
              () => (
                <EventCalendar
                  initialView="dayGridMonth"
                  initialDate="2021-08-10"
                  events={calendarEventsData}
                  selectable
                  editable
                />
              ),
              [calendarEventsData]
            )}
          </Grid>
          <Grid item xs={12} xl={4}>
            <PDBox
              display="flex"
              sx={{ flexDirection: "column", justifyContent: "space-between", height: "100%" }}
            >
              <PDBox mb={3}>
                <NextEvents />
              </PDBox>
              <PDBox>
                <ProductivityChart
                  title="Productivity"
                  percentage={{ color: "success", label: "+5%", status: "more" }}
                  data={lineChartDataProductivity}
                  options={lineChartOptionsProductivity}
                />
              </PDBox>
            </PDBox>
          </Grid>
        </Grid>
      </PDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Calendar;
