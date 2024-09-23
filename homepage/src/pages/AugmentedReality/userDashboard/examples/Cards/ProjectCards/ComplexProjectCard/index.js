/** 

=========================================================
* PROSPERA DEFI DASHBOARD - v1.0.0
=========================================================

* Copyright 2024 PROSPERA DEFI (https://www.prosperadefi.com/)

* Design and Coded by Z

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the PROSPERA DEFI DASHBOARD.

*/

// prop-types is library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider";
import Icon from "@mui/material/Icon";

// prospera defi dashboard components
import PDBox from "../../../../components/PDBox";
import PDTypography from "../../../../components/PDTypography";
import PDAvatar from "../../../../components/PDAvatar";

// Custom styles for ComplexProjectCard
function ComplexProjectCard({ color, icon, title, dateTime, description, members, dropdown }) {
  const renderMembers = members.map((member, key) => {
    const memberKey = `member-${key}`;

    return (
      <PDAvatar
        key={memberKey}
        src={member}
        alt="member profile"
        size="xs"
        sx={({ borders: { borderWidth }, palette: { white } }) => ({
          cursor: "pointer",
          position: "relative",

          "&:not(:first-of-type)": {
            ml: -1.25,
          },

          "&:hover, &:focus": {
            zIndex: "10",
          },
        })}
      />
    );
  });

  return (
    <Card sx={{ minHeight: "100%" }}>
      <PDBox>
        <PDBox display="flex" alignItems="center">
          <PDAvatar alt={title} size="xl" variant="rounded" bgColor={color} sx={{ p: 1 }}>
            {icon}
          </PDAvatar>
          <PDBox ml={2} lineHeight={0}>
            <PDBox mb={1} lineHeight={0}>
              <PDTypography
                variant="h6"
                color="white"
                textTransform="capitalize"
                fontWeight="medium"
              >
                {title}
              </PDTypography>
            </PDBox>
            {members.length > -1 ? <PDBox display="flex">{renderMembers}</PDBox> : null}
          </PDBox>
          {dropdown && (
            <PDTypography
              color="secondary"
              onClick={dropdown.action}
              sx={{
                ml: "auto",
                alignSelf: "flex-start",
                py: 1.25,
              }}
            >
              <Icon fontSize="default" sx={{ cursor: "pointer", color: "#fff" }}>
                more_vert
              </Icon>
            </PDTypography>
          )}
          {dropdown.menu}
        </PDBox>
        <PDBox my={2} lineHeight={1}>
          <PDTypography variant="button" fontWeight="regular" color="text">
            {description}
          </PDTypography>
        </PDBox>
        <Divider light />
        <PDBox display="flex" justifyContent="space-between" alignItems="center">
          {members.length > -1 ? (
            <PDBox display="flex" flexDirection="column" lineHeight={0}>
              <PDTypography variant="button" color="white" fontWeight="medium">
                {members.length}
              </PDTypography>
              <PDTypography variant="button" fontWeight="medium" color="text">
                Participants
              </PDTypography>
            </PDBox>
          ) : null}
          {dateTime ? (
            <PDBox display="flex" flexDirection="column" lineHeight={0}>
              <PDTypography variant="button" color="white" fontWeight="medium">
                {dateTime}
              </PDTypography>
              <PDTypography variant="button" fontWeight="medium" color="text">
                Due date
              </PDTypography>
            </PDBox>
          ) : null}
        </PDBox>
      </PDBox>
    </Card>
  );
}

// Setting default values for the props of ComplexProjectCard
ComplexProjectCard.defaultProps = {
  color: "dark",
  dateTime: "",
  members: [],
  dropdown: false,
};

// Typechecking props for the ProfileInfoCard
ComplexProjectCard.propTypes = {
  color: PropTypes.oneOf([
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "error",
    "dark",
    "light",
  ]),
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  dateTime: PropTypes.string,
  description: PropTypes.node.isRequired,
  members: PropTypes.arrayOf(PropTypes.string),
  dropdown: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.shape({
      action: PropTypes.func,
      menu: PropTypes.node,
    }),
  ]),
};

export default ComplexProjectCard;
