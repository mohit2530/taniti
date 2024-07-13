import { Container, Divider, Stack } from "@mui/material";
import Footer from "../Footer/Footer";
import SearchAppBar from "../NavBar/SearchAppBar";
import SearchBar from "../Utils/SearchBar";
import Left from "../Utils/Left";
import Content from "../Utils/Content";
import golf from "../../assets/attractions/golf-course.jpg";
import fishing from "../../assets/attractions/fishing.jpg";
import zipline from "../../assets/attractions/zipline.jpg";
import arcade from "../../assets/attractions/arcade.jpg";
import museum from "../../assets/attractions/museum.jpg";
import snorkelling from "../../assets/attractions/snorkelling.jpg";

export default function Attractions() {
  const keywords = [
    {
      id: 1,
      label: "Attractions",
    },
    {
      id: 2,
      label: "Best",
    },
    {
      id: 3,
      label: "Family",
    },
  ];

  const options = [
    {
      id: 1,
      label: "Nine hole golf course",
      image: golf,
      caption: "$400/ person",
    },
    {
      id: 2,
      label: "Charter fishing tours",
      image: fishing,
      caption: "$340 / person",
    },
    {
      id: 3,
      label: "Zip line",
      image: zipline,
      caption: "$130 / person",
    },
    {
      id: 4,
      label: "Weekly Arcade pass",
      image: arcade,
      caption: "$40 / person",
    },
    {
      id: 5,
      label: "Local history museum",
      image: museum,
      caption: "$20 / person",
    },
    {
      id: 6,
      label: "Snorkelling",
      image: snorkelling,
      caption: "$260 / person",
    },
  ];

  return (
    <>
      <SearchAppBar selected="1" />
      <Container maxWidth="xl" sx={{ my: 1 }}>
        <Stack direction="row" spacing="2rem">
          <Left options={keywords} markValue={80}/>
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
