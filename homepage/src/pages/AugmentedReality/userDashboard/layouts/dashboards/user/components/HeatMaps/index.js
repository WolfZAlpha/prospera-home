/** 

=========================================================
* PROSPERA DEFI DASHBOARD - v1.0.0
=========================================================

* Copyright 2024 PROSPERA DEFI (https://www.prosperadefi.com/)

* Design and Coded by Z

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the PROSPERA DEFI DASHBOARD.

*/

import React, { useState } from "react";
import PropTypes from "prop-types";
import { Card, Select, MenuItem } from "@mui/material";
import PDBox from "../../../../../components/PDBox";
import PDTypography from "../../../../../components/PDTypography";
import StockHeatmap from "./StockHeatmap";
import CryptoCoinsHeatmap from "./CryptoCoinsHeatmap";
import ForexCrossRates from "./ForexCrossRates";
import ETFHeatmap from "./ETFHeatmap";
import ForexHeatmap from "./ForexHeatmap";

function HeatMaps({ title }) {
  const [selectedHeatmap, setSelectedHeatmap] = useState("stock");

  const heatmapComponents = {
    stock: StockHeatmap,
    crypto: CryptoCoinsHeatmap,
    forex: ForexCrossRates,
    etf: ETFHeatmap,
    forexHeat: ForexHeatmap,
  };

  const HeatmapComponent = heatmapComponents[selectedHeatmap];

  return (
    <Card sx={{ height: "100%" }}>
      <PDBox display="flex" justifyContent="space-between" alignItems="center" mb={2}>
        <PDTypography variant="lg" fontWeight="bold" color="white" textTransform="capitalize">
          {title}
        </PDTypography>
        <Select
          value={selectedHeatmap}
          onChange={(e) => setSelectedHeatmap(e.target.value)}
          sx={{ color: "white" }}
        >
          <MenuItem value="stock">Stock Heatmap</MenuItem>
          <MenuItem value="crypto">Crypto Coins Heatmap</MenuItem>
          <MenuItem value="forex">Forex Cross Rates</MenuItem>
          <MenuItem value="etf">ETF Heatmap</MenuItem>
          <MenuItem value="forexHeat">Forex Heatmap</MenuItem>
        </Select>
      </PDBox>
      <PDBox height="calc(100% - 70px)">
        <HeatmapComponent />
      </PDBox>
    </Card>
  );
}

HeatMaps.propTypes = {
  title: PropTypes.string.isRequired,
};

export default HeatMaps;
