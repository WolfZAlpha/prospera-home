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
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";
import PDBox from "../../../../../components/PDBox";
import PDTypography from "../../../../../components/PDTypography";

const colorOptions = [
  { value: "primary", label: "Primary" },
  { value: "secondary", label: "Secondary" },
  { value: "info", label: "Info" },
  { value: "success", label: "Success" },
  { value: "warning", label: "Warning" },
  { value: "error", label: "Error" },
];

function EventModal({ isOpen, onClose, event, onSave, onDelete }) {
  const [title, setTitle] = useState("");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [description, setDescription] = useState("");
  const [color, setColor] = useState("primary");

  useEffect(() => {
    if (event) {
      setTitle(event.title || "");
      setStart(event.start ? event.start.toISOString().slice(0, 16) : "");
      setEnd(event.end ? event.end.toISOString().slice(0, 16) : "");
      setDescription(event.extendedProps?.description || "");
      setColor(event.classNames?.[0]?.replace("event-", "") || "primary");
    }
  }, [event]);

  const handleSave = () => {
    onSave({
      id: event?.id,
      title,
      start,
      end,
      classNames: [`event-${color}`],
      extendedProps: { description },
    });
  };

  return (
    <Dialog open={isOpen} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>
        <PDTypography variant="h6" color="white">
          {event?.id ? "Edit Event" : "Add Event"}
        </PDTypography>
      </DialogTitle>
      <DialogContent>
        <PDBox mb={2}>
          <TextField
            fullWidth
            label="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </PDBox>
        <PDBox mb={2}>
          <TextField
            fullWidth
            label="Start"
            type="datetime-local"
            value={start}
            onChange={(e) => setStart(e.target.value)}
            InputLabelProps={{ shrink: true }}
          />
        </PDBox>
        <PDBox mb={2}>
          <TextField
            fullWidth
            label="End"
            type="datetime-local"
            value={end}
            onChange={(e) => setEnd(e.target.value)}
            InputLabelProps={{ shrink: true }}
          />
        </PDBox>
        <PDBox mb={2}>
          <TextField
            fullWidth
            label="Description"
            multiline
            rows={4}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </PDBox>
        <PDBox mb={2}>
          <FormControl fullWidth>
            <InputLabel>Color</InputLabel>
            <Select value={color} onChange={(e) => setColor(e.target.value)} label="Color">
              {colorOptions.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </PDBox>
      </DialogContent>
      <DialogActions>
        {event?.id && (
          <Button onClick={onDelete} color="error">
            Delete
          </Button>
        )}
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={handleSave} color="primary">
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
}

EventModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  event: PropTypes.object,
  onSave: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default EventModal;
