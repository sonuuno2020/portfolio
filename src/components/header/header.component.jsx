import React from "react";
import { makeStyles, useTheme } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { AppBar } from "@material-ui/core";
import { Toolbar } from "@material-ui/core";
import { useMediaQuery } from "@material-ui/core";
import Hamberger from "./hemberger.comonent";

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: 20,
  },
  root: {
    padding: 5,
    display: "flex",
    justifyContent: "center",
  },
  main: {
    width: "100%",
    [theme.breakpoints.down("xs")]: {
      width: "auto",
    },
  },
}));

const Header = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("xs"));
  const classes = useStyles();
  return (
    <div>
      {matches ? (
        <Hamberger color="secondary" />
      ) : (
        <AppBar className={classes.main}>
          <Toolbar className={classes.root}>
            <Button className={classes.margin} href="/">
              Home
            </Button>
            <Button className={classes.margin} href="/about">
              About
            </Button>
            <Button
              className={classes.margin}
              href="https://drive.google.com/file/d/1RHTwdkJT2U8mHhJ9rOYMXOjBvUriapQc/view?usp=sharing"
            >
              Resume
            </Button>
            <Button className={classes.margin} href="/project">
              Project
            </Button>
            <Button className={classes.margin} href="/contact">
              Contact
            </Button>
          </Toolbar>
        </AppBar>
      )}
    </div>
  );
};

export default Header;
