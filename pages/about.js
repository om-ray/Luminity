import React from "react";
import Typography from "@material-ui/core/Typography";
import Nav from "./nav";
import Footer from "./footer";
import { makeStyles } from "@material-ui/core";

let useStyles = makeStyles({
  title: {
    marginTop: "130px",
    fontFamily: "Avenir",
    fontWeight: 800,
    fontSize: "30px",
  },
});

function About() {
  let classes = useStyles();

  return (
    <div className="root">
      <Nav></Nav>
      <Typography className={classes.title}>About</Typography>
      <Footer></Footer>
    </div>
  );
}

export default About;
