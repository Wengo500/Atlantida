import React, { Component } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import BurgerMenu from './components/BurgerMenu'
import './components/styles/burgerMenu.scss' 
import './App.scss';
// import {MenuIcon, CloseIcon} from '@material-ui/icons';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
export default class App extends Component {
  state = { 
    dark: true,
    burger: false
  };

  render(props) {
  
    const changeColorThem = () => {
      const oldState = this.state.dark;
      const newState = !oldState;
          this.setState({ dark: newState });
    }
     
    const changeBurgerMenu = () => {
      const oldState = this.state.burger;
      const newState = !oldState;
          this.setState({ burger: newState });
    }
    const renderBurgerBtn = () => {
      if (this.state.burger === true) return <CloseIcon fontSize="large"/>;
      else return <MenuIcon fontSize="large"/>;
    }
    return (
      <div className="App">
        <Header 
          renderBurgerBtn={renderBurgerBtn}
          changeBurgerMenu={changeBurgerMenu}
          changeColorThem={changeColorThem} 
          mainColor={this.state.dark}/>
        <BurgerMenu burger={this.state.burger} />
        <Main 
          changeState={this.props.changeState} 
          mainColor={this.state.dark} 
          state={this.props.state} />
        <Footer />
      </div> 
    );
  };
};


