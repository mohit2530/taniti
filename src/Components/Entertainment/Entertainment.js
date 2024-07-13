import { Container, Divider, Stack } from "@mui/material";
import SearchAppBar from "../NavBar/SearchAppBar";
import Left from "../Utils/Left";
import SearchBar from "../Utils/SearchBar";
import Footer from "../Footer/Footer";
import Content from "../Utils/Content";

import rainforest from "../../assets/entertainment/rainforest.jpg";
import beach from "../../assets/entertainment/beach.jpg";
import volcano from "../../assets/entertainment/volcano.jpg";
import trails from "../../assets/entertainment/trails.jpg";

export default function Entertainment() {
  const keywords = [
    {
      id: 1,
      label: "Free",
    },
    {
      id: 2,
      label: "Nature",
    },
  ];

  const options = [
    {
      id: 1,
      label: "Explore the rainforest",
      image: rainforest,
      caption: "Free",
    },
    {
      id: 2,
      label: "Enjoy the sandy beach",
      image: beach,
      caption: "Free",
    },
    {
      id: 3,
      label: "Visit the volcano",
      image: volcano,
      caption: "Free",
    },
    {
      id: 4,
      label: "Trails and picnic spots",
      image: trails,
      caption: "Free",
    },
  ];

  return (
    <>
      <SearchAppBar selected="2" />
      <Container maxWidth="xl" sx={{ my: 1 }}>
        <Stack direction="row" spacing="2rem">
          <Left options={keywords} markValue={0} />
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
