import React, { useState } from "react";
import { Grid, Typography } from "@material-ui/core";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { useSelector } from "react-redux";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import RestoreFromTrashIcon from "@mui/icons-material/RestoreFromTrash";
import { IconButton } from "@mui/material";
import userConnect from "../service/notesApi";
import { useDispatch } from "react-redux";
import { deleteANote, deleteFromTrash } from "../actions/noteAction";

export default function Trash() {
  const dispatch = useDispatch();
  const [hover, setHover] = useState([]);
  const myNote = useSelector((state) => state.allNotes.trash);
  const handleRestore = (note) => {
    let data = {
      title: note.title,
      content: note.content,
      _id: note._id,
      userId: note.userId,
      isTrash: false,
    };
    userConnect
      .updateNotes(data)
      .then((response) => {
        dispatch(deleteFromTrash({ data: response.data }));
      })
      .catch((e) => {
        console.log(e);
      });
  };
  const handleDelete = (note) => {
    let data = {
      title: note.title,
      content: note.content,
      _id: note._id,
      userId: note.userId,
      isTrash: true,
    };
    userConnect
      .deleteNotes(data)
      .then((response) => {
        dispatch(deleteANote({ data:data }));
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  return (
    <Grid
      container
      spacing={4}
      style={{ marginTop: "85px", marginLeft: "15px" }}
    >
      <Grid
        item
        xs={10}
        align="center"
        style={{ fontStyle: "italic", fontWeight: "bold" }}
      >
        <Typography variant="subtitle1">
          Notes in Trash are deleted after 7 days.
        </Typography>
      </Grid>
      {myNote.map((note, index) => (
        <Grid item style={{ marginLeft: "30px" }}>
          <Card
            variant="outlined"
            sx={{ width: 250, height: 140 }}
            key={index}
            onMouseEnter={() => {
              setHover({ [index]: true });
            }}
            onMouseLeave={() => {
              setHover({ [index]: false });
            }}
          >
            <CardContent>
              <Typography variant="h6" gutterBottom component="div">
                {note.title}
              </Typography>
              <Typography>{note.content}</Typography>
            </CardContent>
            {hover[index] ? (
              <Grid align="center">
                <IconButton
                  onClick={() => {
                    handleDelete(note);
                  }}
                >
                  <DeleteForeverIcon />
                </IconButton>
                <IconButton
                  onClick={() => {
                    handleRestore(note);
                  }}
                >
                  <RestoreFromTrashIcon />
                </IconButton>
              </Grid>
            ) : null}
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
