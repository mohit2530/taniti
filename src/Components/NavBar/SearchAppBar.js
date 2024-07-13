import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { ListItem, ListItemButton, ListItemText, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
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
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

export default function SearchAppBar({ selected = false }) {
  const navigate = useNavigate();
  const options = [
    {
      id: 1,
      label: "Attractions",
      redirectTo: "/attractions",
    },
    {
      id: 2,
      label: "Entertainment",
      redirectTo: "/entertainment",
    },
    {
      id: 3,
      label: "Lodging",
      redirectTo: "/lodging",
    },
    {
      id: 4,
      label: "Travel",
      redirectTo: "/travel",
    },
    {
      id: 5,
      label: "Eateries",
      redirectTo: "/eateries",
    },
    {
      id: 6,
      label: "Contact",
      redirectTo: "/contact",
    },
  ];
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            onClick={() => navigate("/")}
            sx={{
              flexGrow: 1,
              display: { xs: "none", sm: "block" },
              cursor: "pointer",
            }}
          >
            Taniti Village
          </Typography>
          <Stack direction="row" alignItems="center">
            {options.map((v) => (
              <ListItem>
                <ListItemButton
                  sx={{
                    backgroundColor:
                      v.id === parseInt(selected) ? "primary.light" : null,
                  }}
                  onClick={() => navigate(v.redirectTo)}
                >
                  <ListItemText>{v.label}</ListItemText>
                </ListItemButton>
              </ListItem>
            ))}
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
