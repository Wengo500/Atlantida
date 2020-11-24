import React, { Component } from 'react';
import './styles/forum.scss'
import UserComment from '../components/forum/UserComment';
import { Container } from '@material-ui/core'
import '../components/styles/styleComponents.scss';

export default class Forum extends Component {
   state = {
    comments: [
      {id:2, name: "Alex", comment: "Hello World", avatar: 'https://avatarko.ru/img/kartinka/33/multfilm_lyagushka_32117.jpg' },
      {id:3, name: "Sergei", comment: "How are you?" , avatar: 'https://avatarko.ru/img/kartinka/2/cherep_kapyushon_uzhasy_1606.jpg' },
      {id:4, name: "Victoria", comment: "Nice", avatar: 'https://anekdotsuper.ru/assets/cache_image/assets/img/koko/viberr-1_440x0_3a6.jpg'  },
      {id:5, name: "Victoria", comment: "And you?", avatar: 'https://anekdotsuper.ru/assets/cache_image/assets/img/koko/viberr-1_440x0_3a6.jpg'  }
    ]
  };
   renderComment() {
    return this.state.comments.map(comment => {
      return(
        <UserComment comment={comment} key={comment.id} />
      )
    })
  }

  render() {

    return (
      <div id="forum" className="forum section">
        <Container maxWidth="lg">
          <span className="title ">Forum</span> 
          <p id="mess" className="text"> Architecto aliquid repudiandae optio eum maiores id amet sequi perferendis, dokeldem aspernatur dolorem! Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, Lorem ipsum dolor sit. tempora.</p>
          
          { this.renderComment()}

          <form className="forum__form">
            <input id="inputName" className="input-name" type="text"  placeholder="Name*" />
            <textarea name="message" id=""  placeholder="Your Message*" />
          </form>
          <button id="btn" className="button">Send Message</button>

        </Container>
      </div>

    );
  };
};