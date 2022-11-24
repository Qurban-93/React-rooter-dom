import React from 'react'
import About from '../components/About';
import Users from '../components/Users';
import Home from '../components/Home';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

function Routes() {
  return (
    <Router>
        <Switch>
          <Route path="/about" exact component={About}/>
          <Route path="/users" exact component={Users}/>
          <Route path="/" exact component={Home}/>
        </Switch>
    </Router>
  )
}

export default Routes