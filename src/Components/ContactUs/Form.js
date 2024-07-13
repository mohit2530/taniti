import {
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import lighthouse from "../../assets/lighthouse.jpg";

export default function Form() {
  return (
    <Container maxWidth="xl">
      <Stack direction="row" spacing="2rem">
        <Stack>
          <img
            src={lighthouse}
            alt="island-image-part-one"
            height="600rem"
            width="600rem"
            style={{
              borderRadius: "10px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
            }}
          />
        </Stack>
        <Stack spacing="1rem" flexGrow="1">
          <Typography variant="h5">FAQ didn't help? Reach out...</Typography>
          <Typography variant="caption">
            We will try our best to respond to you as soon as possible...
          </Typography>
          <TextField placeholder="Full name" />
          <TextField placeholder="Arrival dates" />
          <TextField placeholder="Estimated length of stay" />
          <TextField multiline minRows="4" placeholder="Concerned about" />

          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="I accept the terms and conditions"
          />
          <Typography variant="caption">Read our T&Cs</Typography>
          <Button variant="contained">Submit</Button>
        </Stack>
      </Stack>
    </Container>
  );
}
