import React,{useContext} from 'react';
import moon from '../assets/images/icon-moon.svg';
import purpleMoon from  '../assets/images/icon-moon-purple.svg'
import { ThemeContext } from '../ThemeContext';

const LightAndDark: React.FC= () => {

    const context = useContext(ThemeContext)
    
    const {toggle,setToggle} = context;
  
    const handleToggle=()=>{
             setToggle(!toggle)        
    }

  return (
    <div className='inline'>
     <div  className='rectangle'></div>
    <div className={!toggle?'toggle':'toggle active color'} onClick={handleToggle}>
        <i className='indicator'></i>
    </div>
    {!toggle?<img src={moon} alt='moon'/>:<img src={purpleMoon} alt='moon'/>}
  </div>
  )
}

export default LightAndDark