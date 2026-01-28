import React from 'react';
import { RATING_OPTIONS } from '../constants';
import { RatingOption } from '../types';

interface EmojiRatingProps {
  selectedRating: number | null;
  onSelect: (rating: RatingOption) => void;
}

const EmojiRating: React.FC<EmojiRatingProps> = ({ selectedRating, onSelect }) => {
  return (
    <div className="flex justify-between items-center w-full max-w-md mx-auto my-8">
      {RATING_OPTIONS.map((option) => {
        const isSelected = selectedRating === option.value;
        return (
          <button
            key={option.value}
            onClick={() => onSelect(option)}
            className={`flex flex-col items-center transition-all duration-700 group relative
              ${isSelected ? 'scale-125 z-10' : 'hover:scale-110 grayscale-[0.5] hover:grayscale-0 opacity-60 hover:opacity-100'}
            `}
            type="button"
          >
            <div 
              className={`text-4xl md:text-5xl mb-2 transition-all duration-700
                ${isSelected ? 'animate-emoji-pulse' : 'group-hover:translate-y-[-6px]'}
              `}
              style={{
                filter: isSelected ? `drop-shadow(0 0 15px ${option.glowColor})` : 'none'
              }}
            >
              {option.emoji}
            </div>
            <span className={`text-[10px] uppercase tracking-widest font-semibold transition-all duration-500
              ${isSelected ? option.color : 'text-neutral-500 group-hover:text-neutral-300'}
            `}>
              {option.label}
            </span>
            
            {isSelected && (
              <div 
                className="absolute -bottom-3 w-1.5 h-1.5 rounded-full bg-current shadow-[0_0_8px_currentColor] transition-all duration-700"
                style={{ backgroundColor: 'currentColor' }}
              />
            )}
          </button>
        );
      })}
    </div>
  );
};

export default EmojiRating;