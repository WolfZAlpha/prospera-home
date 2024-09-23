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
import { Card, Stack, Grid } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import PDBox from "../../../../../../components/PDBox";
import PDTypography from "../../../../../../components/PDTypography";
import WhiteLightning from "../../../../../../assets/images/shapes/white-lightning.svg";
import GreenLightning from "../../../../../../assets/images/shapes/green-lightning.svg";
import linearGradient from "../../../../../../assets/theme/functions/linearGradient";
import colors from "../../../../../../assets/theme/base/colors";
import carProfile from "../../../../../../assets/images/shapes/car-profile.svg";
import BasicLineChart from "../../../../../../examples/Charts/LineCharts/BasicLineChart/index";
import { lineChartDataProfile1, lineChartDataProfile2 } from "../../data/lineChart";
import { lineChartOptionsProfile2, lineChartOptionsProfile1 } from "../../data/lineChart";
const CarInformations = () => {
  const { gradients, info } = colors;
  const { cardContent } = gradients;
  return (
    <Card
      sx={({ breakpoints }) => ({
        [breakpoints.up("xxl")]: {
          maxHeight: "400px",
        },
      })}
    >
      <PDBox display="flex" flexDirection="column">
        <PDTypography variant="lg" color="white" fontWeight="bold" mb="6px">
          Car Informations
        </PDTypography>
        <PDTypography variant="button" color="text" fontWeight="regular" mb="30px">
          Hello, Mark Johnson! Your Car is ready.
        </PDTypography>
        <Stack
          spacing="24px"
          background="#fff"
          sx={({ breakpoints }) => ({
            [breakpoints.up("sm")]: {
              flexDirection: "column",
            },
            [breakpoints.up("md")]: {
              flexDirection: "row",
            },
            [breakpoints.only("xl")]: {
              flexDirection: "column",
            },
          })}
        >
          <PDBox
            display="flex"
            flexDirection="column"
            justifyContent="center"
            sx={({ breakpoints }) => ({
              [breakpoints.only("sm")]: {
                alignItems: "center",
              },
            })}
            alignItems="center"
          >
            <PDBox sx={{ position: "relative", display: "inline-flex" }}>
              <CircularProgress variant="determinate" value={60} size={170} color="success" />
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
                  <PDBox component="img" src={GreenLightning} />
                  <PDTypography color="white" variant="h2" mt="6px" fontWeight="bold" mb="4px">
                    68%
                  </PDTypography>
                  <PDTypography color="text" variant="caption">
                    Current Load
                  </PDTypography>
                </PDBox>
              </PDBox>
            </PDBox>
            <PDBox
              display="flex"
              justifyContent="center"
              flexDirection="column"
              sx={{ textAlign: "center" }}
            >
              <PDTypography color="white" variant="lg" fontWeight="bold" mb="2px" mt="18px">
                0h 58 min
              </PDTypography>
              <PDTypography color="text" variant="button" fontWeight="regular">
                Time to full charge
              </PDTypography>
            </PDBox>
          </PDBox>
          <Grid
            container
            sx={({ breakpoints }) => ({
              spacing: "24px",
              [breakpoints.only("sm")]: {
                columnGap: "0px",
                rowGap: "24px",
              },
              [breakpoints.up("md")]: {
                gap: "24px",
                ml: "50px !important",
              },
              [breakpoints.only("xl")]: {
                gap: "12px",
                mx: "auto !important",
              },
            })}
          >
            <Grid item xs={12} md={5.5} xl={5.8} xxl={5.5}>
              <PDBox
                display="flex"
                p="18px"
                alignItems="center"
                sx={{
                  background: linearGradient(cardContent.main, cardContent.state, cardContent.deg),
                  minHeight: "110px",
                  borderRadius: "20px",
                }}
              >
                <PDBox display="flex" flexDirection="column" mr="auto">
                  <PDTypography color="text" variant="caption" fontWeight="medium" mb="2px">
                    Battery Health
                  </PDTypography>
                  <PDTypography
                    color="white"
                    variant="h4"
                    fontWeight="bold"
                    sx={({ breakpoints }) => ({
                      [breakpoints.only("xl")]: {
                        fontSize: "20px",
                      },
                    })}
                  >
                    76%
                  </PDTypography>
                </PDBox>
                <PDBox
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  sx={{
                    background: info.main,
                    borderRadius: "12px",
                    width: "56px",
                    height: "56px",
                  }}
                >
                  <PDBox component="img" src={carProfile} />
                </PDBox>
              </PDBox>
            </Grid>
            <Grid item xs={12} md={5.5} xl={5.8} xxl={5.5}>
              <PDBox
                display="flex"
                p="18px"
                alignItems="center"
                sx={{
                  background: linearGradient(cardContent.main, cardContent.state, cardContent.deg),
                  borderRadius: "20px",
                }}
              >
                <PDBox display="flex" flexDirection="column" mr="auto">
                  <PDTypography color="text" variant="caption" fontWeight="medium" mb="2px">
                    Efficiency
                  </PDTypography>
                  <PDTypography
                    color="white"
                    variant="h4"
                    fontWeight="bold"
                    sx={({ breakpoints }) => ({
                      [breakpoints.only("xl")]: {
                        fontSize: "20px",
                      },
                    })}
                  >
                    +20%
                  </PDTypography>
                </PDBox>
                <PDBox sx={{ maxHeight: "75px" }}>
                  <BasicLineChart
                    lineChartData={lineChartDataProfile1}
                    lineChartOptions={lineChartOptionsProfile1}
                  />
                </PDBox>
              </PDBox>
            </Grid>
            <Grid item xs={12} md={5.5} xl={5.8} xxl={5.5}>
              <PDBox
                display="flex"
                p="18px"
                alignItems="center"
                sx={{
                  background: linearGradient(cardContent.main, cardContent.state, cardContent.deg),
                  borderRadius: "20px",
                  minHeight: "110px",
                }}
              >
                <PDBox display="flex" flexDirection="column" mr="auto">
                  <PDTypography color="text" variant="caption" fontWeight="medium" mb="2px">
                    Consumption
                  </PDTypography>
                  <PDTypography
                    color="white"
                    variant="h4"
                    fontWeight="bold"
                    sx={({ breakpoints }) => ({
                      [breakpoints.only("xl")]: {
                        fontSize: "20px",
                      },
                    })}
                  >
                    163W/km
                  </PDTypography>
                </PDBox>
                <PDBox
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  sx={{
                    background: info.main,
                    borderRadius: "12px",
                    width: "56px",
                    height: "56px",
                  }}
                >
                  <PDBox component="img" src={WhiteLightning} />
                </PDBox>
              </PDBox>
            </Grid>
            <Grid item xs={12} md={5.5} xl={5.8} xxl={5.5}>
              <PDBox
                display="flex"
                p="18px"
                alignItems="center"
                sx={{
                  background: linearGradient(cardContent.main, cardContent.state, cardContent.deg),
                  borderRadius: "20px",
                }}
              >
                <PDBox display="flex" flexDirection="column" mr="auto">
                  <PDTypography color="text" variant="caption" fontWeight="medium" mb="2px">
                    This Week
                  </PDTypography>
                  <PDTypography
                    color="white"
                    variant="h4"
                    fontWeight="bold"
                    sx={({ breakpoints }) => ({
                      [breakpoints.only("xl")]: {
                        fontSize: "20px",
                      },
                    })}
                  >
                    1.342km
                  </PDTypography>
                </PDBox>
                <PDBox sx={{ maxHeight: "75px" }}>
                  <BasicLineChart
                    lineChartData={lineChartDataProfile2}
                    lineChartOptions={lineChartOptionsProfile2}
                  />
                </PDBox>
              </PDBox>
            </Grid>
          </Grid>
        </Stack>
      </PDBox>
    </Card>
  );
};

export default CarInformations;
