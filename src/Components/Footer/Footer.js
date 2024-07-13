import { Facebook, Instagram, LinkedIn, YouTube } from "@mui/icons-material";
import { Box, IconButton, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Footer() {
  const navigate = useNavigate();
  return (
    <Stack direction="row" justifyContent="space-around" marginBottom="2rem">
      <Box>
        <Typography variant="h6"> Taniti Village</Typography>
        <IconButton>
          <Instagram />
        </IconButton>
        <IconButton>
          <Facebook />
        </IconButton>
        <IconButton>
          <YouTube />
        </IconButton>
        <IconButton>
          <LinkedIn />
        </IconButton>
      </Box>

      <Box>
        <Typography variant="h6"> Learn more </Typography>
        <Stack spacing="1rem">
          <Typography
            variant="caption"
            sx={{ cursor: "pointer" }}
            onClick={() => navigate("/attractions")}
          >
            Historical Downtown
          </Typography>
          <Typography
            variant="caption"
            sx={{ cursor: "pointer" }}
            onClick={() => navigate("/eateries")}
          >
            Supermarkets
          </Typography>
          <Typography
            variant="caption"
            sx={{ cursor: "pointer" }}
            onClick={() => navigate("/eateries")}
          >
            Grocery Stores
          </Typography>
          <Typography
            variant="caption"
            sx={{ cursor: "pointer" }}
            onClick={() => navigate("/lodging")}
          >
            Hostels and Hostels
          </Typography>
          <Typography
            variant="caption"
            sx={{ cursor: "pointer" }}
            onClick={() => navigate("/lodging")}
          >
            Bed and breakfast
          </Typography>
          <Typography
            variant="caption"
            sx={{ cursor: "pointer" }}
            onClick={() => navigate("/attractions")}
          >
            Native culture
          </Typography>
          <Typography
            variant="caption"
            sx={{ cursor: "pointer" }}
            onClick={() => navigate("/entertainment")}
          >
            Sandy beaches
          </Typography>
        </Stack>
      </Box>

      <Box>
        <Typography variant="h6"> Explore </Typography>
        <Stack spacing="1rem">
          <Typography
            variant="caption"
            sx={{ cursor: "pointer" }}
            onClick={() => navigate("/entertainment")}
          >
            Mt Pulaho Volcano
          </Typography>
          <Typography
            variant="caption"
            sx={{ cursor: "pointer" }}
            onClick={() => navigate("/entertainment")}
          >
            Local history museum
          </Typography>
          <Typography
            variant="caption"
            sx={{ cursor: "pointer" }}
            onClick={() => navigate("/travel")}
          >
            Chartered fishing trips
          </Typography>
          <Typography
            variant="caption"
            sx={{ cursor: "pointer" }}
            onClick={() => navigate("/attractions")}
          >
            Snorkeling in coral reef
          </Typography>
          <Typography
            variant="caption"
            sx={{ cursor: "pointer" }}
            onClick={() => navigate("/attractions")}
          >
            Zip-lining
          </Typography>
          <Typography
            variant="caption"
            sx={{ cursor: "pointer" }}
            onClick={() => navigate("/attractions")}
          >
            Art gallery and bowling
          </Typography>
          <Typography
            variant="caption"
            sx={{ cursor: "pointer" }}
            onClick={() => navigate("/entertainment")}
          >
            Yellow leaf bay
          </Typography>
        </Stack>
      </Box>

      <Box>
        <Typography variant="h6"> Resources </Typography>
        <Stack spacing="1rem">
          <Typography
            variant="caption"
            sx={{ cursor: "pointer" }}
            onClick={() => navigate("/eateries")}
          >
            Food and dining
          </Typography>
          <Typography
            variant="caption"
            sx={{ cursor: "pointer" }}
            onClick={() => navigate("/lodging")}
          >
            Lodging
          </Typography>
          <Typography
            variant="caption"
            sx={{ cursor: "pointer" }}
            onClick={() => navigate("/travel")}
          >
            Private tours
          </Typography>
          <Typography
            variant="caption"
            sx={{ cursor: "pointer" }}
            onClick={() => navigate("/travel")}
          >
            Travel by air
          </Typography>
          <Typography
            variant="caption"
            sx={{ cursor: "pointer" }}
            onClick={() => navigate("/travel")}
          >
            Helicopter rides
          </Typography>
          <Typography
            variant="caption"
            sx={{ cursor: "pointer" }}
            onClick={() => navigate("/travel")}
          >
            Public bus routes
          </Typography>
          <Typography
            variant="caption"
            sx={{ cursor: "pointer" }}
            onClick={() => navigate("/travel")}
          >
            Taxi and private shuttle
          </Typography>
        </Stack>
      </Box>
    </Stack>
  );
}
