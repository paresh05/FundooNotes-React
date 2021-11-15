import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import ArchiveOutlinedIcon from "@mui/icons-material/ArchiveOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";

const drawerWidth = 210;

const openedMixin = (theme) => ({
  width: drawerWidth,
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

export default function AppDrawer(props) {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Drawer
        variant="permanent"
        open={props.open}
        onMouseOver={()=>props.handleDrawerOpen()}
        onMouseLeave={()=>props.handleDrawerClose()}
      >
        <List style={{ marginTop: "60px" }}>
          {["Notes", "Remainders", "Edit Labels", "Archive", "Trash"].map(
            (text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>
                  {index === 0 ? (
                    <LightbulbOutlinedIcon />
                  ) : index === 1 ? (
                    <NotificationsNoneOutlinedIcon />
                  ) : index === 2 ? (
                    <EditOutlinedIcon />
                  ) : index === 3 ? (
                    <ArchiveOutlinedIcon />
                  ) : index === 4 ? (
                    <DeleteOutlineOutlinedIcon />
                  ) : (
                    <LightbulbOutlinedIcon />
                  )}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            )
          )}
        </List>
      </Drawer>
    </Box>
  );
}