import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import logger from 'redux-logger';

import colorThemReducer from './colorThemReducer';
import commentsReducer from './commentsReducer';
import burgerReducer from './burgerReducer';

let reducers = combineReducers({
 dark: colorThemReducer,
 comments: commentsReducer,
 burger: burgerReducer
});

let store = createStore(
  reducers,
  compose(
    applyMiddleware(logger),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  ),
  );

export default store;
