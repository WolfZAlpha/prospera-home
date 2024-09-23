/** 

=========================================================
* PROSPERA DEFI DASHBOARD - v1.0.0
=========================================================

* Copyright 2024 PROSPERA DEFI (https://www.prosperadefi.com/)

* Design and Coded by Z

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the PROSPERA DEFI DASHBOARD.

*/

import React from "react";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import PDBox from "../../../../components/PDBox";
import PDTypography from "../../../../components/PDTypography";
import PropTypes from "prop-types";
import { LineChart, Line, YAxis } from "recharts";
import miniCryptoStatisticsCardStyles from "../../../../assets/theme/components/card/miniCryptoStatisticsCard";

function MiniCryptoStatisticsCard({ title, count, percentage, icon, sparklineData }) {
  const { card, text, icon: iconStyle, chart } = miniCryptoStatisticsCardStyles;

  return (
    <Card sx={card}>
      <PDBox>
        <Grid container alignItems="center">
          <Grid item>
            <PDBox
              sx={{
                ...iconStyle,
                width: "45px",
                height: "45px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {React.cloneElement(icon, {
                style: { width: "100%", height: "100%", objectFit: "cover" },
              })}
            </PDBox>
          </Grid>
          <Grid item xs={8}>
            <PDBox ml={2} lineHeight={1}>
              <PDTypography
                variant="caption"
                sx={{ color: text }}
                textTransform="capitalize"
                fontWeight={title.fontWeight}
              >
                {title.text}
              </PDTypography>
              <PDTypography variant="subtitle1" fontWeight="bold" sx={{ color: text }}>
                {count}{" "}
                <PDTypography
                  variant="button"
                  sx={{ color: percentage.color === "success" ? chart.success : chart.error }}
                  fontWeight="bold"
                >
                  {percentage.text}
                </PDTypography>
              </PDTypography>
            </PDBox>
          </Grid>
        </Grid>
        {sparklineData && (
          <PDBox mt={2}>
            <LineChart
              width={250}
              height={60}
              data={sparklineData.map((price, index) => ({ price, index }))}
            >
              <YAxis domain={["dataMin", "dataMax"]} hide={true} />
              <Line
                type="monotone"
                dataKey="price"
                stroke={percentage.color === "success" ? chart.success : chart.error}
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </PDBox>
        )}
      </PDBox>
    </Card>
  );
}

MiniCryptoStatisticsCard.propTypes = {
  title: PropTypes.shape({
    text: PropTypes.string,
    fontWeight: PropTypes.string,
  }).isRequired,
  count: PropTypes.string.isRequired,
  percentage: PropTypes.shape({
    color: PropTypes.oneOf(["success", "error"]),
    text: PropTypes.string,
  }).isRequired,
  icon: PropTypes.node.isRequired,
  sparklineData: PropTypes.arrayOf(PropTypes.number),
};

export default MiniCryptoStatisticsCard;
