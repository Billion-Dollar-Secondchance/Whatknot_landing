
import React from 'react';

interface CardContentProps {
  type: 'communication' | 'fundamentals' | 'storytelling' | 'body-language' | 'conversation' | 'leadership'|'mood-drop'|'love-bingo'|'vibe-check'|'time-capsule'|'shared-playlist'|'connection-deep-dive';
}

const CardContent: React.FC<CardContentProps> = ({ type }) => {
 const renderContent = () => {
  switch (type) {
    case 'mood-drop':
      return (
        <>
          <div className="flex justify-between items-start">
            <div className="w-8 h-8 rounded-full bg-pink-300 overflow-hidden">
              <img src="/whatknot-assets/mood-drop.png" alt="Mood Drop" className="w-full h-full object-cover" />
            </div>
          </div>
          <p className="text-xs font-medium text-white">
            Today’s Mystery Mood Drop 💌
          </p>
        </>
      );
    case 'love-bingo':
      return (
        <>
          <div className="flex justify-center mb-2">
            <div className="w-12 h-12 bg-purple-200 rounded-full flex items-center justify-center">
              <span className="text-2xl">🎮</span>
            </div>
          </div>
          <p className="text-xs font-medium text-black">
            Love Bingo: Complete a goofy mission together
          </p>
        </>
      );
    case 'time-capsule':
      return (
        <>
          <div className="flex justify-center mb-2">
            <div className="w-12 h-12 bg-blue-200 rounded-full flex items-center justify-center">
              <span className="text-2xl">⏳</span>
            </div>
          </div>
          <p className="text-xs font-medium text-black">
            “This Will Make Sense in 30 Days” Time Capsule
          </p>
        </>
      );
    case 'vibe-check':
      return (
        <>
          <div className="flex justify-center mb-2">
            <div className="w-12 h-12 bg-green-200 rounded-full flex items-center justify-center">
              <span className="text-2xl">🌀</span>
            </div>
          </div>
          <p className="text-xs font-medium text-black">
            Vibe Check: Guess how they’re really feeling
          </p>
        </>
      );
    case 'shared-playlist':
      return (
        <>
          <div className="flex justify-center mb-2">
            <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
              <span className="text-2xl">🎧</span>
            </div>
          </div>
          <p className="text-xs font-medium text-black">
            Add a song to your shared vibe playlist 🎶
          </p>
        </>
      );
    case 'connection-deep-dive':
      return (
        <>
          <div className="flex justify-center mb-2">
            <div className="w-12 h-12 bg-rose-200 rounded-full flex items-center justify-center">
              <span className="text-2xl">💞</span>
            </div>
          </div>
          <p className="text-xs font-medium text-black">
            Dive Deeper: Unlock a connection-level question
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
