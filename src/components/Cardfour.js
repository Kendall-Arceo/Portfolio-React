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
          image={require("../utils/images/Fitness.jpeg")}
          title="Fitness Tracker"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Fitness Tracker 
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Keep track of your workout using this application! This ranges from how many sets you've done for an exercise, to how long you've been doing cardio. 
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          <Link href = "https://mysterious-reef-39900.herokuapp.com/" variant ="body2" color="inherit">
            Click me!
          </Link> 
        </Button>
        
      </CardActions>
    </Card>
  );
}