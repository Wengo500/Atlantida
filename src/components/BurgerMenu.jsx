import React from 'react';
import './styles/burgerMenu.scss';
import { Link } from 'react-router-dom';
import { Telegram, LinkedIn, Facebook } from '@material-ui/icons';
import ThemeIcon from './ThemeIcon';

// import {burgerBlackoutActionCreator} from '../redux/burgerReducer';


const BurgerMenu = (props) => {

    let burgerClasses = ["burger"]
    let burgerBlackout = []
    if(props.store.getState().burger === true) {
      burgerClasses.push('burger-true')
      burgerBlackout.push('burger-blackout')
 }
    return (
      <>
        <div className={burgerBlackout.join(' ')} >
        </div>

        <div className={burgerClasses.join(' ')} > 

          <nav className="burger__nav">
            <ul className="burger__nav__menu">
              <li><Link className="burger-menu__items" to="/">Home</Link></li>
              <li><a className="burger-menu__items" href="#about">About</a></li>
              <li><a className="burger-menu__items" href="#services">SERVICES</a></li>
              <li><a className="burger-menu__items" href="#prices">Prices</a></li>
              <li><a className="burger-menu__items" href="#blog">Blog</a></li>
              <li><Link className="burger-menu__items" to="/forum">Forum</Link></li>
              <li><Link className="burger-menu__items" to="/portfolio">Portfolio</Link></li>
              <li><Link className="burger-menu__items" to="/contact">contacts</Link></li>
            </ul>

           <ThemeIcon store={props.store} />

            <div className="social">
              <a className="social_link social_link__burger" href="/"> <LinkedIn /> </a>
              <a className="social_link social_link__burger" href="/"> <Facebook /> </a>
              <a className="social_link social_link__burger" href="/"> <Telegram /> </a>
            </div>
          </nav>
        </div>
      </>
    )

};

export default BurgerMenu;  