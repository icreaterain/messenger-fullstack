import { PropsWithChildren, useState } from "react";
import { Drawer, Box, Tabs, Tab, Divider, Toolbar } from "@mui/material";
// import CourseTree from './CourseTree';
// import HelpInfo from './HelpInfo';

interface SidebarProps {
  drawerWidth: number;
}

const Sidebar = ({ drawerWidth }: PropsWithChildren<SidebarProps>) => {
  const [tabIndex, setTabIndex] = useState(0);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabIndex(newValue);
  };

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: "border-box" },
      }}
    >
      <Toolbar />
      <Box sx={{ overflow: "auto" }}>
        <Tabs
          value={tabIndex}
          onChange={handleTabChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
        >
          <Tab label="Course Tree" />
          <Tab label="Help Info" />
        </Tabs>
        <Divider />
        CourseTree
        {/* {tabIndex === 0 ? <CourseTree /> : <HelpInfo />} */}
      </Box>
    </Drawer>
  );
};

export default Sidebar;
