import React, { Component } from 'react';
import './styles/header.scss';
import './styles/@media.scss';
import logo from '../img/Logo.png';
import { Link } from 'react-router-dom';
import { Container } from '@material-ui/core';
import { Telegram, LinkedIn, Facebook } from '@material-ui/icons';
import Sun from '@material-ui/icons/WbSunnyOutlined';
import Moon from '@material-ui/icons/Brightness3Outlined';

export default class Header extends Component {
 
  render(props) {
    const headerClasses = ['header'];
     if(this.props.mainColor === true) headerClasses.push("header-dark");
     const renderThemIcon = () => {
       if(this.props.mainColor === true)  return <Sun onClick={ this.props.changeColorThem} className="sun-icon"/>
        else return <Moon onClick={ this.props.changeColorThem} className="moon-icon"/>
     }
    return (
      <header className={headerClasses.join(' ')} >
        <Container maxWidth="lg">
          <div className="header__content">
            <Link to="/"> <img className="header_logo" src={logo} alt="Logo" /></Link>
            <nav className="header_nav">
              <ul className="nav_menu">
                <li className="nav_menu_items"><Link to="/">Home</Link></li>
                <li className="nav_menu_items"><a href="#about">About</a></li>
                <li className="nav_menu_items"><a href="#services">SERVICES</a></li>
                <li className="nav_menu_items"><a href="#prices">Prices</a></li>
                <li className="nav_menu_items"><a href="#blog">Blog</a></li>
                <li className="nav_menu_items"><Link to="/forum">Forum</Link></li>
                <li className="nav_menu_items"><Link to="/portfolio">Portfolio</Link></li>
                <li className="nav_menu_items"><Link to="/contact">contacts</Link></li>
              </ul>

                {renderThemIcon()}

                <div className="social">
                  <a className="social_link" href="/"> <LinkedIn /> </a>
                  <a className="social_link" href="/"> <Facebook /> </a>
                  <a className="social_link" href="/"> <Telegram /> </a>
                </div>
              </nav>
    <button className="burger-btn" onClick={this.props.changeBurgerMenu}>{this.props.renderBurgerBtn()}</button>
          </div>
        </Container>
      </header>
    )
  };

};
