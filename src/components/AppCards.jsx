
import React from 'react';
import { Card } from '@/components/ui/card';
import CardContent from './CardContent';

const AppCards = () => {
  return (
    <div className="relative animate-float">
      {/* Communication Blueprint Card */}
      <div className="absolute -top-8 -right-8 z-30">
        <Card className="bg-purple-600 rounded-xl w-[180px] h-[180px] text-white shadow-lg opacity-0 animate-fadeIn" style={{ animationDelay: '0.05s' }}>
          <CardContent type="shared-playlist" />
        </Card>
      </div>
      
      {/* Green Card */}
      <div className="absolute top-36 -left-6 z-10">
        <Card className="bg-lime-400 rounded-xl w-[180px] h-[180px] shadow-lg opacity-0 animate-fadeIn" style={{ animationDelay: '0.15s' }}>
          <CardContent type="love-bingo" />
        </Card>
      </div>
      
      {/* Yellow Card */}
      <div className="absolute top-24 left-32 z-20">
        <Card className="bg-yellow-400 rounded-xl w-[180px] h-[180px] shadow-lg opacity-0 animate-fadeIn" style={{ animationDelay: '0.25s' }}>
          <CardContent type="vibe-check" />
        </Card>
      </div>
      
      {/* Red Card */}
      <div className="absolute top-4 left-48 z-30">
        <Card className="bg-red-400 rounded-xl w-[180px] h-[180px] shadow-lg opacity-0 animate-fadeIn" style={{ animationDelay: '0.35s' }}>
          <CardContent type="time-capsule" />
        </Card>
      </div>
      
      {/* Purple Talk Card */}
      <div className="absolute top-40 left-0 z-40">
        <Card className="bg-purple-400 rounded-xl w-[180px] h-[180px] shadow-lg opacity-0 animate-fadeIn" style={{ animationDelay: '0.45s' }}>
          <CardContent type="connection-deep-dive" />
        </Card>
      </div>
      
      {/* Teal Card */}
      <div className="absolute top-56 left-36 z-50">
        <Card className="bg-teal-400 rounded-xl w-[180px] h-[180px] shadow-lg opacity-0 animate-fadeIn" style={{ animationDelay: '0.55s' }}>
          <CardContent type="mood-drop" />
        </Card>
      </div>
        
    </div>
  );
};

export default AppCards;
