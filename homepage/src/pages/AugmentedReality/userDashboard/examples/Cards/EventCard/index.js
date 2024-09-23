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
import Divider from "@mui/material/Divider";
import Tooltip from "@mui/material/Tooltip";

// Vision UI Dashboard PRO React components
import PDBox from "../../../components/PDBox";
import PDTypography from "../../../components/PDTypography";
import PDButton from "../../../components/PDButton";
import PDAvatar from "../../../components/PDAvatar";

function EventCard({ id, image, title, dateTime, description, members, action }) {
  const renderMembers = members.map(({ image: media, name }) => (
    <Tooltip key={name} title={name} placement="bottom">
      <PDAvatar
        src={media}
        alt={name}
        size="xs"
        sx={({ borders: { borderWidth }, palette: { grey } }) => ({
          border: `${borderWidth[2]} solid ${grey[700]}`,
          ml: -1.25,
          cursor: "pointer",
          position: "relative",

          "&:hover, &:focus": {
            zIndex: "10",
          },
        })}
      />
    </Tooltip>
  ));

  return (
    <Card sx={{ minHeight: "250px" }}>
      <PDBox>
        <PDBox display="flex" mb="12px" alignItems="center">
          <PDAvatar src={image} alt={title} size="lg" variant="rounded" />
          <PDBox ml="6px" display="flex" flexDirection="column" lineHeight={0}>
            <PDTypography
              fontSize={16}
              fontWeight="medium"
              color="white"
              textTransform="capitalize"
            >
              {title}
            </PDTypography>
            {dateTime ? (
              <PDTypography
                variant="caption"
                fontWeight="regular"
                color="text"
                textTransform="capitalize"
              >
                {dateTime}
              </PDTypography>
            ) : null}
          </PDBox>
        </PDBox>
        <PDBox>
          <PDTypography fontSize={14} fontWeight="regular" color="text">
            {description}
          </PDTypography>
        </PDBox>
        {id ? (
          <PDBox>
            <PDTypography component="span" fontSize={14} fontWeight="regular" color="text">
              Meeting ID:&nbsp;
            </PDTypography>
            <PDTypography component="span" fontSize={14} color="white">
              {id}
            </PDTypography>
          </PDBox>
        ) : null}
        <Divider light />
        <PDBox display="flex" justifyContent="space-between" alignItems="center">
          {action.type === "internal" ? (
            <PDButton
              component={Link}
              to={action.route}
              color={action.color}
              size="small"
              sx={{ minWidth: "90px" }}
            >
              {action.label}
            </PDButton>
          ) : (
            <PDButton
              component="a"
              href={action.route}
              color={action.color}
              size="small"
              sx={{ minWidth: "90px" }}
            >
              {action.label}
            </PDButton>
          )}
          <PDBox display="flex">{renderMembers}</PDBox>
        </PDBox>
      </PDBox>
    </Card>
  );
}

// Setting default values for the props of EventCard
EventCard.defaultProps = {
  id: "",
  dateTime: "",
  members: [],
};

// Typechecking props for the EventCard
EventCard.propTypes = {
  image: PropTypes.string.isRequired,
  id: PropTypes.string,
  title: PropTypes.string.isRequired,
  dateTime: PropTypes.string,
  description: PropTypes.node.isRequired,
  members: PropTypes.arrayOf(PropTypes.object),
  action: PropTypes.shape({
    type: PropTypes.oneOf(["enternal", "internal"]).isRequired,
    route: PropTypes.string.isRequired,
    color: PropTypes.oneOf([
      "primary",
      "secondary",
      "info",
      "success",
      "warning",
      "error",
      "dark",
      "light",
    ]).isRequired,
    label: PropTypes.string.isRequired,
  }).isRequired,
};

export default EventCard;
