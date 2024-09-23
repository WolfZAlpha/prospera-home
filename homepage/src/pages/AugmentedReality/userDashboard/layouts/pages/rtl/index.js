/** 

=========================================================
* PROSPERA DEFI DASHBOARD - v1.0.0
=========================================================

* Copyright 2024 PROSPERA DEFI (https://www.prosperadefi.com/)

* Design and Coded by Z

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the PROSPERA DEFI DASHBOARD.

*/

import { useEffect } from "react";

// @mui material components
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";
import { Card, Stack } from "@mui/material";

// prospera defi dashboard components
import PDBox from "../../../components/PDBox";
import PDTypography from "../../../components/PDTypography";
import PDProgress from "../../../components/PDProgress";

// prospera defi dashboard example components
import DashboardLayout from "../../../examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "../../../examples/Navbars/DashboardNavbar";
import Footer from "../../../examples/Footer";
import MiniStatisticsCard from "../../../examples/Cards/StatisticsCards/MiniStatisticsCard";

// prospera defi dashboard functions
import linearGradient from "../../../assets/theme/functions/linearGradient";

// prospera defi dashboard base styles
import colors from "../../../assets/theme/base/colors";

// Dashboard layout components
import WelcomeMark from "./components/WelcomeMark";
import Projects from "./components/Projects";
import OrderOverview from "./components/OrderOverview";
import SatisfactionRate from "./components/SatisfactionRate";
import ReferralTracking from "./components/ReferralTracking";

// React icons
import { IoIosRocket } from "react-icons/io";
import { IoGlobe } from "react-icons/io5";
import { IoBuild } from "react-icons/io5";
import { IoWallet } from "react-icons/io5";
import { IoDocumentText } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";

// Data
import BasicLineChart from "../../../examples/Charts/LineCharts/BasicLineChart";
import BarChart from "../../../examples/Charts/BarCharts/BasicBarChart";
import { lineChartDataDashboard } from "./data/lineChartData";
import { lineChartOptionsDashboard } from "./data/lineChartOptions";
import { barChartDataDashboard } from "./data/barChartData";
import { barChartOptionsDashboard } from "./data/barChartOptions";

// prospera defi dashboard contexts
import { useDashboardUIController, setDirection } from "../../../context";

function RTL() {
  const { gradients } = colors;
  const { cardContent } = gradients;
  const [, dispatch] = useDashboardUIController();

  // Changing the direction to rtl
  useEffect(() => {
    setDirection(dispatch, "rtl");
    return () => setDirection(dispatch, "ltr");
  }, []);

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <PDBox py={3}>
        <PDBox mb={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} xl={3}>
              <MiniStatisticsCard
                title={{ text: "أموال اليوم", fontWeight: "regular" }}
                count="$53,000"
                percentage={{ color: "success", text: "+55%" }}
                icon={<IoWallet size="22px" color="white" />}
              />
            </Grid>
            <Grid item xs={12} sm={6} xl={3}>
              <MiniStatisticsCard
                title={{ text: "مستخدمي اليوم" }}
                count="2,300"
                percentage={{ color: "success", text: "+3%" }}
                icon={<IoGlobe size="22px" color="white" />}
              />
            </Grid>
            <Grid item xs={12} sm={6} xl={3}>
              <MiniStatisticsCard
                title={{ text: "عملاء جدد" }}
                count="+3,462"
                percentage={{ color: "error", text: "-2%" }}
                icon={<IoDocumentText size="22px" color="white" />}
              />
            </Grid>
            <Grid item xs={12} sm={6} xl={3}>
              <MiniStatisticsCard
                title={{ text: "إجمالي المبيعات" }}
                count="$103,430"
                percentage={{ color: "success", text: "+5%" }}
                icon={<FaShoppingCart size="20px" color="white" />}
              />
            </Grid>
          </Grid>
        </PDBox>
        <PDBox mb={3}>
          <Grid container spacing="18px">
            <Grid item xs={12} xl={5}>
              <WelcomeMark />
            </Grid>
            <Grid item xs={12} lg={6} xl={3}>
              <SatisfactionRate />
            </Grid>
            <Grid item xs={12} lg={6} xl={4}>
              <ReferralTracking />
            </Grid>
          </Grid>
        </PDBox>
        <PDBox mb={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={7}>
              <Card>
                <PDBox sx={{ height: "100%" }}>
                  <PDTypography variant="lg" color="white" fontWeight="bold" mb="5px">
                    نظرة عامة على المبيعات
                  </PDTypography>
                  <PDBox display="flex" alignItems="center" mb="40px">
                    <PDTypography variant="button" color="success" fontWeight="bold">
                      + 5٪ أكثر
                      <PDTypography variant="button" color="text" fontWeight="regular">
                        في عام 2021
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
            </Grid>
            <Grid item xs={12} lg={5}>
              <Card>
                <PDBox>
                  <PDBox
                    mb="24px"
                    height="220px"
                    sx={{
                      background: linearGradient(
                        cardContent.main,
                        cardContent.state,
                        cardContent.deg
                      ),
                      borderRadius: "20px",
                    }}
                  >
                    <BarChart
                      barChartData={barChartDataDashboard}
                      barChartOptions={barChartOptionsDashboard}
                    />
                  </PDBox>
                  <PDTypography variant="lg" color="white" fontWeight="bold" mb="5px">
                    المستخدمين النشطين
                  </PDTypography>
                  <PDBox display="flex" alignItems="center" mb="40px">
                    <PDTypography variant="button" color="success" fontWeight="bold">
                      (+23)
                      <PDTypography variant="button" color="text" fontWeight="regular">
                        من الأسبوع الماضي
                      </PDTypography>
                    </PDTypography>
                  </PDBox>
                  <Grid container spacing="50px">
                    <Grid item xs={6} md={3} lg={3}>
                      <Stack
                        direction="row"
                        spacing={{ sm: "10px", xl: "4px", xxl: "10px" }}
                        mb="6px"
                      >
                        <PDBox
                          bgColor="info"
                          display="flex"
                          justifyContent="center"
                          alignItems="center"
                          sx={{ borderRadius: "6px", width: "25px", height: "25px" }}
                        >
                          <IoWallet color="#fff" size="12px" />
                        </PDBox>
                        <PDTypography color="text" variant="button" fontWeight="medium">
                          المستخدمون
                        </PDTypography>
                      </Stack>
                      <PDTypography color="white" variant="lg" fontWeight="bold" mb="8px">
                        32,984
                      </PDTypography>
                      <PDProgress value={60} color="info" sx={{ background: "#2D2E5F" }} />
                    </Grid>
                    <Grid item xs={6} md={3} lg={3}>
                      <Stack
                        direction="row"
                        spacing={{ sm: "10px", xl: "4px", xxl: "10px" }}
                        mb="6px"
                      >
                        <PDBox
                          bgColor="info"
                          display="flex"
                          justifyContent="center"
                          alignItems="center"
                          sx={{ borderRadius: "6px", width: "25px", height: "25px" }}
                        >
                          <IoIosRocket color="#fff" size="12px" />
                        </PDBox>
                        <PDTypography color="text" variant="button" fontWeight="medium">
                          نقرات
                        </PDTypography>
                      </Stack>
                      <PDTypography color="white" variant="lg" fontWeight="bold" mb="8px">
                        2,42M
                      </PDTypography>
                      <PDProgress value={60} color="info" sx={{ background: "#2D2E5F" }} />
                    </Grid>
                    <Grid item xs={6} md={3} lg={3}>
                      <Stack
                        direction="row"
                        spacing={{ sm: "10px", xl: "4px", xxl: "10px" }}
                        mb="6px"
                      >
                        <PDBox
                          bgColor="info"
                          display="flex"
                          justifyContent="center"
                          alignItems="center"
                          sx={{ borderRadius: "6px", width: "25px", height: "25px" }}
                        >
                          <FaShoppingCart color="#fff" size="12px" />
                        </PDBox>
                        <PDTypography color="text" variant="button" fontWeight="medium">
                          مبيعات
                        </PDTypography>
                      </Stack>
                      <PDTypography color="white" variant="lg" fontWeight="bold" mb="8px">
                        2,400$
                      </PDTypography>
                      <PDProgress value={60} color="info" sx={{ background: "#2D2E5F" }} />
                    </Grid>
                    <Grid item xs={6} md={3} lg={3}>
                      <Stack
                        direction="row"
                        spacing={{ sm: "10px", xl: "4px", xxl: "10px" }}
                        mb="6px"
                      >
                        <PDBox
                          bgColor="info"
                          display="flex"
                          justifyContent="center"
                          alignItems="center"
                          sx={{ borderRadius: "6px", width: "25px", height: "25px" }}
                        >
                          <IoBuild color="#fff" size="12px" />
                        </PDBox>
                        <PDTypography color="text" variant="button" fontWeight="medium">
                          العناصر
                        </PDTypography>
                      </Stack>
                      <PDTypography color="white" variant="lg" fontWeight="bold" mb="8px">
                        320
                      </PDTypography>
                      <PDProgress value={60} color="info" sx={{ background: "#2D2E5F" }} />
                    </Grid>
                  </Grid>
                </PDBox>
              </Card>
            </Grid>
          </Grid>
        </PDBox>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={8}>
            <Projects />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <OrderOverview />
          </Grid>
        </Grid>
      </PDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default RTL;
