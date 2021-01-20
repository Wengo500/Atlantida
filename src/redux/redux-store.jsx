import { combineReducers, createStore } from "redux";
import burgerReducer from './burgerReducer';
import colorThemReducer from './colorThemReducer';
import commentsReducer from './commentsReducer';

let reducers = combineReducers({
 dark: colorThemReducer,
 burger: burgerReducer,
 comments: commentsReducer
});

let store = createStore(reducers);

export default store;
