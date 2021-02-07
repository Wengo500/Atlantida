import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.scss';
import reportWebVitals from './reportWebVitals';
import App from './App';
import store from './redux/redux-store';
import {Provider} from 'react-redux'

let rerenderDOM = () => {
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <Provider store={store}>
          <App/>
        </Provider>
      </BrowserRouter>
    </React.StrictMode>,

    document.getElementById('root')
  );
};
rerenderDOM(store.getState());
store.subscribe(rerenderDOM);
 

reportWebVitals();
