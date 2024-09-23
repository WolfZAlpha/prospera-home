/** 
=========================================================
* PROSPERA DEFI PLATFORM - v1.0.0
=========================================================

* Copyright 2024 PROSPERA DEFI (https://www.prosperadefi.com/)

* Design and Coded by Z

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the PROSPERA DEFI PLATFORM.
*/

import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import ChatInterface from "./ChatInterface";
import Window from "../../components/Window";
import io from "socket.io-client";
import PropTypes from "prop-types";

const MessagesHeader = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: theme.spacing(2),
  borderBottom: `1px solid ${theme.palette.divider}`,
}));

function Messages({ onClose, initialPosition }) {
  const [socket, setSocket] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const socketUrl = process.env.REACT_APP_API_URL || "http://localhost:8080";
    console.log("Attempting to connect to socket at:", socketUrl);

    const newSocket = io(socketUrl, {
      transports: ["websocket"],
      reconnection: true,
      reconnectionAttempts: 5,
      reconnectionDelay: 1000,
    });

    newSocket.on("connect", () => {
      console.log("Socket connected successfully");
      setSocket(newSocket);
      setError(null);
    });

    newSocket.on("connect_error", (err) => {
      console.error("Socket connection error:", err);
      setError("Failed to connect to chat server");
    });

    return () => {
      console.log("Cleaning up socket connection");
      newSocket.close();
    };
  }, []);

  return (
    <Window title="PROSPERA Chat" onClose={onClose} initialPosition={initialPosition}>
      <MKBox sx={{ width: "100%", height: "100%", display: "flex", flexDirection: "column" }}>
        <MessagesHeader>
          <MKTypography variant="h6" color="text">
            PROSPERA Chat
          </MKTypography>
        </MessagesHeader>
        <MKBox flexGrow={1} overflow="auto" p={3}>
          {error ? (
            <MKTypography color="error">{error}</MKTypography>
          ) : socket ? (
            <ChatInterface socket={socket} />
          ) : (
            <MKTypography>Connecting to chat server...</MKTypography>
          )}
        </MKBox>
      </MKBox>
    </Window>
  );
}

Messages.propTypes = {
  onClose: PropTypes.func.isRequired,
  initialPosition: PropTypes.shape({
    x: PropTypes.number,
    y: PropTypes.number,
  }),
};

export default Messages;
