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
import Container from "@mui/material/Container";

// prospera defi dashboard components
import PDBox from "../../../components/PDBox";

// prospera defi dashboard example components
import PageLayout from "../../../examples/LayoutContainers/PageLayout";

// Pricing page components
import Header from "./components/Header";
import Footer from "./components/Footer";
import PricingCards from "./components/PricingCards";
import TrustedBrands from "./components/TrustedBrands";
import Faq from "./components/Faq";

function PricingPage() {
  const [tabValue, setTabValue] = useState(0);
  const [prices, setPrices] = useState(["59", "89", "99"]);

  const handleSetTabValue = (event, newValue) => {
    setTabValue(newValue);

    if (event.currentTarget.id === "annual") {
      setPrices(["119", "159", "399"]);
    } else {
      setPrices(["59", "89", "99"]);
    }
  };

  return (
    <PageLayout>
      <Header tabValue={tabValue} tabHandler={handleSetTabValue} />
      <Container>
        <PricingCards prices={prices} />
        <TrustedBrands />
        <Faq />
      </Container>
      <PDBox mt={8}>
        <Footer />
      </PDBox>
    </PageLayout>
  );
}

export default PricingPage;
