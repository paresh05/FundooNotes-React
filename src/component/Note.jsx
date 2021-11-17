import React from "react";
import { Grid, Typography, Box } from "@material-ui/core";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import NoteIcons from "./NoteIcons";
import { useSelector } from "react-redux";

export default function Note() {
  const [hover, setHover] = React.useState(false);
  const myNote = useSelector((state)=>state.allNotes.filteredNotes);
  return (
    <Grid container spacing={5}>
      {myNote.map((note) => (
        <Grid item>
          <Card
            variant="outlined"
            sx={{ width: 250, height: 140 }}
            onMouseOver={() => {
              setHover(true);
            }}
            onMouseLeave={() => {
              setHover(false);
            }}
          >
            <CardContent>
              <Typography variant="h6" gutterBottom component="div">
                {note.title}
              </Typography>
              <Typography>{note.content}</Typography>
            </CardContent>
            {hover ? <NoteIcons /> : null}
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
