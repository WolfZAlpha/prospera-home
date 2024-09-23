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
import Divider from "@mui/material/Divider";
import Tooltip from "@mui/material/Tooltip";
import Icon from "@mui/material/Icon";

// prospera defi dashboard components
import PDBox from "../../../../components/PDBox";
import PDTypography from "../../../../components/PDTypography";

// prospera defi dashboard base styles
import colors from "../../../../assets/theme/base/colors";
import typography from "../../../../assets/theme/base/typography";

function ProfileInfoCard({ title, description, info, social, action }) {
  const labels = [];
  const values = [];
  const { socialMediaColors } = colors;
  const { size } = typography;

  // Convert this form `objectKey` of the object key in to this `object key`
  Object.keys(info).forEach((el) => {
    if (el.match(/[A-Z\s]+/)) {
      const uppercaseLetter = Array.from(el).find((i) => i.match(/[A-Z]+/));
      const newElement = el.replace(uppercaseLetter, ` ${uppercaseLetter.toLowerCase()}`);

      labels.push(newElement);
    } else {
      labels.push(el);
    }
  });

  // Push the object values into the values array
  Object.values(info).forEach((el) => values.push(el));

  // Render the card info items
  const renderItems = labels.map((label, key) => (
    <PDBox key={label} display="flex" py={1} pr={2}>
      <PDTypography variant="button" color="text" fontWeight="regular" textTransform="capitalize">
        {label}: &nbsp;
      </PDTypography>
      <PDTypography variant="button" fontWeight="regular" color="white">
        &nbsp;{values[key]}
      </PDTypography>
    </PDBox>
  ));

  // Render the card social media icons
  const renderSocial = social.map(({ link, icon, color }) => (
    <PDBox
      key={color}
      component="a"
      href={link}
      target="_blank"
      rel="noreferrer"
      fontSize={size.lg}
      color="white"
      pr={1}
      pl={0.5}
      lineHeight={1}
    >
      {icon}
    </PDBox>
  ));

  return (
    <Card
      sx={({ breakpoints }) => ({
        height: "100%",
      })}
    >
      <PDBox display="flex" mb="14px" justifyContent="space-between" alignItems="center">
        <PDTypography variant="lg" fontWeight="bold" color="white" textTransform="capitalize">
          {title}
        </PDTypography>
      </PDBox>
      <PDBox>
        <PDBox mb={2} lineHeight={1}>
          <PDTypography variant="button" color="text" fontWeight="regular">
            {description}
          </PDTypography>
        </PDBox>
        <PDBox opacity={0.3}>
          <Divider />
        </PDBox>
        <PDBox>
          {renderItems}
          <PDBox display="flex" py={1} pr={2} color="white">
            <PDTypography
              variant="button"
              fontWeight="regular"
              color="text"
              textTransform="capitalize"
            >
              social: &nbsp;
            </PDTypography>
            {renderSocial}
          </PDBox>
        </PDBox>
      </PDBox>
    </Card>
  );
}

// Typechecking props for the ProfileInfoCard
ProfileInfoCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  info: PropTypes.objectOf(PropTypes.string).isRequired,
  social: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ProfileInfoCard;
