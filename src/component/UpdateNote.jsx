import * as React from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
} from "@mui/material";
import InputBase from "@mui/material/InputBase";
import userConnect from "../service/notesApi";
import { useDispatch } from "react-redux";
import { updateNote } from "../actions/noteAction";

export default function UpdateNote(props) {
  const dispatch = useDispatch();
  let initialNote = {
    title: props.note.title,
    content: props.note.content,
  };
  const [note, setNote] = React.useState(initialNote);
  const [open, setOpen] = React.useState(true);
  const handleUpdate = () => {
    setOpen(false);
    props.handleSetUpdate(props.index);
    let data = {
      title: note.title,
      content: note.content,
      _id: props.note._id,
      userId: props.note.userId,
      isTrash: false,
    };
    userConnect
      .updateNotes(data)
      .then((response) => {
        dispatch(updateNote({ data: response.data, index: props.index }));
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
  const handleClose = () => {
    setOpen(!open);
    props.handleSetUpdate(props.index);
  };
  return (
    <>
      <Dialog open={open} onClose={handleClose} fullWidth>
        <DialogTitle>
          <InputBase
            id="title"
            placeholder="Title"
            type="title"
            name="title"
            value={note.title}
            onChange={handleNote}
            variant="standard"
            fullWidth
          />
        </DialogTitle>
        <DialogContent>
          <InputBase
            id="content"
            placeholder="Take a Note"
            type="content"
            variant="standard"
            name="content"
            value={note.content}
            onChange={handleNote}
            fullWidth
            autoFocus
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleUpdate}>Close</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
