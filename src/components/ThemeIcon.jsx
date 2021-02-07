import React from 'react';
import './styles/burgerMenu.scss';
import './styles/burgerBtn.scss';
import {connect} from 'react-redux'

import Sun from '@material-ui/icons/WbSunnyOutlined';
import Moon from '@material-ui/icons/Brightness3Outlined';

import {changeColorThemActionCreator} from '../redux/colorThemReducer';


const ThemeIcon = (state) => {
    
  const renderThemIcon = () => {
    if(state.colorThem === true)  return <Sun 
      onClick={() => state.changeColorThem()} 
      className="sun-icon"/>
    else return <Moon 
      onClick={() => state.changeColorThem()} 
      className="moon-icon"/>
  }
 
  return <div >{renderThemIcon()}</div>

};

const mapStateToProps = (state) => {
  return {
    colorThem: state.dark
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    changeColorThem: () => dispatch(changeColorThemActionCreator())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ThemeIcon);
