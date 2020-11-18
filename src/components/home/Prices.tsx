import React, { Component } from 'react';
import './style/prices.scss';
import '../styles/styleComponents.scss';
import { Container } from '@material-ui/core';

import { LockOutlined, AllInclusiveOutlined, AttachMoneyOutlined } from '@material-ui/icons';
export default class Banner extends Component {
  render() {
    return (
      <Container maxWidth="lg">
        <div id="prices" className="prices section">
          <span className="title ">prices</span>
          <p className="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto aliquid repudiandae optio eum maiores id amet sequi perferendis, dokeldem aspernatur dolorem! Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, tempora.</p>
          <div className="prices__wrapper">
            <div className="item__prices">
              <span className="item__title">basic</span>
              <fieldset className="services__blok">
                <legend className="icon-border">
                  <LockOutlined className="item__img" />
                </legend>
              </fieldset>
              <span className="item__price">10</span>
              <p className="item__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio iusto sapiente eaque dignissimos magnam minus explicabo iure esse. Repellat, ut!</p>
              <button className="button">Sing Up</button>
            </div>
            <div className="item__prices">
              <span className="item__title">ADVANCED</span>
              <fieldset className="services__blok">
                <legend className="icon-border">
                  <AttachMoneyOutlined className="item__img" />
                </legend>
              </fieldset>
              <span className="item__price">20</span>adi
              <p className="item__text">Lorem ipsum dolor sit amet consectetur dignissimos magnam minus explicabo iure esse. Repellat, ut!</p>
              <button className="button">Sing Up</button>
            </div>
            <div className="item__prices">
              <span className="item__title">pro</span>
              <fieldset className="services__blok">
                <legend className="icon-border">
                  <AllInclusiveOutlined className="item__img" />
                </legend>
              </fieldset>
              <span className="item__price">30</span>
              <p className="item__text">Lorem ipsum dolor sitlllllllllldle,d ed ed ed icing elit. Optio iusto sapiente eaque dignissimos magnam minus explicabo iure esse. Repellat, ut!</p>
              <button className="button">Sing Up</button>
            </div>

          </div>
        </div>
      </Container>
    )
  };
};