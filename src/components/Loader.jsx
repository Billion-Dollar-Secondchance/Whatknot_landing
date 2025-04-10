
import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import Logo from './Logo';

const Loader = () => {
  const [animationStage, setAnimationStage] = useState(1);
  const [visible, setVisible] = useState(true);
  
  useEffect(() => {
    // Stage 1: Initial logo display (static)
    const stageOneTimer = setTimeout(() => {
      setAnimationStage(2);
    }, 1000);
    
    // Stage 2: Pulse effect and slight scale up
    const stageTwoTimer = setTimeout(() => {
      setAnimationStage(3);
    }, 2000);
    
    // Stage 3: Final fade out to reveal website
    const stageThreeTimer = setTimeout(() => {
      setVisible(false);
    }, 2800);
    
    return () => {
      clearTimeout(stageOneTimer);
      clearTimeout(stageTwoTimer);
      clearTimeout(stageThreeTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div 
      className={cn(
    "fixed inset-0 z-50 flex flex-col items-center justify-center",
    "h-screen w-screen",
    "bg-gradient-to-br from-black via-gray-500 to-white",
    animationStage === 3 && "animate-fadeOut"
  )}
   style={{
  background: "linear-gradient(to bottom right, #0f0f0f, #1a1a1a, #000000)"
  }}
      // className={cn(
      //   "fixed inset-0 z-50 flex flex-col items-center justify-center",
      //   "bg-gradient-to-br from-gray-950 via-gray-900 to-black",
      //   animationStage === 3 && "animate-fadeOut"
      // )}
    >
      <div 
        className={cn(
          "relative flex items-center justify-center",
          animationStage >= 2 && "transition-transform duration-500",
          animationStage === 2 && "scale-110",
          animationStage === 3 && "scale-125 opacity-0 transition-all duration-300"
        )}
      >
        <div className="relative">
          <Logo variant="white" />
          
          {/* Pulse effect rings */}
          {animationStage >= 2 && (
            <div className="absolute inset-0 flex items-center justify-center">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="absolute rounded-full border border-white opacity-0"
                  style={{
                    width: '120%',
                    height: '120%',
                    animation: `ripple 1.5s linear infinite ${i * 0.2}s`
                  }}
                />
              ))}
            </div>
          )}
        </div>
      </div>
      
      {/* App tagline */}
      {/* <div 
        className={cn(
          "mt-8 text-white text-center",
          animationStage === 3 && "opacity-0 transition-opacity duration-300"
        )}
      >
        <p className="text-lg font-light tracking-wide">
          Your Relationship's New Best Friend
        </p>
      </div> */}
    </div>
  );
};

export default Loader;
