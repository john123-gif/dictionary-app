import React from 'react';
import logo from '../assets/images/logo.svg';
import '../assets/styles/Header.scss';
import LightAndDark from './LightAndDark';
import { FontSwitcher } from './FontSwitcher';
import { FontSwitcherProps } from './FontSwitcher';


const Header: React.FC<FontSwitcherProps> = (props) => {
  return (
    <div className="header">
      <img src={logo} alt="App logo" /> 
      <div className='font-toggle-group'>
        <FontSwitcher onChange={props.onChange} font={props.font}/>
        <LightAndDark/>
      </div>
     
    </div>
  );
};

export default Header;
