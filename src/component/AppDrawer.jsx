import * as React from "react";
import { styled } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import ArchiveOutlinedIcon from "@mui/icons-material/ArchiveOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";

const drawerWidth = 220;

const openedMixin = (theme) => ({
  width: drawerWidth,
  borderRight: "0px",
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  borderRight: "0px",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(9)} + 1px)`,
  },
});

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  borderRight: "0px",
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const ListItems = styled(ListItem)`
  &:hover {
    background-color: #e6e8e6;
    border-radius:0px 25px 25px 0px
  }
  &:focus {
    background-color: #feefc3;
    border-radius:50px
  }
`;

export default function AppDrawer(props) {
  return (
    <Drawer
      variant="permanent"
      open={props.open}
      onMouseOver={() => props.handleDrawerOpen()}
      onMouseLeave={() => props.handleDrawerClose()}
    >
      <List style={{ marginTop: "65px", paddingLeft:"8px", paddingRight:"8px"}}>
        {["Notes", "Remainders", "Edit Labels", "Archive", "Trash"].map(
          (text, index) => (
            <ListItems
              button
              key={text}
              onClick={() => {
                text === "Notes"
                  ? props.handleTitle("FundooNotes")
                  : props.handleTitle(text);
              }}
            >
              <ListItemIcon>
                {index === 0 ? (
                  <LightbulbOutlinedIcon onClick={()=>{props.handleNoteOption()}}/>
                ) : index === 1 ? (
                  <NotificationsNoneOutlinedIcon />
                ) : index === 2 ? (
                  <EditOutlinedIcon />
                ) : index === 3 ? (
                  <ArchiveOutlinedIcon />
                ) : index === 4 ? (
                  <DeleteOutlineOutlinedIcon onClick={()=>{props.handleOption()}}/>
                ) : (
                  <LightbulbOutlinedIcon />
                )}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItems>
          )
        )}
      </List>
    </Drawer>
  );
}
