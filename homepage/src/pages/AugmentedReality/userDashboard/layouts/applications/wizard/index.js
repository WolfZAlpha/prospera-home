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
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";

// prospera defi dashboard components
import PDBox from "../../../components/PDBox";
import PDTypography from "../../../components/PDTypography";
import PDButton from "../../../components/PDButton";

// prospera defi dashboard example components
import DashboardLayout from "../../../examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "../../../examples/Navbars/DashboardNavbar";
import Footer from "../../../examples/Footer";

// Wizard page components
import About from "./components/About";
import Account from "./components/Account";
import Address from "./components/Address";

function getSteps() {
  return ["About", "Account", "Address"];
}

function getStepContent(stepIndex) {
  switch (stepIndex) {
    case 0:
      return <About />;
    case 1:
      return <Account />;
    case 2:
      return <Address />;
    default:
      return null;
  }
}

function Wizard() {
  const [activeStep, setActiveStep] = useState(0);
  const steps = getSteps();
  const isLastStep = activeStep === steps.length - 1;

  const handleNext = () => setActiveStep(activeStep + 1);
  const handleBack = () => setActiveStep(activeStep - 1);

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <PDBox pt={3} pb={8}>
        <Grid container justifyContent="center">
          <Grid item xs={12} lg={8}>
            <PDBox mt={6} mb={1} textAlign="center">
              <PDBox mb={1}>
                <PDTypography variant="h3" fontWeight="bold" color="white">
                  Build Your Profile
                </PDTypography>
              </PDBox>
              <PDTypography variant="button" fontWeight="regular" color="white">
                This information will let us know more about you.
              </PDTypography>
            </PDBox>

            <Stepper activeStep={activeStep} alternativeLabel>
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
            <Card>
              <PDBox p={2}>
                <PDBox>
                  {getStepContent(activeStep)}
                  <PDBox mt={3} width="100%" display="flex" justifyContent="space-between">
                    {activeStep === 0 ? (
                      <PDBox />
                    ) : (
                      <PDButton variant="gradient" color="light" onClick={handleBack}>
                        back
                      </PDButton>
                    )}
                    <PDButton
                      variant="contained"
                      color="info"
                      onClick={!isLastStep ? handleNext : undefined}
                    >
                      {isLastStep ? "send" : "next"}
                    </PDButton>
                  </PDBox>
                </PDBox>
              </PDBox>
            </Card>
          </Grid>
        </Grid>
      </PDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Wizard;
