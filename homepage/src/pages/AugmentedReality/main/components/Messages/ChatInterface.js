import React, { useState, useEffect, useRef } from "react";
import { Box, TextField, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import SendIcon from "@mui/icons-material/Send";
import PropTypes from "prop-types";

const ChatContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  height: "100%",
  background: "rgba(0, 0, 0, 0.7)",
  borderRadius: theme.shape.borderRadius,
  overflow: "hidden",
}));

const MessageList = styled(Box)({
  flexGrow: 1,
  overflowY: "auto",
  padding: "16px",
});

const MessageBubble = styled(Box)(({ theme, isOwnMessage }) => ({
  maxWidth: "70%",
  padding: "8px 12px",
  borderRadius: "12px",
  marginBottom: "8px",
  wordWrap: "break-word",
  color: theme.palette.text.primary,
  backgroundColor: isOwnMessage ? "#01ff02" : theme.palette.background.paper,
  alignSelf: isOwnMessage ? "flex-end" : "flex-start",
}));

const InputArea = styled(Box)(({ theme }) => ({
  display: "flex",
  padding: "16px",
  borderTop: `1px solid ${theme.palette.divider}`,
}));

const StyledTextField = styled(TextField)(({ theme }) => ({
  flexGrow: 1,
  marginRight: "16px",
  "& .MuiInputBase-input": {
    color: theme.palette.text.primary,
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#01ff02",
    },
    "&:hover fieldset": {
      borderColor: "#01ff02",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#01ff02",
    },
  },
}));

const SendButton = styled(Button)(({ theme }) => ({
  background: "#01ff02",
  color: theme.palette.text.primary,
  "&:hover": {
    background: "#00cc00",
  },
}));

function ChatInterface({ socket }) {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");
  const messageListRef = useRef(null);

  useEffect(() => {
    if (socket) {
      socket.on("message", (message) => {
        setMessages((prevMessages) => [...prevMessages, message]);
      });
    }
  }, [socket]);

  useEffect(() => {
    if (messageListRef.current) {
      messageListRef.current.scrollTop = messageListRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSendMessage = () => {
    if (inputMessage.trim() !== "" && socket) {
      const newMessage = {
        text: inputMessage,
        sender: socket.id,
        timestamp: new Date().toISOString(),
      };
      socket.emit("sendMessage", newMessage);
      setInputMessage("");
    }
  };

  return (
    <ChatContainer>
      <MessageList ref={messageListRef}>
        {messages.map((message, index) => (
          <MKBox
            key={index}
            display="flex"
            flexDirection="column"
            alignItems={message.sender === socket?.id ? "flex-end" : "flex-start"}
          >
            <MessageBubble isOwnMessage={message.sender === socket?.id}>
              <MKTypography variant="body2">{message.text}</MKTypography>
            </MessageBubble>
            <MKTypography variant="caption" color="text.secondary">
              {new Date(message.timestamp).toLocaleTimeString()}
            </MKTypography>
          </MKBox>
        ))}
      </MessageList>
      <InputArea>
        <StyledTextField
          fullWidth
          variant="outlined"
          placeholder="Type a message..."
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
        />
        <SendButton variant="contained" onClick={handleSendMessage}>
          <SendIcon />
        </SendButton>
      </InputArea>
    </ChatContainer>
  );
}

ChatInterface.propTypes = {
  socket: PropTypes.shape({
    on: PropTypes.func,
    emit: PropTypes.func,
    id: PropTypes.string,
  }),
};

export default ChatInterface;
