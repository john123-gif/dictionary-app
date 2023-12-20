import React from 'react';
import '../assets/styles/Loading.scss';

const Loading : React.FC = () => {
  return (
    <div className="loader">
        <div className="circle1"></div>
        <div className="circle1"></div>
        <div className="circle1"></div>
        <div className="circle1"></div>
        <div className="circle1"></div>
    </div>

  )
}

export default Loading