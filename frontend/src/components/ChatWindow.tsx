import React, { useEffect, useRef, useState } from "react";
import {
  Box,
  TextField,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import Header from "./Header";

interface Message {
  id: string;
  sender: "user" | "bot";
  content: string;
}

const messagesDump: Message[] = [
  { id: "2", sender: "user", content: "Hi!" },
  { id: "1", sender: "bot", content: "Hi! How can I help you?" },
];

export default function ChatWindow() {
  const [messages, setMessages] = useState<Message[]>(messagesDump);
  const [inputValue, setInputValue] = useState("");

  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  const handleSendMessage = () => {
    if (inputValue.trim()) {
      const newMessage: Message = {
        id: Date.now().toString(),
        sender: "user",
        content: inputValue,
      };
      setMessages([...messages, newMessage]);
      setInputValue("");
      // Simulate bot response
      setTimeout(() => {
        const botMessage: Message = {
          id: Date.now().toString(),
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
    <Box component="main" className="flex flex-col h-full w-full relative p-4">
      <Header>
        <Typography variant="h6" className="mb-4">
          Chat Window
        </Typography>
      </Header>
      <Box className="flex-grow overflow-y-auto mb-4">
        <List>
          {messages.map((message, index) => (
            <ListItem
              key={index}
              sx={{
                justifyContent: message.sender === "user" ? "end" : "start",
              }}
            >
              <ListItemText
                primary={message.content}
                className={`px-4 py-2 rounded-lg max-w-xs ${
                  message.sender === "user" && "bg-gray-100"
                }`}
              />
            </ListItem>
          ))}
          <div ref={messagesEndRef} />
        </List>
      </Box>
      <Box className="flex items-center">
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
          <SendIcon />
        </IconButton>
      </Box>
    </Box>
  );
}
