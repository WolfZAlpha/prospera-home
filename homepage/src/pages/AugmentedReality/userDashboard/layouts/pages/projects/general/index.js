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
import Grid from "@mui/material/Grid";

// prospera defi dashboard components
import PDBox from "../../../../components/PDBox";

// prospera defi dashboard example components
import DashboardLayout from "../../../../examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "../../../../examples/Navbars/DashboardNavbar";
import Footer from "../../../../examples/Footer";
import AnimatedStatisticsCard from "../../../../examples/Cards/StatisticsCards/AnimatedStatisticsCard";
import MiniStatisticsCard from "../../../../examples/Cards/StatisticsCards/MiniStatisticsCard";
import AnnouncementCard from "../../../../examples/Cards/AnnouncementCard";
import ProgressLineChart from "../../../../examples/Charts/LineCharts/ProgressLineChart";
import ProgressDoughnutChart from "../../../../examples/Charts/DoughnutCharts/ProgressDoughnutChart";

// General page components
import TodoList from "./components/TodoList";

// Images
import team3 from "../../../../assets/images/avatar4.png";

// LineChart data
import { lineChartDataGeneral1, lineChartOptionsGeneral1 } from "./data/lineChartData";

// Icons imported
import { FaShoppingCart } from "react-icons/fa";
import { BsGlobe, BsBatteryCharging } from "react-icons/bs";
import { IoWallet, IoDocumentText } from "react-icons/io5";
import { HiLightningBolt } from "react-icons/hi";
import { AiFillCheckCircle } from "react-icons/ai";

function General() {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <PDBox mt={3} mb={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={8}>
            <Grid container spacing={3}>
              <Grid item xs={12} lg={4}>
                <AnimatedStatisticsCard
                  title="earnings"
                  count="$15,800"
                  percentage={{
                    color: "dark",
                    label: "+15% since last week",
                  }}
                  action={{
                    type: "internal",
                    route: "/pages/projects/general",
                    label: "view more",
                  }}
                />
              </Grid>
              <Grid container item xs={12} md={12} lg={8} spacing={3}>
                <Grid item xs={12} md={6} lg={6}>
                  <MiniStatisticsCard
                    title={{ fontWeight: "medium", text: "today's money" }}
                    count="$53,000"
                    percentage={{ color: "success", text: "+55%" }}
                    icon={<IoWallet color="white" />}
                    direction="right"
                  />
                </Grid>
                <Grid item xs={12} md={6} lg={6}>
                  <MiniStatisticsCard
                    title={{ fontWeight: "medium", text: "today's users" }}
                    count="$2,300"
                    percentage={{ color: "success", text: "+5%" }}
                    icon={<BsGlobe color="white" />}
                    direction="right"
                  />
                </Grid>
                <Grid item xs={12} md={6} lg={6}>
                  <MiniStatisticsCard
                    title={{ fontWeight: "medium", text: "total sales" }}
                    count="$173,000"
                    percentage={{ color: "success", text: "+8%" }}
                    icon={<IoDocumentText color="white" />}
                    direction="right"
                  />
                </Grid>
                <Grid item xs={12} md={6} lg={6}>
                  <MiniStatisticsCard
                    title={{ fontWeight: "medium", text: "new clients" }}
                    count="$53,000"
                    percentage={{ color: "error", text: "-14%" }}
                    icon={<FaShoppingCart color="white" />}
                    direction="right"
                  />
                </Grid>
                <Grid item xs={12} md={6} lg={6}>
                  <MiniStatisticsCard
                    title={{ fontWeight: "medium", text: "consumption" }}
                    count="$163W/km"
                    icon={<HiLightningBolt color="white" />}
                    direction="right"
                  />
                </Grid>

                <Grid item xs={12} md={6} lg={6}>
                  <MiniStatisticsCard
                    title={{ fontWeight: "medium", text: "battery health" }}
                    count="76%"
                    percentage={{ color: "error", text: "-11%" }}
                    icon={<BsBatteryCharging color="white" />}
                    direction="right"
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <PDBox my={3}>
                <TodoList />
              </PDBox>
            </Grid>
          </Grid>
          <Grid item xs={12} lg={4}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <AnnouncementCard
                  by={{ image: team3, name: "Esthera Jackson", date: "2h ago" }}
                  title="I need a Ruby developer for my new website."
                  description="The website was initially built in PHP, I need a professional ruby programmer to shift it."
                  value={{ type: "$", amount: "3,000", method: "month" }}
                  action={{ type: "internal", route: "/pages/projects/general", label: "apply" }}
                />
              </Grid>
              <Grid item xs={12}>
                <ProgressLineChart
                  icon={<AiFillCheckCircle color="white" size="22px" />}
                  title="Tasks"
                  count={480}
                  height="150px"
                  progress={60}
                  data={lineChartDataGeneral1}
                  options={lineChartOptionsGeneral1}
                />
              </Grid>
              <Grid item xs={12}>
                <ProgressDoughnutChart
                  icon={<BsGlobe size="22px" color="white" />}
                  title="projects"
                  count={115}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </PDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default General;
