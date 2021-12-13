import React, { useState } from "react";
import { Grid, Typography } from "@material-ui/core";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import NoteIcons from "./NoteIcons";
import { useSelector } from "react-redux";
import UpdateNote from "./UpdateNote";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import userConnect from "../service/notesApi";
import { useDispatch } from "react-redux";
import { deleteFromTrash } from "../actions/noteAction";

export default function Note() {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [note, setNote] = React.useState([]);
  const [hover, setHover] = useState([]);
  const [update, setUpdate] = useState(false);
  const view = useSelector((state) => state.allNotes.view);
  const myNote = useSelector((state) => state.allNotes.filteredNotes);
  const handleSetUpdate = (index) => {
    setUpdate({ [index]: false });
  };
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };
  const handleRestore = (note) => {
    let data = {
      title: note.title,
      content: note.content,
      _id: note._id,
      userId: note.userId,
      color: note.color,
      isTrash: false,
    };
    setOpen(false);
    setNote([]);
    userConnect
      .updateNotes(data)
      .then((response) => {
        dispatch(deleteFromTrash({ data: response.data }));
      })
      .catch((e) => {
        console.log(e);
      });
  };
  const handleClick = (note) => {
    setOpen(true);
    setNote(note);
  };
  const handleHover = (index) => {
    setHover({ [index]: false });
  };
  const action = (
    <React.Fragment>
      <Button color="inherit" size="small" onClick={() => handleRestore(note)}>
        UNDO
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );
  let item;
  let cardWidth;
  if (view) {
    item = 11;
    cardWidth = 540;
  } else {
    item = 0;
    cardWidth = 240;
  }
  return (
    <Grid
      container
      spacing={2}
      style={{ marginTop: "25px", paddingLeft: "150px" }}
    >
      {myNote.map((note, index) => (
        <Grid item xs={item} align="center">
          <Card
            variant={hover[index] ? "elevation" : "outlined"}
            elevation={5}
            sx={{
              bgcolor: note.color,
              width: cardWidth,
              height: 270,
              borderRadius: 2,
            }}
            key={index}
            onMouseEnter={() => {
              setHover({ [index]: true });
            }}
            onMouseLeave={() => handleHover(index)}
          >
            {note.image !== "" ? (
              <CardMedia
                component="img"
                alt="images"
                height="140"
                image={`http://localhost:3001/images/${note.image}`}
                onClick={() => {
                  setUpdate({ [index]: true });
                }}
              />
            ) : null}
            <CardContent
              onClick={() => {
                setUpdate({ [index]: true });
              }}
            >
              <Typography
                variant="body1"
                noWrap
                style={{
                  fontSize: "1.125rem",
                  fontWeight: "400",
                  color: "rgb(32,33,36)",
                  letterSpacing: 0,
                }}
                gutterBottom
                component="div"
              >
                {note.title}
              </Typography>
              <Typography
                style={{
                  height: note.image !== "" ? "20px" : "161px",
                  overflow: "hidden",
                  fontSize: "0.93rem",
                }}
              >
                {note.content}
              </Typography>
            </CardContent>
            {hover[index] ? (
              <NoteIcons
                note={note}
                index={index}
                handleHover={handleHover}
                handleClick={handleClick}
              />
            ) : null}
            {update[index] ? (
              <UpdateNote
                note={note}
                index={index}
                handleSetUpdate={handleSetUpdate}
              />
            ) : null}
          </Card>
        </Grid>
      ))}
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message="Note trashed"
        action={action}
      />
    </Grid>
  );
}
