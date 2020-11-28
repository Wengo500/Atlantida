import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.scss';
import reportWebVitals from './reportWebVitals';
import App from './App';
import state from './redux/state';
import {changeState, subscribe} from './redux/state'

let rerenderDOM = (state) => {

  ReactDOM.render(

    <React.StrictMode>
      <BrowserRouter>
        <App state={state} changeState={changeState}/>
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
