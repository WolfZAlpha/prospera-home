/** 

=========================================================
* PROSPERA DEFI DASHBOARD - v1.0.0
=========================================================

* Copyright 2024 PROSPERA DEFI (https://www.prosperadefi.com/)

* Design and Coded by Z

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the PROSPERA DEFI DASHBOARD.

*/

import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import breakpoints from "../../../assets/theme/base/breakpoints";
import PDBox from "../../../components/PDBox";
import PDTypography from "../../../components/PDTypography";
import MiniStatisticsCard from "../../../examples/Cards/StatisticsCards/MiniStatisticsCard";
import Footer from "../../../examples/Footer";
import Globe from "../../../examples/Globe";
import DashboardLayout from "../../../examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "../../../examples/Navbars/DashboardNavbar";
import SalesTable from "../../../examples/Tables/SalesTable";
import salesTableData from "./data/salesTableData";
import ActiveStakers from "./components/ActiveStakers";
import CryptoCarousel from "./components/CryptoCarousel";
import SolanaMemeCoin from "./components/SolanaMemeCoin";
import BaseMemeCoin from "./components/BaseMemeCoin";

import { BsGlobe } from "react-icons/bs";
import { IoWallet, IoDocumentText } from "react-icons/io5";

function Default() {
  const { values } = breakpoints;

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <PDBox mt={6} />
      <PDBox py={3}>
        <Grid container>
          <Grid item xs={12} lg={7}>
            <PDBox mb={3} p={1}>
              <PDTypography
                variant={window.innerWidth < values.sm ? "h3" : "h2"}
                textTransform="capitalize"
                fontWeight="bold"
                color="white"
              >
                prospera dashboard
              </PDTypography>
            </PDBox>
            <Grid container>
              <Grid item xs={12}>
                <Globe
                  display={{ xs: "none", md: "block" }}
                  position="absolute"
                  top="10%"
                  right={0}
                  mt={{ xs: -12, lg: 1 }}
                  mr={{ xs: 0, md: -10, lg: 10 }}
                  canvasStyle={{ marginTop: "3rem" }}
                />
              </Grid>
            </Grid>
            <Grid container spacing={3}>
              <Grid item xs={12} md={5} lg={6} xl={5}>
                <MiniStatisticsCard
                  title={{ text: "registered users", fontWeight: "bold" }}
                  count="2,300"
                  percentage={{ color: "success", text: "+3%" }}
                  icon={<BsGlobe color="white" />}
                />
              </Grid>
              <Grid item xs={12} md={5} lg={6} xl={5}>
                <PDBox mb={3}>
                  <MiniStatisticsCard
                    title={{ text: "new holder's", fontWeight: "bold" }}
                    count="+237,067"
                    percentage={{ color: "error", text: "+4%" }}
                    icon={<IoDocumentText color="white" />}
                  />
                </PDBox>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={10} lg={8.5} xl={7}>
            <Grid item xs={12} lg={10}>
              <Card>
                <SalesTable title="Recent Buy's" rows={salesTableData} />
              </Card>
            </Grid>
          </Grid>
          <Grid container spacing={4} mt="2px">
            <Grid item xs={12} lg={6} xl={7}>
              <ActiveStakers />
            </Grid>
          </Grid>
        </Grid>
      </PDBox>
      <PDTypography
        variant={window.innerWidth < values.sm ? "h5" : "h5"}
        textTransform="capitalize"
        fontWeight="bold"
        color="white"
      >
        blue chips
      </PDTypography>
      <br />
      <CryptoCarousel />
      <PDTypography
        variant={window.innerWidth < values.sm ? "h5" : "h5"}
        textTransform="capitalize"
        fontWeight="bold"
        color="white"
      >
        solana meme coins
      </PDTypography>
      <br />
      <SolanaMemeCoin />
      <PDTypography
        variant={window.innerWidth < values.sm ? "h5" : "h5"}
        textTransform="capitalize"
        fontWeight="bold"
        color="white"
      >
        base meme coins
      </PDTypography>
      <br />
      <BaseMemeCoin />
      <Footer />
    </DashboardLayout>
  );
}

export default Default;
