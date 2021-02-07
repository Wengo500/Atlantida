import React from 'react';
import './style/userComment.scss';
import '../styles/styleComponents.scss';

const UserComment = (props) => {

    return (
      <div className="App">
        <div className="comment">
          <img className="user-avatar" src={props.comment.avatar} alt="User Avatar"/>
          <div className="comment-wrapper">
            <p className="user-name">{props.comment.name}</p>
            <p className="user-comment">{props.comment.comment}</p>
          </div>
        </div>
      </div>
    );
}

export default UserComment