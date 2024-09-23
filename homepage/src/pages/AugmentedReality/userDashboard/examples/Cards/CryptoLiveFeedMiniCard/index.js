/** 

=========================================================
* PROSPERA DEFI DASHBOARD - v1.0.0
=========================================================

* Copyright 2024 PROSPERA DEFI (https://www.prosperadefi.com/)

* Design and Coded by Z

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the PROSPERA DEFI DASHBOARD.

*/

import React from "react";
import PropTypes from "prop-types";
import MiniCryptoStatisticsCard from "../StatisticsCards/MiniCryptoStatisticsCard";

function CryptoLiveFeedMiniCard({ title, count, percentage, icon, sparklineData }) {
  return (
    <MiniCryptoStatisticsCard
      title={{
        text: title,
        fontWeight: "medium",
      }}
      count={count}
      percentage={percentage}
      icon={<img src={icon} alt={title} style={{ width: "25px", height: "25px" }} />}
      sparklineData={sparklineData}
    />
  );
}

CryptoLiveFeedMiniCard.propTypes = {
  title: PropTypes.string.isRequired,
  count: PropTypes.string.isRequired,
  percentage: PropTypes.shape({
    color: PropTypes.oneOf(["success", "error"]),
    text: PropTypes.string,
  }).isRequired,
  icon: PropTypes.string.isRequired,
  sparklineData: PropTypes.arrayOf(PropTypes.number).isRequired,
};

export default CryptoLiveFeedMiniCard;
