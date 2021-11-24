import React, { useEffect, useState } from "react";
import AppDrawer from "../component/AppDrawer";
import Appbar from "../component/Appbar";
import Note from "../component/Note";
import { Box } from "@material-ui/core";
import userConnect from "../service/RegistrationApi";
import { useDispatch } from "react-redux";
import { addToTrash, fetchAllNotes} from "../actions/noteAction";
import CreateNote from "../component/CreateNote";
import Trash from "../component/Trash";

export default function Dashboard() {
  const [title, setTitle] = React.useState(["FundooNotes"]);
  const [option, setOption] = React.useState(true);
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();

  const handleOption = () => {
    setOption(false);
  };

  const handleNoteOption = () => {
    setOption(true);
  };

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
        let Notes = response.data;
        console.log(Notes);
        dispatch(fetchAllNotes(Notes.filter((note)=>!note.isTrash)))
        dispatch(addToTrash(Notes.filter((note)=>note.isTrash)))
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
        handleOption={handleOption}
        handleNoteOption={handleNoteOption}
      />
      {option ? (
        <Box>
          <CreateNote />
          <Note />
        </Box>
      ) : (
        <Trash />
      )}
    </Box>
  );
}
