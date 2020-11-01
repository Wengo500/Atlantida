import React, {Component} from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About'

export default class Main extends Component{
    render(){
    return (
      <Router>
      <main className="main">
        <Switch>
          <Home />
          <Route  path="/" name="Home" сomponent={Home} />
          <Route  path="/about" name="About" сomponent={About} />
        </Switch>
      </main>
      </Router>

    )};
};
