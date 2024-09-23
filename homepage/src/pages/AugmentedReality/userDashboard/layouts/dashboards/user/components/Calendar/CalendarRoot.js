/** 

=========================================================
* PROSPERA DEFI DASHBOARD - v1.0.0
=========================================================

* Copyright 2024 PROSPERA DEFI (https://www.prosperadefi.com/)

* Design and Coded by Z

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the PROSPERA DEFI DASHBOARD.

*/

import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

export default styled(Box)(({ theme }) => {
  const { palette, typography, functions, boxShadows } = theme;
  const { white, grey, primary, info, warning, success, error, secondary } = palette;
  const { size, fontWeightMedium, fontWeightBold } = typography;
  const { pxToRem } = functions;
  const { buttonBoxShadow } = boxShadows;

  return {
    height: "100%",
    "& .fc": {
      height: "100%",
      "& .fc-media-screen": {
        height: "100%",
      },
      "& .fc-scroller": {
        height: "100% !important",
        overflowY: "auto",
        "&::-webkit-scrollbar": {
          width: "6px",
          height: "6px",
        },
        "&::-webkit-scrollbar-thumb": {
          backgroundColor: "rgba(255, 255, 255, 0.3)",
          borderRadius: "3px",
        },
        "&::-webkit-scrollbar-track": {
          backgroundColor: "transparent",
        },
      },
      "& .fc-daygrid-body": {
        height: "auto !important",
      },
      "& .fc-scrollgrid-sync-table": {
        height: "auto !important",
      },
      "& .fc-theme-standard": {
        "& .fc-scrollgrid": {
          border: "none",
        },
        "& td, & th": {
          borderColor: grey[600],
        },
      },
      "& .fc-col-header": {
        "& th": {
          borderWidth: "0px",
        },
      },
      "& .fc-day-today": {
        backgroundColor: `${functions.rgba("#01ff02", 0.1)} !important`,
        "& .fc-daygrid-day-number": {
          color: "#01ff02",
          fontWeight: "bold",
        },
        "& .fc-daygrid-day-frame": {
          boxShadow: "0 0 15px rgba(1, 255, 2, 0.3)",
        },
      },
      "& .fc-col-header-cell-cushion": {
        fontSize: size.xs,
        fontWeight: fontWeightMedium,
        color: white.main,
      },
      "& .fc-daygrid-day-number": {
        color: white.main,
        fontSize: size.sm,
        fontWeight: fontWeightMedium,
        width: "100%",
        textAlign: "center",
      },
      "& .fc-daygrid-day.fc-day-other .fc-daygrid-day-top": {
        opacity: 0.3,
      },
      "& .fc-event": {
        margin: `${pxToRem(0.5)} ${pxToRem(2)}`,
        border: "none",
        borderRadius: pxToRem(10),
        fontSize: size.sm,
        fontWeight: fontWeightMedium,
        cursor: "pointer",
        transition: "background-color 0.3s",
        "&:hover": {
          backgroundColor: "rgba(255, 255, 255, 0.1)",
        },
      },
      "& .fc-daygrid-event-harness": {
        marginTop: pxToRem(2),
      },
      "& .fc-event-title": {
        padding: `${pxToRem(3)} ${pxToRem(4.8)} ${pxToRem(2.5)} !important`,
      },
      "& .fc-button": {
        backgroundColor: `${secondary.main} !important`,
        borderColor: `${secondary.main} !important`,
        fontSize: `${size.sm} !important`,
        boxShadow: `${buttonBoxShadow.main} !important`,
        opacity: "1 !important",
        transition: `all 150ms ease-in`,
        "&:hover, &:focus, &:active": {
          transform: "scale(1.02)",
          boxShadow: `${buttonBoxShadow.stateOf} !important`,
          backgroundColor: `${secondary.main} !important`,
          borderColor: `${secondary.main} !important`,
        },
      },
      "& .fc-button-group": {
        "& .fc-button": {
          "&:first-of-type": {
            borderTopLeftRadius: pxToRem(10),
            borderBottomLeftRadius: pxToRem(10),
          },
          "&:last-of-type": {
            borderTopRightRadius: pxToRem(10),
            borderBottomRightRadius: pxToRem(10),
          },
        },
      },
      "& .fc-toolbar-title": {
        fontSize: `${size.lg} !important`,
        fontWeight: `${fontWeightBold} !important`,
        color: white.main,
      },
    },
    "& .event-primary": { backgroundColor: primary.main, "& *": { color: white.main } },
    "& .event-secondary": { backgroundColor: secondary.main, "& *": { color: white.main } },
    "& .event-info": { backgroundColor: info.main, "& *": { color: white.main } },
    "& .event-success": { backgroundColor: success.main, "& *": { color: white.main } },
    "& .event-warning": { backgroundColor: warning.main, "& *": { color: white.main } },
    "& .event-error": { backgroundColor: error.main, "& *": { color: white.main } },
  };
});
