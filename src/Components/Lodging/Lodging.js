import { Container, Divider, Stack } from "@mui/material";
import SearchAppBar from "../NavBar/SearchAppBar";
import Left from "../Utils/Left";
import SearchBar from "../Utils/SearchBar";
import Footer from "../Footer/Footer";
import Content from "../Utils/Content";

import hotel from "../../assets/lodging/hotel.jpg";
import residence from "../../assets/lodging/residence.jpg";
import beach from "../../assets/lodging/beach-house.jpg";
import hostel from "../../assets/lodging/hostel.jpg";

export default function Lodging() {
  const keywords = [
    {
      id: 1,
      label: "Hostels",
    },
    {
      id: 2,
      label: "AirBnB",
    },
    {
      id: 3,
      label: "Bed and breakfast",
    },
  ];

  const lodgeOptions = [
    {
      id: 1,
      label: "Kunio Pino Hotel",
      image: hotel,
      caption: "$120 / week",
    },
    {
      id: 2,
      label: "Private residence",
      image: residence,
      caption: "$220 / week",
    },
    {
      id: 3,
      label: "Beach house",
      image: beach,
      caption: "$430 / week",
    },
    {
      id: 4,
      label: "Tanakh Hostel",
      image: hostel,
      caption: "$80 / week",
    },
  ];

  return (
    <>
      <SearchAppBar selected="3" />
      <Container maxWidth="xl" sx={{ my: 1 }}>
        <Stack direction="row" spacing="2rem">
          <Left options={keywords} markValue={80}/>
          <Stack flexGrow="1">
            <SearchBar />
            <Content options={lodgeOptions} />
          </Stack>
        </Stack>
      </Container>
      <Divider sx={{ margin: "1rem" }} />
      <Footer />
    </>
  );
}
