import React, { useState } from "react";
import {
  Box,
  Paper,
  TextField,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import Icon from "@mui/material/Icon";

interface Message {
  id: string;
  sender: "user" | "bot";
  content: string;
}

const messagesDump = [
  { id: "2", sender: "user", content: "Hi!" },
  { id: "1", sender: "bot", content: "Hi! How can I help you?" },
];

export default function ChatWindow() {
  const [messages, setMessages] = useState<Message[]>(messagesDump);
  const [inputValue, setInputValue] = useState("");

  const handleSendMessage = () => {
    if (inputValue.trim()) {
      const newMessage: Message = {
        id: "3",
        sender: "user",
        content: inputValue,
      };
      setMessages([...messages, newMessage]);
      setInputValue("");
      // Simulate bot response
      setTimeout(() => {
        const botMessage: Message = {
          id: "4",
          sender: "bot",
          content: "This is a bot response.",
        };
        setMessages((prevMessages) => [...prevMessages, botMessage]);
      }, 1000);
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSendMessage();
    }
  };

  return (
    <Box
      component={Paper}
      elevation={3}
      className="flex flex-col h-full"
      sx={{ p: 2 }}
    >
      <Typography variant="h6" className="mb-4">
        Chat Window
      </Typography>
      <Box className="flex-grow overflow-y-auto mb-4">
        <List>
          {messages.map((message, index) => (
            <ListItem
              key={index}
              className={`flex ${
                message.sender === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <ListItemText
                primary={message.content}
                className={`px-4 py-2 rounded-lg max-w-xs ${
                  message.sender === "user"
                    ? "bg-blue-500 text-white"
                    : "bg-gray-300"
                }`}
              />
            </ListItem>
          ))}
        </List>
      </Box>
      <Box className="flex">
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Type a message..."
          value={inputValue}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
          className="flex-grow mr-2"
        />
        <IconButton color="primary" onClick={handleSendMessage}>
          <Icon>send</Icon>
        </IconButton>
      </Box>
    </Box>
  );
}
