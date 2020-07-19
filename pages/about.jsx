import React from "react";
import { typography } from "@material-ui/system/typography";
import Nav from "./nav";
import Footer from "./footer";
import { Box } from "@material-ui/core";

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
