
import React, { useState } from 'react';
import EmojiRating from './EmojiRating';
import { RatingOption } from '../types';

const FeedbackForm: React.FC = () => {
  const [selectedRating, setSelectedRating] = useState<RatingOption | null>(null);
  const [comment, setComment] = useState('');
  const [name, setName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleRatingSelect = (option: RatingOption) => {
    setSelectedRating(option);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedRating) return;

    setIsSubmitting(true);
    
    // Simulate a luxury "processing" delay for aesthetic quality
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 2000); 
  };

  if (isSubmitted) {
    return (
      <div 
        className="glass-panel p-10 rounded-3xl text-center max-w-xl mx-auto border-amber-200/20 shadow-2xl animate-in fade-in zoom-in duration-700"
        style={{ 
          backgroundColor: selectedRating ? selectedRating.glowColor.replace('0.2', '0.08') : 'rgba(255, 255, 255, 0.03)'
        }}
      >
        <div className="text-6xl mb-6">✨</div>
        <h2 className="font-serif text-3xl mb-4 gold-shimmer font-bold">Thank You</h2>
        <p className="text-neutral-400 leading-relaxed mb-8 italic">
          "Your feedback has been received with the utmost care. We appreciate your contribution to our pursuit of excellence."
        </p>
        <button
          onClick={() => {
            setIsSubmitted(false);
            setComment('');
            setName('');
            setSelectedRating(null);
          }}
          className="px-8 py-3 rounded-full border border-amber-500/30 text-amber-500 hover:bg-amber-500/10 transition-all uppercase tracking-[0.2em] text-xs font-semibold"
        >
          Return to Portal
        </button>
      </div>
    );
  }

  return (
    <div 
      className="glass-panel p-8 md:p-12 rounded-[2.5rem] max-w-2xl mx-auto shadow-[0_20px_50px_rgba(0,0,0,0.5)] border-white/5 relative overflow-hidden transition-colors duration-1000 ease-in-out"
      style={{ 
        backgroundColor: selectedRating ? selectedRating.glowColor.replace('0.2', '0.08') : 'rgba(255, 255, 255, 0.03)',
        borderColor: selectedRating ? selectedRating.glowColor.replace('0.2', '0.15') : 'rgba(255, 255, 255, 0.1)'
      }}
    >
      {/* Decorative accent */}
      <div 
        className="absolute top-0 left-0 w-full h-1 transition-all duration-1000 ease-in-out opacity-30" 
        style={{ 
          background: selectedRating 
            ? `linear-gradient(90deg, transparent, ${selectedRating.glowColor.replace('0.2', '1')}, transparent)`
            : 'linear-gradient(90deg, transparent, rgba(245, 158, 11, 0.5), transparent)' 
        }}
      />
      
      <header className="text-center mb-10">
        <h1 className="font-serif text-4xl md:text-5xl mb-3 tracking-tight">Your <span className="gold-shimmer font-bold italic">Impression</span></h1>
        <p className="text-neutral-500 uppercase tracking-[0.3em] text-[10px] font-medium">Elevating your experience, one detail at a time</p>
      </header>

      <form onSubmit={handleSubmit} className="space-y-8">
        <div>
          <label className="block text-center text-xs uppercase tracking-widest text-neutral-400 mb-2 font-medium">
            How would you rate your experience?
          </label>
          <EmojiRating selectedRating={selectedRating?.value || null} onSelect={handleRatingSelect} />
        </div>

        <div className={`transition-all duration-700 ${selectedRating ? 'opacity-100 translate-y-0' : 'opacity-20 pointer-events-none translate-y-4'}`}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="space-y-2">
              <label className="block text-[10px] uppercase tracking-widest text-neutral-500 ml-1">Your Name (Optional)</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="E.g. Alexander Sterling"
                className="w-full bg-black/60 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-amber-500/50 transition-colors placeholder:text-neutral-700 text-neutral-200"
              />
            </div>
            <div className="space-y-2">
              <label className="block text-[10px] uppercase tracking-widest text-neutral-500 ml-1">Experience Focus</label>
              <div className="relative group">
                <select className="w-full bg-black/60 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-amber-500/50 transition-all text-neutral-300 appearance-none cursor-pointer hover:bg-black/80">
                  <option className="bg-[#0a0a0a]">Overall Hospitality</option>
                  <option className="bg-[#0a0a0a]">Service Speed</option>
                  <option className="bg-[#0a0a0a]">Ambiance & Decor</option>
                  <option className="bg-[#0a0a0a]">Product Quality</option>
                  <option className="bg-[#0a0a0a]">Concierge Service</option>
                  <option className="bg-[#0a0a0a]">In-Room Amenities</option>
                  <option className="bg-[#0a0a0a]">Dining Excellence</option>
                </select>
                <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-amber-500/70 group-hover:text-amber-500 transition-colors">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                    <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <label className="block text-[10px] uppercase tracking-widest text-neutral-500 ml-1">Personal Reflections</label>
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Tell us about the moments that defined your journey..."
              className="w-full bg-black/60 border border-white/10 rounded-2xl px-5 py-4 text-sm focus:outline-none focus:border-amber-500/50 transition-colors min-h-[120px] resize-none placeholder:text-neutral-700 text-neutral-200"
            />
          </div>

          <div className="mt-10 flex flex-col items-center">
            <button
              disabled={!selectedRating || isSubmitting}
              type="submit"
              className={`
                group relative px-12 py-4 rounded-full overflow-hidden transition-all duration-700
                ${isSubmitting ? 'cursor-wait animate-luxury-pulse' : 'hover:scale-105 active:scale-95'}
                ${selectedRating ? 'bg-white text-black shadow-xl shadow-white/5' : 'bg-neutral-800 text-neutral-600'}
              `}
            >
              <div className="relative z-20 flex items-center justify-center font-bold uppercase tracking-[0.2em] text-xs transition-colors duration-500">
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <svg className="animate-spin h-3 w-3 text-black/60" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Archiving...
                  </span>
                ) : (
                  'Share Impression'
                )}
              </div>
              
              {/* Submission Shimmer Effect */}
              {isSubmitting && (
                <div className="absolute inset-0 z-10 w-full h-full bg-gradient-to-r from-transparent via-amber-200/40 to-transparent -translate-x-full animate-shimmer-sweep" />
              )}

              {/* Refined Hover Gold Shimmer Overlay */}
              {!isSubmitting && selectedRating && (
                <div className="absolute inset-0 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none animate-gold-drift"
                     style={{
                       background: 'linear-gradient(135deg, rgba(212,175,55,0) 0%, rgba(212,175,55,0.08) 25%, rgba(249,226,157,0.15) 50%, rgba(212,175,55,0.08) 75%, rgba(212,175,55,0) 100%)'
                     }} 
                />
              )}

              {/* Base Hover Glow Effect */}
              {!isSubmitting && selectedRating && (
                <div className="absolute inset-0 z-0 bg-gradient-to-r from-amber-50/50 via-white to-amber-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-md" />
              )}
            </button>
            <p className="text-[9px] text-neutral-600 mt-4 uppercase tracking-widest italic">Confidential & Exclusively Managed</p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default FeedbackForm;
