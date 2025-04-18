
import React from 'react';
import { Card } from '@/components/ui/card';
import CardContent from './CardContent';

const AppCards: React.FC = () => {
  return (
    <div className="relative w-full h-full">
      {/* Communication Blueprint Card */}
      <div className="absolute -top-8 -right-8 z-90">
        <Card className="bg-purple-600 rounded-xl w-[180px] h-[180px] text-white shadow-lg opacity-0 animate-fadeIn" style={{ animationDelay: '0.3s' }}>
          <CardContent type="mood-drop" />
        </Card>
      </div>
      
      {/* Green Card */}
      <div className="absolute top-16 -left-6 z-10">
        <Card className="bg-lime-400 rounded-xl w-[180px] h-[180px] shadow-lg opacity-0 animate-fadeIn" style={{ animationDelay: '0.3s' }}>
          <CardContent type="fundamentals" />
        </Card>
      </div>
      
      {/* Yellow Card */}
      <div className="absolute top-24 left-32 z-20">
        <Card className="bg-yellow-400 rounded-xl w-[180px] h-[180px] shadow-lg opacity-0 animate-fadeIn" style={{ animationDelay: '0.3s' }}>
          <CardContent type="storytelling" />
        </Card>
      </div>
      
      {/* Red Card */}
      <div className="absolute top-4 left-48 z-30">
        <Card className="bg-red-400 rounded-xl w-[180px] h-[180px] shadow-lg opacity-0 animate-fadeIn" style={{ animationDelay: '0.3s' }}>
          <CardContent type="body-language" />
        </Card>
      </div>
      
      {/* Purple Talk Card */}
      <div className="absolute top-40 left-0 z-40">
        <Card className="bg-purple-400 rounded-xl w-[180px] h-[180px] shadow-lg opacity-0 animate-fadeIn" style={{ animationDelay: '0.3s' }}>
          <CardContent type="conversation" />
        </Card>
      </div>
      
      {/* Teal Card */}
      <div className="absolute top-56 left-36 z-20">
        <Card className="bg-teal-400 rounded-xl w-[180px] h-[180px] shadow-lg opacity-0 animate-fadeIn" style={{ animationDelay: '0.3s' }}>
          <CardContent type="leadership" />
        </Card>
      </div>
    </div>
  );
};

export default AppCards;
