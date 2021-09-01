import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React, { Fragment } from "react";
import Landing from './Components/Landing/Landing'
import Home from './Components/Home/Home'
import Proyects from './Components/Proyects/Proyects'
import About from './Components/About/About'
import Navbar from './Components/Navbar/Navbar'
import './App.css';

function App() {
  return (
 
    <Router>
      <Route path="/">
          <Navbar />
        </Route>

      <Switch>

        <Route exact path="/">
          <Landing />
        </Route>

        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/proyects">
          <Proyects />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        </Switch>
      </Router>
    
  );
}

export default App;
