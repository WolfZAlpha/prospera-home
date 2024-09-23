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

export const radarChartOptions = {
  chart: {
    type: "radar",
    toolbar: {
      show: false,
    },
  },
  labels: ["Travel", "Shopping", "Food", "Grocery", "Security", "Others"],
  colors: [charts[100], charts[400]],
  chart: {
    width: "100%",
  },
  states: {
    hover: {
      filter: {
        type: "none",
      },
    },
  },
  plotOptions: {
    radar: {
      size: undefined,
      offsetX: 0,
      offsetY: 0,
      polygons: {
        strokeColors: "#56577A",
        strokeWidth: 1,
        connectorColors: "#56577A",
        fill: {
          colors: undefined,
        },
      },
    },
  },
  yaxis: {
    show: false,
  },
  markers: {
    show: false,
    enabled: false,
  },
  xaxis: {
    labels: {
      style: {
        fontSize: "20px",
        color: "#8F9BBA",
      },
    },
  },
  stroke: {
    show: true,
    width: 2,
    colors: [charts[100], charts[400]],
    dashArray: 0,
  },
  legend: {
    show: false,
  },
  dataLabels: {
    enabled: false,
  },
  fill: {
    colors: [charts[100], charts[400]],
    type: "solid",
  },
  tooltip: {
    enabled: true,
    theme: "dark",
  },
};

export const radarChartData = [
  {
    name: "Subject 1",
    data: [45, 52, 38, 24, 33, 10],
  },
  {
    name: "Subject 2",
    data: [26, 21, 20, 6, 8, 15],
  },
];
