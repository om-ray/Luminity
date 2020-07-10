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
  megrim: {
    fontFamily: "Megrim",
  },
  avenir: {
    fontFamily: "Avenir",
  },
  navBar: {
    display: "flex",
    position: "absolute",
    top: 0,
    width: "100vw",
    justifyContent: " space-around",
    alignItems: "center",
    position: "fixed",
    padding: "17px",
    borderBottom: "#2c2c2c solid 1px !important",
    background: "#141415",
    color: "#909090",
    marginBottom: "3vh",
  },
  title: {
    fontFamily: "Avenir",
  },
  logo: {
    background: "#232526",
    fontFamily: "Megrim",
    borderRadius: "100px",
    padding: "10px 30px",
    color: "white",
    fontWeight: 800,
    fontSize: "30px",
  },
  navLinks: {
    fontFamily: "Megrim",
    width: "40%",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    listStyle: "none",
    color: "white",
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
            <Button className={classes.avenir} color="inherit">
              About
            </Button>
            <Button className={classes.avenir} color="inherit">
              Login
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
