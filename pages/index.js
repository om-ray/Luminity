import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Copyright from "../src/Copyright";
import Link from "../src/Link";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

let useStyles = makeStyles(() => ({
  root: {
    // flexGrow: 1,
  },
  navBar: {
    display: "flex",
    position: "absolute",
    top: 0,
    width: "100vw",
    justifyContent: "space-around",
    alignItems: "center",
    position: "fixed",
    padding: "20px",
    background: "rgb(73, 79, 82)",
    color: "white",
    marginBottom: "3vh",
  },
  title: {
    fontFamily: "avenir",
  },
  logo: {
    fontFamily: "Megrim",
  },
  navLinks: {
    fontFamily: "avenir",
    width: "40%",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    listStyle: "none",
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.navBar}>
          <Typography variant="h4" className={classes.logo}>
            Luminity
          </Typography>
          <div className={classes.navLinks}>
            <Button color="inherit">About</Button>
            <Button color="inherit">Login</Button>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
