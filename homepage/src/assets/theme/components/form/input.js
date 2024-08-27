/** 
=========================================================
* PROSPERA DEFI PLATFORM - v1.0.0
=========================================================

* Copyright 2024 PROSPERA DEFI (https://www.prosperadefi.com/)

* Design and Coded by Z

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the PROSPERA DEFI PLATFORM.
*/

// PROSPERA DEFI PLATFORM Base Styles
import colors from "assets/theme/base/colors";
import typography from "assets/theme/base/typography";
import borders from "assets/theme/base/borders";

const { info, inputBorderColor, dark } = colors;
const { size } = typography;
const { borderWidth } = borders;

export default {
  styleOverrides: {
    root: {
      fontSize: size.sm,
      color: dark.main,

      "&:hover:not(.Mui-disabled):before": {
        borderBottom: `${borderWidth[1]} solid ${inputBorderColor}`,
      },

      "&:before": {
        borderColor: inputBorderColor,
      },

      "&:after": {
        borderColor: info.main,
      },
    },
  },
};
