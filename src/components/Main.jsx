import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './styles/main.scss'
import Home from '../pages/Home';
import Portfolio from '../pages/Portfolio';
import Forum from '../pages/Forum';

export default class Main extends Component {
  render(props) {
 const mainClasses = ['main'];
     if(this.props.mainColor === true) mainClasses.push("main-dark");

    return (
      <Switch>
        <main className={mainClasses.join(' ')}>
          <Route exact path="/" name="Home" render={() => <Home />} />
          <Route path="/portfolio" name="Portfolio" render={() => <Portfolio />} />
          <Route path="/forum" name="forum" render={() => <Forum />} />
        </main>
      </Switch>
    )
  };
};