import * as React from "react";
import { Grid } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import AddAlertOutlinedIcon from "@mui/icons-material/AddAlertOutlined";
import PersonAddOutlinedIcon from "@mui/icons-material/PersonAddOutlined";
import ColorLensOutlinedIcon from "@mui/icons-material/ColorLensOutlined";
import InsertPhotoOutlinedIcon from "@mui/icons-material/InsertPhotoOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import ColorPopOver from "./ColorPopOver";
import userConnect from "../service/notesApi";
import { useDispatch } from "react-redux";
import { deleteNote, updateNote } from "../actions/noteAction";

export default function NoteIcons(props) {
  const dispatch = useDispatch();
  const [color, setColor] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setColor(true);
  };
  const handleClose = () => {
    setAnchorEl(null);
    props.handleHover(props.index);
  };
  const handleDelete = () => {
    props.handleClick(props.note);
    let data = {
      title: props.note.title,
      content: props.note.content,
      _id: props.note._id,
      userId: props.note.userId,
      isTrash: true,
    };
    userConnect
      .updateNotes(data)
      .then((response) => {
        dispatch(deleteNote({ data: response.data }));
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  const handleImageUpdate=(image)=>{
    let data={
      ...props.note,
      image:image,
    }
    userConnect
      .updateNotes(data)
      .then((response) => {
        console.log(response);
        dispatch(updateNote({ data: response.data, index: props.index }));
      })
      .catch((e) => {
        console.log(e);
      });
  }
  const handleFile = (e) => {
    const formData = new FormData();
    formData.append("image",e.target.files[0],e.target.files[0].name);
    userConnect.postImage(formData)
    .then((response)=>{
      console.log(response);
      handleImageUpdate(response.data.filename)
    })
    .catch((err)=>{
      console.log(err);
    })
  }
  return (
    <div>
      <Grid align="center">
        <IconButton size="small" color="default" sx={{ padding: "9px" }}>
          <AddAlertOutlinedIcon />
        </IconButton>
        <IconButton size="small" color="default" sx={{ padding: "9px" }}>
          <PersonAddOutlinedIcon />
        </IconButton>
        <IconButton
          size="small"
          color="default"
          sx={{ padding: "9px" }}
          onClick={handleClick}
        >
          <ColorLensOutlinedIcon />
        </IconButton>
        <input
          style={{ display: "none" }}
          id="raised-button-file"
          type="file"
          onChange={handleFile}
        />
        <label htmlFor="raised-button-file">
          <IconButton component ="span" >
            <InsertPhotoOutlinedIcon />
          </IconButton>
        </label>
        <IconButton
          size="small"
          color="default"
          sx={{ padding: "9px" }}
          onClick={handleDelete}
        >
          <DeleteOutlineOutlinedIcon />
        </IconButton>
        {color ? (
          <ColorPopOver
            note={props.note}
            index={props.index}
            anchorEl={anchorEl}
            handleClose={handleClose}
          />
        ) : null}
      </Grid>
    </div>
  );
}
