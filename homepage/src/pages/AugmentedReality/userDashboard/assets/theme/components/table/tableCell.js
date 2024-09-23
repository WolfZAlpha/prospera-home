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
import borders from "../../../../assets/theme/base/borders";
import colors from "../../../../assets/theme/base/colors";

// prospera defi dashboard helper functions
import pxToRem from "../../../../assets/theme/functions/pxToRem";

const { borderWidth } = borders;
const { grey, transparent } = colors;

export default {
  styleOverrides: {
    root: {
      backgroundColor: `${transparent.main} !important`,
      padding: `${pxToRem(12)} ${pxToRem(16)}`,
      "& .MuiBox-root": {
        pl: "0px !important",
      },
      borderBottom: `${borderWidth[1]} solid ${grey[600]}`,
    },
  },
};
