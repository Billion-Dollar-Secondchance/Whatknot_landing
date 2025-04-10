
import React from 'react';

interface LogoProps {
  variant?: 'white' | 'black';
}

const Logo: React.FC<LogoProps> = ({ variant }) => {
  return (
    <div className="flex items-center gap-1">
      <div className={`h-8 w-8 rounded-full ${variant === 'white' ? 'bg-white' : 'bg-black'}`}></div>
      <span className={`text-2xl font-bold ${variant === 'white' ? 'text-white' : 'text-black'}`}>WhatKnot</span>
    </div>
  );
};

export default Logo;
