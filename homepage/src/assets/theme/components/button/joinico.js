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

// PROSPERA DEFI PLATFORM Helper Functions
import pxToRem from "assets/theme/functions/pxToRem";

const { black, text } = colors;
const { size } = typography;

export default {
  base: {
    backgroundColor: black.main,
    minHeight: pxToRem(40),
    color: text.main,
    padding: `${pxToRem(10)} ${pxToRem(24)}`,

    "&:hover": {
      backgroundColor: black.main,
    },

    "&:active, &:active:focus, &:active:hover": {
      opacity: 0.85,
    },

    "& .material-icon, .material-icons-round, svg": {
      fontSize: `${pxToRem(16)} !important`,
    },
  },

  small: {
    minHeight: pxToRem(32),
    padding: `${pxToRem(6)} ${pxToRem(16)}`,
    fontSize: size.xs,

    "& .material-icon, .material-icons-round, svg": {
      fontSize: `${pxToRem(12)} !important`,
    },
  },

  large: {
    minHeight: pxToRem(47),
    padding: `${pxToRem(12)} ${pxToRem(28)}`,
    fontSize: size.sm,

    "& .material-icon, .material-icons-round, svg": {
      fontSize: `${pxToRem(22)} !important`,
    },
  },

  primary: {
    backgroundColor: black.main,

    "&:hover": {
      backgroundColor: black.main,
    },

    "&:focus:not(:hover)": {
      backgroundColor: black.focus,
    },
  },

  secondary: {
    backgroundColor: black.main,

    "&:hover": {
      backgroundColor: black.main,
    },

    "&:focus:not(:hover)": {
      backgroundColor: black.focus,
    },
  },
};
