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
import colors from "../../../../assets/theme/base/colors";
import borders from "../../../../assets/theme/base/borders";

// prospera defi dashboard helper functions
import pxToRem from "../../../../assets/theme/functions/pxToRem";
import boxShadow from "../../../../assets/theme/functions/boxShadow";

const { dark, white, info } = colors;
const { borderWidth, borderColor } = borders;

export default {
  styleOverrides: {
    root: {
      background: info.main,
      fill: info.main,
      stroke: info.main,
      strokeWidth: pxToRem(12),
      width: pxToRem(20),
      height: pxToRem(20),
      border: `${borderWidth[3]} solid ${info.main}`,
      borderRadius: "50%",
      zIndex: 99,
      transition: "all 200ms linear",

      "&.Mui-active": {
        background: white.main,
        fill: white.main,
        stroke: white.main,
        borderColor: white.main,
        boxShadow: boxShadow([0, 0], [0, 2], white.main, 1),
      },

      "&.Mui-completed": {
        background: white.main,
        fill: white.main,
        stroke: white.main,
        borderColor: white.main,
        boxShadow: boxShadow([0, 0], [0, 2], white.main, 1),
      },
    },
  },
};
