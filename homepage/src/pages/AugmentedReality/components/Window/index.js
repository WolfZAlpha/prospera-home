import React, { useState } from "react";
import { Box, IconButton, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import CloseIcon from "@mui/icons-material/Close";
import Draggable from "react-draggable";
import PropTypes from "prop-types";

const WindowContainer = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[10],
  overflow: "hidden",
  position: "absolute",
  minWidth: 300,
  minHeight: 200,
}));

const WindowHeader = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  padding: theme.spacing(1),
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  cursor: "move",
}));

const Window = ({ title, onClose, children }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleDrag = (e, data) => {
    setPosition({ x: data.x, y: data.y });
  };

  return (
    <Draggable handle=".window-header" position={position} onDrag={handleDrag}>
      <WindowContainer>
        <WindowHeader className="window-header">
          <Typography variant="subtitle1">{title}</Typography>
          <IconButton size="small" onClick={onClose} sx={{ color: "inherit" }}>
            <CloseIcon />
          </IconButton>
        </WindowHeader>
        <Box p={2}>{children}</Box>
      </WindowContainer>
    </Draggable>
  );
};

export default Window;

Window.propTypes = {
  title: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};
