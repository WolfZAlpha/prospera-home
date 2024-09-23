/** 

=========================================================
* PROSPERA DEFI DASHBOARD - v1.0.0
=========================================================

* Copyright 2024 PROSPERA DEFI (https://www.prosperadefi.com/)

* Design and Coded by Z

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the PROSPERA DEFI DASHBOARD.

*/

// @mui material components
import Card from "@mui/material/Card";

// prospera defi dashboard components
import PDBox from "../../../../../../components/PDBox";
import PDProgress from "../../../../../../components/PDProgress";
import PDTypography from "../../../../../../components/PDTypography";
import PDButton from "../../../../../../components/PDButton";

function Reviews() {
  return (
    <Card sx={{ height: "100%" }}>
      <PDBox mb="24px">
        <PDTypography variant="lg" fontWeight="bold" color="white">
          Reviews
        </PDTypography>
      </PDBox>
      <PDBox>
        <PDBox
          component="ul"
          display="flex"
          flexDirection="column"
          p={0}
          m={0}
          sx={{ listStyle: "none" }}
        >
          <PDBox component="li" w="100%" py={1} mb={{ sm: "14px", xl: "28px" }}>
            <PDBox display="flex" justifyContent="space-between" alignItems="center" mb="10px">
              <PDTypography
                variant="caption"
                fontWeight="medium"
                color="text"
                textTransform="capitalize"
              >
                positive reviews
              </PDTypography>
              <PDTypography
                variant="caption"
                fontWeight="medium"
                color="text"
                textTransform="capitalize"
              >
                80%
              </PDTypography>
            </PDBox>
            <PDProgress color="info" value={80} sx={{ background: "#2D2E5F" }} />
          </PDBox>
          <PDBox component="li" w="100%" py={1} mb={{ sm: "14px", xl: "28px" }}>
            <PDBox display="flex" justifyContent="space-between" alignItems="center" mb="10px">
              <PDTypography
                variant="caption"
                fontWeight="medium"
                color="text"
                textTransform="capitalize"
              >
                neutral reviews
              </PDTypography>
              <PDTypography
                variant="caption"
                fontWeight="medium"
                color="text"
                textTransform="capitalize"
              >
                17%
              </PDTypography>
            </PDBox>
            <PDProgress color="white" value={17} sx={{ background: "#2D2E5F" }} />
          </PDBox>
          <PDBox component="li" w="100%" py={1} mb={{ sm: "14px", xl: "28px" }}>
            <PDBox display="flex" justifyContent="space-between" alignItems="center" mb="10px">
              <PDTypography
                variant="caption"
                fontWeight="medium"
                color="text"
                textTransform="capitalize"
              >
                negative reviews
              </PDTypography>
              <PDTypography
                variant="caption"
                fontWeight="medium"
                color="text"
                textTransform="capitalize"
              >
                3%
              </PDTypography>
            </PDBox>
            <PDProgress color="error" value={3} sx={{ background: "#2D2E5F" }} />
          </PDBox>
        </PDBox>
      </PDBox>
      <PDBox
        display="flex"
        flexDirection={{ xs: "column", sm: "column", md: "column", lg: "row" }}
        mt="auto"
      >
        <PDBox width={{ xs: "100%", sm: "100%", md: "100%", lg: "60%" }} lineHeight={1}>
          <PDTypography
            variant="button"
            fontSize={{ md: 12, lg: 14 }}
            color="text"
            fontWeight="regular"
          >
            More than <strong>1,500,000 </strong> developers used Creative Tim&apos;s products and
            over <strong>700,000 </strong>
            projects were created.
          </PDTypography>
        </PDBox>
        <PDBox
          width={{ xs: "100%", sm: "100%", md: "100%", lg: "40%" }}
          textAlign="right"
          mt={{ xs: 2, sm: "auto", md: 2, lg: "auto" }}
        >
          <PDButton color="info" variant="contained">
            view all reviews
          </PDButton>
        </PDBox>
      </PDBox>
    </Card>
  );
}

export default Reviews;
