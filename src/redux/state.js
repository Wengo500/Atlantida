 import UserAnonym from '../img/UserAnonym.jpg'

 let rerenderDOM = () => {
     console.log('rerender')
 }
 let state = {
     comments: [
         { id: 0, name: "Alex", comment: "Hello World", avatar: 'https://avatarko.ru/img/kartinka/33/multfilm_lyagushka_32117.jpg' },
         { id: 1, name: "Sergei", comment: "How are you?", avatar: 'https://avatarko.ru/img/kartinka/2/cherep_kapyushon_uzhasy_1606.jpg' },
         { id: 2, name: "Victoria", comment: "Nice", avatar: 'https://anekdotsuper.ru/assets/cache_image/assets/img/koko/viberr-1_440x0_3a6.jpg' },
         { id: 3, name: "Victoria", comment: "And you?", avatar: 'https://anekdotsuper.ru/assets/cache_image/assets/img/koko/viberr-1_440x0_3a6.jpg' },
     ]
 }


 export const changeState = (name, message, id) => {

     state.comments.forEach((element, index) => id = index + 1);
     const newComment = { id: id, name: name, comment: message, avatar: UserAnonym };
     state.comments.push(newComment);
     rerenderDOM(state)
 };

 export const subscribe = (observer) => {
     rerenderDOM = observer;
 }

 export default state;