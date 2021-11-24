import React, { useState } from "react";
import { Grid, Typography, Box } from "@material-ui/core";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import NoteIcons from "./NoteIcons";
import { useSelector } from "react-redux";
import UpdateNote from "./UpdateNote";

export default function Note() {
  const [hover, setHover] = useState([]);
  const [update, setUpdate] = useState(false);
  const myNote = useSelector((state) => state.allNotes.filteredNotes);
  const handleSetUpdate = (index) => {
    setUpdate({ [index]: false });
  };
  return (
    <Grid
      container
      spacing={5}
      style={{ marginTop: "15px", marginLeft: "30px" }}
    >
      {myNote.map((note, index) => (
        <Grid item>
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
            <CardContent
              onClick={() => {
                setUpdate({ [index]: true });
              }}
            >
              <Typography variant="h6" gutterBottom component="div">
                {note.title}
              </Typography>
              <Typography>{note.content}</Typography>
            </CardContent>
            {hover[index] ? <NoteIcons note={note} index={index} /> : null}
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
    </Grid>
  );
}
