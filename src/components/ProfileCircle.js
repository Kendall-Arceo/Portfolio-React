import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Badge from '@material-ui/core/Badge';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },

  profile: {
    width: 225,
    height: 225,
    borderRadius: 260 / 2,
    overflow: "hidden",
    borderWidth: 3,
    borderColor: "red"
  },

  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: "transparent",
    
  },
  about: {
    margin: theme.spacing(4, 2),
    display: 'flex',
    flexDirection: 'column',
  },

  image: {
    margin: theme.spacing(4, 2),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  }
}));

export default function Profile() {
  const classes = useStyles();

  return (
    <div className = {classes.image}>
      <CssBaseline />
      <Grid container direction="row" justify="center" alignItems="center" component="main" className={classes.root}>
      
        <Container maxWidth="lg">
          <main>
                    
            <Badge className = {classes.image} >
              <img alt="" src={ require("../utils/images/Picture2.jpg")} color ="primary" className = {classes.profile}/>
            </Badge>

            
            <Typography variant="h2" component="h1" color ="primary" className = {classes.image}>
              Hi, My Name is Kendall Arceo!
            </Typography>

            <Paper elevation={0} className = {classes.paper}>
              <Typography variant="h3" color= "secondary">
                About Me:
              </Typography> 
              <Typography variant="h5" color= "secondary" className = {classes.about}>
              I am a Full Stack Web Developer focused on providing dynamic web experiences. I changed my career path in 2019 as web development caught my attention and has since been my passion to learn and grow within the world of coding.I am Excited to keep expanding my experience with Web Development.
              </Typography>  
            </Paper> 
          </main>
        </Container>
      </Grid>
    </div>
  );
}