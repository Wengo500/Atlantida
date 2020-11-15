import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Portfolio from '../pages/Portfolio'

export default class Main extends Component {
  render() {
    return (
      <Switch>
        <main className="main">
          <Route exact path="/" name="Home" render={() => <Home />} />
          <Route path="/portfolio" name="Portfolio" render={() => <Portfolio />} />
        </main>
      </Switch>
    )
  };
};
