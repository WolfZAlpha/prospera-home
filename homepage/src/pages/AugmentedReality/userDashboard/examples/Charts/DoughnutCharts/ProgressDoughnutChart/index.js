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
import CircularProgress from "@mui/material/CircularProgress";
import PDBadgeDot from "../../../../components/PDBadgeDot";

// Vision UI Dashboard PRO React components
import PDBox from "../../../../components/PDBox";
import PDTypography from "../../../../components/PDTypography";

// porp-types is a library for typechecking of props
import PropTypes from "prop-types";

// breakpoints
import breakpoints from "../../../../assets/theme/base/breakpoints";

function ProgressDoughnutChart({ color, icon, title, count }) {
  const { values } = breakpoints;

  const renderBadgeDots = (label, color) => {
    return (
      <PDBadgeDot
        variant="gradient"
        color={color}
        size="xs"
        badgeContent={label}
        font={{ color: "text", weight: "medium" }}
        px={0}
      />
    );
  };

  return (
    <Card
      sx={({ breakpoints }) => ({
        [breakpoints.up("lg")]: {
          minHeight: "245px",
        },
        [breakpoints.up("xl")]: {
          minHeight: "270px",
        },
        [breakpoints.up("xxl")]: {
          minHeight: "300px",
        },
      })}
    >
      <PDBox display="flex" justifyContent="space-between" alignItems="flex-start">
        <PDBox width="45%">
          <PDBox display="flex" alignItems="center">
            <PDBox
              width="45px"
              height="45px"
              display="grid"
              justifyContent="center"
              alignItems="center"
              borderRadius="md"
              shadow="md"
              color="white"
              bgColor={color}
            >
              {icon}
            </PDBox>
            <PDBox ml={2} lineHeight={1} display="flex" flexDirection="column">
              <PDTypography
                variant="button"
                fontWeight="medium"
                textTransform="capitalize"
                color="white"
              >
                {title}
              </PDTypography>
              {count ? (
                <PDTypography variant="lg" color="white" fontWeight="bold">
                  {count}
                </PDTypography>
              ) : null}
            </PDBox>
          </PDBox>
          <PDBox display="flex" flexDirection="column" mt="33px">
            {renderBadgeDots("Done", "success")}
            {renderBadgeDots("In progress", "white")}
          </PDBox>
        </PDBox>
        <PDBox mt="20px" mr="40px">
          <PDBox sx={{ position: "relative", display: "inline-flex" }}>
            <CircularProgress
              variant="determinate"
              size={window.innerWidth >= values.lg && window.innerWidth < values.xl ? 140 : 170}
              value={60}
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
            />
          </PDBox>
        </PDBox>
      </PDBox>
    </Card>
  );
}

// Setting default values for the props of ProgressDoughnutChart
ProgressDoughnutChart.defaultProps = {
  color: "info",
  count: 0,
  height: "100%",
};

// Typechecking props for the ProgressDoughnutChart
ProgressDoughnutChart.propTypes = {
  color: PropTypes.oneOf(["primary", "secondary", "info", "success", "warning", "error", "dark"]),
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  count: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default ProgressDoughnutChart;
