import * as React from "react";
import AppDrawer from "../component/AppDrawer";
import Appbar from "../component/Appbar";
import Note from "../component/Note";
import { Box } from "@material-ui/core";

export default function Dashboard() {
  const [open, setOpen] = React.useState(false);
  const handleDrawer = () => {
    setOpen(!open);
  };
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  return (
      <Box sx={{ display: "flex" }}>
        <Appbar handleDrawer={handleDrawer} />
        <AppDrawer
            open={open}
            handleDrawerOpen={handleDrawerOpen}
            handleDrawerClose={handleDrawerClose}
          />
        <Box sx={{  marginTop: "100px", marginLeft:"10%"}}>
          <Note />
        </Box>
      </Box>
      );
}
