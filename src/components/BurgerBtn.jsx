import React from 'react';
import './styles/burgerMenu.scss';
import './styles/burgerBtn.scss';

import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import { grey } from '@material-ui/core/colors';

import {burgerBtnActionCreator} from '../redux/burgerReducer';


const BurgerBtn = (props) => {
    const renderBurgerBtn = () => {
      if(props.store.getState().burger === true) return <CloseIcon
          fontSize = "large"
          style = {
             { color: grey[500] }
          } /> ;
      if (props.store.getState().dark === true) {
         if (props.store.getState().burger === true) return <CloseIcon
          fontSize = "large"
          style = {
             { color: grey[500] }
          } /> ;
         
         else return <MenuIcon
          fontSize = "large"
          style = {
             { color: grey[500] }
         } />

     } else if (props.store.getState().burger === true) return <CloseIcon fontSize = "large" /> ;
           else return <MenuIcon fontSize = "large" />
  }

 
    return (
  <div className="burger-btn" onClick={() => props.store.dispatch(burgerBtnActionCreator())}>{renderBurgerBtn()}</div>
      
    )

};

export default BurgerBtn