const BURGER = 'BURGER';


let initialState = {
  burger: false
}

let burgerReducer = (state=initialState.burger, action) => {
  switch(action.type) {
          
    case BURGER:
      let newState = !state
      return newState;
      

    default: 
      return state;
  }

}
export const burgerBtnActionCreator = () => {
    return {
    type: BURGER
    }
}

 export default burgerReducer;

