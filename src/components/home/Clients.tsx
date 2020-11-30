import React, { Component } from 'react';
import './style/clients.scss';
import '../styles/styleComponents.scss';
import '../styles/@media.scss';
import { Container } from '@material-ui/core';
import Logo1 from '../../img/clients/1.png';
import Logo2 from '../../img/clients/2.png';
import Logo3 from '../../img/clients/3.png';
import Logo4 from '../../img/clients/4.png';
import Logo5 from '../../img/clients/5.png';

export default class Clients extends Component {
  render() {
    return (
      <div className="clients section">
        <Container maxWidth="lg">
          <span className="title ">Clients</span>
          <p className="text"> Architecto aliquid repudiandae optio eum maiores id amet sequi perferendis, dokeldem aspernatur dolorem! Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, Lorem ipsum dolor sit. tempora.</p>
          <div className="clients-logo">
            <img src={Logo1} alt="" />
            <img src={Logo2} alt="" />
            <img src={Logo3} alt="" />
            <img src={Logo4} alt="" />
            <img src={Logo5} alt="" />
          </div>
        </Container>
      </div>
    )
  };
};