import './styles/header.scss';
import logo from '../img/Logo.png';
import { Link } from 'react-router-dom';
import { Container } from '@material-ui/core';
import { Telegram, LinkedIn, Facebook } from '@material-ui/icons';

import ThemeIcon from './ThemeIcon';
import BurgerBtn from './BurgerBtn';


const Header = (props) => {
 
    const headerClasses = ['header'];
     if(props.store.getState().dark === true) headerClasses.push("header-dark");

    return (
      <header className={headerClasses.join(' ')}>
        <Container maxWidth="lg">
          <div className="header__content">
            <Link to="/"> <img className="header_logo" src={logo} alt="Logo" /></Link>
            <nav className="header_nav">
              <ul className="nav_menu">
                <li className="nav_menu_items"><Link to="/Atlantida">Home</Link></li>
                <li className="nav_menu_items"><a href="#about">About</a></li>
                <li className="nav_menu_items"><a href="#services">SERVICES</a></li>
                <li className="nav_menu_items"><a href="#prices">Prices</a></li>
                <li className="nav_menu_items"><a href="#blog">Blog</a></li>
                <li className="nav_menu_items"><Link to="/forum">Forum</Link></li>
                <li className="nav_menu_items"><Link to="/portfolio">Portfolio</Link></li>
                <li className="nav_menu_items"><Link to="/contact">contacts</Link></li>
              </ul>

              <ThemeIcon store={props.store} />

              <div className="social">
                <a className="social_link" href="/"> <LinkedIn /> </a>
                <a className="social_link" href="/"> <Facebook /> </a>
                <a className="social_link" href="/"> <Telegram /> </a>
              </div>
            </nav>

            <button className="burger-btn" >
              <BurgerBtn store={props.store}/>  
            </button>
          </div>
        </Container>
      </header>
    )
  };


export default Header;