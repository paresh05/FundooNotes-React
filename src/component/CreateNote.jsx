import * as React from "react";
import InputBase from "@mui/material/InputBase";
import { Grid, Paper, Button } from "@material-ui/core";
import userConnect from "../service/notesApi";
import { useDispatch } from "react-redux";
import { postNewNote } from "../actions/noteAction";
import { Stack } from "@mui/material";

const buttonStyles = {
  fontWeight: "600",
  textTransform: "none",
  fontSize: "0.875rem",
  color:"grey"
};
export default function CreateNote() {
  const dispatch = useDispatch();
  const styleInputOnClick = {
    marginLeft: "365px",
    marginTop: "100px",
    display: "flex",
    flexWrap: "wrap",
    width: "600px",
    minHeight: 130,
    borderRadius:8
  };
  const styleInput = {
    marginLeft: "365px",
    marginTop: "100px",
    display: "flex",
    flexWrap: "wrap",
    width: "600px",
    height: 44,
    borderRadius:8
  };
  let initialNote = {
    title: "",
    content: "",
  };
  const [paperWidth, setPaperWidth] = React.useState(styleInput);
  const [note, setNote] = React.useState(initialNote);
  const [postNote, setPostNote] = React.useState(false);

  const onClose = () => {
    setPaperWidth(styleInput);
    setPostNote(false);
  };
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
        setNote(initialNote);
        dispatch(postNewNote(response.data));
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
            placeholder="Take a note..."
            type="title"
            name="title"
            variant="standard"
            style={{ paddingLeft: "15px" , fontWeight:"600"}}
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
                style={{ paddingLeft: "15px", marginTop: "7px" ,fontWeight:"600"}}
                fullWidth
                multiline
              />
              <InputBase
                id="content"
                placeholder="Take a Note"
                type="content"
                variant="standard"
                name="content"
                value={note.content}
                onChange={handleNote}
                style={{ paddingLeft: "15px", marginTop: "10px" }}
                fullWidth
                multiline
                autoFocus
              />
            </Grid>
            <Grid item xs={12} style={{ paddingRight: "15px" }}>
              <Stack spacing={2} direction="row-reverse">
                <Button
                  type="submit"
                  size="small"
                  onClick={onClose}
                  style={buttonStyles}
                >
                  Close
                </Button>
                <Button
                  type="submit"
                  color="inherit"
                  size="small"
                  onClick={onSubmit}
                  style={buttonStyles}
                >
                  Submit
                </Button>
              </Stack>
            </Grid>
          </>
        )}
      </Paper>
    </Grid>
  );
}
