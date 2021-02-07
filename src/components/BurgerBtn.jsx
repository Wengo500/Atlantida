import React from 'react';
import './styles/burgerMenu.scss';
import './styles/burgerBtn.scss';
import {connect} from 'react-redux'

import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import { grey } from '@material-ui/core/colors';

import {burgerBtnActionCreator} from '../redux/burgerReducer';

const BurgerBtn = (state) => {
    const renderBurgerBtn = () => {
      if(state.burger === true) return <CloseIcon
          fontSize = "large"
          style = {
             { color: grey[500] }
          } /> ;
      if (state.colorThem === true) {
         if (state.burger === true) return <CloseIcon
          fontSize = "large"
          style = {
             { color: grey[500] }
          } /> ;
         
         else return <MenuIcon
          fontSize = "large"
          style = {
             { color: grey[500] }
         } />

     } else if (state.burger === true) return <CloseIcon fontSize = "large" /> ;
           else return <MenuIcon fontSize = "large" />
  }

 
    return (
  <div className="burger-btn" onClick={() => state.burgerBtn()}>{renderBurgerBtn()}</div>
      
    )

};

const mapStateToProps = (state) => {
  return {
    burger: state.burger,
    colorThem: state.dark
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    burgerBtn: () => dispatch(burgerBtnActionCreator())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BurgerBtn);