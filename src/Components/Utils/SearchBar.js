import { SearchOutlined } from "@mui/icons-material";
import {
  Autocomplete,
  InputAdornment,
  ListItem,
  ListItemButton,
  ListItemText,
  Stack,
  TextField,
} from "@mui/material";
import { useState } from "react";

export default function SearchBar() {
  const [selected, setSelected] = useState(1);
  const options = [
    {
      id: 1,
      label: "New",
      caption: "",
    },
    {
      id: 2,
      label: "Ascending",
      caption: "",
    },
    {
      id: 3,
      label: "Descending",
      caption: "",
    },
    {
      id: 4,
      label: "Rating",
      caption: "",
    },
  ];

  return (
    <Stack direction="row" justifyContent={"space-between"}>
      <Stack>
        <Autocomplete
          options={[]}
          sx={{ width: "300px" }}
          renderInput={(params) => (
            <TextField
              variant="standard"
              {...params}
              label="Search..."
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <SearchOutlined />
                  </InputAdornment>
                ),
              }}
            />
          )}
        />
      </Stack>
      <Stack direction="row" alignItems="center">
        {options.map((v) => (
          <ListItem>
            <ListItemButton
              sx={{
                padding: "0.4rem",
                borderRadius: "0.4rem",
                backgroundColor:
                  v.id === parseInt(selected) ? "primary.light" : null,
              }}
              onClick={() => setSelected(v.id)}
            >
              <ListItemText>{v.label}</ListItemText>
            </ListItemButton>
          </ListItem>
        ))}
      </Stack>
    </Stack>
  );
}
