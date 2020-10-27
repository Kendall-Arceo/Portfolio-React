import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


import Link from '@material-ui/core/Link';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={require("../utils/images/coin.png")}
          title="Coins N' Stockin'"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Coins N' Stockin' 
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            This application lets the user store information of their stocks and cryptocurrency. This app offers real time trade percentages, while letting the user add or drop stocks and crypto if they see fit in their financials.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          <Link href = "https://guarded-gorge-14479.herokuapp.com/" variant ="body2" color="inherit">
            Click me!
          </Link> 
        </Button>
        
      </CardActions>
    </Card>
  );
}