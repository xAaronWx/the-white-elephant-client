import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  })
);

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Work ?
          </Typography>
          <Button variant="contained" color="primary">
            <Link to="/Profile">Profile</Link>
          </Button>
          <Button variant="contained" color="primary">
            <Link to="/Gifts">Your Gifts</Link>
          </Button>
          <Button variant="contained" color="primary">
            <Link to="/FindGifts">Search for Gifts</Link>
          </Button>
          <Button variant="contained" color="primary">
            <Link to="/">Logout</Link>
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
