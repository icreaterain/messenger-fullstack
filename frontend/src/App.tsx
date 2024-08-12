import {
  AppBar,
  Toolbar,
  Typography,
  CssBaseline,
  Box,
  Grid,
} from "@mui/material";
import Sidebar from "./components/Sidebar";
import ChatWindow from "./components/ChatWindow";

const drawerWidth = 240;

export default function App() {
  return (
    <Grid container spacing={2}>
      <CssBaseline />
      <Sidebar drawerWidth={drawerWidth} />
      <Box component="main" className="grow flex flex-col">
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" noWrap component="div">
              LLM-Charged Educational App
            </Typography>
          </Toolbar>
        </AppBar>
        <ChatWindow />
      </Box>
    </Grid>
  );
}
