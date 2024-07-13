import { InfoOutlined } from "@mui/icons-material";
import { Box, Container, IconButton, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Content() {
  const navigate = useNavigate();
  const options = [
    {
      id: 1,
      icon: <InfoOutlined />,
      label: "Resturants",
      redirectTo: "/eateries",
      caption:
        "Best local served dishes alongside American style meals with a sprinkle of Pan-Asian cuisine.",
    },
    {
      id: 2,
      icon: <InfoOutlined />,
      label: "Entertainment",
      redirectTo: "/entertainment",
      caption:
        "Enjoy the beach, explore the rain forest or even visit the volcano. Visit microbreweries, pubs or take chances to meet someone at our dance pubs",
    },
    {
      id: 3,
      icon: <InfoOutlined />,
      label: "Groceries",
      redirectTo: "/eateries",
      caption:
        "Couple of supermarkets and grocery stores that support all of your daily needs. Open 24/7 daily.",
    },
    {
      id: 4,
      icon: <InfoOutlined />,
      label: "Sightseeing",
      redirectTo: "/travel",
      caption:
        "Ride the heli, snorkel with fishes or even zipline among the trees. Want quite and peace? Visit our art galleries or even play golf alongside the bay",
    },
    {
      id: 5,
      icon: <InfoOutlined />,
      label: "Lodging",
      redirectTo: "/lodging",
      caption:
        "We understand your desire to relax at affordable prices. Hostel to our four start hotel understands your needs... All within your reach... in the beach...",
    },
    {
      id: 6,
      icon: <InfoOutlined />,
      label: "Transportation",
      redirectTo: "/travel",
      caption:
        "Public buses run daily around the city and private shuttle is also available. Travel by air or travel by boat - all your needs are accounted for",
    },
  ];

  return (
    <Container maxWidth="xl">
      <Stack margin="1rem">
        <Typography variant="h5">
          Experience vacation where your heart belongs...
        </Typography>
        <Typography variant="caption">
          A slice of heaven lies awaiting you
        </Typography>
      </Stack>

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 2,
        }}
      >
        {options.map((v) => (
          <Stack
            direction="row"
            key={v.id}
            sx={{ width: "100%", maxWidth: "20rem", cursor: "pointer" }}
            onClick={() => {
              navigate(v.redirectTo);
            }}
          >
            <IconButton disabled>{v.icon}</IconButton>
            <Stack>
              <Typography variant="h5">{v.label}</Typography>
              <Typography variant="caption">{v.caption}</Typography>
            </Stack>
          </Stack>
        ))}
      </Box>
    </Container>
  );
}
