import * as React from "react";
import InputBase from "@mui/material/InputBase";
import { Grid, Paper, Button } from "@material-ui/core";
import userConnect from "../service/notesApi";
import { useDispatch } from "react-redux";
import { postNewNote } from "../actions/noteAction";

export default function CreateNote() {
  const dispatch = useDispatch();
  const styleInputOnClick = {
    marginLeft: "30%",
    marginTop: "100px",
    display: "flex",
    flexWrap: "wrap",
    width: "46%",
    height: 130,
  };
  const styleInput = {
    marginLeft: "30%",
    marginTop: "100px",
    display: "flex",
    flexWrap: "wrap",
    width: "46%",
    height: 50,
  };
  let initialNote = {
    title: "",
    content: "",
  };
  const [paperWidth, setPaperWidth] = React.useState(styleInput);
  const [note, setNote] = React.useState(initialNote);
  const [postNote, setPostNote] = React.useState(false);

  const onSubmit = () => {
    let data = {
      title: note.title,
      content: note.content,
    };
    setPaperWidth(styleInput);
    setPostNote(false);
    userConnect
      .postNotes(data)
      .then((response) => {
        console.log(response);
        dispatch(postNewNote(data))
      })
      .catch((e) => {
        console.log(e);
      });
  };
  const handleNote = (event) => {
    let { name, value } = event.target;
    setNote((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  return (
    <Grid>
      <Paper elevation={5} style={paperWidth}>
        {postNote === false ? (
          <InputBase
            id="title"
            placeholder="Take a Note"
            type="title"
            name="title"
            variant="standard"
            style={{ marginLeft: "15px" }}
            fullWidth
            onClick={() => {
              setPaperWidth(styleInputOnClick);
              setPostNote(true);
            }}
          />
        ) : (
          <>
            <Grid item xs={12}>
              <InputBase
                id="title"
                placeholder="Title"
                type="title"
                name="title"
                value={note.title}
                onChange={handleNote}
                variant="standard"
                style={{ marginLeft: "15px", marginTop: "7px" }}
                fullWidth
              />
              <InputBase
                id="content"
                placeholder="Take a Note"
                type="content"
                variant="standard"
                name="content"
                value={note.content}
                onChange={handleNote}
                style={{ marginLeft: "15px", marginTop: "10px" }}
                fullWidth
                autoFocus
              />
            </Grid>
            <Grid item xs={11} align="right">
              <Button
                type="submit"
                value="Submit"
                color="inherit"
                variant="text"
                size="small"
                onClick={onSubmit}
              >
                close
              </Button>
            </Grid>
          </>
        )}
      </Paper>
    </Grid>
  );
}
