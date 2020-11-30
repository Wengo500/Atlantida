import React, { Component } from 'react';
import './styles/burgerMenu.scss';
import './styles/@media.scss';
import { Link } from 'react-router-dom';
import { Telegram, LinkedIn, Facebook } from '@material-ui/icons';
import Sun from '@material-ui/icons/WbSunnyOutlined';
import Moon from '@material-ui/icons/Brightness3Outlined';

export default class HeaderBurger extends Component {
 
  render(props) {

     const renderThemIcon = () => {
       if(this.props.mainColor === true)  return <Sun onClick={ this.props.changeState} className="sun-icon"/>
        else return <Moon onClick={ this.props.changeState} className="moon-icon"/>
     }
    let burgerClasses = ["burger"]
    if(this.props.burger === true) {
      burgerClasses.push('burger-true')
}
    return (
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

                {renderThemIcon()}

                <div className="social">
                  <a className="social_link social_link__burger" href="/"> <LinkedIn /> </a>
                  <a className="social_link social_link__burger" href="/"> <Facebook /> </a>
                  <a className="social_link social_link__burger" href="/"> <Telegram /> </a>
                </div>
              </nav>
           
      </div>
    )
  };

};
