import { Divider } from "@mui/material";
import Footer from "../Footer/Footer";
import Heading from "../Heading/Heading";
import SearchAppBar from "../NavBar/SearchAppBar";
import Faq from "./Faq";
import Form from "./Form";

export default function ContactUs() {
  return (
    <>
      <SearchAppBar selected={6} />
      <Heading
        title="Contact Us"
        subtitle="Reach out for more information"
        isContactPage
      />
      <Faq />
      <Form />
      <Divider sx={{ margin: "1rem" }} />
      <Footer />
    </>
  );
}
