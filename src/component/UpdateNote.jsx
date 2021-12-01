import * as React from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
} from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import InputBase from "@mui/material/InputBase";
import userConnect from "../service/notesApi";
import { useDispatch } from "react-redux";
import { updateNote } from "../actions/noteAction";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import { CardActionArea } from "@material-ui/core";

export default function UpdateNote(props) {
  const dispatch = useDispatch();
  let initialNote = {
    title: props.note.title,
    content: props.note.content,
  };
  const [note, setNote] = React.useState(initialNote);
  const [open, setOpen] = React.useState(true);
  const [image, setImage] = React.useState(false);
  const handleUpdate = () => {
    setOpen(false);
    props.handleSetUpdate(props.index);
    let data = {
      title: note.title,
      content: note.content,
      _id: props.note._id,
      userId: props.note.userId,
      color: props.note.color,
      isTrash: false,
      image: props.note.image,
    };
    console.log(data);
    userConnect
      .updateNotes(data)
      .then((response) => {
        dispatch(updateNote({ data: response.data, index: props.index }));
      })
      .catch((e) => {
        console.log(e);
      });
  };
  const handleDelImage = () => {
    setImage(true);
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
        {props.note.image !== "" ? (
          <CardActionArea>
          <CardMedia
            component="img"
            alt="images"
            height="250"
            image={`http://localhost:3001/images/${props.note.image}`}
            onMouseOver={handleDelImage}
            onMouseLeave={() => {
              setImage(false);
            }}
          />
             <IconButton size="large">
              <DeleteIcon />
            </IconButton>
          </CardActionArea>
        ) : null}
        <DialogTitle sx={{ bgcolor: props.note.color }}>
          <InputBase
            id="title"
            type="title"
            name="title"
            value={note.title}
            onChange={handleNote}
            sx={{ fontSize: "1.375rem" }}
            variant="standard"
            fullWidth
          />
        </DialogTitle>
        <DialogContent sx={{ bgcolor: props.note.color }}>
          <InputBase
            id="content"
            type="content"
            variant="standard"
            name="content"
            value={note.content}
            onChange={handleNote}
            multiline
            fullWidth
            autoFocus
          />
        </DialogContent>
        <DialogActions sx={{ bgcolor: props.note.color }}>
          <Button
            onClick={handleUpdate}
            color="inherit"
            sx={{
              fontSize: "0.875rem",
              fontWeight: "600",
              textTransform: "none",
            }}
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
