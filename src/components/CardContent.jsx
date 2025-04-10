
import React from 'react';

const CardContent = ({ type }) => {
  const renderContent = () => {
    switch (type) {
      case 'communication':
        return (
          <>
            <div className="flex justify-between items-start">
              <div className="w-8 h-8 rounded-full bg-yellow-400 overflow-hidden">
                <img src="/lovable-uploads/960481bc-f30f-4b97-8c3c-00e13618f6e3.png" alt="Profile" className="w-full h-full object-cover" />
              </div>
            </div>
            <p className="text-xs font-medium text-white">
              Communication Mastery Blueprint
            </p>
          </>
        );
      case 'fundamentals':
        return (
          <>
            <div className="flex justify-center mb-2">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <span className="text-2xl">🧠</span>
              </div>
            </div>
            <p className="text-xs font-medium text-black">
              The Fundamentals: Overthinking Your Approach
            </p>
          </>
        );
      case 'storytelling':
        return (
          <>
            <div className="flex justify-center mb-2">
              <div className="w-12 h-12 bg-black/10 rounded-full flex items-center justify-center">
                <span className="text-2xl">📚</span>
              </div>
            </div>
            <p className="text-xs font-medium text-black">
              The Art of Storytelling
            </p>
          </>
        );
      case 'body-language':
        return (
          <>
            <div className="flex justify-center mb-2">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <span className="text-2xl">👋</span>
              </div>
            </div>
            <p className="text-xs font-medium text-black">
              Body Language: How You Speak Without Words
            </p>
          </>
        );
      case 'conversation':
        return (
          <>
            <div className="flex justify-center mb-2">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <span className="text-2xl">💬</span>
              </div>
            </div>
            <p className="text-xs font-medium text-white">
              How To Start A Conversation With Anyone
            </p>
          </>
        );
      case 'leadership':
        return (
          <>
            <div className="flex justify-center mb-2">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <span className="text-2xl">👑</span>
              </div>
            </div>
            <p className="text-xs font-medium text-black">
              How A Leader Communicates
            </p>
          </>
        );
      default:
        return null;
    }
  };

  return <div className="p-4 h-full flex flex-col justify-between">{renderContent()}</div>;
};

export default CardContent;
