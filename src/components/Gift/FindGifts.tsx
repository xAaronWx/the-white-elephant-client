import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

export interface FindGiftsProps {}

export interface FindGiftsState {}

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: 40,
  },
});

export default function FindGifts() {
  const classes = useStyles();

  return (
    <div>
      <h2>Find a gift</h2>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Contemplative Reptile"
            height="140"
            image="http://wikimonks.com/wp-content/uploads/2019/05/book-gift.jpg"
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Gift Name
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              The gift description will go here
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Remove this gift
          </Button>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}
