import React from "react";
import { Box, IconButton, Tooltip } from "@mui/material";
import { styled } from "@mui/material/styles";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import AssignmentIcon from "@mui/icons-material/Assignment";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import ChatIcon from "@mui/icons-material/Chat";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import EmailIcon from "@mui/icons-material/Email";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PropTypes from "prop-types";

const NavbarContainer = styled(Box)(({ theme }) => ({
  position: "fixed",
  bottom: theme.spacing(2),
  left: "50%",
  transform: "translateX(-50%)",
  display: "flex",
  backgroundColor: "rgba(255, 255, 255, 0.1)",
  backdropFilter: "blur(10px)",
  borderRadius: theme.shape.borderRadius * 2,
  padding: theme.spacing(1),
  boxShadow: theme.shadows[10],
  zIndex: 1000,
}));

const NavItem = styled(IconButton)(({ theme }) => ({
  color: theme.palette.common.white,
  "&:hover": {
    backgroundColor: "rgba(255, 255, 255, 0.1)",
  },
}));

const Navbar = ({
  onItemClick,
  onDashboardClick,
  minimizedWindows,
  onRobotToggle,
  isRobotVisible,
}) => {
  return (
    <NavbarContainer>
      <Tooltip title="To-Do List">
        <NavItem onClick={() => onItemClick("todoList")}>
          <FormatListBulletedIcon
            color={minimizedWindows.includes("todoList") ? "primary" : "inherit"}
          />
        </NavItem>
      </Tooltip>
      <Tooltip title="To-Do Card">
        <NavItem onClick={() => onItemClick("todoCard")}>
          <AssignmentIcon color={minimizedWindows.includes("todoCard") ? "primary" : "inherit"} />
        </NavItem>
      </Tooltip>
      <Tooltip title={isRobotVisible ? "Hide OmniRobot" : "Show OmniRobot"}>
        <NavItem onClick={onRobotToggle}>
          <SmartToyIcon color={isRobotVisible ? "primary" : "inherit"} />
        </NavItem>
      </Tooltip>
      <Tooltip title="Chat">
        <NavItem onClick={() => onItemClick("chat")}>
          <ChatIcon color={minimizedWindows.includes("chat") ? "primary" : "inherit"} />
        </NavItem>
      </Tooltip>
      <Tooltip title="Media Player">
        <NavItem onClick={() => onItemClick("mediaPlayer")}>
          <MusicNoteIcon color={minimizedWindows.includes("mediaPlayer") ? "primary" : "inherit"} />
        </NavItem>
      </Tooltip>
      <Tooltip title="Emails">
        <NavItem onClick={() => onItemClick("emails")}>
          <EmailIcon color={minimizedWindows.includes("emails") ? "primary" : "inherit"} />
        </NavItem>
      </Tooltip>
      <Tooltip title="Dashboard">
        <NavItem onClick={onDashboardClick}>
          <DashboardIcon />
        </NavItem>
      </Tooltip>
    </NavbarContainer>
  );
};

Navbar.propTypes = {
  onItemClick: PropTypes.func.isRequired,
  onDashboardClick: PropTypes.func.isRequired,
  minimizedWindows: PropTypes.arrayOf(PropTypes.string).isRequired,
  onRobotToggle: PropTypes.func.isRequired,
  isRobotVisible: PropTypes.bool.isRequired,
};

export default Navbar;
