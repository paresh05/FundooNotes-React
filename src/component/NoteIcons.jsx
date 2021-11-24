import * as React from "react";
import { Grid } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import AddAlertOutlinedIcon from "@mui/icons-material/AddAlertOutlined";
import PersonAddOutlinedIcon from "@mui/icons-material/PersonAddOutlined";
import ColorLensOutlinedIcon from "@mui/icons-material/ColorLensOutlined";
import InsertPhotoOutlinedIcon from "@mui/icons-material/InsertPhotoOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import userConnect from "../service/notesApi";
import { useDispatch } from "react-redux";
import { deleteNote } from "../actions/noteAction";

export default function NoteIcons(props) {
  const dispatch = useDispatch();
  const handleDelete = () => {
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
        dispatch(deleteNote({data:response.data}))
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  return (
    <div>
      <Grid>
        <IconButton size="small" color="default" sx={{ padding: "9px" }}>
          <AddAlertOutlinedIcon />
        </IconButton>
        <IconButton size="small" color="default" sx={{ padding: "9px" }}>
          <PersonAddOutlinedIcon />
        </IconButton>
        <IconButton size="small" color="default" sx={{ padding: "9px" }}>
          <ColorLensOutlinedIcon />
        </IconButton>
        <IconButton size="small" color="default" sx={{ padding: "9px" }}>
          <InsertPhotoOutlinedIcon />
        </IconButton>
        <IconButton
          size="small"
          color="default"
          sx={{ padding: "8px" }}
          onClick={handleDelete}
        >
          <DeleteOutlineOutlinedIcon />
        </IconButton>
        <IconButton size="small" color="default" sx={{ padding: "8px" }}>
          <MoreVertOutlinedIcon />
        </IconButton>
      </Grid>
    </div>
  );
}
