
import React from 'react';
import {  Instagram } from 'lucide-react';
import Logo from '@/components/Logo';
import Linkedin from '../img/socialicons/linkedin-icon.svg'; 
import Twitter from '../img/socialicons/twitter-icon.svg'; 
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-whatknot-dark-purple py-16 mt-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-row items-center space-y-8" style={{gap:20}} >
          <div className="text-white">
            <Logo variant="white" />
          </div>

          {/* Logo and Social Icons in a Row */}
          <div className="flex space-x-8" style={{gap:20}} >
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition-colors">
            
                 <img src={Linkedin} alt="Logo" style={{ height: '24px', width: '24px' }} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition-colors">
              <Instagram size={24} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition-colors">
        
                      <img src={Twitter} alt="Logo" style={{ height: '24px', width: '24px' }} />
              
            </a>
          </div>
{/* <div className="text-sm text-white/80" style={{justifyContent:'center'}} >
            &copy; {currentYear} WhatKnot All Rights Reserved
          </div> */}
         
        </div>
         
      </div>
    </footer>
  );
};

export default Footer;
