/** 

=========================================================
* PROSPERA DEFI DASHBOARD - v1.0.0
=========================================================

* Copyright 2024 PROSPERA DEFI (https://www.prosperadefi.com/)

* Design and Coded by Z

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the PROSPERA DEFI DASHBOARD.

*/

// react-router-dom components
import { Link } from "react-router-dom";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";

// prospera defi dashboard components
import PDBox from "../../../../components/PDBox";
import PDTypography from "../../../../components/PDTypography";
import PDBadge from "../../../../components/PDBadge";
import PDButton from "../../../../components/PDButton";

// React-icons
import { AiFillCheckCircle, AiFillCloseCircle } from "react-icons/ai";

function DefaultPricingCard({ badge, price, specifications, action }) {
  const renderSpecifications = specifications.map(({ label, includes }) => (
    <PDBox key={label} display="flex" alignItems="center" p={1}>
      <PDBox
        display="flex"
        justifyContent="center"
        alignItems="center"
        width="1.5rem"
        height="1.5rem"
        borderRadius="50%"
        shadow="md"
        mr={2}
      >
        <PDTypography variant="button" color="white" sx={{ lineHeight: 0 }}>
          {includes ? (
            <AiFillCheckCircle color="#fff" size="22px" />
          ) : (
            <AiFillCloseCircle color="#424563" size="22px" />
          )}
        </PDTypography>
      </PDBox>
      <PDTypography variant="body2" color="text">
        {label}
      </PDTypography>
    </PDBox>
  ));

  return (
    <Card>
      <PDBox textAlign="center">
        <PDBadge
          variant="basic"
          color={badge.color}
          size="sm"
          badgeContent={badge.label}
          circular
          container
        />
        <PDBox my={1}>
          <PDTypography variant="h1" color="white">
            <PDTypography display="inline" variant="h1" color="white">
              {price.currency}
            </PDTypography>
            {price.value}
          </PDTypography>
        </PDBox>
      </PDBox>
      <PDBox>
        {renderSpecifications}
        {action.type === "internal" ? (
          <PDBox mt={3}>
            <PDButton component={Link} to={action.route} color={action.color} fullWidth>
              {action.label}&nbsp;
            </PDButton>
          </PDBox>
        ) : (
          <PDBox mt={3}>
            <PDButton
              component="a"
              href={action.route}
              target="_blank"
              rel="noreferrer"
              color={action.color}
              fullWidth
            >
              {action.label}&nbsp;
            </PDButton>
          </PDBox>
        )}
      </PDBox>
    </Card>
  );
}

// Typechecking props for the DefaultPricingCard
DefaultPricingCard.propTypes = {
  badge: PropTypes.shape({
    color: PropTypes.oneOf([
      "primary",
      "secondary",
      "info",
      "success",
      "text",
      "warning",
      "error",
      "light",
      "dark",
    ]).isRequired,
    label: PropTypes.string.isRequired,
  }).isRequired,
  price: PropTypes.shape({
    currency: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
  }).isRequired,
  specifications: PropTypes.arrayOf(PropTypes.object).isRequired,
  action: PropTypes.shape({
    type: PropTypes.oneOf(["external", "internal"]).isRequired,
    route: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    color: PropTypes.oneOf([
      "primary",
      "secondary",
      "info",
      "success",
      "warning",
      "error",
      "light",
      "dark",
    ]).isRequired,
  }).isRequired,
};

export default DefaultPricingCard;
