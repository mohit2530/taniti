import {
  Checkbox,
  Chip,
  FormControlLabel,
  Slider,
  Stack,
  Typography,
} from "@mui/material";

export default function Left({ options = [], markValue = 60 }) {
  const checkboxOptions = [
    {
      id: 1,
      label: "Family friendly",
      caption: "Allows children",
    },
    {
      id: 1,
      label: "Over 4 stars",
      caption: "Activities over 4 stars",
    },
    {
      id: 3,
      label: "Provides transportation",
      caption: "shuttle provided",
    },
  ];

  const marks = [
    {
      value: 0,
      label: "0$",
    },
    {
      value: 20,
      label: "80$",
    },
    {
      value: 60,
      label: "120$",
    },
    {
      value: 80,
      label: "500$",
    },
    {
      value: 100,
      label: "1000$",
    },
  ];

  return (
    <Stack
      sx={{
        minWidth: "20rem",
        border: "0.1rem dotted",
        padding: "1rem",
      }}
    >
      <Typography variant="h6">Keywords</Typography>
      <Stack direction="row" flexWrap="wrap" spacing="0.5rem">
        {options.map((v) => (
          <Chip size="small" label={v.label} onDelete={() => {}} />
        ))}
      </Stack>
      <Stack spacing="1rem" sx={{ py: 1 }}>
        {checkboxOptions.map((v) => (
          <Stack direction="row">
            <FormControlLabel control={<Checkbox defaultChecked />} />
            <Stack>
              <Typography variant="body1">{v.label}</Typography>
              <Typography variant="caption">{v.caption}</Typography>
            </Stack>
          </Stack>
        ))}
      </Stack>

      <Typography variant="h6"> Price range</Typography>
      <Stack padding="1rem">
        <Slider
          aria-label="price label"
          defaultValue={markValue}
          step={null}
          marks={marks}
        />
      </Stack>

      <Stack>
        <Typography variant="h6"> Type of Activities</Typography>
        <FormControlLabel
          control={<Checkbox defaultChecked />}
          label="Outdoor"
        />
        <FormControlLabel
          control={<Checkbox defaultChecked />}
          label="Indoor"
        />
      </Stack>
    </Stack>
  );
}
