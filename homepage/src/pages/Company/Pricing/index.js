/** 
=========================================================
* PROSPERA DEFI PLATFORM - v1.0.0
=========================================================

* Copyright 2024 PROSPERA DEFI (https://www.prosperadefi.com/)

* Design and Coded by Z

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the PROSPERA DEFI PLATFORM.
*/

// @mui material components
// import Card from "@mui/material/Card";

// PROSPERA DEFI PLATFORM React components
import MKBox from "components/MKBox";

// PROSPERA DEFI PLATFORM React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";

// Pricing page sections
import Header from "pages/Company/Pricing/sections/Header";
import AboutUs from "pages/Company/Pricing/sections/AboutUs";
import PricingSection from "pages/Company/Pricing/sections/Pricing";
import LifetimeMembership from "pages/Company/Pricing/sections/LifetimeMembership";
import Testimonials from "pages/Company/Pricing/sections/Testimonials";
import Trust from "pages/Company/Pricing/sections/Trust";
import Faq from "pages/Company/Pricing/sections/Faq";

// Routes
import routes from "routes";
import footerRoutes from "footer.routes";

function Pricing() {
  return (
    <>
      <DefaultNavbar
        routes={routes}
        action={{
          type: "external",
          route: "https://www.creative-tim.com/product/material-kit-pro-react",
          label: "buy now",
        }}
        transparent
        light
      />
      <Header />
      <MKBox p={3}>
        <AboutUs />
        <PricingSection />
        <LifetimeMembership />
        <Testimonials />
        <Trust />
        <Faq />
      </MKBox>
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default Pricing;
