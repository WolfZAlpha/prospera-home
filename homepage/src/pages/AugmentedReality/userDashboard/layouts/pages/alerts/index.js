/** 

=========================================================
* PROSPERA DEFI DASHBOARD - v1.0.0
=========================================================

* Copyright 2024 PROSPERA DEFI (https://www.prosperadefi.com/)

* Design and Coded by Z

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the PROSPERA DEFI DASHBOARD.

*/

import { useState } from "react";

// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// prospera defi dashboard components
import PDBox from "../../../components/PDBox";
import PDTypography from "../../../components/PDTypography";
import PDAlert from "../../../components/PDAlert";
import PDButton from "../../../components/PDButton";
import PDSnackbar from "../../../components/PDSnackbar";

// prospera defi dashboard example components
import DashboardLayout from "../../../examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "../../../examples/Navbars/DashboardNavbar";
import Footer from "../../../examples/Footer";

function Alerts() {
  const [successSB, setSuccessSB] = useState(false);
  const [infoSB, setInfoSB] = useState(false);
  const [warningSB, setWarningSB] = useState(false);
  const [errorSB, setErrorSB] = useState(false);

  const openSuccessSB = () => setSuccessSB(true);
  const closeSuccessSB = () => setSuccessSB(false);
  const openInfoSB = () => setInfoSB(true);
  const closeInfoSB = () => setInfoSB(false);
  const openWarningSB = () => setWarningSB(true);
  const closeWarningSB = () => setWarningSB(false);
  const openErrorSB = () => setErrorSB(true);
  const closeErrorSB = () => setErrorSB(false);

  const alertContent = (name) => (
    <PDTypography variant="body2" color="white">
      A simple {name} alert with{" "}
      <PDTypography component="a" href="#" variant="body2" fontWeight="medium" color="white">
        an example link
      </PDTypography>
      . Give it a click if you like.
    </PDTypography>
  );

  const renderSuccessSB = (
    <PDSnackbar
      color="success"
      icon="check"
      title="Vision UI Dashboard"
      content="Hello, world! This is a notification message"
      dateTime="11 mins ago"
      open={successSB}
      onClose={closeSuccessSB}
      close={closeSuccessSB}
    />
  );

  const renderInfoSB = (
    <PDSnackbar
      color="info"
      icon="notifications"
      title="Vision UI Dashboard"
      content="Hello, world! This is a notification message"
      dateTime="11 mins ago"
      open={infoSB}
      onClose={closeInfoSB}
      close={closeInfoSB}
    />
  );

  const renderWarningSB = (
    <PDSnackbar
      color="warning"
      icon="star"
      title="Vision UI Dashboard"
      content="Hello, world! This is a notification message"
      dateTime="11 mins ago"
      open={warningSB}
      onClose={closeWarningSB}
      close={closeWarningSB}
    />
  );

  const renderErrorSB = (
    <PDSnackbar
      color="error"
      icon="warning"
      title="Vision UI Dashboard"
      content="Hello, world! This is a notification message"
      dateTime="11 mins ago"
      open={errorSB}
      onClose={closeErrorSB}
      close={closeErrorSB}
    />
  );

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <PDBox mt={6} mb={3}>
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={12} lg={8}>
            <Card>
              <PDBox mb="24px">
                <PDTypography variant="lg" color="white" fontWeight="bold">
                  Alerts
                </PDTypography>
              </PDBox>
              <PDBox>
                <PDAlert color="primary" dismissible>
                  {alertContent("primary")}
                </PDAlert>
                <PDAlert color="secondary" dismissible>
                  {alertContent("secondary")}
                </PDAlert>
                <PDAlert color="success" dismissible>
                  {alertContent("success")}
                </PDAlert>
                <PDAlert color="error" dismissible>
                  {alertContent("error")}
                </PDAlert>
                <PDAlert color="warning" dismissible>
                  {alertContent("warning")}
                </PDAlert>
                <PDAlert color="info" dismissible>
                  {alertContent("info")}
                </PDAlert>
                <PDAlert color="lightblue" dismissible>
                  {alertContent("lightblue")}
                </PDAlert>
                <PDAlert color="dark" dismissible>
                  {alertContent("dark")}
                </PDAlert>
              </PDBox>
            </Card>
          </Grid>

          <Grid item xs={12} lg={8}>
            <Card>
              <PDBox lineHeight={0} display="flex" flexDirection="column" mb="24px">
                <PDTypography variant="lg" color="white" fontWeight="bold">
                  Notifications
                </PDTypography>
                <PDTypography variant="button" color="text" fontWeight="regular">
                  Notifications on this page use Toasts from Bootstrap. Read more details here.
                </PDTypography>
              </PDBox>
              <PDBox>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6} lg={3}>
                    <PDButton variant="contained" color="success" onClick={openSuccessSB} fullWidth>
                      success notification
                    </PDButton>
                    {renderSuccessSB}
                  </Grid>
                  <Grid item xs={12} sm={6} lg={3}>
                    <PDButton variant="contained" color="info" onClick={openInfoSB} fullWidth>
                      info notification
                    </PDButton>
                    {renderInfoSB}
                  </Grid>
                  <Grid item xs={12} sm={6} lg={3}>
                    <PDButton variant="contained" color="warning" onClick={openWarningSB} fullWidth>
                      warning notification
                    </PDButton>
                    {renderWarningSB}
                  </Grid>
                  <Grid item xs={12} sm={6} lg={3}>
                    <PDButton variant="contained" color="error" onClick={openErrorSB} fullWidth>
                      error notification
                    </PDButton>
                    {renderErrorSB}
                  </Grid>
                </Grid>
              </PDBox>
            </Card>
          </Grid>
        </Grid>
      </PDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Alerts;
