import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import Grid from '@material-ui/core/Grid';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Kendall Arceo
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
  },
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: 'auto',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
  },
}));

export default function StickyFooter() {
  const classes = useStyles();

  return (
    <div>
      <CssBaseline />
      <footer className={classes.footer}>
        <Container maxWidth="sm">
        <Grid justify="space-between" container spacing = {24}>
          
          <IconButton  color="inherit" >
            <Badge >
            <Link href = "https://www.linkedin.com/in/kendall-arceo/" variant ="body2" color="inherit">
              LinkedIn 
            </Link> 
            </Badge>
          </IconButton>

          <IconButton  color="inherit" >
            <Badge >
            <Link href = "https://github.com/Kendall-Arceo" variant ="body2" color="inherit">
              Github 
            </Link> 
            </Badge>
          </IconButton>

          <IconButton  color="inherit" >
            <Badge >
            <Link href = "https://stackoverflow.com/users/12494449/kendall-arceo" variant ="body2" color="inherit">
              StackOverflow 
            </Link> 
            </Badge>
          </IconButton>
          
          <IconButton  color="inherit" >
            <Badge >
              <Copyright/>
            </Badge>
          </IconButton>

          
        </Grid>
        </Container>
      </footer>
    </div>
  );
}