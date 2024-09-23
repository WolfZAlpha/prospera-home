/** 
=========================================================
* PROSPERA DEFI USER DASHBOARD - v1.0.0
=========================================================

* Copyright 2024 PROSPERA DEFI (https://www.prosperadefi.com/)

* Design and Coded by Z

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the PROSPERA DEFI PLATFORM.
*/

// prospera defi dashboard base styles
import colors from "../../../assets/theme/base/colors";
import typography from "../../../assets/theme/base/typography";

const { white } = colors;
const { size } = typography;

export default {
  styleOverrides: {
    li: {
      lineHeight: 0,
      color: white.main,
    },

    separator: {
      fontSize: size.sm,
    },
  },
};
