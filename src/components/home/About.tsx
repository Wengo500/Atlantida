import React, { Component } from 'react';
import './style/about.scss';
import '../styles/@media.scss';
import '../styles/styleComponents.scss';
import { Container } from '@material-ui/core';
import AmoutImg from '../../img/aboutBg.jpg';

export default class About extends Component {
  render() {
    return (
      <Container maxWidth="lg">

        <div id='about' className="about section">
          <img src={AmoutImg} alt="about img" className="about__img" />
          <span className="title">
            about us
          </span>
          <p className="about__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea magnam delectus rem iste ullam nemo architecto aperiam asperiores esse consectetur alias vitae explicabo itaque neque, fuga debitis fugit similique nulla voluptatem facere quia reprehenderit dolores? Omnis similique, eligendi ipsa quidem, fugiat vitae facere, nisi at delectus temporibus aut nostrum sint facilis minima laudantium. Suscipit porro, dolorem optio veniam explicabo voluptatum corporis incidunt perferendis ea minus doloribus deserunt ut omnis. Fugiat ipsum nemo ratione voluptatibus impedit sequi cum cumque, magni sunt qui obcaecati eaque esse voluptatum omnis adipisci? Sapiente natus explicabo tempore eligendi nisi sequi dignissimos qui harum ipsum mollitia dicta vitae vero consequatur commodi quasi perferendis nobis itaque dolor, possimus iure voluptates fugit libero eaque? Dolorem sit doloremque soluta ipsum delectus odit iure consequuntur deserunt quibusdam culpa labore maxime suscipit, inventore ducimus eaque quam! Voluptas aliquam facere officia fugiat ex minus sed nobis, explicabo reiciendis rerum culpa magnam, cumque fuga!</p>
          <div className="buttons">
            <button className="button btn-dark">Contact us</button>
            <button className="button">Portfolio</button>
          </div>

        </div>
        <div className="statistics">

          <div className="statistics__item">
            <div className="statistics__img" />
            <p className="statistics__txt">AWARDS WINNER</p>
            <span className="statistics__number">54</span>
          </div>
          <div className="statistics__item">
            <div className=" statistics__img-2" />
            <p className="statistics__txt">JOBS DONE</p>
            <span className="statistics__number">1500</span>
          </div>
          <div className="statistics__item">
            <div className=" statistics__img-3" />
            <p className="statistics__txt">HAPPY CLIENTS</p>
            <span className="statistics__number ">120</span>
          </div>
          <div className="statistics__item">
            <div className=" statistics__img-4" />
            <p className="statistics__txt">reviews recieved</p>
            <span className="statistics__number">211</span>
          </div>
        </div>
      </Container>

    )
  };
};