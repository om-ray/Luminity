import React from "react";
import Link from "../../src/Link";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core";

let useStyles = makeStyles(() => ({
  root: {},
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
    fontFamily: "Megrim",
    marginBottom: "3vh",
    // opacity: 0.5,
  },
  title: {
    marginTop: "200px",
    fontFamily: "Megrim",
    fontWeight: 800,
    fontSize: "30px",
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
    color: "#ffffff",
  },
  footer: {
    width: "100vw",
    height: "40px",
    position: "absolute",
    bottom: 0,
    background: "#141415",
  },
}));

function Nav() {
  const classes = useStyles();
  return (
    <AppBar position="static" className={classes.navBar}>
      <Toolbar className={classes.navBar}>
        <Typography variant="h4" className={classes.logo}>
          <Link className={classes.megrim} href="/" color="inherit">
            Luminity
          </Link>
        </Typography>
        <div className={classes.navLinks}>
          <Button className={classes.avenir}>
            <Link color="primary" href="/about">
              About
            </Link>
          </Button>
          <Button className={classes.avenir}>
            <Link color="primary" href="/login">
              Login
            </Link>
          </Button>
          <Button className={classes.avenir}>
            <Link color="primary" href="/mainApp?channel=all">
              App
            </Link>
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Nav;
