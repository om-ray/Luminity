import React from "react";
import Nav from "./components/nav";
import Footer from "./components/footer";
import { Box } from "@material-ui/core";

function Index() {
  return (
    <div className="root">
      <Nav></Nav>
      <Box mt="130px" className="title">
        Home
      </Box>
      <Footer></Footer>
    </div>
  );
}

export default Index;
