import React from "react";

import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core";
import Image from "./../../static/photo.jpg";

import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: 50,
    display: "flex",
    justifyContent: "center",
  },
  image: {
    width: 400,
    height: 400,
    [theme.breakpoints.down("xs")]: {
      width: 250,
      height: 250,
    },
  },
  content: {
    marginTop: 100,
    textAlign: "center",
    alignItems: "center",
    [theme.breakpoints.down("xs")]: {
      marginTop: 20,
    },
  },
}));

const AboutPage = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <div>
            <Avatar className={classes.image} src={Image} alt="sonu kumar" />
          </div>
        </Grid>
        <Grid item xs={12} md={6}>
          <div className={classes.content}>
            <h4>
              I am outgoing, dedicated, and open-minded. I get across to people
              and adjust to changes with ease. I believe that a person should
              work on developing their professional skills and learning new
              things all the time. Currently, I am looking for new career
              opportunities .
            </h4>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default AboutPage;
