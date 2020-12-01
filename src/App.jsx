import React, { Component } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import BurgerMenu from './components/BurgerMenu'
import './components/styles/burgerMenu.scss' 
import './App.scss';

export default class App extends Component {
 

  render(props) {
  
    
    return (
      <div className="App">
        <Header 
          renderBurgerBtn={this.props.renderBurgerBtn}
          changeBurgerMenu={this.props.changeBurgerMenu}
          changeColorThem={this.props.changeColorThem} 
          state={this.props.state}/>
        <BurgerMenu state={this.props.state} changeColorThem={this.props.changeColorThem}  />
        <Main 
          newComment={this.props.newComment} 
          state={this.props.state} />
        <Footer />
      </div> 
    );
  };
};


