import React, { useState, useContext } from 'react'
import { ThemeContext } from '../ThemeContext';
import arrowDown from '../assets/images/icon-arrow-down.svg'
import '../assets/styles/FontSwitcher.scss'
export interface FontSwitcherProps{
    font: string;
    onChange: (param: string) => void;
  }

export const FontSwitcher:React.FC<FontSwitcherProps> = (props) => {

    const options = [
        { value: 'sans-serif', label: 'Sans Serif' },
        { value: 'serif', label: 'Serif' },
        { value: 'monospace', label: 'Mono' }
    ];

    const [isListVisible, setIsListVisible] = useState(false);
    const [buttonValue, setButtonValue] = useState(options[0].label);

    const context = useContext(ThemeContext);
    const {toggle}=context;

    const handleSelectChange = (valueParam: string, labelParam: string) => {
        props.onChange(valueParam);
        setButtonValue(labelParam);
        setIsListVisible(false);
      };

    return (
    <div className={!toggle ? 'select-container lighTheme' : 'darkTheme select-container'}>
        <button className='select-button' onClick={() => setIsListVisible(!isListVisible)}>
            {buttonValue}
            <img id='arrow-svg' src={arrowDown} alt="arrow-svg" />
        </button>
      {isListVisible && (
        <ul className='list-options'>
          {options.map((option) => (
            <li className='option' key={option.value} onClick={() => handleSelectChange(option.value, option.label)}>{option.label}</li>
          ))}
        </ul>
      )}
    </div>
  )
}
