
export enum SentimentMood {
  TERRIBLE = 'terrible',
  POOR = 'poor',
  NEUTRAL = 'neutral',
  GOOD = 'good',
  EXCELLENT = 'excellent'
}

export interface FeedbackData {
  rating: number;
  comment: string;
  mood: SentimentMood;
  userName?: string;
}

export interface RatingOption {
  value: number;
  emoji: string;
  label: string;
  mood: SentimentMood;
  color: string;
  glowColor: string;
}
