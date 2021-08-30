import React from "react";
import { makeStyles } from "@material-ui/core";
import EmailIcon from "@material-ui/icons/Email";
import DialerSipIcon from "@material-ui/icons/DialerSip";

const useStyles = makeStyles({
  root: {
    marginTop: 50,
    textAlign: "center",
  },
});

const ContactPage = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div>
        <EmailIcon />
        <br></br>
        <a href="sonuuno17@gmail.com">sonuuno17@gmail.com</a>
        <br></br>
        <a href="sonuunokr17@gmail.com">sonuunokr17@gmail.com</a>
      </div>
      <div>
        <DialerSipIcon />
        <br></br>
        <span>9625702001</span>
      </div>
    </div>
  );
};

export default ContactPage;
