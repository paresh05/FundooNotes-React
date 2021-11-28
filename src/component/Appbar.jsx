import React, { useState, useEffect } from "react";
import { styled, alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import MoreIcon from "@mui/icons-material/MoreVert";
import RefreshIcon from "@mui/icons-material/Refresh";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import ViewAgendaOutlinedIcon from "@mui/icons-material/ViewAgendaOutlined";
import AppsIcon from "@mui/icons-material/Apps";
import LightbulbSharpIcon from "@mui/icons-material/LightbulbSharp";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { fetchFilteredNotes, viewMode } from "../actions/noteAction";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: "rgb(244, 244, 248)",
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  height: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(10),
    width: "50%",
    height: "48px",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  color: "grey",
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    width: "500px",
  },
}));

const AppBar = styled(MuiAppBar)(({ theme }) => ({
  background: "white",
  color: "black",
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
}));

export default function Appbar(props) {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const handleInput = (event) => {
    setInput(event.target.value);
  };
  const view = useSelector((state) => state.allNotes.view);

  const handleView = () => {
    dispatch(viewMode(!view));
  };

  const notes = useSelector((state) => state.allNotes.notes);

  const filterNotes = (input) => {
    const filtered = notes.filter((note) => {
      return note.title.toLowerCase().includes(input.toLowerCase());
    });
    dispatch(fetchFilteredNotes(filtered));
  };

  useEffect(() => {
    filterNotes(input);
  }, [input, notes]);

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" variant="outlined">
        <Toolbar>
          <IconButton
            id="menu"
            color="inherit"
            aria-label="open drawer"
            onClick={() => props.handleDrawer()}
            edge="start"
            sx={{
              marginRight: "15px",
            }}
          >
            <MenuIcon />
          </IconButton>
          <LightbulbSharpIcon />
          <Typography
            variant="h6"
            noWrap
            component="div"
            style={{ marginLeft: "5px" }}
          >
            {props.title}
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              sx={{ padding: "4px" }}
              placeholder="Search"
              value={input}
              onChange={(event) => {
                handleInput(event);
              }}
            />
          </Search>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <IconButton size="large" color="inherit">
              <RefreshIcon />
            </IconButton>
            <IconButton size="large" color="inherit" onClick={handleView}>
              {view ? <GridViewOutlinedIcon /> : <ViewAgendaOutlinedIcon />}
            </IconButton>
            <IconButton
              size="large"
              color="inherit"
              sx={{ marginRight: "50px" }}
            >
              <SettingsOutlinedIcon />
            </IconButton>
            <IconButton size="large" color="inherit">
              <AppsIcon />
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-haspopup="true"
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-haspopup="true"
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
