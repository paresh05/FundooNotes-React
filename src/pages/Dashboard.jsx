import * as React from "react";
import AppDrawer from "../component/AppDrawer";
import Appbar from "../component/Appbar";
import Note from "../component/Note";

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
    <>
      <Appbar handleDrawer={handleDrawer} />
      <AppDrawer
        open={open}
        handleDrawerOpen={handleDrawerOpen}
        handleDrawerClose={handleDrawerClose}
      />
      <Note/>
    </>
  );
}
