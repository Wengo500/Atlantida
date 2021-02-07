import React from 'react';
import {connect} from 'react-redux';
import './styles/forum.scss';
import UserComment from '../components/forum/UserComment';
import { Container } from '@material-ui/core';
import '../components/styles/styleComponents.scss';

import {newCommentReducerActionCreator} from '../redux/commentsReducer';

let newPostMessage = React.createRef()
let newPostUserName = React.createRef()

const Forum = (state) => {

  const addComment = () => { 
   
    let userMessage = newPostMessage.current.value;
    let userName = newPostUserName.current.value;

      if (userMessage && userName !== '') state.newComment(userName, userMessage);
        else alert('Please write your name and message');
    
    userMessage = newPostMessage.current.value ='';
    userName = newPostUserName.current.value ='';
  };

  const renderComment = () => {
    return state.comments.map(comment => {
      return <UserComment comment={comment} key={comment.id} />
    });
  };

    return (
      <div id="forum" className="forum section">
        <Container maxWidth="lg">
          <span className="title ">Forum</span> 
          <p id="mess" className="text"> Architecto aliquid repudiandae optio eum maiores id amet sequi perferendis, dokeldem aspernatur dolorem! Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, Lorem ipsum dolor sit. tempora.</p>
          
          {renderComment()}

          <form className="forum__form">
            <input className="forum__input input-name" type="text"  placeholder="Name*" ref={newPostUserName} />
            <textarea className="forum__input message" name="message" placeholder="Your Message*" ref={newPostMessage} />
            <span id="btn" className="forum__button button" onClick={()=> addComment() } >Send Message</span>

          </form>
        </Container>
      </div>
    );
};

const mapStateToProps = (state) => {
  return {
    comments: state.comments
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    newComment: (userName, userMessage) => dispatch(newCommentReducerActionCreator(userName, userMessage))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Forum);