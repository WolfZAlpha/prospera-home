/** 

=========================================================
* PROSPERA DEFI DASHBOARD - v1.0.0
=========================================================

* Copyright 2024 PROSPERA DEFI (https://www.prosperadefi.com/)

* Design and Coded by Z

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the PROSPERA DEFI DASHBOARD.

*/

import { useMemo, useState } from "react";

// @mui material components
import Grid from "@mui/material/Grid";

// prospera defi dashboard components
import PDBox from "../../../components/PDBox";
import PDTypography from "../../../components/PDTypography";

// prospera defi dashboard example components
import DashboardLayout from "../../../examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "../../../examples/Navbars/DashboardNavbar";
import Footer from "../../../examples/Footer";
import MiniStatisticsCard from "../../../examples/Cards/StatisticsCards/MiniStatisticsCard";
import ProgressLineChart from "../../../examples/Charts/LineCharts/ProgressLineChart";
import DefaultInfoCard from "../../../examples/Cards/InfoCards/DefaultInfoCard";
import MasterCard from "../../../examples/Cards/MasterCard";
import MiniInfoCard from "../../../examples/Cards/InfoCards/MiniInfoCard";
import ControllerCard from "../../../examples/Cards/ControllerCard";
import Calendar from "../../../examples/Calendar";
import InvoicesList from "../../../examples/Lists/InvoicesList";

// Widgets page components
import Steps from "./components/Steps";
import FullBody from "./components/FullBody";
import MediaPlayer from "./components/MediaPlayer";
import OrdersOverview from "./components/OrdersOverview";
import UpcomingEvents from "./components/UpcomingEvents";
import Chart from "./components/Chart";

// Data
import { progressLineChartData, progressLineChartOptions } from "./data/progressLineChartData";
import calendarEventsData from "./data/calendarEventsData";
import invoicesListData from "./data/invoicesListData";
import { incomeLineChartData, incomeLineChartOptions } from "./data/incomeChartData";
import { lineChartDataCalories, lineChartOptionsCalories } from "./data/caloriesChartData";

// Icons
import { IoIosMusicalNotes } from "react-icons/io";
import { BsBatteryCharging } from "react-icons/bs";
import { AiFillCheckCircle } from "react-icons/ai";
import { FaPaypal, FaLightbulb } from "react-icons/fa";
import { IoWallet } from "react-icons/io5";
import { RiShareForwardFill } from "react-icons/ri";

function Widgets() {
  const [lights, setLights] = useState(false);

  const handleSetLights = () => setLights(!lights);

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <PDBox my={3}>
        <PDBox mb={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={3}>
              <PDBox mb={3}>
                <MiniStatisticsCard
                  bgColor="info"
                  title={{ text: "battery health", fontWeight: "regular" }}
                  count="99 %"
                  icon={<BsBatteryCharging color="white" size="22px" />}
                />
              </PDBox>
              <MiniStatisticsCard
                bgColor="info"
                title={{ text: "music volume", fontWeight: "regular" }}
                count="15/100"
                icon={<IoIosMusicalNotes color="white" size="22px" />}
              />
            </Grid>
            <Grid item xs={12} md={6} lg={4} xl={3}>
              <Chart
                title="income"
                count="$130,832"
                percentage={{ color: "success", label: "+90%" }}
                data={incomeLineChartData}
                options={incomeLineChartOptions}
              />
            </Grid>
            <Grid item xs={12} lg={5} xl={6}>
              <ProgressLineChart
                icon={<AiFillCheckCircle color="white" size="22px" />}
                title="Tasks"
                count={480}
                progress={60}
                data={progressLineChartData}
                options={progressLineChartOptions}
              />
            </Grid>
          </Grid>
        </PDBox>
        <PDBox mb={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={4}>
              <UpcomingEvents />
            </Grid>
            <Grid item xs={12} md={3} lg={2}>
              <DefaultInfoCard
                icon={<IoWallet size="26px" color="white" />}
                title="salary"
                description="Belong Interactive"
                value="+$2000"
              />
            </Grid>
            <Grid item xs={12} md={3} lg={2}>
              <DefaultInfoCard
                icon={<FaPaypal color="white" size="22px" />}
                title="paypal"
                description="Freelance Payment"
                value="$455.00"
              />
            </Grid>
            <Grid item xs={12} lg={4}>
              <MasterCard number={4562112245947852} valid="05/24" cvv="09X" />
            </Grid>
          </Grid>
        </PDBox>
        <PDBox mb={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={3}>
              <FullBody />
            </Grid>
            <Grid item xs={12} md={6} lg={2}>
              <ControllerCard
                state={lights}
                icon={<FaLightbulb color={lights ? "yellow" : "white"} size="52px" />}
                title="Lights"
                onChange={handleSetLights}
              />
            </Grid>
            <Grid item xs={12} lg={3}>
              <Chart
                title="calories"
                count={187}
                percentage={{ color: "success", label: "+5%" }}
                data={lineChartDataCalories}
                options={lineChartOptionsCalories}
              />
            </Grid>
            <Grid item xs={12} md={6} lg={2}>
              <MiniInfoCard
                icon={<RiShareForwardFill color="white" size="22px" />}
                title={
                  <>
                    754&nbsp;
                    <PDTypography variant="button" color="white" fontWeight="medium">
                      m
                    </PDTypography>
                  </>
                }
                description="New York City"
              />
            </Grid>
            <Grid item xs={12} md={6} lg={2}>
              <Steps />
            </Grid>
          </Grid>
        </PDBox>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={5}>
            {useMemo(
              () => (
                <Calendar
                  header={{ title: "calendar", date: "Monday, 2021" }}
                  headerToolbar={false}
                  initialView="dayGridMonth"
                  initialDate="2021-08-10"
                  events={calendarEventsData}
                  isWidgets // takes the styles if calendar is in the widgets page
                  selectable
                  editable
                />
              ),
              [calendarEventsData]
            )}
          </Grid>
          <Grid item xs={12} lg={3}>
            <PDBox mb={3}>
              <InvoicesList title="invoices" invoices={invoicesListData} />
            </PDBox>
            <MediaPlayer />
          </Grid>
          <Grid item xs={12} lg={4}>
            <OrdersOverview />
          </Grid>
        </Grid>
      </PDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Widgets;
