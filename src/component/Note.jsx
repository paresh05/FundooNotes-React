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
    <div>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        style={{ marginTop: "100px", marginLeft: "25%" }}
      >
        {note.map((note) => (
          <Grid item xs={2} sm={4} md={4}>
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
    </div>
  );
}
