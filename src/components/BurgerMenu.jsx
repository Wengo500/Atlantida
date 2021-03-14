import React from 'react';
import './styles/burgerMenu.scss';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

import { Telegram, LinkedIn, Facebook } from '@material-ui/icons';
import ThemeIcon from './ThemeIcon';

import {burgerBtnActionCreator} from '../redux/burgerReducer';


const BurgerMenu = (state) => {

  const burgerState = useSelector(state => state.burger, shallowEqual );
  const dispatch = useDispatch();

    let burgerClasses = ["burger"]
    let burgerBlackout = []
    if(burgerState === true) {
      burgerClasses.push('burger-true')
      burgerBlackout.push('burger-blackout')
 }
    return (
      <>
        <div className={burgerBlackout.join(' ')} onClick={() => dispatch(burgerBtnActionCreator())}>
        </div>

        <div className={burgerClasses.join(' ')} > 

          <nav className="burger__nav">
            <ul className="burger__nav__menu">
              <li><Link className="burger-menu__items" to="/">Home</Link></li>
              <li><HashLink className="burger-menu__items" to="/#about">About</HashLink></li>
              <li><HashLink className="burger-menu__items" to="/#services">SERVICES</HashLink></li>
              <li><HashLink className="burger-menu__items" to="/#prices">Prices</HashLink></li>
              <li><HashLink className="burger-menu__items" to="/#blog">Blog</HashLink></li>
              <li><Link className="burger-menu__items" to="/forum">Forum</Link></li>
              <li><Link className="burger-menu__items" to="/portfolio">Portfolio</Link></li>
              <li><Link className="burger-menu__items" to="/contact">contacts</Link></li>
            </ul>

           <ThemeIcon />

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
