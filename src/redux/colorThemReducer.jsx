const changeColorThem = 'Change-Color-Them';

let initialState = { dark: false}

const colorThemReducer = (state=initialState, action) => {
 switch(action.type) {
         
   case changeColorThem:
    return state.dark = !state.dark;

  default: return state;
 }

}

export const changeColorThemActionCreator = () => {
    return {
    type: changeColorThem
    }
}
 export default colorThemReducer;

