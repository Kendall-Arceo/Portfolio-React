import React from 'react';
import Header from '../components/Header';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import ProfileCircle from '../components/ProfileCircle'
import Container from '@material-ui/core/Container';



const useStyles = makeStyles((theme) => ({
  
  root: {
    height: '100vh',
  },

  image: {
    backgroundImage: 'url(https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)',
    backgroundPosition: 'center', 
    backgroundSize: 'cover', 
    backgroundRepeat: 'no-repeat',
    margin: 'auto',
    borderRadius: 8,
    display: 'flex',
    height: '100%',
      
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  profile: {
    width: 230,
    height: 235,
    borderRadius: 225 / 2,
    overflow: "hidden",
    borderWidth: 3,
    borderColor: "red"
  }
}));

export default function Home() {
  const classes = useStyles();

  return (
    <div className = {classes.image}>
      <Container maxWidth="lg" >
        <CssBaseline />
        <Header/>

          <main>
            <ProfileCircle/>
            
          </main>
        
        
      </Container>
      
      
    </div>
  );
}