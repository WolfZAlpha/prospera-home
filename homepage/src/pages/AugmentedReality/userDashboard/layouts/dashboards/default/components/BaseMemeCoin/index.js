/** 

=========================================================
* PROSPERA DEFI DASHBOARD - v1.0.0
=========================================================

* Copyright 2024 PROSPERA DEFI (https://www.prosperadefi.com/)

* Design and Coded by Z

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the PROSPERA DEFI DASHBOARD.

*/

import React, { useState, useEffect, useRef, useCallback } from "react";
import PDBox from "../../../../../components/PDBox";
import BaseMemeCard from "../../../../../examples/Cards/BaseMemeCard";
import { Grid } from "@mui/material";
import axios from "axios";

const useInterval = (callback, delay) => {
  const savedCallback = useRef(callback);

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    const tick = () => savedCallback.current();
    if (delay !== null) {
      const id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
};

const BASE_MEME_CATEGORY_ID = "base-meme-coins";
const COINS_PER_PAGE = 20;

const BaseMemeCoin = () => {
  const [memeCoins, setMemeCoins] = useState([]);
  const [error, setError] = useState(null);
  const carouselRef = useRef(null);

  const fetchMemeCoins = useCallback(async () => {
    try {
      const { data } = await axios.get(`https://api.coingecko.com/api/v3/coins/markets`, {
        params: {
          vs_currency: "usd",
          category: BASE_MEME_CATEGORY_ID,
          order: "market_cap_desc",
          per_page: COINS_PER_PAGE,
          page: 1,
          sparkline: true,
          price_change_percentage: "24h",
        },
      });
      setMemeCoins(data);
      setError(null);
    } catch (error) {
      console.error("Error fetching Base meme coins:", error);
      setError("Failed to fetch meme coins. Please try again later.");
    }
  }, []);

  useEffect(() => {
    fetchMemeCoins();
  }, [fetchMemeCoins]);

  useInterval(fetchMemeCoins, 60000); // Update every 60 seconds

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

  if (error) {
    return <PDBox>{error}</PDBox>;
  }

  return (
    <PDBox mb={3} ref={carouselRef} sx={{ overflowX: "hidden", whiteSpace: "nowrap" }}>
      <Grid container spacing={2} sx={{ display: "inline-flex", flexWrap: "nowrap" }}>
        {memeCoins.map((coin) => (
          <Grid item key={coin.id} sx={{ display: "inline-block" }}>
            <BaseMemeCard
              title={coin.symbol.toUpperCase()}
              count={`$${coin.current_price.toLocaleString()}`}
              percentage={{
                color: coin.price_change_percentage_24h >= 0 ? "success" : "error",
                text: `${coin.price_change_percentage_24h.toFixed(2)}%`,
              }}
              icon={coin.image}
              sparklineData={coin.sparkline_in_7d.price}
            />
          </Grid>
        ))}
      </Grid>
    </PDBox>
  );
};

export default BaseMemeCoin;
