import {
  AppBar,
  Toolbar,
  Typography,
  CssBaseline,
  Box,
  Container,
} from "@mui/material";
import Sidebar from "./components/Sidebar";
// import ChatWindow from "./ChatWindow";

const drawerWidth = 240;

export default function App() {
  return (
    <Container maxWidth="sm">
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <Sidebar drawerWidth={drawerWidth} />
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            bgcolor: "background.default",
            p: 3,
            marginLeft: `${drawerWidth}px`,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h6" noWrap component="div">
                LLM-Charged Educational App
              </Typography>
            </Toolbar>
          </AppBar>
          {/* <ChatWindow /> */}
        </Box>
      </Box>
    </Container>
  );
}
