/** 

=========================================================
* PROSPERA DEFI DASHBOARD - v1.0.0
=========================================================

* Copyright 2024 PROSPERA DEFI (https://www.prosperadefi.com/)

* Design and Coded by Z

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the PROSPERA DEFI DASHBOARD.

*/

import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Dialog, DialogContent, DialogActions } from "@mui/material";
import PDBox from "../../../../../components/PDBox";
import PDTypography from "../../../../../components/PDTypography";
import PDInput from "../../../../../components/PDInput";
import PDSelect from "../../../../../components/PDSelect";
import PDButton from "../../../../../components/PDButton";
import colors from "../../../../../assets/theme/base/colors";

const colorOptions = [
  { value: "primary", label: "Primary" },
  { value: "secondary", label: "Secondary" },
  { value: "info", label: "Info" },
  { value: "success", label: "Success" },
  { value: "warning", label: "Warning" },
  { value: "error", label: "Error" },
];

function EventModalCard({ isOpen, onClose, event, onSave, onDelete }) {
  const [title, setTitle] = useState("");
  const [start, setStart] = useState("");
  const [startTime, setStartTime] = useState("00:00");
  const [end, setEnd] = useState("");
  const [endTime, setEndTime] = useState("00:00");
  const [description, setDescription] = useState("");
  const [color, setColor] = useState("primary");

  useEffect(() => {
    if (event) {
      setTitle(event.title || "");
      setStart(event.start ? event.start.toISOString().split("T")[0] : "");
      setStartTime(event.start ? event.start.toISOString().split("T")[1].substr(0, 5) : "00:00");
      setEnd(event.end ? event.end.toISOString().split("T")[0] : "");
      setEndTime(event.end ? event.end.toISOString().split("T")[1].substr(0, 5) : "00:00");
      setDescription(event.extendedProps?.description || "");
      setColor(event.classNames?.[0]?.replace("event-", "") || "primary");
    }
  }, [event]);

  const handleSave = () => {
    const startDateTime = new Date(`${start}T${startTime}`);
    const endDateTime = new Date(`${end}T${endTime}`);

    onSave({
      id: event?.id,
      title,
      start: startDateTime,
      end: endDateTime,
      allDay: startTime === "00:00" && endTime === "00:00",
      classNames: [`event-${color}`],
      extendedProps: { description },
    });
  };

  const handleColorChange = (selectedOption) => {
    setColor(selectedOption.value);
  };

  return (
    <Dialog
      open={isOpen}
      onClose={onClose}
      maxWidth="sm"
      fullWidth
      PaperProps={{
        style: {
          backgroundColor: colors.inputColors.backgroundColor,
          borderRadius: "15px",
        },
      }}
    >
      <DialogContent>
        <PDBox mb={3}>
          <PDTypography variant="lg" color="white" fontWeight="bold">
            {event?.id ? "Edit Event" : "Add Event"}
          </PDTypography>
        </PDBox>
        <PDBox mb={2}>
          <PDInput
            placeholder="Event Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            sx={{
              "& .MuiInputBase-input": {
                color: "black",
                backgroundColor: "white",
              },
              "& .MuiSvgIcon-root": {
                color: "white",
              },
            }}
          />
        </PDBox>
        <PDBox mb={2}>
          <PDInput
            type="date"
            value={start}
            onChange={(e) => setStart(e.target.value)}
            sx={{
              "& .MuiInputBase-input": {
                color: "black",
                backgroundColor: "white",
              },
              "& .MuiSvgIcon-root": {
                color: "white",
              },
            }}
          />
          <PDInput
            type="time"
            value={startTime}
            onChange={(e) => setStartTime(e.target.value)}
            sx={{
              "& .MuiInputBase-input": {
                color: "black",
                backgroundColor: "white",
              },
              "& .MuiSvgIcon-root": {
                color: "white",
              },
            }}
          />
        </PDBox>
        <PDBox mb={2}>
          <PDInput
            type="date"
            value={end}
            onChange={(e) => setEnd(e.target.value)}
            sx={{
              "& .MuiInputBase-input": {
                color: "black",
                backgroundColor: "white",
              },
              "& .MuiSvgIcon-root": {
                color: "white",
              },
            }}
          />
          <PDInput
            type="time"
            value={endTime}
            onChange={(e) => setEndTime(e.target.value)}
            sx={{
              "& .MuiInputBase-input": {
                color: "black",
                backgroundColor: "white",
              },
              "& .MuiSvgIcon-root": {
                color: "white",
              },
            }}
          />
        </PDBox>
        <PDBox mb={2}>
          <PDInput
            placeholder="Event Description"
            multiline
            rows={4}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            sx={{
              "& .MuiInputBase-input": {
                color: "black",
                backgroundColor: "white",
              },
              "& .MuiSvgIcon-root": {
                color: "white",
              },
            }}
          />
        </PDBox>
        <PDBox mb={2}>
          <PDSelect
            value={colorOptions.find((option) => option.value === color)}
            onChange={handleColorChange}
            options={colorOptions}
            sx={{
              "& .MuiSelect-select": {
                color: "black",
                backgroundColor: "white",
              },
              "& .MuiSvgIcon-root": {
                color: "white",
              },
            }}
          />
        </PDBox>
      </DialogContent>
      <DialogActions>
        {event?.id && (
          <PDButton color="error" onClick={onDelete}>
            Delete
          </PDButton>
        )}
        <PDButton color="primary" onClick={onClose}>
          Cancel
        </PDButton>
        <PDButton color="success" onClick={handleSave}>
          {event?.id ? "Update" : "Create"}
        </PDButton>
      </DialogActions>
    </Dialog>
  );
}

EventModalCard.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  event: PropTypes.object,
  onSave: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default EventModalCard;
