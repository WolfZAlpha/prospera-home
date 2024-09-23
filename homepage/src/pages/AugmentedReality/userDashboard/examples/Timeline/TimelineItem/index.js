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
import Icon from "@mui/material/Icon";

// prospera defi dashboard components
import PDBox from "../../../components/PDBox";
import PDTypography from "../../../components/PDTypography";
import PDBadge from "../../../components/PDBadge";

// Timeline context
import { useTimeline } from "../context";

// Custom styles for the TimelineItem
import { timelineItem, timelineItemIcon } from "./styles";

function TimelineItem({ color, icon, title, dateTime, description, badges, isWidgets, lastItem }) {
  const isDark = useTimeline();

  const renderBadges = badges.items.map((badge, key) => {
    const badgeKey = `badge-${key}`;
    return (
      <PDBox key={badgeKey} mr={key === badges.items.length - 1 ? 0 : 0.5}>
        <PDBadge color={badges.color} size="sm" badgeContent={badge} container variant="basic" />
      </PDBox>
    );
  });

  return (
    <PDBox
      position="relative"
      sx={!isWidgets ? (theme) => timelineItem(theme, { lastItem, isDark }) : null}
    >
      <PDBox
        bgColor="transparent"
        width="1.625rem"
        height="1.625rem"
        borderRadius="50%"
        position="absolute"
        top="3.25%"
        left="2px"
        zIndex={2}
      >
        {icon ? (
          <PDBox
            position={isWidgets ? "" : "absolute"}
            top={isWidgets ? "" : "13px"}
            left={isWidgets ? "" : "14px"}
          >
            <Icon sx={(theme) => timelineItemIcon(theme, { color })}>{icon}</Icon>
          </PDBox>
        ) : (
          <PDBox
            bgColor="transparent"
            border="3px solid"
            borderColor="info.main"
            width="14px"
            height="14px"
            borderRadius="50%"
            position="absolute"
            top="-10px"
            left="6px"
            zIndex={2}
          ></PDBox>
        )}
      </PDBox>
      <PDBox
        ml={5.75}
        pt={description ? 0.7 : 0.5}
        lineHeight={0}
        maxWidth="30rem"
        sx={{
          transform: "translate(0px, -17px)",
        }}
      >
        <PDTypography variant="button" fontWeight="medium" color={isDark ? "white" : "white"}>
          {title}
        </PDTypography>
        <PDBox mt={0.5}>
          <PDTypography variant="caption" fontWeight="medium" color={isDark ? "white" : "text"}>
            {dateTime}
          </PDTypography>
        </PDBox>
        <PDBox mt={2} mb={1.5}>
          {description ? (
            <PDTypography variant="button" fontWeight="regular" color="text">
              {description}
            </PDTypography>
          ) : null}
        </PDBox>
        {badges.items.length > 0 ? (
          <PDBox display="flex" pb={lastItem ? 1 : 2}>
            {renderBadges}
          </PDBox>
        ) : null}
      </PDBox>
    </PDBox>
  );
}

// Setting default values for the props of TimelineItem
TimelineItem.defaultProps = {
  color: "info",
  badges: {
    color: "white",
    items: [],
  },
  lastItem: false,
  description: "",
};

// Typechecking props for the TimelineItem
TimelineItem.propTypes = {
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
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  dateTime: PropTypes.string.isRequired,
  description: PropTypes.string,
  badges: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),
  lastItem: PropTypes.bool,
  isWidgets: PropTypes.bool,
};

export default TimelineItem;
