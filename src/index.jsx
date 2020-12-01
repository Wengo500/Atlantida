import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.scss';
import reportWebVitals from './reportWebVitals';
import App from './App';
import state from './redux/state';
import {newComment, subscribe, changeColorThem, changeBurgerMenu, renderBurgerBtn} from './redux/state'

let rerenderDOM = (state) => {

  ReactDOM.render(

    <React.StrictMode>
      <BrowserRouter>
        <App 
        state={state} 
        newComment={newComment} 
        changeColorThem={changeColorThem} 
        changeBurgerMenu={changeBurgerMenu} renderBurgerBtn={renderBurgerBtn}/>
      </BrowserRouter>
    </React.StrictMode>,

    document.getElementById('root')
  );
};
rerenderDOM(state);
subscribe(rerenderDOM);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
