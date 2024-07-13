import { Container, Divider, Stack } from "@mui/material";
import SearchAppBar from "../NavBar/SearchAppBar";
import Left from "../Utils/Left";
import SearchBar from "../Utils/SearchBar";
import Footer from "../Footer/Footer";
import Content from "../Utils/Content";

import fishlocal from "../../assets/eateries/fish-local.jpg";
import burger from "../../assets/eateries/burger.jpg";
import asian from "../../assets/eateries/asian.jpg";
import bb from "../../assets/eateries/bb.jpg";
import fried from "../../assets/eateries/fried.jpg";
import beans from "../../assets/eateries/beans.jpg";

export default function Eateries() {
  const keywords = [
    {
      id: 1,
      label: "Best",
    },
    {
      id: 2,
      label: "Bed and breakfast",
    },
    {
      id: 3,
      label: "Nature",
    },
  ];

  const content = [
    {
      id: 1,
      label: "Local fish and rice platter",
      image: fishlocal,
      caption: "Average $20 / person",
    },
    {
      id: 2,
      label: "Burger and fries",
      image: burger,
      caption: "Average $12 / person",
    },
    {
      id: 3,
      label: "Pan Asian Cuisine",
      image: asian,
      caption: "Averge $80 / person",
    },
    {
      id: 4,
      label: "Bed and breakfast platter",
      image: bb,
      caption: "Average $24 / person",
    },
    {
      id: 5,
      label: "Deep fried fish platter",
      image: fried,
      caption: "Average $40 / person",
    },
    {
      id: 6,
      label: "Rice and beans, fried fish",
      image: beans,
      caption: "Average $20 / person",
    },
  ];

  return (
    <>
      <SearchAppBar selected="5" />
      <Container maxWidth="xl" sx={{ my: 1 }}>
        <Stack direction="row" spacing="2rem">
          <Left options={keywords} markValue={20}/>
          <Stack flexGrow="1">
            <SearchBar />
            <Content options={content} />
          </Stack>
        </Stack>
      </Container>
      <Divider sx={{ margin: "1rem" }} />
      <Footer />
    </>
  );
}
