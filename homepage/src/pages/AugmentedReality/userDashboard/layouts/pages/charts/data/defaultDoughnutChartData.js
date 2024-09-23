/** 

=========================================================
* PROSPERA DEFI DASHBOARD - v1.0.0
=========================================================

* Copyright 2024 PROSPERA DEFI (https://www.prosperadefi.com/)

* Design and Coded by Z

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the PROSPERA DEFI DASHBOARD.

*/

import colors from "../../../../assets/theme/base/colors";

//theme colors
const { info } = colors;
const { charts } = info;

export const doughnutChartOptions = {
  series: [50, 15, 10, 20, 5],
  labels: ["Dev.to", "Creative Tim", "Github", "Bootsnipp", "Codeinwp"],
  colors: [charts[100], charts[200], charts[300], charts[400], charts[500]],
  chart: {
    width: "100%",
  },
  stroke: {
    show: false,
  },
  states: {
    hover: {
      filter: {
        type: "none",
      },
    },
  },
  legend: {
    show: false,
  },
  dataLabels: {
    enabled: false,
  },
  hover: { mode: null },
  plotOptions: {
    donut: {
      expandOnClick: false,
      donut: {
        labels: {
          show: false,
        },
      },
    },
  },

  fill: {
    colors: [charts[100], charts[200], charts[300], charts[400], charts[500]],
  },
  tooltip: {
    enabled: true,
    theme: "dark",
  },
};

export const doughnutChartData = [50, 15, 10, 20, 5];
