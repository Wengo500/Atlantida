import React, { Component } from 'react';
import './style/gallery.scss';
import '../styles/styleComponents.scss';
import { Container } from '@material-ui/core';
import ReactFancyBox from 'react-fancybox';
import 'react-fancybox/lib/fancybox.css';
import forest from '../../img/portfolio/111.jpg'
import forestDark from '../../img/portfolio/forest-dark.jpg'
import darkRocks from '../../img/portfolio/darkRocks.jpg'
import forest2 from '../../img/portfolio/forest2.jpg'
import forest3 from '../../img/portfolio/forest3.jpg'
import lightHouse from '../../img/portfolio/lighthouse.jpg'
import rocks from '../../img/portfolio/rocks.jpg'
import oceanFog from '../../img/portfolio/oceanFog.jpg'
import most from '../../img/portfolio/most.jpg'

export default class Gallery extends Component {
  render() {
    return (
      <div className="gallery-wrapper">
      <Container maxWidth="lg">
      <div className="gallery">
        
          <ReactFancyBox className="gallery__img forest" thumbnail={forest} image={forest}/>
          <ReactFancyBox className="gallery__img forest-dark" thumbnail={forestDark} image={forestDark}/>
          <ReactFancyBox className="gallery__img forest3" thumbnail={forest3} image={forest3}/>
          <ReactFancyBox className="gallery__img forest2" thumbnail={forest2} image={forest2}/>
          <ReactFancyBox className="gallery__img light-ouse" thumbnail={lightHouse} image={lightHouse}/>
          <ReactFancyBox className="gallery__img rocks" thumbnail={rocks} image={rocks}/>
          <ReactFancyBox className="gallery__img ocean-fog" thumbnail={oceanFog} image={oceanFog}/>
          <ReactFancyBox className="gallery__img dark-rocks" thumbnail={darkRocks} image={darkRocks}/>
          <ReactFancyBox className="gallery__img most" thumbnail={most} image={most}/>


      </div> 
      </Container>
      </div>
    )
  };
};