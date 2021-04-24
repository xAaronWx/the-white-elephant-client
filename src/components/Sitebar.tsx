import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

export interface ButtonAppBarProps {}

export interface ButtonAppBarState {}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBar: {
      backgroundColor: "#FFC2B4",
      color: "#194350",
      boxShadow: "0px 0px 0px 0px",
    },
    appButton: {
      backgroundColor: "#194350",
      margin: "10px",
    },
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      textAlign: "left",
      flexGrow: 4,
    },
    navLink: {
      color: "white",
      textDecoration: "none",
    },
  })
);

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar} position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Hello
          </Typography>
          <Button
            className={classes.appButton}
            variant="contained"
            color="default"
          >
            <Link className={classes.navLink} to="/Profile">
              Profile
            </Link>
          </Button>
          <Button
            className={classes.appButton}
            variant="contained"
            color="default"
          >
            <Link className={classes.navLink} to="/YourGifts">
              Your Gifts
            </Link>
          </Button>
          <Button
            className={classes.appButton}
            variant="contained"
            color="default"
          >
            <Link className={classes.navLink} to="/FindGifts">
              Search for Gifts
            </Link>
          </Button>
          <Button
            className={classes.appButton}
            variant="contained"
            color="default"
          >
            <Link className={classes.navLink} to="/">
              Logout
            </Link>
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
