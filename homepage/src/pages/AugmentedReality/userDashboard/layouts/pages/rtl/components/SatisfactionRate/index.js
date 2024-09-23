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

import { Card, Stack } from "@mui/material";
import PDBox from "../../../../../components/PDBox";
import PDTypography from "../../../../../components/PDTypography";
import CircularProgress from "@mui/material/CircularProgress";
import { IoHappy } from "react-icons/io5";
import colors from "../../../../../assets/theme/base/colors";
import linearGradient from "../../../../../assets/theme/functions/linearGradient";

const SatisfactionRate = () => {
  const { info, gradients } = colors;
  const { cardContent } = gradients;

  return (
    <Card sx={{ height: "340px" }}>
      <PDBox display="flex" flexDirection="column">
        <PDTypography variant="lg" color="white" fontWeight="bold" mb="4px">
          معدل الرضا
        </PDTypography>
        <PDTypography variant="button" color="text" fontWeight="regular" mb="20px">
          من جميع المشاريع
        </PDTypography>
        <PDBox sx={{ alignSelf: "center", justifySelf: "center", zIndex: "-1" }}>
          <PDBox sx={{ position: "relative", display: "inline-flex" }}>
            <CircularProgress variant="determinate" value={60} size={170} color="info" />
            <PDBox
              sx={{
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
                position: "absolute",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <PDBox
                sx={{
                  background: info.main,
                  transform: "translateY(-50%)",
                  width: "50px",
                  height: "50px",
                  borderRadius: "50%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <IoHappy size="30px" color="#fff" />
              </PDBox>
            </PDBox>
          </PDBox>
        </PDBox>
        <Stack
          sx={({ breakpoints }) => ({
            width: "90%",
            padding: "18px 22px",
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "row",
            height: "82px",
            mx: "auto",
            borderRadius: "20px",
            background: linearGradient(cardContent.main, cardContent.state, cardContent.deg),
            transform: "translateY(-90%)",
            zIndex: "1000",
          })}
        >
          <PDTypography color="text" variant="caption" display="inline-block" fontWeight="regular">
            0%
          </PDTypography>
          <PDBox
            flexDirection="column"
            display="flex"
            justifyContent="center"
            alignItems="center"
            sx={{ minWidth: "80px" }}
          >
            <PDTypography color="white" variant="h3">
              95%
            </PDTypography>
            <PDTypography color="text" variant="caption" fontWeight="regular">
              بناء على الإعجابات
            </PDTypography>
          </PDBox>
          <PDTypography color="text" variant="caption" display="inline-block" fontWeight="regular">
            100%
          </PDTypography>
        </Stack>
      </PDBox>
    </Card>
  );
};

export default SatisfactionRate;
