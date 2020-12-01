 import UserAnonym from '../img/UserAnonym.jpg';
 import MenuIcon from '@material-ui/icons/Menu';
 import CloseIcon from '@material-ui/icons/Close';
 import { grey } from '@material-ui/core/colors';


 let rerenderDOM = () => {
     console.log('rerender')
 }
 let state = {
     dark: true,
     burger: false,
     comments: [
         { id: 0, name: "Alex", comment: "Hello World", avatar: 'https://avatarko.ru/img/kartinka/33/multfilm_lyagushka_32117.jpg' },
         { id: 1, name: "Sergei", comment: "How are you?", avatar: 'https://www.zastavki.com/pictures/640x480/2013Photoshop_Cat_in_Space_043860_29.jpg' },
         { id: 2, name: "Victoria", comment: "Nice", avatar: 'https://anekdotsuper.ru/assets/cache_image/assets/img/koko/viberr-1_440x0_3a6.jpg' },
         { id: 3, name: "Victoria", comment: "And you?", avatar: 'https://anekdotsuper.ru/assets/cache_image/assets/img/koko/viberr-1_440x0_3a6.jpg' },
     ]

 }
 export const renderBurgerBtn = () => {

    if (state.dark === true) {
     if (state.burger === true) return <CloseIcon  style={{ color: grey[500] }} fontSize = "large" /> ;
     else  return <MenuIcon style={{ color: grey[500] }} fontSize = "large" /> 
    } else if (state.burger === true) return <CloseIcon fontSize = "large" /> ;
     else  return <MenuIcon fontSize = "large" /> 
     
   
        
 }

 export const changeBurgerMenu = () => {
     state.burger = !state.burger;
     rerenderDOM(state)

 }
 export const changeColorThem = () => {
     state.dark = !state.dark;
     rerenderDOM(state)

 }

 export const newComment = (name, message, id) => {

     state.comments.forEach((element, index) => id = index + 1);
     const newComment = { id: id, name: name, comment: message, avatar: UserAnonym };
     state.comments.push(newComment);
     rerenderDOM(state)
 };

 export const subscribe = (observer) => {
     rerenderDOM = observer;
 }

 export default state;