import React from "react";
import Nav from "./components/nav";
import { Box, Button } from "@material-ui/core";
import Footer from "./components/footer";

function Login() {
  return (
    <div className="root">
      <Nav></Nav>
      <Box mt="130px" className="title">
        Login
      </Box>
      <Footer></Footer>
    </div>
  );
}

export default Login;
