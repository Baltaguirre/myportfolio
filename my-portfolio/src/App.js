import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React, { Fragment } from "react";
import Landing from './Components/Landing/Landing'
import Home from './Components/Home/Home.jsx'
import Proyects from './Components/Proyects/Proyects'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'


function App() {
  return (
 
    <Router>

      <Switch> 
    
     
     

        <Route exact path="/">
          <Landing />
        </Route>

        <Route exact path="/home">
          <Home />
        </Route>
        <Route  path="/proyects">
          <Proyects />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
        </Switch>
      </Router>
    
  );
}

export default App;
