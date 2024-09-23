/** 

=========================================================
* PROSPERA DEFI DASHBOARD - v1.0.0
=========================================================

* Copyright 2024 PROSPERA DEFI (https://www.prosperadefi.com/)

* Design and Coded by Z

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the PROSPERA DEFI DASHBOARD.

*/

import { Card, Stack } from "@mui/material";
import Grid from "@mui/material/Grid";

// Data
import colors from "../../../../../assets/theme/base/colors";
import linearGradient from "../../../../../assets/theme/functions/linearGradient";

// prospera defi dashboard components
import PDBox from "../../../../../components/PDBox";
import PDProgress from "../../../../../components/PDProgress";
import PDTypography from "../../../../../components/PDTypography";
import BarChart from "../../../../../examples/Charts/BarCharts/BasicBarChart/index";
import { FaShoppingCart, FaWallet } from "react-icons/fa";
import { IoIosRocket } from "react-icons/io";
import { IoBuild } from "react-icons/io5";
import { barChartDataDashboard, barChartOptionsDashboard } from "../../data/barChart";

const ActiveUsers = () => {
  const { gradients } = colors;
  const { cardContent } = gradients;

  return (
    <Card>
      <PDBox>
        <PDBox
          mb="24px"
          height="220px"
          sx={{
            background: linearGradient(cardContent.main, cardContent.state, cardContent.deg),
            borderRadius: "20px",
          }}
        >
          <BarChart
            barChartData={barChartDataDashboard}
            barChartOptions={barChartOptionsDashboard}
          />
        </PDBox>
        <PDTypography variant="lg" color="white" fontWeight="bold" mb="5px">
          Active Users
        </PDTypography>
        <PDBox display="flex" alignItems="center" mb="40px">
          <PDTypography variant="button" color="success" fontWeight="bold">
            (+23){" "}
            <PDTypography variant="button" color="text" fontWeight="regular">
              than last week
            </PDTypography>
          </PDTypography>
        </PDBox>
        <Grid container spacing="50px">
          <Grid item xs={6} md={3} lg={3}>
            <Stack direction="row" spacing="10px" mb="6px">
              <PDBox
                bgColor="info"
                display="flex"
                justifyContent="center"
                alignItems="center"
                sx={{ borderRadius: "6px", width: "25px", height: "25px" }}
              >
                <FaWallet color="#fff" size="12px" />
              </PDBox>
              <PDTypography color="text" variant="button" fontWeight="medium">
                Users
              </PDTypography>
            </Stack>
            <PDTypography color="white" variant="lg" fontWeight="bold" mb="8px">
              32,984
            </PDTypography>
            <PDProgress value={60} color="info" sx={{ background: "#2D2E5F" }} />
          </Grid>
          <Grid item xs={6} md={3} lg={3}>
            <Stack direction="row" spacing="10px" mb="6px">
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
                Clicks
              </PDTypography>
            </Stack>
            <PDTypography color="white" variant="lg" fontWeight="bold" mb="8px">
              2,42M
            </PDTypography>
            <PDProgress value={60} color="info" sx={{ background: "#2D2E5F" }} />
          </Grid>
          <Grid item xs={6} md={3} lg={3}>
            <Stack direction="row" spacing="10px" mb="6px">
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
                Sales
              </PDTypography>
            </Stack>
            <PDTypography color="white" variant="lg" fontWeight="bold" mb="8px">
              2,400$
            </PDTypography>
            <PDProgress value={60} color="info" sx={{ background: "#2D2E5F" }} />
          </Grid>
          <Grid item xs={6} md={3} lg={3}>
            <Stack direction="row" spacing="10px" mb="6px">
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
                Items
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
  );
};

export default ActiveUsers;
