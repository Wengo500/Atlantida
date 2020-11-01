import React, {Component} from 'react'
import './styles/header.scss'
import logo from '../img/Logo.png'


export default class Header extends Component{
    render(){
    return (
    
      <div className="header">
       <a href="/"> <img className="header-logo" src={logo} alt="Logo" /></a>
        <nav className="header-nav">
          
            <ul className="nav-menu">
              <li className="nav-menu-items"><a href="/">Home</a></li>
              <li className="nav-menu-items"><a href="/about">About</a></li>
              <li className="nav-menu-items"><a href="services">SERVICES</a></li>
              <li className="nav-menu-items"><a href="history">History</a></li>
              <li className="nav-menu-items"><a href="team">Team</a></li>
              <li className="nav-menu-items"><a href="portfolio">Portfolio</a></li>
              <li className="nav-menu-items"><a href="prices">Prices</a></li>
              <li className="nav-menu-items"><a href="blog">Blog</a></li>
              <li className="nav-menu-items"><a href="contact">contact</a></li>
            </ul>
           
        </nav>
      </div>
        
 
    )}; 
};
