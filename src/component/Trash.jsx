import React, { useState } from "react";
import { Grid, Typography } from "@material-ui/core";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { useSelector } from "react-redux";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import CardMedia from "@mui/material/CardMedia";
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
      color:note.color,
      image:note.image,
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
      color:note.color,
      image:note.image,
      isTrash: true,
    };
    userConnect
      .deleteNotes(data)
      .then((response) => {
        dispatch(deleteANote({ data: data }));
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  return (
    <Grid
      container
      spacing={2}
      style={{ marginTop: "85px", paddingLeft: "150px"}}
    >
      <Grid
        item
        xs={10}
        align="center"
        style={{ fontStyle: "italic" }}
      >
        <Typography variant="subtitle1" style={{fontWeight:"600"}}>
          Notes in Trash are deleted after 7 days.
        </Typography>
      </Grid>
      {myNote.map((note, index) => (
        <Grid item style={{ marginLeft: "30px" }} align="center">
          <Card
            variant={hover[index] ? "elevation" : "outlined"}
            elevation={5}
            sx={{
              bgcolor: note.color,
              width: 240,
              height: 270,
              borderRadius: 2,
            }}
            key={index}
            onMouseEnter={() => {
              setHover({ [index]: true });
            }}
            onMouseLeave={() => {
              setHover({ [index]: false });
            }}
          >
            {note.image !== "" ? (
              <CardMedia
                component="img"
                alt="images"
                height="140"
                image={`http://localhost:3001/images/${note.image}`}
              />
            ) : null}
            <CardContent>
              <Typography noWrap variant="h6" gutterBottom component="div">
                {note.title}
              </Typography>
              <Typography style={{height:((note.image !== "") ?"20px":"161px"), overflow:"hidden",fontSize: "0.93rem"}}>{note.content}</Typography>
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
