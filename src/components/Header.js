import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Badge from '@material-ui/core/Badge';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Link from '@material-ui/core/Link';
import ListItem from '@material-ui/core/ListItem';
import Grid from '@material-ui/core/Grid';
import Resume from '../utils/Resume.pdf';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',

  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    opactiy: "0.5",
    
    
    
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
    
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
    
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
    alignItems: 'center',
    justify: 'center',
    direction: 'row',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  colorlink: {
    

  }
  
}));

export default function PersistentDrawerLeft() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        
        <Toolbar className ={classes.toolbar}>
          <Grid justify="space-between" container spacing = {24}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              className={clsx(classes.menuButton, open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>


            <div className={classes.sectionDesktop} >
              <IconButton  color="inherit" >
                <Badge >
                <Link href = "/" variant ="body2" color="inherit">
                  Home 
                </Link> 
                </Badge>
              </IconButton>
              <IconButton color ="inherit" >
                <Badge>
                  <Link href = "/Portfolio" variant ="body2" color ="inherit"> 
                    Portfolio
                  </Link>
                </Badge>
              </IconButton>
              <IconButton color ="inherit" >
                <Badge >
                  <Link href = {Resume} variant ="body2" color ="inherit">
                    Resume
                  </Link>
                </Badge>
              </IconButton>
              <IconButton
                edge="end"
                aria-label="account of current user"
              
                aria-haspopup="true"
                //onClick={handleProfileMenuOpen}
                color="inherit"
              >
                <Typography>Contact</Typography>
              </IconButton>
            </div>
          </Grid>

        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
          <ListItem>
           <IconButton  color="inherit" >
              <Badge >
              <Link href = "/" variant ="body2" color="inherit">
                Home 
              </Link> 
              </Badge>
            </IconButton>
          </ListItem>

          <ListItem>
            <IconButton color ="inherit" >
              <Badge>
                <Link href = "/Portfolio" variant ="body2" color ="inherit"> 
                  Portfolio
                </Link>
              </Badge>
            </IconButton>
          </ListItem>

          <IconButton color ="inherit" >
            <Badge >
              <Link href ={Resume} variant ="body1" color ="inherit">
                Resume
              </Link>
            </Badge>
          </IconButton>

          <ListItem>
            <IconButton
              edge="end"
              aria-label="account of current user"
             
              aria-haspopup="true"
              //onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <Typography>Contact</Typography>
            </IconButton>
          </ListItem>
        </List>
        
      </Drawer>
      
    </div>
  );
}