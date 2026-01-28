
import { RatingOption, SentimentMood } from './types';

export const RATING_OPTIONS: RatingOption[] = [
  { 
    value: 1, 
    emoji: '😠', 
    label: 'Disappointing', 
    mood: SentimentMood.TERRIBLE, 
    color: 'text-rose-500',
    glowColor: 'rgba(244, 63, 94, 0.2)'
  },
  { 
    value: 2, 
    emoji: '🙁', 
    label: 'Poor', 
    mood: SentimentMood.POOR, 
    color: 'text-orange-400',
    glowColor: 'rgba(251, 146, 60, 0.2)'
  },
  { 
    value: 3, 
    emoji: '😐', 
    label: 'Neutral', 
    mood: SentimentMood.NEUTRAL, 
    color: 'text-amber-400',
    glowColor: 'rgba(251, 191, 36, 0.2)'
  },
  { 
    value: 4, 
    emoji: '🙂', 
    label: 'Good', 
    mood: SentimentMood.GOOD, 
    color: 'text-lime-400',
    glowColor: 'rgba(163, 230, 53, 0.2)'
  },
  { 
    value: 5, 
    emoji: '😍', 
    label: 'Exquisite', 
    mood: SentimentMood.EXCELLENT, 
    color: 'text-emerald-400',
    glowColor: 'rgba(52, 211, 153, 0.2)'
  }
];
