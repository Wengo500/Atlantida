const CHANGE_COLOR_THEME = 'CHANGE_COLOR_THEME';

let initialState = {
  colorThem: false
}

let colorThemReducer = (state=initialState.colorThem, action) => {
 switch(action.type) {
         
   case CHANGE_COLOR_THEME:
    let newState = !state
    return newState;

  default: 
    return state;
 }

}
export const changeColorThemActionCreator = () => {
    return {
    type: CHANGE_COLOR_THEME
    }
}
 export default colorThemReducer;

