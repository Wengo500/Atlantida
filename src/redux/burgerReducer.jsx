const BURGER = 'BURGER';
const BURGER_BLACKOUT = 'BURGER_BLACKOUT';

let initialState = {
  burger: false
}

let burgerReducer = (state=initialState.burger, action) => {
  switch(action.type) {
          
    case BURGER:
      return state = !state;

    case BURGER_BLACKOUT:
      return state = false;

    default: 
      return state;
  }

}
export const burgerBtnActionCreator = () => {
    return {
    type: BURGER
    }
}
export const burgerBlackoutActionCreator = () => {
    return {
    type: BURGER_BLACKOUT
    }
}
 export default burgerReducer;

