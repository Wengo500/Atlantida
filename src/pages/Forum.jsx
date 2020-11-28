import React, { Component } from 'react';
import './styles/forum.scss'
import UserComment from '../components/forum/UserComment';
import { Container } from '@material-ui/core'
import '../components/styles/styleComponents.scss';

let newPostMessage = React.createRef()
let newPostUserName = React.createRef()
export default class Forum extends Component {
 addComment() { 
   let userMessage = newPostMessage.current.value;
   let userName = newPostUserName.current.value;

   if (userMessage && userName !== '') {
        this.props.changeState(userName, userMessage);
   } else {
     alert('Please write your name and message')
   }
   userMessage = newPostMessage.current.value ='';
   userName = newPostUserName.current.value ='';
 }

 
    renderComment() {
    return this.props.state.comments.map(comment => {
      return <UserComment comment={comment} key={comment.id} />
    })
   }
   
  render(props) {

    return (
      <div id="forum" className="forum section">
        <Container maxWidth="lg">
          <span className="title ">Forum</span> 
          <p id="mess" className="text"> Architecto aliquid repudiandae optio eum maiores id amet sequi perferendis, dokeldem aspernatur dolorem! Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, Lorem ipsum dolor sit. tempora.</p>
          
          {this.renderComment()}

          <form className="forum__form">
            <input className="input-name" type="text"  placeholder="Name*" ref={newPostUserName} />
            <textarea name="message" placeholder="Your Message*" ref={newPostMessage} />
          </form>
          <button id="btn" className="button" onClick={()=>this.addComment() } >Send Message</button>
        </Container>
      </div>
    );
  };
};