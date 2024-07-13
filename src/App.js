import { Divider } from "@mui/material";
import Heading from "./Components/Heading/Heading";
import SearchAppBar from "./Components/NavBar/SearchAppBar";
import Content from "./Components/Content/Content";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <>
      <SearchAppBar />
      <Heading title="Taniti Village" subtitle="Adventure awaits you..."/>
      <Content />
      <Divider sx={{ margin: "1rem" }} />
      <Footer />
    </>
  );
}

export default App;
