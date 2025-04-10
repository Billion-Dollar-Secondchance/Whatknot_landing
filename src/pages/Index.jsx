
import React, { useRef } from 'react';
import { Button } from '@/components/ui/button';
import Logo from '@/components/Logo';
import WaitlistForm from '@/components/WaitlistForm';
import AppCards from '@/components/AppCards';
import Footer from '@/components/Footer';

const Index = () => {
  const waitlistRef = useRef(null);
  
  const scrollToWaitlist = () => {
    waitlistRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen whatknot-gradient">
      <div className="container mx-auto px-4 py-6">
        <header className="flex justify-between items-center">
          <Logo />
        </header>

        {/* <main className="mt-20 md:mt-32 flex flex-col md:flex-row"> */}
       <main className="mt-5 md:mt-16 flex flex-col md:flex-row md:gap-12 gap-20">

          <div className="md:w-1/2 space-y-6 mb-12 md:mb-0">
            <h1 className="text-5xl md:text-6xl font-display font-bold leading-tight">
              Your Relationship's <br/>New Best Friend
            </h1>
            
            <p className="text-xl font-cursive font-normal opacity-90">
              Not a tracker. Not therapy. Just a cozy little app made for the two of you.
            </p>
            
            <div ref={waitlistRef} className="p-6 bg-black/10 backdrop-blur-sm rounded-3xl max-w-md" style={{marginTop:40}} >
              <WaitlistForm />
            </div>
          </div>
          
          <div className="md:w-1/2 relative md:h-[600px] h-[500px]"  >
            <div className="absolute inset-0 md:right-0 w-full md:w-[500px]">
              <AppCards />
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Index;
