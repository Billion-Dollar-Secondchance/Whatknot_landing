
import React from 'react';
import logo from '../img/logo/logo.svg'; 
import logowhite from '../img/logo/logo_1.svg'; 
const Logo = ({ variant }) => {
  return (
    <div className="flex items-center gap-1">
     {variant === 'white' ? 
      <img src={logowhite} alt="Logo" style={{ height: '200px', width: '200px' }} />:
     <img src={logo} alt="Logo" style={{ height: '200px', width: '200px' }} /> 
     }
     
      {/* <div className={`h-8 w-8 rounded-full ${variant === 'white' ? 'bg-white' : 'bg-black'}`}></div> */}
      {/* <span className={`text-2xl font-bold ${variant === 'white' ? 'text-white' : 'text-black'}`}>WhatKnot</span> */}
    </div>
  );
};

export default Logo;

