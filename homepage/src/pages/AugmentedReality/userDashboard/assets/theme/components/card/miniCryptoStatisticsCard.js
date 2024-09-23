/** 
=========================================================
* PROSPERA DEFI USER DASHBOARD - v1.0.0
=========================================================

* Copyright 2024 PROSPERA DEFI (https://www.prosperadefi.com/)

* Design and Coded by Z

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the PROSPERA DEFI PLATFORM.
*/

import colors from "../../../../assets/theme/base/colors";
import borders from "../../../../assets/theme/base/borders";

const { borderRadius } = borders;

const miniCryptoStatisticsCardStyles = {
  card: {
    background: "#000000", // True black background
    border: `1px solid #12BC00`, // Green border color with 1px stroke
    borderRadius: borderRadius.lg,
    boxShadow: "none", // No shadow
    padding: "18px 22px",
  },
  text: "#FFFFFF !important", // Force white text color
  icon: {
    background: "#12BC00", // Green background for the icon
    color: "#FFFFFF", // White color for the icon
    borderRadius: "50%", // Make icon container circular
    overflow: "hidden", // Ensure the icon doesn't overflow the circular container
  },
  chart: {
    success: "#00ff00", // Green color for positive change
    error: "#ff0000", // Red color for negative change
  },
};

export default miniCryptoStatisticsCardStyles;
