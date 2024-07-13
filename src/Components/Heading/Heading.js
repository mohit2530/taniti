import { Button, Stack, TextField, Typography } from "@mui/material";
import Images from "./Images";
import island01 from "../../assets/island-main.jpg";
import island02 from "../../assets/island02.jpg";
import { useNavigate } from "react-router-dom";

export default function Heading({ title, subtitle, isContactPage = false }) {
  const navigate = useNavigate();
  return (
    <Stack
      justifyContent="center"
      alignItems="center"
      height={isContactPage ? "50vh" : "70vh"}
      spacing="2rem"
      bgcolor="#D3D3D3"
    >
      <Stack alignItems="center">
        <Typography variant="h2">{title}</Typography>
        <Typography variant="h4">{subtitle}</Typography>
      </Stack>

      {isContactPage ? (
        <Stack alignItems="center">
          <Typography> Subscribe to our newsletter.</Typography>
          <Stack direction="row" spacing="1rem">
            <TextField
              size="small"
              variant="outlined"
              placeholder="username@gmail.com"
            />
            <Button variant="contained">Submit</Button>
          </Stack>
        </Stack>
      ) : (
        <>
          <Stack direction="row">
            <Button onClick={() => navigate("/attractions")}>Book tour</Button>
            <Button
              onClick={() => navigate("/entertainment")}
              variant="contained"
            >
              Find activities
            </Button>
          </Stack>

          <Stack direction="row" spacing="2rem">
            <Images image={island01} />
            <Images image={island02} />
          </Stack>
        </>
      )}
    </Stack>
  );
}
