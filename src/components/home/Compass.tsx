import React, { Component } from 'react';
import './style/compass.scss';
import '../styles/styleComponents.scss';
import { Container } from '@material-ui/core';
import CompassImg from '../../img/compas.png'

export default class Compas extends Component {
  render() {
    return (
      <div className="compass">
        <Container maxWidth="lg">
          <div className="content-wrap">
            <img src={CompassImg} alt="" />
            <div className="text-wrap">
              <p className="compass__title">Looking for a quality and affordable for your next project ?</p>
              <p className="compass__text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia id harum reiciendis rem suscipit architecto non excepturi vero maxime dolores.</p>
            </div>
            <button className="button btn-white">Purchase</button>
          </div>
        </Container>
      </div>
    )
  };
};