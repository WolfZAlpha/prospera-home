/** 

=========================================================
* PROSPERA DEFI DASHBOARD - v1.0.0
=========================================================

* Copyright 2024 PROSPERA DEFI (https://www.prosperadefi.com/)

* Design and Coded by Z

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the PROSPERA DEFI DASHBOARD.

*/

// react-routers components
import { Link } from "react-router-dom";

// prop-types is library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Card from "@mui/material/Card";

// prospera defi dashboard components
import PDBox from "../../../components/PDBox";
import PDTypography from "../../../components/PDTypography";
import PDAvatar from "../../../components/PDAvatar";
import PDButton from "../../../components/PDButton";

function ProfilesList({ title, profiles }) {
  const renderProfiles = profiles.map(({ image, name, description, action }) => (
    <PDBox key={name} component="li" display="flex" alignItems="center" py={1} mb={1}>
      <PDBox mr={2}>
        <PDAvatar src={image} alt="something here" variant="rounded" shadow="md" />
      </PDBox>
      <PDBox display="flex" flexDirection="column" alignItems="flex-start" justifyContent="center">
        <PDTypography variant="button" fontWeight="medium">
          {name}
        </PDTypography>
        <PDTypography variant="caption" color="text">
          {description}
        </PDTypography>
      </PDBox>
      <PDBox ml="auto">
        {action.type === "internal" ? (
          <PDButton component={Link} to={action.route} variant="text" color="info">
            {action.label}
          </PDButton>
        ) : (
          <PDButton
            component="a"
            href={action.route}
            target="_blank"
            rel="noreferrer"
            variant="text"
            color={action.color}
          >
            {action.label}
          </PDButton>
        )}
      </PDBox>
    </PDBox>
  ));

  return (
    <Card sx={{ height: "100%" }}>
      <PDBox pt={2} px={2}>
        <PDTypography variant="h6" fontWeight="medium" textTransform="capitalize">
          {title}
        </PDTypography>
      </PDBox>
      <PDBox p={2}>
        <PDBox component="ul" display="flex" flexDirection="column" p={0} m={0}>
          {renderProfiles}
        </PDBox>
      </PDBox>
    </Card>
  );
}

// Typechecking props for the ProfilesList
ProfilesList.propTypes = {
  title: PropTypes.string.isRequired,
  profiles: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ProfilesList;
