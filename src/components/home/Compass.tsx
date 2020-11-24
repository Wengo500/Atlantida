import React, { Component } from 'react';
import './style/compas.scss';
import '../styles/styleComponents.scss';
import { Container } from '@material-ui/core';
import CompasImg from '../../img/compas.png'

export default class Compas extends Component {
  render() {
    return (
      <div className="compas">
        <Container maxWidth="lg">
          <div className="content-wrap">
            <img src={CompasImg} alt="" />
            <div className="text-wrap">
              <p className="compas__title">Looking for a quality and affordable for your next project ?</p>
              <p className="compas__text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia id harum reiciendis rem suscipit architecto non excepturi vero maxime dolores.</p>
            </div>
            <button className="button btn-white">Purchase</button>
          </div>
        </Container>
      </div>
    )
  };
};