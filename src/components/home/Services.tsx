import React, { Component } from 'react';
import './style/services.scss';
import '../styles/styleComponents.scss'
import { Container } from '@material-ui/core';

import Lamp from '@material-ui/icons/WbIncandescentOutlined';
import Mac from '@material-ui/icons/DesktopMacOutlined';
import Timeline from '@material-ui/icons/TimelineOutlined';
import Dev from '@material-ui/icons/DevicesOutlined';

export default class Services extends Component {
  render() {
    return (
      <div className="services section">
        <Container maxWidth="lg">
          <span className="services__title  title-light ">services</span>
          <p className="light-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto aliquid repudiandae optio eum maiores id amet sequi perferendis, aspernatur dolorem! Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, tempora.</p>
          <div className="wrapper">
            <fieldset className="services__blok">
              <legend><Lamp fontSize="large" className="icon" /></legend>
              <span className="blok__title">GRAPHIC <br /> DESIGN</span>
              <div className="text-wrapper">
                <p className="blok__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam sunt necessitatibus quas quisquam, excepturi repellat repudiandae doloremque id corporis ducimus, voluptate cumque neque nemo expedita consequuntur voluptas? Cumque commodi laborum sit nobis eius repellendus nemo, voluptatum ut praesentium quia explicabo necessitatibus cum tempore officiis at laboriosam et ea inventore, aut libero est cupiditate distinctio autem vero! Inventore, illo molestiae fugiat neque cupiditate ducimus ratione voluptatibus. Fugit tempora cupiditate vitae aliquam ut, nesciunt non temporibus quaerat voluptate necessitatibus labore, totam rerum. Fuga fugit iste laudantium ratione nostrum officia distinctio, maiores, quidem quasi tempore corporis, magni saepe porro qui possimus. Inventore, modi.</p>
              </div>
            </fieldset>
            <fieldset className="services__blok">
              <legend><Mac fontSize="large" className="icon" /></legend>
              <span className="blok__title">WEBSITE  <br /> DESIGN</span>
              <div className="text-wrapper">
                <p className="blok__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam sunt necessitatibus quas quisquam, excepturi repellat repudiandae doloremque id corporis ducimus, voluptate cumque neque nemo expedita consequuntur voluptas? Cumque commodi laborum sit nobis eius repellendus nemo, vone nostrum officia distinctio, maiores, quidem quasi tempore corporis, magni saepe porro qui possimus. Inventore, modi.</p>
              </div>            </fieldset>
            <fieldset className="services__blok">
              <legend><Timeline fontSize="large" className="icon" /></legend>
              <span className="blok__title">SEO &  <br /> ANALITYCS</span>
              <div className="text-wrapper">
                <p className="blok__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam sunt necessitatibus quas quisquam, excepturi repellat repudiandae dolorsit nobis eius repellendus nemo, voluptatum ut praesentium quia explicabo necessitatibus cum tempore officiis at laboriosam et ea inventore, aut libero est cupiditate distinctio autem vero! Inventore, illo molestiae fugiat neque cupiditate ducimus ratione voluptatibus. Fugit tempora cupiditate vitae aliquam ut, nesciunt non temporibus quaerat voluptate necessitatibus labore, totam rerum. Fuga fugit iste laudantium ratione nostrum officia distinctio, maiores, quidem quasi tempore corporis, magni saepe porro qui possimus. Inventore, modi.</p>
              </div>
            </fieldset>
            <fieldset className="services__blok">
              <legend><Dev fontSize="large" className="icon" /></legend>
              <span className="blok__title">programming</span>
              <div className="text-wrapper">
                <p className="blok__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam sunt necessitatibus quas quisquam, excepturi repellaquam ut, nesciunt non temporibus quaerat voluptate necessitatibus labore, totam rerum. Fuga fugit iste laudantium ratione nostrum officia distinctio, maiores, quidem quasi tempore corporis, magni saepe porro qui possimus. Inventore, modi.</p>
              </div>
            </fieldset>

          </div>

        </Container>
      </div>
    )
  };
};