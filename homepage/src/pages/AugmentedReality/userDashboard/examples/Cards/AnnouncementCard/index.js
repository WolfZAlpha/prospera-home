/** 

=========================================================
* PROSPERA DEFI DASHBOARD - v1.0.0
=========================================================

* Copyright 2024 PROSPERA DEFI (https://www.prosperadefi.com/)

* Design and Coded by Z

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the PROSPERA DEFI DASHBOARD.

*/

// react-router components
import { Link } from "react-router-dom";

// prop-types is library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Card from "@mui/material/Card";

// prospera defi dashboard components
import PDBox from "../../../components/PDBox";
import PDTypography from "../../../components/PDTypography";
import PDButton from "../../../components/PDButton";
import PDAvatar from "../../../components/PDAvatar";
import PDBadge from "../../../components/PDBadge";
import linearGradient from "../../../assets/theme/functions/linearGradient";
import colors from "../../../assets/theme/base/colors";

function AnnouncementCard({ by, badge, title, description, value, action }) {
  const { gradients } = colors;
  const { cardContent } = gradients;

  return (
    <Card>
      <PDBox display="flex" justifyContent="space-between" alignItems="flex-start">
        {by.image || by.name || by.date ? (
          <PDBox display="flex" mr={2} mb="22px">
            {by.image ? (
              <PDAvatar src={by.image} alt={by.name} size="sm" variant="rounded" />
            ) : null}
            <PDBox display="flex" flexDirection="column" justifyContent="center" ml={1}>
              {by.name ? (
                <PDTypography
                  variant="button"
                  fontWeight="medium"
                  color="white"
                  textTransform="capitalize"
                >
                  {by.name}
                </PDTypography>
              ) : null}
              {by.date ? (
                <PDTypography variant="button" color="text" fontWeight="regular">
                  {by.date}
                </PDTypography>
              ) : null}
            </PDBox>
          </PDBox>
        ) : null}
        {badge.color && badge.label ? (
          <PDBadge color={badge.color} badgeContent={badge.label} size="sm" container />
        ) : null}
      </PDBox>
      <PDBox>
        <PDTypography variant="lg" color="white" fontWeight="bold">
          {title}
        </PDTypography>
        <PDBox mt="4px" mb={2} lineHeight={0}>
          <PDTypography variant="button" fontWeight="regular" color="text">
            {description}
          </PDTypography>
        </PDBox>
        <PDBox
          sx={{ background: linearGradient(cardContent.main, cardContent.state, cardContent.deg) }}
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          borderRadius="lg"
          p={2}
        >
          {value.amount ? (
            <PDTypography fontSize={22} color="white" fontWeight="bold">
              {value.method ? (
                <PDBox component="span" mr={0.5}>
                  <PDTypography
                    variant="button"
                    color="text"
                    fontWeight="medium"
                    verticalAlign="text-bottom"
                  >
                    {value.type}
                  </PDTypography>
                </PDBox>
              ) : null}
              {value.amount}
              {value.method ? (
                <PDBox component="span" ml={0.5}>
                  <PDTypography
                    variant="button"
                    color="text"
                    fontWeight="medium"
                    verticalAlign="text-bottom"
                  >
                    / {value.method}
                  </PDTypography>
                </PDBox>
              ) : null}
            </PDTypography>
          ) : (
            <PDBox />
          )}
          {action.type === "internal" ? (
            <PDButton
              component={Link}
              to={action.route}
              variant="contained"
              color="info"
              sx={({ breakpoints }) => ({
                [breakpoints.up("md")]: {
                  minWidth: "120px",
                },
                [breakpoints.only("lg")]: {
                  minWidth: "auto",
                },
              })}
            >
              {action.label}
            </PDButton>
          ) : (
            <PDButton
              component="a"
              href={action.route}
              target="_blank"
              rel="noreferrer"
              variant="contained"
              color="info"
              sx={({ breakpoints }) => ({
                [breakpoints.up("md")]: {
                  minWidth: "120px",
                },
                [breakpoints.only("lg")]: {
                  minWidth: "auto",
                },
              })}
            >
              {action.label}
            </PDButton>
          )}
        </PDBox>
      </PDBox>
    </Card>
  );
}

// Setting default values for the props of AnnouncementCard
AnnouncementCard.defaultProps = {
  by: {},
  badge: {},
  value: {},
};

// Typechecking props for the AnnouncementCard
AnnouncementCard.propTypes = {
  by: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string,
    date: PropTypes.string,
  }),
  badge: PropTypes.shape({
    color: PropTypes.oneOf(["primary", "secondary", "info", "success", "warning", "error", "dark"]),
    label: PropTypes.string,
  }),
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  value: PropTypes.shape({
    type: PropTypes.string,
    amount: PropTypes.string,
    method: PropTypes.string,
  }),
  action: PropTypes.shape({
    type: PropTypes.oneOf(["enternal", "internal"]).isRequired,
    route: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  }).isRequired,
};

export default AnnouncementCard;
