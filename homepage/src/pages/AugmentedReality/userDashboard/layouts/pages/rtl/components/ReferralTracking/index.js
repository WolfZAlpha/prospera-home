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
import colors from "../../../../../assets/theme/base/colors";
import { FaEllipsisH } from "react-icons/fa";
import linearGradient from "../../../../../assets/theme/functions/linearGradient";
import CircularProgress from "@mui/material/CircularProgress";

function ReferralTracking() {
  const { info, gradients } = colors;
  const { cardContent } = gradients;

  return (
    <Card>
      <PDBox sx={{ width: "100%" }}>
        <PDBox
          display="flex"
          alignItems="center"
          justifyContent="space-beetween"
          sx={{ width: "100%" }}
          mb="40px"
        >
          <PDTypography variant="lg" color="white" mr="auto">
            تتبع الإحالة
          </PDTypography>
          <PDBox
            display="flex"
            justifyContent="center"
            alignItems="center"
            bgColor="#22234B"
            sx={{ width: "37px", height: "37px", cursor: "pointer", borderRadius: "12px" }}
          >
            <FaEllipsisH color={info.main} size="18px" />
          </PDBox>
        </PDBox>
        <PDBox
          display="flex"
          sx={({ breakpoints }) => ({
            [breakpoints.up("xs")]: {
              flexDirection: "column",
              gap: "16px",
              justifyContent: "center",
              alignItems: "center",
            },
            [breakpoints.up("md")]: {
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "center",
            },
          })}
        >
          <PDBox
            direction="column"
            spacing="20px"
            width="500px"
            maxWidth="50%"
            sx={({ breakpoints }) => ({
              mr: "auto",
              [breakpoints.only("md")]: {
                mr: "75px",
              },
              [breakpoints.only("xl")]: {
                width: "500px",
                maxWidth: "38%",
              },
            })}
          >
            <PDBox
              display="flex"
              width="220px"
              p="20px 22px"
              flexDirection="column"
              mb="20px"
              sx={({ breakpoints }) => ({
                background: linearGradient(cardContent.main, cardContent.state, cardContent.deg),
                borderRadius: "20px",
                [breakpoints.up("xl")]: {
                  maxWidth: "110px !important",
                },
                [breakpoints.up("xxl")]: {
                  minWidth: "180px",
                  maxWidth: "100% !important",
                },
              })}
            >
              <PDTypography color="text" variant="button" fontWeight="regular" mb="5px">
                مدعو
              </PDTypography>
              <PDTypography color="white" variant="lg" fontWeight="bold">
                145 شخصا
              </PDTypography>
            </PDBox>
            <PDBox
              display="flex"
              width="220px"
              p="20px 22px"
              flexDirection="column"
              sx={({ breakpoints }) => ({
                background: linearGradient(cardContent.main, cardContent.state, cardContent.deg),
                borderRadius: "20px",
                [breakpoints.up("xl")]: {
                  maxWidth: "110px !important",
                },
                [breakpoints.up("xxl")]: {
                  minWidth: "180px",
                  maxWidth: "100% !important",
                },
              })}
            >
              <PDTypography color="text" variant="button" fontWeight="regular" mb="5px">
                علاوة
              </PDTypography>
              <PDTypography color="white" variant="lg" fontWeight="bold">
                1,465
              </PDTypography>
            </PDBox>
          </PDBox>
          <PDBox sx={{ position: "relative", display: "inline-flex" }}>
            <CircularProgress
              variant="determinate"
              value={70}
              size={window.innerWidth >= 1024 ? 200 : window.innerWidth >= 768 ? 170 : 200}
              color="success"
            />
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
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
              >
                <PDTypography color="text" variant="button" mb="4px">
                  أمان
                </PDTypography>
                <PDTypography color="white" variant="d5" fontWeight="bold" mb="4px">
                  9.3
                </PDTypography>
                <PDTypography color="text" variant="button">
                  مجموع النقاط
                </PDTypography>
              </PDBox>
            </PDBox>
          </PDBox>
        </PDBox>
      </PDBox>
    </Card>
  );
}

export default ReferralTracking;
