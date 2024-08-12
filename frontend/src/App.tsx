import { Box } from "@mui/material";
import Sidebar from "./components/Sidebar";
import ChatWindow from "./components/ChatWindow";

export default function App() {
  return (
    <Box className="flex h-full w-full">
      <Sidebar />
      <ChatWindow />
    </Box>
  );
}
