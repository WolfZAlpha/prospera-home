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
import PDBox from "../../../../components/PDBox";
import PDTypography from "../../../../components/PDTypography";

// porp-types is a library for typechecking of props
import PropTypes from "prop-types";

function MiniGradientLineChart({ title, description, chart }) {
  const renderChart = (
    <>
      {title || description ? (
        <PDBox p="12px 12px 0px 12px" display="flex" flexDirection="column">
          {title && (
            <PDTypography
              variant="button"
              color="white"
              fontWeight="medium"
              textTransform="capitalize"
            >
              {title}
            </PDTypography>
          )}
          {description}
        </PDBox>
      ) : null}
      <PDBox sx={{ maxHeight: "150px" }}>{chart}</PDBox>
    </>
  );

  return title || description ? <Card sx={{ padding: "8px" }}>{renderChart}</Card> : renderChart;
}

// Setting default values for the props of MiniGradientLineChart
MiniGradientLineChart.defaultProps = {
  title: "",
  description: "",
  height: "6.25rem",
};

// Typechecking props for the MiniGradientLineChart
MiniGradientLineChart.propTypes = {
  title: PropTypes.string,
  description: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  chart: PropTypes.oneOfType({}),
};

export default MiniGradientLineChart;
