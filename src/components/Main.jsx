import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './styles/main.scss';
import Home from '../pages/Home';
import Portfolio from '../pages/Portfolio';
import Forum from '../pages/Forum';
import Contacts from '../pages/Contacts';

export default class Main extends Component {
  render(props) {

 const mainClasses = ['main'];
     if(this.props.state.dark === true) mainClasses.push("main-dark");
    return (
      <Switch>
        <main className={mainClasses.join(' ')}>
          <Route exact path="/portfolio" name="Portfolio" render={() => <Portfolio />} />
          <Route exact path="/forum" name="forum" render={() => 
            <Forum
              state={this.props.state}
              newComment={this.props.newComment} 
            />}
          />
          <Route exact path="/contact" name="Contact" render={() => <Contacts />} />
          <Route exact path="/" name="Home" render={() => <Home />} />
        </main>
      </Switch>
    )
  };
};
