 import UserAnonym from '../img/UserAnonym.jpg';

const newCommentReducer = 'New-Comment-Reducer';

let initialState = {
   comments: [
             { id: 0, name: "Alex", comment: "Hello World", avatar: 'https://avatarko.ru/img/kartinka/33/multfilm_lyagushka_32117.jpg' },
             { id: 1, name: "Sergei", comment: "How are you?", avatar: 'https://www.zastavki.com/pictures/640x480/2013Photoshop_Cat_in_Space_043860_29.jpg' },
             { id: 2, name: "Victoria", comment: "Nice", avatar: 'https://anekdotsuper.ru/assets/cache_image/assets/img/koko/viberr-1_440x0_3a6.jpg' },
             { id: 3, name: "Victoria", comment: "And you?", avatar: 'https://anekdotsuper.ru/assets/cache_image/assets/img/koko/viberr-1_440x0_3a6.jpg' },
         ]
}

 const commentsReducer = (state=initialState, action) => {
switch(action.type) {

  case newCommentReducer: 
  let id = 0;
  state.comments.forEach((element, index) => id = index + 1);
    const newComment = { id: id, userName: action.userName, comment: action.userMessage, avatar: UserAnonym };
    state.comments.push(newComment);
    return state;
    
    default: return state;
}

}

export const newCommentReducerActionCreator = (userName, userMessage) => {
return {
    type: newCommentReducer,
    userName: userName, 
    userMessage: userMessage
}
}
export default commentsReducer;