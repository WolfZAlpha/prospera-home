/** 

=========================================================
* PROSPERA DEFI DASHBOARD - v1.0.0
=========================================================

* Copyright 2024 PROSPERA DEFI (https://www.prosperadefi.com/)

* Design and Coded by Z

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the PROSPERA DEFI DASHBOARD.

*/

// prop-types is a library for typechecking of props.
import PropTypes from "prop-types";

// @fullcalendar components
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

// @mui material components
import Card from "@mui/material/Card";

// prospera defi dashboard components
import PDBox from "../../components/PDBox";
import PDTypography from "../../components/PDTypography";

// Custom styles for Calendar
import CalendarRoot from "./CalendarRoot";

function Calendar({ header, isWidgets, ...rest }) {
  const validClassNames = [
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "error",
    "light",
    "dark",
  ];

  const events = rest.events
    ? rest.events.map((el) => ({
        ...el,
        className: validClassNames.find((item) => item === el.className)
          ? `event-${el.className}`
          : "event-info",
      }))
    : [];

  return (
    <Card
      sx={({ breakpoints }) => ({
        [breakpoints.up("lg")]: {
          height: "100%",
          // minHeight: !isWidgets ? "560px" : "100%",
        },
      })}
    >
      <PDBox lineHeight={1} mb="12px">
        {header.title ? (
          <PDTypography variant="lg" fontWeight="bold" color="white" textTransform="capitalize">
            {header.title}
          </PDTypography>
        ) : null}
        {header.date ? (
          <PDTypography component="p" variant="button" color="text" fontWeight="medium">
            {header.date}
          </PDTypography>
        ) : null}
      </PDBox>
      <PDBox height="100%">
        <CalendarRoot>
          <FullCalendar
            {...rest}
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            events={events}
            height="100%"
          />
        </CalendarRoot>
      </PDBox>
    </Card>
  );
}

// Setting default values for the props of Calendar
Calendar.defaultProps = {
  header: {
    title: "",
    date: "",
  },
};

// Typechecking props for the Calendar
Calendar.propTypes = {
  header: PropTypes.shape({
    title: PropTypes.string,
    date: PropTypes.string,
  }),
  isWidgets: PropTypes.bool,
};

export default Calendar;
