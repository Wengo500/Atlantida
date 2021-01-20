import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import { grey } from '@material-ui/core/colors';

const renderBurgerBtn = 'Render-Burger-Btn';
const changeBurgerMenu = 'Change-Burger-Menu';

let initialState = {
    burger: false
}

let burgerReducer = (state=initialState, action) => {
   
  console.log( Object.isSealed(state))
  switch(action.type) {

    case changeBurgerMenu:
     return state.burger = !state.burger;
    //  return state = !state;
      
    case renderBurgerBtn:
      if (state.dark === true) {
         if (state.burger === true) return <CloseIcon
          fontSize = "large"
          style = {
             { color: grey[500] }
          } /> ;
         
         else return <MenuIcon
          fontSize = "large"
          style = {
             { color: grey[500] }
         } />

     } else 
     if (state.burger === true) 
     return <CloseIcon fontSize = "large" /> ;
     else return <MenuIcon fontSize = "large" />

     default: return state;
  }
}

export const changeBurgerMenuActionCreator = () => {
    return {
    type: changeBurgerMenu
    }
}
export const renderBurgerBtnActionCreator = () => {
    return {
    type: renderBurgerBtn
    }
}
 export default burgerReducer;