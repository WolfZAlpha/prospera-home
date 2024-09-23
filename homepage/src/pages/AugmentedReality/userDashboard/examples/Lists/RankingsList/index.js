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
import Divider from "@mui/material/Divider";
import Icon from "@mui/material/Icon";

// prospera defi dashboard components
import PDBox from "../../../components/PDBox";
import PDTypography from "../../../components/PDTypography";
import PDButton from "../../../components/PDButton";

function RankingList({ title, date, rankings }) {
  const renderRankings = rankings.map(({ color, icon, name, description, value }, key) => (
    <PDBox key={name} component="li">
      <PDBox display="flex" justifyContent="space-between" alignItems="center">
        <PDBox display="flex" alignItems="center">
          <PDBox mr={2}>
            <PDButton
              variant="outlined"
              color={color}
              size="small"
              iconOnly
              circular
              sx={({ functions: { pxToRem } }) => ({
                width: pxToRem(34),
                minWidth: pxToRem(34),
                height: pxToRem(34),
                minHeight: pxToRem(34),
              })}
            >
              <Icon>{icon}</Icon>
            </PDButton>
          </PDBox>
          <PDBox display="flex" flexDirection="column">
            <PDTypography variant="button" color="white" fontWeight="medium" gutterBottom>
              {name}
            </PDTypography>
            <PDTypography variant="caption" color="text">
              {description}
            </PDTypography>
          </PDBox>
        </PDBox>
        <PDTypography variant="button" color={color} fontWeight="medium">
          {value}
        </PDTypography>
      </PDBox>
      {key === rankings.length - 1 ? null : (
        <Divider
          sx={{
            mt: 2,
            mb: 1,
          }}
        />
      )}
    </PDBox>
  ));

  return (
    <Card sx={{ height: "100%" }}>
      <PDBox display="flex" justifyContent="space-between" mb="24px" alignItems="center">
        <PDTypography variant="lg" fontWeight="bold" color="white" textTransform="capitalize">
          {title}
        </PDTypography>
        <PDTypography variant="button" color="text" fontWeight="regular" sx={{ display: "flex" }}>
          <Icon
            color="inherit"
            fontSize="small"
            sx={{
              mr: 0.75,
              mt: -0.125,
            }}
          >
            date_range
          </Icon>
          {date}
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
          {renderRankings}
        </PDBox>
      </PDBox>
    </Card>
  );
}

// Typechecking props for the RankingList
RankingList.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  rankings: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default RankingList;
