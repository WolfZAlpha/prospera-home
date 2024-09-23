/** 

=========================================================
* PROSPERA DEFI DASHBOARD - v1.0.0
=========================================================

* Copyright 2024 PROSPERA DEFI (https://www.prosperadefi.com/)

* Design and Coded by Z

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the PROSPERA DEFI DASHBOARD.

*/

import React, { useEffect, useRef } from "react";
import { Box } from "@mui/material";

const TradingViewNewsWidget = () => {
  const container = useRef(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-timeline.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = `
      {
        "feedMode": "market",
        "market": "crypto",
        "isTransparent": true,
        "displayMode": "adaptive",
        "width": "100%",
        "height": 550,
        "colorTheme": "dark",
        "locale": "en"
      }
    `;

    if (container.current) {
      container.current.appendChild(script);
    }

    return () => {
      if (container.current) {
        container.current.removeChild(script);
      }
    };
  }, []);

  return (
    <Box ref={container} sx={{ width: "100%", height: 550 }}>
      <div className="tradingview-widget-container">
        <div className="tradingview-widget-container__widget"></div>
        <div className="tradingview-widget-copyright">
          <a href="https://www.tradingview.com/" rel="noopener nofollow" target="_blank"></a>
        </div>
      </div>
    </Box>
  );
};

export default TradingViewNewsWidget;
