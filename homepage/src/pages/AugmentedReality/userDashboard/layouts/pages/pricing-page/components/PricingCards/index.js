/** 

=========================================================
* PROSPERA DEFI DASHBOARD - v1.0.0
=========================================================

* Copyright 2024 PROSPERA DEFI (https://www.prosperadefi.com/)

* Design and Coded by Z

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the PROSPERA DEFI DASHBOARD.

*/

// prop-types is a library for typechecking of props
// @mui material components
import Grid from "@mui/material/Grid";

// prospera defi dashboard components
import PDBox from "../../../../../components/PDBox";

// prospera defi dashboard example components
import DefaultPricingCard from "../../../../../examples/Cards/PricingCards/DefaultPricingCard";
import PropTypes from "prop-types";

function PricingCards({ prices }) {
  const [starter, premium, enterprise] = prices;
  return (
    <PDBox
      position="relative"
      zIndex={10}
      mt={{ xs: -17, xl: -19, xxl: -19 }}
      px={{ xs: 1, sm: 0 }}
    >
      <Grid
        container
        spacing={3}
        sx={{ display: "flex", justifyContent: "center", flexDirection: "row" }}
      >
        <Grid item xs={12} lg={4} xl={3.3}>
          <DefaultPricingCard
            badge={{ color: "dark", label: "starter" }}
            price={{ currency: "$", value: starter }}
            specifications={[
              { label: "2 team members", includes: true },
              { label: "20GB Cloud storage", includes: true },
              { label: "Integration help", includes: false },
              { label: "Sketch Files", includes: false },
              { label: "API Access", includes: false },
              { label: "Complete documentation", includes: false },
            ]}
            action={{
              type: "internal",
              route: "/",
              color: "info",
              label: "join now",
            }}
          />
        </Grid>
        <Grid item xs={12} lg={4} xl={3.3}>
          <DefaultPricingCard
            badge={{ color: "dark", label: "premium" }}
            price={{ currency: "$", value: premium }}
            specifications={[
              { label: "10 team members", includes: true },
              { label: "40GB Cloud storage", includes: true },
              { label: "Integration help", includes: true },
              { label: "Sketch Files", includes: true },
              { label: "API Access", includes: false },
              { label: "Complete documentation", includes: false },
            ]}
            action={{
              type: "internal",
              route: "/",
              color: "info",
              label: "try premium",
            }}
          />
        </Grid>
        <Grid item xs={12} lg={4} xl={3.3}>
          <DefaultPricingCard
            badge={{ color: "dark", label: "enterprise" }}
            price={{ currency: "$", value: enterprise }}
            specifications={[
              { label: "Unlimited team members", includes: true },
              { label: "100GB Cloud storage", includes: true },
              { label: "Integration help", includes: true },
              { label: "Sketch Files", includes: true },
              { label: "API Access", includes: true },
              { label: "Complete documentation", includes: true },
            ]}
            action={{
              type: "internal",
              route: "/",
              color: "info",
              label: "join now",
            }}
          />
        </Grid>
      </Grid>
    </PDBox>
  );
}

// Typechecking props for the PricingCards
PricingCards.propTypes = {
  prices: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default PricingCards;
