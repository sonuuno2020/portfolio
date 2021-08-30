import React, { useState } from "react";

import { makeStyles } from "@material-ui/core";
import { BottomNavigation } from "@material-ui/core";
import { BottomNavigationAction } from "@material-ui/core";

import TwitterIcon from "@material-ui/icons/Twitter";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

import Paper from "@material-ui/core/Paper";

import Image1 from "./../../static/back2.jpg";
import Image2 from "./../../static/mini.jpg";

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: 20,
  },
  root: {
    display: "inline-flex",
    padding: 5,
    opacity: 0.7,
    justifyContent: "center",
    borderRadius: 25,
  },
  main: {
    marginTop: 50,
    textAlign: "center",
    color: "#9291a9",
    fontSize: 25,
    padding: 20,
  },
  container: {
    margin: "0 !important",
    backgroundImage: `url(${Image1})`,
    height: "100vh",
    width: "100vw",
    [theme.breakpoints.down("xs")]: {
      backgroundImage: `url(${Image2})`,
    },
  },
  bottom: {
    display: "flex",
    justifyContent: "center",
  },
}));

const HomePage = () => {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  return (
    <Paper className={classes.container}>
      <div className={classes.margin}>
        <div className={classes.main}>
          <h1>I am Sonu Kumar</h1>
          <span>Front-end Developer (React.js) and Data Analyst</span>
        </div>
        <div className={classes.bottom}>
          <BottomNavigation
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
            showLabels
            className={classes.root}
          >
            <BottomNavigationAction
              labels="git"
              href="https://github.com/sonuuno2020"
              icon={<GitHubIcon />}
            />
            <BottomNavigationAction
              labels="linkedin"
              href="https://www.linkedin.com/in/sonu-kumar-a86bba210/"
              icon={<LinkedInIcon />}
            />
            <BottomNavigationAction
              labels="twitter"
              href="https://twitter.com/uno_kumar"
              icon={<TwitterIcon />}
            />
          </BottomNavigation>
        </div>
      </div>
    </Paper>
  );
};

export default HomePage;
