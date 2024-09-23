/** 

=========================================================
* PROSPERA DEFI DASHBOARD - v1.0.0
=========================================================

* Copyright 2024 PROSPERA DEFI (https://www.prosperadefi.com/)

* Design and Coded by Z

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the PROSPERA DEFI DASHBOARD.

*/

import React, { useState } from "react";
import PropTypes from "prop-types";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import Card from "@mui/material/Card";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import PDBox from "../../../../../components/PDBox";
import PDTypography from "../../../../../components/PDTypography";
import PDButton from "../../../../../components/PDButton";
import CalendarRoot from "./CalendarRoot";
import EventModalCard from "./EventModalCard";
import HolographicPopUp from "./HolographicPopUp";
import TradingViewWidget from "./TradingViewWidget";

function Calendar({ header, ...rest }) {
  const [events, setEvents] = useState(rest.events || []);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [popoverAnchor, setPopoverAnchor] = useState(null);
  const [popoverEvent, setPopoverEvent] = useState(null);
  const [view, setView] = useState("personal");
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleViewChange = (newView) => {
    setView(newView);
    handleClose();
  };

  const handleDateClick = (arg) => {
    setSelectedEvent({ start: arg.date });
    setIsModalOpen(true);
  };

  const handleEventClick = (info) => {
    setSelectedEvent(info.event);
    setIsModalOpen(true);
  };

  const handleEventAdd = (newEvent) => {
    const updatedEvent = {
      ...newEvent,
      id: Date.now().toString(),
    };
    setEvents((prevEvents) => [...prevEvents, updatedEvent]);
  };

  const handleEventChange = (changedEvent) => {
    setEvents((prevEvents) =>
      prevEvents.map((event) => (event.id === changedEvent.id ? changedEvent : event))
    );
  };

  const handleEventRemove = (eventToRemove) => {
    setEvents((prevEvents) => prevEvents.filter((event) => event.id !== eventToRemove.id));
  };

  const renderEventContent = (eventInfo) => {
    return (
      <div
        style={{
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          fontSize: "0.85em",
          padding: "2px 4px",
          cursor: "pointer",
        }}
        onMouseEnter={(e) => {
          setPopoverAnchor(e.currentTarget);
          setPopoverEvent(eventInfo);
        }}
        onMouseLeave={() => {
          setPopoverAnchor(null);
          setPopoverEvent(null);
        }}
      >
        {eventInfo.timeText && <span style={{ marginRight: "5px" }}>{eventInfo.timeText}</span>}
        <strong>{eventInfo.event.title}</strong>
      </div>
    );
  };

  return (
    <Card sx={{ height: "100%" }}>
      <PDBox
        pt={2}
        px={2}
        lineHeight={1}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <PDBox display="flex" alignItems="center" sx={{ cursor: "pointer" }} onClick={handleClick}>
          <PDTypography variant="lg" fontWeight="bold" color="white" textTransform="capitalize">
            {view === "personal" ? "Personal Calendar" : "Economic Calendar"}
          </PDTypography>
          <KeyboardArrowDownIcon sx={{ color: "white", ml: 1 }} />
        </PDBox>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
          PaperProps={{
            sx: {
              backgroundColor: "rgba(0, 0, 0, 0.8)",
              color: "white",
              "& .MuiMenuItem-root": {
                fontSize: "0.875rem",
                "&:hover": {
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                },
              },
            },
          }}
        >
          <MenuItem onClick={() => handleViewChange("personal")}>Personal Calendar</MenuItem>
          <MenuItem onClick={() => handleViewChange("economic")}>Economic Calendar</MenuItem>
        </Menu>
        {view === "personal" && (
          <PDButton
            variant="contained"
            onClick={() => setIsModalOpen(true)}
            sx={{
              backgroundColor: "#01ff02",
              color: "black",
              "&:hover": {
                backgroundColor: "#00cc00",
              },
            }}
          >
            Add Event
          </PDButton>
        )}
      </PDBox>
      <PDBox height="calc(100% - 70px)" mt={3}>
        {view === "personal" ? (
          <CalendarRoot>
            <FullCalendar
              plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
              initialView="dayGridMonth"
              headerToolbar={{
                start: "prev,next today",
                center: "title",
                end: "dayGridMonth,timeGridWeek,timeGridDay",
              }}
              editable
              selectable
              selectMirror
              dayMaxEvents={false}
              weekends
              events={events}
              initialDate={new Date()}
              dateClick={handleDateClick}
              eventClick={handleEventClick}
              eventContent={renderEventContent}
              height="100%"
              showNonCurrentDates={true}
              fixedWeekCount={false}
            />
          </CalendarRoot>
        ) : (
          <TradingViewWidget />
        )}
      </PDBox>
      <EventModalCard
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setSelectedEvent(null);
        }}
        event={selectedEvent}
        onSave={(updatedEvent) => {
          if (selectedEvent && selectedEvent.id) {
            handleEventChange(updatedEvent);
          } else {
            handleEventAdd(updatedEvent);
          }
          setIsModalOpen(false);
          setSelectedEvent(null);
        }}
        onDelete={() => {
          if (selectedEvent && selectedEvent.id) {
            handleEventRemove(selectedEvent);
          }
          setIsModalOpen(false);
          setSelectedEvent(null);
        }}
      />
      <HolographicPopUp
        anchorEl={popoverAnchor}
        open={Boolean(popoverAnchor)}
        eventInfo={popoverEvent}
      />
    </Card>
  );
}

Calendar.defaultProps = {
  header: {
    title: "",
    date: "",
  },
};

Calendar.propTypes = {
  header: PropTypes.shape({
    title: PropTypes.string,
    date: PropTypes.string,
  }),
};

export default Calendar;
