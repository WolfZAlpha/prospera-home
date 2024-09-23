/** 

=========================================================
* PROSPERA DEFI DASHBOARD - v1.0.0
=========================================================

* Copyright 2024 PROSPERA DEFI (https://www.prosperadefi.com/)

* Design and Coded by Z

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the PROSPERA DEFI DASHBOARD.

*/

// prop-types is a library for typechecking of props
// @mui material components
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import colors from "../../../../assets/theme/base/colors";

// prospera defi dashboard components
import PDBox from "../../../../components/PDBox";
import PDTypography from "../../../../components/PDTypography";
import PropTypes from "prop-types";

function MiniStatisticsCard({ bgColor, title, count, percentage, icon, direction }) {
  const { info } = colors;

  return (
    <Card sx={{ padding: "18px 22px" }}>
      <PDBox>
        <PDBox>
          <Grid container alignItems="center">
            {direction === "left" ? (
              <Grid item>
                <PDBox
                  bgColor={info}
                  color="#fff"
                  width="45px"
                  height="45px"
                  borderRadius="lg"
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  shadow="md"
                >
                  {icon}
                </PDBox>
              </Grid>
            ) : null}
            <Grid item xs={8}>
              <PDBox ml={direction === "left" ? 2 : 0} lineHeight={1}>
                <PDTypography
                  variant="caption"
                  color={bgColor === "white" ? "text" : "white"}
                  opacity={bgColor === "white" ? 1 : 0.7}
                  textTransform="capitalize"
                  fontWeight={title.fontWeight}
                >
                  {title.text}
                </PDTypography>
                <PDTypography
                  variant="subtitle1"
                  fontWeight="bold"
                  color="white"
                  sx={({ breakpoints }) => ({
                    [breakpoints.only("lg")]: {
                      fontSize: "16px",
                    },
                  })}
                >
                  {count}{" "}
                  <PDTypography
                    variant="button"
                    color={percentage.color}
                    fontWeight="bold"
                    sx={({ breakpoints }) => ({
                      [breakpoints.only("lg")]: {
                        fontSize: "10px",
                      },
                      [breakpoints.only("xl")]: {
                        fontSize: "12px",
                      },
                    })}
                  >
                    {percentage.text}
                  </PDTypography>
                </PDTypography>
              </PDBox>
            </Grid>
            {direction === "right" ? (
              <Grid item xs={4}>
                <PDBox
                  bgColor="#0075FF"
                  color="white"
                  width="45px"
                  height="45px"
                  marginLeft="auto"
                  borderRadius="lg"
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  shadow="md"
                >
                  {icon}
                </PDBox>
              </Grid>
            ) : null}
          </Grid>
        </PDBox>
      </PDBox>
    </Card>
  );
}

// Setting default values for the props of MiniStatisticsCard
MiniStatisticsCard.defaultProps = {
  bgColor: "white",
  title: {
    fontWeight: "medium",
    text: "",
  },
  percentage: {
    color: "success",
    text: "",
  },
  direction: "right",
};

// Typechecking props for the MiniStatisticsCard
MiniStatisticsCard.propTypes = {
  bgColor: PropTypes.oneOf([
    "white",
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "error",
    "dark",
  ]),
  title: PropTypes.PropTypes.shape({
    fontWeight: PropTypes.oneOf(["light", "regular", "medium", "bold"]),
    text: PropTypes.string,
  }),
  count: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  percentage: PropTypes.shape({
    color: PropTypes.oneOf([
      "primary",
      "secondary",
      "info",
      "success",
      "warning",
      "error",
      "dark",
      "white",
    ]),
    text: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  }),
  icon: PropTypes.shape({
    color: PropTypes.oneOf(["primary", "secondary", "info", "success", "warning", "error", "dark"]),
    component: PropTypes.node.isRequired,
  }).isRequired,
  direction: PropTypes.oneOf(["right", "left"]),
};

export default MiniStatisticsCard;
