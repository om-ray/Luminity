import React from "react";
import Typography from "@material-ui/core/Typography";
import Nav from "./nav";
import Footer from "./footer";
import { Box } from "@material-ui/core";

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
