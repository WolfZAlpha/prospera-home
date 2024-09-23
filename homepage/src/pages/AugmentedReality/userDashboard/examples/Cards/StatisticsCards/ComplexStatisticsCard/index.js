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
import PropTypes from "prop-types";

// @mui material components
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";

// prospera defi dashboard components
import PDBox from "../../../../components/PDBox";
import PDTypography from "../../../../components/PDTypography";

// prospera defi dashboard base styles
import typography from "../../../../assets/theme/base/typography";

// Images
import whiteCurved from "../../../../assets/images/curved-images/reports-card-background.png";

function ComplexStatisticsCard({ color, icon, count, percentage, dropdown }) {
  const { size } = typography;

  return (
    <Card sx={{ background: `url(${whiteCurved})`, backgroundSize: "cover" }}>
      <PDBox>
        <Grid container>
          <Grid item xs={8}>
            <PDBox
              width="50px"
              height="50px"
              mb="44px"
              bgColor="info"
              borderRadius="lg"
              display="flex"
              justifyContent="center"
              alignItems="center"
              color="white"
              shadow="md"
              fontSize={size.xl}
            >
              {icon}
            </PDBox>
            <PDBox lineHeight={0}>
              <PDTypography fontSize={16} fontWeight="bold" color="white">
                {count.number}
              </PDTypography>
              <PDTypography
                variant="caption"
                fontWeight="medium"
                color="text"
                textTransform="capitalize"
              >
                {count.label}
              </PDTypography>
            </PDBox>
          </Grid>
          <Grid item xs={4}>
            <PDBox textAlign="right">
              {dropdown && (
                <PDBox mb={9.5} lineHeight={1} color="white">
                  <Icon fontSize="default" onClick={dropdown.action} sx={{ cursor: "pointer" }}>
                    more_horiz
                  </Icon>
                  {dropdown.menu}
                </PDBox>
              )}
              <PDTypography variant="caption" fontWeight="medium" color="white" align="right">
                {percentage}
              </PDTypography>
            </PDBox>
          </Grid>
        </Grid>
      </PDBox>
    </Card>
  );
}

// Setting default values for the props of ComplexStatisticsCard
ComplexStatisticsCard.defaultProps = {
  color: "dark",
  dropdown: false,
};

// Typechecking props for the ComplexStatisticsCard
ComplexStatisticsCard.propTypes = {
  color: PropTypes.oneOf(["primary", "secondary", "info", "success", "warning", "error", "dark"]),
  icon: PropTypes.node.isRequired,
  count: PropTypes.shape({
    number: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    label: PropTypes.string.isRequired,
  }).isRequired,
  percentage: PropTypes.string.isRequired,
  dropdown: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.shape({
      action: PropTypes.func,
      menu: PropTypes.node,
    }),
  ]),
};

export default ComplexStatisticsCard;
