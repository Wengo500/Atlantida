import React from 'react'
import './styles/forum.scss'
import UserComment from '../components/forum/UserComment';
import { Container } from '@material-ui/core'
import '../components/styles/styleComponents.scss';

import {newCommentReducerActionCreator} from '../redux/commentsReducer'

let newPostMessage = React.createRef()
let newPostUserName = React.createRef()

const Forum = (props) => {
 const addComment = () => { 
   
   let userMessage = newPostMessage.current.value;
   let userName = newPostUserName.current.value;

   if (userMessage && userName !== '') {

          props.store.dispatch(newCommentReducerActionCreator(userName, userMessage));
  } else {
      alert('Please write your name and message')
    }
    userMessage = newPostMessage.current.value ='';
    userName = newPostUserName.current.value ='';
 }
   const renderComment = () => {
    return props.store.getState().comments.map(comment => {
      return <UserComment store={props.store} comment={comment} key={comment.id} />
    })
   }

    return (
      <div id="forum" className="forum section">
        <Container maxWidth="lg">
          <span className="title ">Forum</span> 
          <p id="mess" className="text"> Architecto aliquid repudiandae optio eum maiores id amet sequi perferendis, dokeldem aspernatur dolorem! Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, Lorem ipsum dolor sit. tempora.</p>
          
          {renderComment()}

          <form className="forum__form">
            <input className="input-name" type="text"  placeholder="Name*" ref={newPostUserName} />
            <textarea name="message" placeholder="Your Message*" ref={newPostMessage} />
          </form>
          <button id="btn" className="button" onClick={()=> addComment() } >Send Message</button>
        </Container>
      </div>
    );
};

export default Forum