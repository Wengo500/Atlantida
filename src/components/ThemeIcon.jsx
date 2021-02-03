import React from 'react';
import './styles/burgerMenu.scss';
import './styles/burgerBtn.scss';

import Sun from '@material-ui/icons/WbSunnyOutlined';
import Moon from '@material-ui/icons/Brightness3Outlined';

import {changeColorThemActionCreator} from '../redux/colorThemReducer';


const ThemeIcon = (props) => {
    
  const renderThemIcon = () => {
    if(props.store.getState().dark === true)  return <Sun 
      onClick={() => props.store.dispatch(changeColorThemActionCreator())} 
      className="sun-icon"/>
    else return <Moon 
      onClick={() => props.store.dispatch(changeColorThemActionCreator())} 
      className="moon-icon"/>
  }
 
  return <div >{renderThemIcon()}</div>

};

export default ThemeIcon;