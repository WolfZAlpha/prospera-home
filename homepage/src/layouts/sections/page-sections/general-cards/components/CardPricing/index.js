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
import Grid from "@mui/material/Grid";

// PROSPERA DEFI PLATFORM components
import MKBox from "components/MKBox";

// PROSPERA DEFI PLATFORM examples
import SimplePricingCard from "examples/Cards/PricingCards/SimplePricingCard";

function CardPricing() {
  return (
    <MKBox pt={6} pb={3} px={3}>
      <Grid container item xs={12} lg={6} sx={{ mx: "auto", px: { xs: 0, lg: 6 } }}>
        <SimplePricingCard
          variant="gradient"
          color="dark"
          title="Premium"
          description="Free access for 200 members"
          price={{ value: "$499", type: "year" }}
          action={{ type: "internal", route: "/", label: "buy now" }}
          specifications={[
            "Complete documentation",
            "Working materials in Sketch",
            "20GB cloud storage",
            "100 team members",
          ]}
        />
      </Grid>
    </MKBox>
  );
}

export default CardPricing;
