import React, { Component } from 'react';
import './style/blog.scss';
import '../styles/styleComponents.scss';
import { Container } from '@material-ui/core';
import Blog1 from '../../img/blog/Blog1.jpg'
import Blog2 from '../../img/blog/Blog2.jpg'
import Blog3 from '../../img/blog/Blog3.jpg'
import Blog4 from '../../img/blog/Blog4.jpg'

export default class Blog extends Component {
  render() {
    return (
      <div id="blog" className="blog section">
        <Container maxWidth="lg">
          <span className="title ">blog</span>
          <p className="text"> Architecto aliquid repudiandae optio eum maiores id amet sequi perferendis, dokeldem aspernatur dolorem! Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, Lorem ipsum dolor sit. tempora.</p>
        </Container>

        <div className="blog-conten__wrapper">

          <div className="blog-item">
            <img className="blog-item__img" src={Blog1} alt="" />
            <div className="blog-item__text-wrapper">
              <p className="blog-item__date">14 Aug 2015 / By Admin</p>
              <p className="blog-item__title">Donec id lobortis tellus Maecenas.</p>
              <p className="blog-item__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sed ipsum pulvinar, consequat ipsum non, sodales augue. Donec dapibus ipsum rutrum congue egestas. Curabitur fringilla tortor non aliquam congue. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur fringilla tortor non aliquam congue. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
            </div>
          </div>

          <div className="blog-item">
            <div className="blog-item__text-wrapper">
              <p className="blog-item__date">14 Aug 2015 / By Admin</p>
              <p className="blog-item__title">Donec id lobortis tellus Maecenas.</p>
              <p className="blog-item__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sed ipsum pulvinar, consequat ipsum non, sodales augue. Donec dapibus ipsum rutrum congue egestas. Curabitur fringilla tortor non aliquam congue. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur fringilla tortor non aliquam congue. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos </p>
            </div>
            <img className="blog-item__img" src={Blog2} alt="" />
          </div>
          <div className="blog-item">
            <img className="blog-item__img" src={Blog3} alt="" />
            <div className="blog-item__text-wrapper">
              <p className="blog-item__date">14 Aug 2015 / By Admin</p>
              <p className="blog-item__title">Donec id lobortis tellus Maecenas.</p>
              <p className="blog-item__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sed ipsum pulvinar, consequat ipsum non, sodales augue. Donec dapibus ipsum rutrum congue egestas. Curabitur fringilla tortor non aliquam congue. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur fringilla tortor non aliquam congue. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut recusandae corrupti doloremque iste iusto, facilis odio! Necessitatibus alias repellendus, ex nihil voluptates quisquam excepturi praesentium. Necessitatibus itaque, perspiciatis neque maxime placeat quas praesentium vitae adipisci accusamus quasi molestias quos soluta tempora, ab ipsa facere, magnam voluptate obcaecati! Nisi, maiores reiciendis?</p>
            </div>
          </div>
          <div className="blog-item">
            <div className="blog-item__text-wrapper">
              <p className="blog-item__date">14 Aug 2015 / By Admin</p>
              <p className="blog-item__title">Donec id lobortis tellus Maecenas.</p>
              <p className="blog-item__text">Lorem ipsum dolor sitciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur fringilla tortor non aliquam congue. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. </p>
            </div>
            <img className="blog-item__img" src={Blog4} alt="" />
          </div>
        </div>

      </div>
    )
  };
};