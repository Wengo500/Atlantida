import React, { Component } from 'react';
import Header from './components/header';
import Main from './components/main';
import './App.scss';


export default class App extends Component {

  render(){
    
    return (
      <div className="app">
        <Header />
        <Main />
      </div>
    );
  };
};


