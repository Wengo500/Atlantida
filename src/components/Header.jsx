import './styles/header.scss';
import logo from '../img/Logo.png';
import { Link } from 'react-router-dom';
import { Container } from '@material-ui/core';
import { Telegram, LinkedIn, Facebook } from '@material-ui/icons';
import {connect} from 'react-redux';
import { HashLink } from 'react-router-hash-link';

import ThemeIcon from './ThemeIcon';
import BurgerBtn from './BurgerBtn';


const Header = (state) => {
 
    const headerClasses = ['header'];
     if(state.colorThem === true) headerClasses.push("header-dark");

    return (
      <header className={headerClasses.join(' ')}>
        <Container maxWidth="lg">
          <div className="header__content">
            <Link to="/"> <img className="header_logo" src={logo} alt="Logo" /></Link>
            <nav className="header_nav">
              <ul className="nav_menu">
                <li className="nav_menu_items"><HashLink to="/Atlantida">Home</HashLink></li>
                <li className="nav_menu_items"><HashLink to="/#about">About</HashLink></li>
                <li className="nav_menu_items"><HashLink to="/#services">SERVICES</HashLink></li>
                <li className="nav_menu_items"><HashLink to="/#prices">Prices</HashLink></li>
                <li className="nav_menu_items"><HashLink to="/#blog">Blog</HashLink></li>
                <li className="nav_menu_items"><HashLink to="/forum">Forum</HashLink></li>
                <li className="nav_menu_items"><HashLink to="/portfolio">Portfolio</HashLink></li>
                <li className="nav_menu_items"><HashLink to="/contact">contacts</HashLink></li>
              </ul>

              <ThemeIcon/>

              <div className="social">
                <a className="social_link" href="/"> <LinkedIn /> </a>
                <a className="social_link" href="/"> <Facebook /> </a>
                <a className="social_link" href="/"> <Telegram /> </a>
              </div>
            </nav>

            <button className="burger-btn" >
              <BurgerBtn/>  
            </button>
          </div>
        </Container>
      </header>
    )
  };


const mapStateToProps = (state) => {
  return {
    colorThem: state.dark
  }
}

export default connect(mapStateToProps, null)(Header);