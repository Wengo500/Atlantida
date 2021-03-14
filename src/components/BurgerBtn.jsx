import React from 'react';
import './styles/burgerMenu.scss';
import './styles/burgerBtn.scss';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import { grey } from '@material-ui/core/colors';

import {burgerBtnActionCreator} from '../redux/burgerReducer';

const BurgerBtn = (state) => {
  const burgerState = useSelector(state => state.burger, shallowEqual );
  const colorThemState = useSelector(state => state.colorThem, shallowEqual );
  const dispatch = useDispatch();

  const renderBurgerBtn = () => {

    if(burgerState === true) return <CloseIcon
        fontSize = "large"
        style = {
            { color: grey[500] }
        } /> ;
    if (colorThemState === true) {
        if (burgerState === true) return <CloseIcon
        fontSize = "large"
        style = {
            { color: grey[500] }
        } /> ;
        
        else return <MenuIcon
        fontSize = "large"
        style = {
            { color: grey[500] }
        } />

    } else if (burgerState === true) return <CloseIcon fontSize = "large" /> ;
           else return <MenuIcon fontSize = "large" />
  }
  return <div className="burger-btn" 
  onClick={() => dispatch(burgerBtnActionCreator())}>{renderBurgerBtn()}
  </div>
};

export default BurgerBtn;