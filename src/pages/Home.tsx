import React, { Component } from 'react';
import Banner from '../components/home/Banner';
import About from '../components/home/About';
import Services from '../components/home/Services';
import Prices from '../components/home/Prices';
import Compas from '../components/home/Compas';
import Blog from '../components/home/Blog';
import Clients from '../components/home/Clients';
import ClientSlider from '../components/home/ClientSlider';
export default class Home extends Component {
  render() {
    return (
      <div className="home">
        <Banner />
        <About />
        <Services />
        <Prices />
        <Compas />
        <Blog />
        <Clients />
        <ClientSlider />
      </div>

    );
  };
};