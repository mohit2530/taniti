import { Container, Divider, Stack } from "@mui/material";
import SearchAppBar from "../NavBar/SearchAppBar";
import Left from "../Utils/Left";
import SearchBar from "../Utils/SearchBar";
import Footer from "../Footer/Footer";
import Content from "../Utils/Content";

import bus from "../../assets/travel/bus.jpg";
import chartered from "../../assets/travel/chartered.jpg";
import publicBus from "../../assets/travel/publicBus.jpg";
import ferry from "../../assets/travel/ferry.jpg";
import plane from "../../assets/travel/plane.jpg";

export default function Travel() {
  const travelKeywords = [
    {
      id: 1,
      label: "Buses",
    },
    {
      id: 2,
      label: "Ferries",
    },
    {
      id: 3,
      label: "Boats",
    },
  ];

  const options = [
    {
      id: 1,
      label: "Private shuttle",
      image: bus,
      caption: "$80 / week",
    },
    {
      id: 2,
      label: "Chartered Bus",
      image: chartered,
      caption: "$120 / week",
    },
    {
      id: 3,
      label: "Public bus",
      image: publicBus,
      caption: "$10 / week",
    },
    {
      id: 4,
      label: "Island Ferry ",
      image: ferry,
      caption: "$220 / week",
    },
    {
      id: 5,
      label: "Chartered planes ",
      image: plane,
      caption: "$880 / flight",
    },
  ];

  return (
    <>
      <SearchAppBar selected="4" />
      <Container maxWidth="xl" sx={{ my: 1 }}>
        <Stack direction="row" spacing="2rem">
          <Left options={travelKeywords} markValue={100}/>
          <Stack flexGrow="1">
            <SearchBar />
            <Content options={options} />
          </Stack>
        </Stack>
      </Container>
      <Divider sx={{ margin: "1rem" }} />
      <Footer />
    </>
  );
}
