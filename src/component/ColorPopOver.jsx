import * as React from "react";
import Popover from "@mui/material/Popover";
import { Box, Grid } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { updateNote } from "../actions/noteAction";
import userConnect from "../service/notesApi";

export default function ColorPopOver(props) {
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(true);

  const handleClose = () => {
    setOpen(false);
    props.handleClose();
  };

  const commonStyles = {
    borderColor: "text.primary",
    m: 1,
    border: 1,
    width: "1.5rem",
    height: "1.5rem",
  };

  const handleBgColor = (colors) => {
    let data = {
      title: props.note.title,
      content: props.note.content,
      _id: props.note._id,
      userId: props.note.userId,
      color: colors.colorCode,
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

  const colorPaletteClassName = [
    {
      colorCode: "rgb(255, 255, 255)",
      colorName: "White",
    },
    {
      colorCode: "rgb(242, 139, 130)",
      colorName: "Red",
    },
    {
      colorCode: "rgb(215, 174, 251)",
      colorName: "Purple",
    },
    {
      colorCode: "rgb(255, 192, 203)",
      colorName: "Pink",
    },

    {
      colorCode: "rgb(167, 255, 235)",
      colorName: "Teal",
    },
    {
      colorCode: "rgb(251, 188, 4)",
      colorName: "Orange",
    },
    {
      colorCode: "rgb(174, 203, 250)",
      colorName: "Dark Blue",
    },
    {
      colorCode: "rgb(232, 234, 237)",
      colorName: "Gray",
    },
    {
      colorCode: "rgb(203, 240, 248)",
      colorName: "Blue",
    },
    {
      colorCode: "rgb(230, 201, 168)",
      colorName: "Brown",
    },
    {
      colorCode: "rgb(255, 255, 0)",
      colorName: "Yellow",
    },
    {
      colorCode: "rgb(204, 255, 144)",
      colorName: "Green",
    },
  ];
  return (
    <div>
      <Popover
        open={open}
        anchorEl={props.anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <Grid
          align="center"
          container
          style={{
            width: 150,
            height: 120,
          }}
        >
          {colorPaletteClassName.map((colors) => (
            <Grid item xs={3}>
              <Box
                sx={{
                  ...commonStyles,
                  borderRadius: "50%",
                  bgcolor: colors.colorCode,
                }}
                onClick={() => handleBgColor(colors)}
              />
            </Grid>
          ))}
        </Grid>
      </Popover>
    </div>
  );
}
