import React, { Component } from 'react'
import './styles/header.scss'
import logo from '../img/Logo.png'
import { Link } from 'react-router-dom'
import { Container } from '@material-ui/core'
import { Telegram, LinkedIn, Facebook } from '@material-ui/icons';
export default class Header extends Component {
  render() {
    return (

      <header className="header">
        <Container maxWidth="lg">

          <div className="header__content">

            <Link to="/"> <img className="header_logo" src={logo} alt="Logo" /></Link>

            <nav className="header_nav">

              <ul className="nav_menu">
                <li className="nav_menu_items"><Link to="/">Home</Link></li>
                <li className="nav_menu_items"><Link to="/about">About</Link></li>
                <li className="nav_menu_items"><Link to="/services">SERVICES</Link></li>
                <li className="nav_menu_items"><Link to="/history">History</Link></li>
                <li className="nav_menu_items"><Link to="/team">Team</Link></li>
                <li className="nav_menu_items"><Link to="/portfolio">Portfolio</Link></li>
                <li className="nav_menu_items"><Link to="/prices">Prices</Link></li>
                <li className="nav_menu_items"><Link to="/blog">Blog</Link></li>
                <li className="nav_menu_items"><Link to="/contact">contact</Link></li>
              </ul>

            </nav>

            <div className="social">
              <a className="social_link" href="/"> <LinkedIn /> </a>
              <a className="social_link" href="/"> <Facebook /> </a>
              <a className="social_link" href="/"> <Telegram /> </a>
            </div>
          </div>
        </Container>
      </header>



    )
  };
};
