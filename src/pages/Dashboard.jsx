import React, { useEffect, useState } from "react";
import AppDrawer from "../component/AppDrawer";
import Appbar from "../component/Appbar";
import Note from "../component/Note";
import { Box } from "@material-ui/core";
import userConnect from "../service/RegistrationApi";
import { useDispatch } from "react-redux";
import { fetchAllNotes } from "../actions/noteAction";
import CreateNote from "../component/CreateNote";

export default function Dashboard() {
  const [title, setTitle] = React.useState(["FundooNotes"]);
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();
  const handleDrawer = () => {
    setOpen(!open);
  };
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const handleTitle = (text) => {
    setTitle(text);
  };
  
  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = () => {
    userConnect
      .getNotes()
      .then((response) => {
        dispatch(fetchAllNotes(response.data))
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <Box sx={{ display: "flex" }}>
      <Appbar handleDrawer={handleDrawer} title={title} />
      <AppDrawer
        open={open}
        handleDrawerOpen={handleDrawerOpen}
        handleDrawerClose={handleDrawerClose}
        handleTitle={handleTitle}
      />
      <Box >
      <CreateNote/>
        <Note/>
      </Box>
    </Box>
  );
}
