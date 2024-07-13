import {
  DateRangeRounded,
  ErrorRounded,
  GTranslateRounded,
  LocalBarRounded,
  LocalHospitalRounded,
  MonetizationOnRounded,
  PowerRounded,
} from "@mui/icons-material";
import {
  Box,
  Container,
  IconButton,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";

export default function Faq() {
  const options = [
    {
      id: 1,
      label: "Alcohol prohibited",
      caption: "12:00 am - 09:00 am",
      description: "Alcohol is prohibited in the hours of 12am to 09 am",
      icon: <LocalBarRounded />,
    },
    {
      id: 2,
      label: "Min Drinking age",
      caption: "18 years old",
      description: "Must be 18 years old or older to consume alcohol",
      icon: <ErrorRounded color="warning" />,
    },
    {
      id: 3,
      label: "Spoken Language",
      caption: "English, Native toungue",
      description:
        "English is spoken by a lot of people but the natives use their own native language",
      icon: <GTranslateRounded />,
    },
    {
      id: 4,
      label: "Hosptials and Clinics",
      caption: "24/7 Hospital Access",
      description:
        "One major hospital and couple of other pharmacies are in the vicinity and are open 24/7 every day",
      icon: <LocalHospitalRounded color="error" />,
    },
    {
      id: 5,
      label: "Main Currency",
      caption: "US DOLLAR",
      description: "US Dollar is used as the main currency for the island",
      icon: <MonetizationOnRounded color="success" />,
    },
    {
      id: 6,
      label: "Attractions Closed",
      caption: "Major Holidays",
      description:
        "During major holidays a lot of attractions are shut down. Please check accordingly.",
      icon: <DateRangeRounded />,
    },
    {
      id: 7,
      label: "Power Outlet",
      caption: "120 Volts",
      description:
        "Almost all major equipments use the standard 120 Volts power supply as in the United States.",
      icon: <PowerRounded />,
    },
  ];
  return (
    <Container maxWidth="xl" sx={{ padding: "1rem" }}>
      <Stack>
        <Typography variant="h3" gutterBottom>
          Frequently Asked Questions
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
          {options.map((v) => (
            <Stack
              direction="row"
              key={v.id}
              sx={{
                width: "100%",
                maxWidth: "15rem",
                height: "4rem",
                padding: "1rem",
              }}
              border={"0.1rem solid lightgrey"}
              borderRadius="0.5rem"
            >
              <IconButton>{v.icon}</IconButton>
              <Tooltip title={v.description}>
                <Stack alignItems="center">
                  <Typography variant="caption">{v.caption}</Typography>
                  <Typography variant="h5">{v.label}</Typography>
                </Stack>
              </Tooltip>
            </Stack>
          ))}
        </Box>
      </Stack>
    </Container>
  );
}
