import React, { Component } from 'react';
import './styles/contacts.scss';
import '../components/styles/styleComponents.scss';
import Maps from '../components/Map';
import { Telegram, LinkedIn, Facebook } from '@material-ui/icons';

export default class Contacts extends Component {
  render() {
    return (
      // <Container maxWidth="lg">

    <div className="pageContacts ">
      <span className="title ">Contacts</span> 
      <p id="mess" className="text"> Architecto aliquid repudiandae optio eum maiores id amet sequi perferendis, dokeldem aspernatur dolorem! Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, Lorem ipsum dolor sit. tempora.</p>
      <div className="pageContacts-wrap">
        <p className="inform">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sed ipsum pulvinar, consequat ipsum non, sodales augue. Donec dapibus ipsum rutrum congue egestas. Curabitur fringilla tortor non aliquam congue. Class aptent taciti sociosqu ad litora torquent per conubia nostra.
          <span className="studio-name">
            atlantida studio
          </span>
          <span className="conInfo">
            Steven Bernson, Attorney at Law <br />
            1556 Broadway, suite 416<br />
            New York, NY, 10120, USA<br />
          </span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, soluta! Nesciunt accusamus cupiditate magni facilis labore porro, deserunt alias aliquid repellat quidem impedit praesentium natus quia eaque rem totam, ducimus possimus, minima veniam. Perspiciatis voluptatibus quaerat expedita corporis natus ad, mollitia recusandae minus neque? Magni repudiandae quam nemo maxime est.
          <span className="contacts">
            E-mail: elegantflyers@gmail.com
            <br />
            +84 956 654 972
          </span>
          <a className="social_link" href="/"> <LinkedIn /> </a>
          <a className="social_link" href="/"> <Facebook /> </a>
          <a className="social_link" href="/"> <Telegram /> </a>
        </p>
          <Maps className="map"/>
      </div>
    </div>
// </Container>
    );
  };
};