import React, { Component } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import './App.scss';

export default class App extends Component {
  state = { 
    dark: false 
  };

  render(props) {
  
    const changeState = () => {
      const oldState = this.state.dark;
      const newState = !oldState;
          this.setState({ dark: newState });
    }
    return (
      <div className="App">
        <Header changeState={changeState} mainColor={this.state.dark}/>
        <Main changeState={changeState} mainColor={this.state.dark}/>
        <Footer />
      </div> 
    );
  };
};


