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
          image={require("../utils/images/Budget.jpeg")}
          title="Budget Tracker"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Budget Tracker
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Keeps track of your finances whether you're on the go or you're just balancing out your financials at your home. This application also works offline through saved caches.
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