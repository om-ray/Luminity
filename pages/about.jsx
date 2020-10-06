import React from "react";
import { Box } from "@material-ui/core";
import Nav from "./components/nav";
import Footer from "./components/footer";

function About() {
  return (
    <div className="root">
      <Nav></Nav>
      <Box mt="130px" className="title">
        About
      </Box>
      <Footer></Footer>
    </div>
  );
}

export default About;
