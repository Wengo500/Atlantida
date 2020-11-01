import React, { Component } from 'react';
import './styles/banner.scss';

export default class Banner extends Component {
  render() {
    return (
      <main className="banner">
        <div className="banner_content">
          <div className="banner_text">
            <p className="who-are-we">Design Studio and Digital Agency</p>
            <h1 className="atlantida">we are atlantida</h1>
          </div>
          <button className="btn">Get Started</button>

        </div>
      </main>
    )
  };
};