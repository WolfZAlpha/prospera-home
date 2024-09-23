/** 

=========================================================
* PROSPERA DEFI DASHBOARD - v1.0.0
=========================================================

* Copyright 2024 PROSPERA DEFI (https://www.prosperadefi.com/)

* Design and Coded by Z

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the PROSPERA DEFI DASHBOARD.

*/

import React, { useState, useEffect, useRef } from "react";
import PDBox from "../../../../../components/PDBox";
import CryptoLiveFeedMiniCard from "../../../../../examples/Cards/CryptoLiveFeedMiniCard";
import { Grid } from "@mui/material";
import axios from "axios";

// Custom hook for setting an interval
function useInterval(callback, delay) {
  useEffect(() => {
    const id = setInterval(callback, delay);
    return () => clearInterval(id);
  }, [callback, delay]);
}

// List of crypto IDs to fetch
const cryptoIds = [
  "bitcoin",
  "ethereum",
  "tether",
  "binancecoin",
  "solana",
  "usd-coin",
  "ripple",
  "stellar",
  "the-open-network",
  "dogecoin",
  "cardano",
  "tron",
  "avalanche-2",
  "shiba-inu",
  "bitcoin-cash",
  "chainlink",
  "polkadot",
  "dai",
  "litecoin",
  "uniswap",
  "aptos",
  "matic-network",
  "ethereum-classic",
  "crypto-com-chain",
  "sui",
  "stacks",
  "monero",
];

const CryptoCarousel = () => {
  const [cryptoData, setCryptoData] = useState([]);
  const carouselRef = useRef(null);

  const fetchCryptoData = async () => {
    try {
      const response = await axios.get(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${cryptoIds.join(
          ","
        )}&order=market_cap_desc&sparkline=true&price_change_percentage=24h`
      );
      setCryptoData(response.data);
    } catch (error) {
      console.error("Error fetching crypto data:", error);
    }
  };

  useEffect(() => {
    fetchCryptoData();
  }, []);

  useInterval(() => {
    fetchCryptoData();
  }, 60000); // Update every 60 seconds

  useEffect(() => {
    const carousel = carouselRef.current;
    let scrollInterval;

    const startScrolling = () => {
      scrollInterval = setInterval(() => {
        if (carousel.scrollLeft >= carousel.scrollWidth - carousel.clientWidth) {
          carousel.scrollLeft = 0;
        } else {
          carousel.scrollLeft += 1;
        }
      }, 30);
    };

    startScrolling();

    return () => clearInterval(scrollInterval);
  }, []);

  return (
    <PDBox mb={3} ref={carouselRef} sx={{ overflowX: "hidden", whiteSpace: "nowrap" }}>
      <Grid container spacing={2} sx={{ display: "inline-flex", flexWrap: "nowrap" }}>
        {cryptoData.map((crypto) => (
          <Grid item key={crypto.id} sx={{ display: "inline-block" }}>
            <CryptoLiveFeedMiniCard
              title={crypto.symbol.toUpperCase()}
              count={`$${crypto.current_price.toLocaleString()}`}
              percentage={{
                color: crypto.price_change_percentage_24h >= 0 ? "success" : "error",
                text: `${crypto.price_change_percentage_24h.toFixed(2)}%`,
              }}
              icon={crypto.image}
              sparklineData={crypto.sparkline_in_7d.price}
            />
          </Grid>
        ))}
      </Grid>
    </PDBox>
  );
};

export default CryptoCarousel;
