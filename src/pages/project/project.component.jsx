import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

import PROJECT_DATA from "./data";

const useStyles = makeStyles((theme) => ({
  main: {
    // margin: 50,
    width: "95%",
    display: "flex",
    flexWrap: "wrap",
    [theme.breakpoints.up("xs")]: {
      marginTop: 50,
    },
  },
  root: {
    // width: "30%",
  },
  media: {
    height: 160,
  },
}));

const ProjectPage = () => {
  const classes = useStyles();

  const data = PROJECT_DATA;
  console.log(data);

  return (
    <div className={classes.main}>
      <Grid container spacing={3}>
        {data.map((item) => (
          <Grid item xs={12} md={4}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={item.image}
                  title={item.name}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {item.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {item.about}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button
                  size="small"
                  color="primary"
                  target="_self"
                  href={item.link}
                >
                  View More
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default ProjectPage;
