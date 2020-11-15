import React, { Component } from 'react';
import Banner from '../components/home/Banner';
import About from '../components/home/About';

export default class Home extends Component {
  render() {
    return (
      <div className="home">
        <Banner />
        <About />
      </div>

    );
  };
};