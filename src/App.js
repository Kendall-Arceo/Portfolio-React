//Main app with the landing page 

import React from "react";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import { BrowserRouter as Router, Route, Switch, } from "react-router-dom";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import {lightBlue} from "@material-ui/core/colors";
import Footer from "./components/Footer"
import "./App.css";



function App (){
  const theme = createMuiTheme({
    palette: {
      primary: {
        main:lightBlue[200],
      },
      secondary: {
        main: lightBlue[50],
      },
      
    },
  });  
  
  return (
  
  <ThemeProvider theme = {theme}>


    <React.Fragment>
      <Router>
        <div>
          <Switch>
            <Route exact path = {"/"}>
              <Home components = {Home} />
              
            </Route>
            
            <Route exact path = {"/Portfolio"}>
              <Portfolio components = {Portfolio} />
              
            </Route>

            <Route exact path = {"/Contact"}>
              <Contact components = {Contact} />
            
            </Route>

          </Switch>
          <Footer/>
        </div>
      </Router>
      
      
    </React.Fragment>
  </ThemeProvider>
 

  
  );
}


export default App;

