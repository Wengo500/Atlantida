import React, { Component } from 'react';
import './style/clientSlider.scss';
import '../styles/styleComponents.scss';
import Slider from "react-slick";

import ClientAvatar from '../../img/clientSlider/clientAvater.png';

var settings = {
  dots: true,
  infinite: true,
  speed: 4000,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  centerMode: true
};
export default class ClientSlider extends Component {
  render() {
    return (
      <div className="client-slider section">
        <Slider {...settings}>
          <div className="slide">
            <img className="slide__avatar" src={ClientAvatar} alt="Аватар клиента" />
            <p className="slide__text">Lorem ipsum dolor sit Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex, odio. amet consectetur adipisicing elit. Illum, quaerat.</p>
            <p className="slide__name">ALEXANDR PODVALNY</p>
            <p className="slide__position">Free-PSD-Template.com Company</p>
          </div>
          <div className="slide">
            <img className="slide__avatar" src={ClientAvatar} alt="Аватар клиента" />
            <p className="slide__text">Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas ea iusto ipsa iure ex. Odio? adipisicing elit. Illum, quaerat.</p>
            <p className="slide__name">ALEXANDR PODVALNY</p>
            <p className="slide__position">Free-PSD-Template.com Company</p>
          </div>
          <div className="slide">
            <img className="slide__avatar" src={ClientAvatar} alt="Аватар клиента" />
            <p className="slide__text">Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur adipisicing elit. Error enim, consequuntur consectetur animi quos similique. Ad excepturi aperiam soluta tempora! adipisicing elit. Illum, quaerat.</p>
            <p className="slide__name">ALEXANDR PODVALNY</p>
            <p className="slide__position">Free-PSD-Template.com Company</p>
          </div>

        </Slider>


      </div>
    )
  };
};