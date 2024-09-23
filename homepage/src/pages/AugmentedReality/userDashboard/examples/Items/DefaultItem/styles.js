/** 

=========================================================
* PROSPERA DEFI DASHBOARD - v1.0.0
=========================================================

* Copyright 2024 PROSPERA DEFI (https://www.prosperadefi.com/)

* Design and Coded by Z

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the PROSPERA DEFI DASHBOARD.

*/

import colors from "../../../assets/theme/base/colors";

function defaultItemIconBox(theme, ownerState) {
  const { functions, palette, borders } = theme;
  const { color } = ownerState;

  const { pxToRem, rgba } = functions;
  const { info } = colors;
  const { borderRadius } = borders;

  return {
    display: "grid",
    placeItems: "center",
    width: pxToRem(48),
    height: pxToRem(48),
    borderRadius: borderRadius.lg,
    background: info.main,
  };
}

export { defaultItemIconBox };
