import React, { Component } from 'react';
import Banner from '../components/home/Banner';
import About from '../components/home/About';
import Services from '../components/home/Services';
import Prices from '../components/home/Prices';
import Compass from '../components/home/Compass';
import Blog from '../components/home/Blog';
import Clients from '../components/home/Clients';
import ClientSlider from '../components/home/ClientSlider';
import Maps from '../components/home/Map'
export default class Home extends Component {
  render() {
    return (
      <div className="home">
        <Banner />
        <About />
        <Services />
        <Prices />
        <Compass />
        <Blog /> 
        <Clients />
        <ClientSlider />
        <Maps />
      </div>
    );
  };
};