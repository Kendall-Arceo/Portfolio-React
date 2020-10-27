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
          image={require("../utils/images/logo.jpg")}
          title="Food Fair Thought"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Food Fair Thought
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          The user has a quick four-step choice to make the platform choose him a restaurant. These three choices will be presented clear and prominent, occupying the whole screen one at a time.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          <Link href = "https://foodfairthought.com/" variant ="body2" color="inherit">
            Click me!
          </Link> 
        </Button>
        
      </CardActions>
    </Card>
  );
}