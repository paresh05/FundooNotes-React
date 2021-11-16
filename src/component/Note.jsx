import React, { useEffect, useState } from "react";
import userConnect from "../service/RegistrationApi";
import { Grid, Typography, Box } from "@material-ui/core";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

export default function Note() {
  const [note, setNote] = useState([]);
  useEffect(() => {
    fetchNotes();
  }, []);
  const fetchNotes = () => {
    userConnect
      .getNotes()
      .then((response) => {
        setNote(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  return (
      <Grid container spacing={5}>
        {note.map((note) => (
          <Grid item>
            <Card variant="outlined" sx={{ width: 250 }}>
              <CardContent>
                <Typography variant="h5" gutterBottom component="div">
                  {note.title}
                </Typography>
                <Typography variant="h6">
                  {note.content}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
  );
}
