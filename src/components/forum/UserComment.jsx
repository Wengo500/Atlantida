import React, { Component   } from 'react';
import './style/userComment.scss';
import '../styles/styleComponents.scss';

export default  class UserComment extends Component {

  render(props) {
    return (
      <div className="App">
        <div className="comment">
          <img className="user-avatar" src={this.props.comment.avatar} alt="Avatar"/>
          <div className="comment-wrapper">
            <p className="user-name">{this.props.comment.name}</p>
            <p className="user-comment">{this.props.comment.comment}</p>
          </div>
        </div>
      </div>
    );
  }
}
