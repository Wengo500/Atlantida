import React, { Component } from 'react';
import './styles/footer.scss';
import { Link } from 'react-router-dom';
import { Container } from '@material-ui/core';
import { Telegram, LinkedIn, Facebook } from '@material-ui/icons';


export default class Footer extends Component {
  render() {
    return (

      <footer className="footer">
        <Container maxWidth="lg">
          <Link to="/"><span className="logo">atlantida</span></Link>

          <div className="footer__content-wrapper">
            <p className="footer__text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sed ipsum pulvinar, consequat ipsum non, sodales augue. Donec dapibus ipsum rutrum congue egestas. Curabitur fringilla tortor non aliquam congue. Class aptent taciti sociosqu ad litora torquent per conubia nostra.
              <span className="studio-name">
                atlantida studio
              </span>
              Steven Bernson, Attorney at Law <br />
              1556 Broadway, suite 416<br />
              New York, NY, 10120, USA<br />
              <span className="contacts">
                E-mail: elegantflyers@gmail.com
                <br />
                +84 956 654 972
              </span>
              <a className="social_link" href="/"> <LinkedIn /> </a>
              <a className="social_link" href="/"> <Facebook /> </a>
              <a className="social_link" href="/"> <Telegram /> </a>
            </p>
            <form action="" className="footer__form">
              <input className="input input-1" required placeholder="Name*" type="text" />
              <input className="input input-2" required placeholder="E-mail*" type="email" />
              <input className="input input-3" placeholder="Phone" type="tel" />
              <input className="input input-4" placeholder="Website" type="url" />
              <textarea className="input textarea" placeholder="Message" />
              <button className="button btn-color">Submit</button>
            </form>
          </div>

          <p className="copyright">Copyright © 2020 Atlantida Theme</p>
        </Container>
      </footer>



    )
  };
};
