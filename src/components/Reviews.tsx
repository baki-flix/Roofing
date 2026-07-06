import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, MessageSquare, Plus, CheckCircle, X, ShieldCheck } from 'lucide-react';
import { TestimonialItem } from '../types';

export default function Reviews() {
  const [showForm, setShowForm] = useState(false);
  const [rating, setRating] = useState(5);
  const [author, setAuthor] = useState('');
  const [role, setRole] = useState('');
  const [content, setContent] = useState('');
  const [reviews, setReviews] = useState<TestimonialItem[]>([]);
  const [successMessage, setSuccessMessage] = useState('');

  const defaultReviews: TestimonialItem[] = [
    {
      id: 'r1',
      author: 'Marcus & Helena Vance',
      role: 'Pacific Heights Penthouse Owner',
      rating: 5,
      content: 'Aura Design Studio completely transformed our outdated penthouse into a masterwork of natural light. The travertine materials and custom lighting are sublime. Their construction custody took away all our anxiety.',
      date: '2026-05-12',
    },
    {
      id: 'r2',
      author: 'Elena Rostova',
      role: 'Michelin Restaurant Director',
      rating: 5,
      content: 'Bespoke, precise, and highly professional. Aura custom-designed our host reception bar and velvet lounge seats. Customers praise the acoustic cedar ceilings and atmospheric dimmers daily.',
      date: '2026-04-03',
    },
    {
      id: 'r3',
      author: 'David Sterling',
      role: 'Tiburon Coastal Retreat',
      rating: 5,
      content: 'An incredible dialogue between glass and the Pacific waves. The seamless indoor-outdoor terrace flooring alignment they engineered is flawless. Highly recommend their turnkey millwork curation.',
      date: '2026-02-18',
    },
  ];

  useEffect(() => {
    const stored = localStorage.getItem('aura_customer_reviews');
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        setReviews([...defaultReviews, ...parsed]);
      } catch (e) {
        setReviews(defaultReviews);
      }
    } else {
      setReviews(defaultReviews);
    }
  }, []);

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!author.trim() || !content.trim()) return;

    const newReview: TestimonialItem = {
      id: 'custom-' + Date.now(),
      author: author.trim(),
      role: role.trim() || 'Verified Homeowner',
      rating,
      content: content.trim(),
      date: new Date().toISOString().split('T')[0],
      isCustom: true,
    };

    const updatedCustomReviews = [...reviews.filter(r => r.isCustom), newReview];
    localStorage.setItem('aura_customer_reviews', JSON.stringify(updatedCustomReviews));
    setReviews([...reviews, newReview]);

    // Reset Form
    setAuthor('');
    setRole('');
    setContent('');
    setRating(5);
    setShowForm(false);
    
    setSuccessMessage('Thank you! Your verified review has been posted.');
    setTimeout(() => setSuccessMessage(''), 4000);
  };

  const renderStars = (count: number) => {
    return (
      <div className="flex space-x-0.5">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`h-4 w-4 ${
              i < count ? 'fill-amber-500 text-amber-500' : 'text-slate-200 dark:text-slate-800'
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <section
      id="reviews"
      className="py-24 bg-slate-50 dark:bg-slate-900/40 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="font-sans text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400">
            Client Testimonials
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl tracking-tight text-slate-900 dark:text-white">
            What Our Clients Experience
          </h2>
          <div className="h-1 w-12 bg-blue-600 dark:bg-blue-400 rounded mx-auto" />
          <p className="font-sans text-sm text-slate-500 dark:text-slate-400 font-light max-w-2xl mx-auto leading-relaxed">
            Read certified feedback from homeowners, executive business directors, and luxury hoteliers we have collaborated with.
          </p>
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Rating breakdown card */}
          <div className="lg:col-span-4 bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-150 dark:border-slate-800 shadow-lg space-y-6" id="reviews-summary-card">
            <div className="flex items-center space-x-2 bg-blue-50 dark:bg-blue-950/30 text-blue-700 dark:text-blue-400 px-3.5 py-1.5 rounded-full border border-blue-100 dark:border-blue-900/30 w-fit">
              <ShieldCheck className="h-4 w-4" />
              <span className="font-sans text-[11px] font-bold uppercase tracking-wider">
                Google Business Verified
              </span>
            </div>

            <div className="flex items-baseline space-x-3">
              <span className="font-display font-black text-5xl sm:text-6xl text-slate-900 dark:text-white">4.9</span>
              <div className="space-y-1">
                <div className="flex text-amber-500">
                  <Star className="h-5 w-5 fill-amber-500 text-amber-500" />
                  <Star className="h-5 w-5 fill-amber-500 text-amber-500" />
                  <Star className="h-5 w-5 fill-amber-500 text-amber-500" />
                  <Star className="h-5 w-5 fill-amber-500 text-amber-500" />
                  <Star className="h-5 w-5 fill-amber-500 text-amber-500" style={{ clipPath: 'inset(0 15% 0 0)' }} />
                </div>
                <p className="font-sans text-xs text-slate-500 dark:text-slate-400">Based on 124 reviews</p>
              </div>
            </div>

            {/* Bars */}
            <div className="space-y-3 pt-2">
              {[
                { star: 5, pct: '94%' },
                { star: 4, pct: '4%' },
                { star: 3, pct: '2%' },
                { star: 2, pct: '0%' },
                { star: 1, pct: '0%' },
              ].map((row) => (
                <div key={row.star} className="flex items-center text-xs text-slate-500 dark:text-slate-400 space-x-3">
                  <span className="w-3 font-semibold">{row.star}</span>
                  <div className="flex-1 h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                    <div className="h-full bg-amber-500 rounded-full" style={{ width: row.pct }} />
                  </div>
                  <span className="w-8 text-right font-medium">{row.pct}</span>
                </div>
              ))}
            </div>

            {/* Call to Action to leave review */}
            <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80">
              <button
                onClick={() => setShowForm(true)}
                className="w-full flex items-center justify-center space-x-2 py-3 px-4 bg-slate-900 hover:bg-blue-600 text-white dark:bg-slate-800 dark:hover:bg-blue-600 font-sans font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md active:scale-95 cursor-pointer"
                id="write-review-btn"
              >
                <Plus className="h-4 w-4" />
                <span>Leave a Review</span>
              </button>
            </div>
          </div>

          {/* Right Column: Testimonials feed */}
          <div className="lg:col-span-8 space-y-6" id="reviews-feed">
            {successMessage && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="p-4 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-2xl flex items-center space-x-3"
              >
                <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0" />
                <span className="font-sans text-sm font-semibold">{successMessage}</span>
              </motion.div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {reviews.map((rev) => (
                <div
                  key={rev.id}
                  className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-150 dark:border-slate-800 shadow-sm hover:shadow-md hover:border-slate-200 dark:hover:border-slate-750 transition-all duration-300 flex flex-col justify-between"
                  id={`review-${rev.id}`}
                >
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      {renderStars(rev.rating)}
                      <span className="font-sans text-[10px] font-bold text-slate-400 uppercase tracking-wide">
                        {rev.date}
                      </span>
                    </div>
                    <p className="font-sans text-xs sm:text-sm text-slate-600 dark:text-slate-350 leading-relaxed font-light italic">
                      "{rev.content}"
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-50 dark:border-slate-850 flex items-center justify-between">
                    <div>
                      <h4 className="font-display font-extrabold text-sm text-slate-800 dark:text-slate-200">
                        {rev.author}
                      </h4>
                      <p className="font-sans text-[10px] text-slate-400 uppercase tracking-widest mt-0.5">
                        {rev.role}
                      </p>
                    </div>
                    <span className="font-sans text-[10px] text-emerald-600 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/10 flex items-center space-x-1 font-bold tracking-wide">
                      <CheckCircle className="h-2.5 w-2.5" />
                      <span>VERIFIED</span>
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Review Modal Form */}
      <AnimatePresence>
        {showForm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-sm flex items-center justify-center p-4"
            id="review-form-modal"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-white dark:bg-slate-900 rounded-3xl w-full max-w-md p-8 shadow-2xl border border-slate-100 dark:border-slate-800 space-y-6 relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close icon */}
              <button
                onClick={() => setShowForm(false)}
                className="absolute top-5 right-5 p-2 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-500 dark:text-slate-400 rounded-full cursor-pointer focus:outline-none"
              >
                <X className="h-4 w-4" />
              </button>

              <div className="space-y-1.5">
                <h3 className="font-display font-extrabold text-xl text-slate-900 dark:text-white">
                  Write a Client Review
                </h3>
                <p className="font-sans text-xs text-slate-500">
                  Share your spatial experience with Aura Design Studio.
                </p>
              </div>

              <form onSubmit={handleSubmitReview} className="space-y-4">
                {/* Stars widget */}
                <div className="space-y-1.5">
                  <label className="font-sans text-xs font-semibold text-slate-500 uppercase tracking-wider">
                    Your Rating
                  </label>
                  <div className="flex space-x-1.5">
                    {[1, 2, 3, 4, 5].map((starValue) => (
                      <button
                        key={starValue}
                        type="button"
                        onClick={() => setRating(starValue)}
                        className="cursor-pointer focus:outline-none"
                      >
                        <Star
                          className={`h-7 w-7 transition-colors ${
                            starValue <= rating
                              ? 'fill-amber-500 text-amber-500'
                              : 'text-slate-200 dark:text-slate-800'
                          }`}
                        />
                      </button>
                    ))}
                  </div>
                </div>

                {/* Author Name */}
                <div className="space-y-1.5">
                  <label htmlFor="author-name" className="font-sans text-xs font-semibold text-slate-500 uppercase tracking-wider">
                    Full Name / Family Name
                  </label>
                  <input
                    id="author-name"
                    type="text"
                    required
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    placeholder="e.g. Mr. & Mrs. Henderson"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-55/30 dark:bg-slate-850 text-slate-900 dark:text-white font-sans text-sm focus:outline-none focus:ring-2 focus:ring-blue-600/30"
                  />
                </div>

                {/* Client Project Role */}
                <div className="space-y-1.5">
                  <label htmlFor="project-role" className="font-sans text-xs font-semibold text-slate-500 uppercase tracking-wider">
                    Project Location / Description
                  </label>
                  <input
                    id="project-role"
                    type="text"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    placeholder="e.g. Marin County Villa Owner"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-55/30 dark:bg-slate-850 text-slate-900 dark:text-white font-sans text-sm focus:outline-none focus:ring-2 focus:ring-blue-600/30"
                  />
                </div>

                {/* Review Content */}
                <div className="space-y-1.5">
                  <label htmlFor="review-content" className="font-sans text-xs font-semibold text-slate-500 uppercase tracking-wider">
                    Review Description
                  </label>
                  <textarea
                    id="review-content"
                    required
                    rows={4}
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    placeholder="Tell us about the craftsmanship, coordination, and your overall spatial satisfaction..."
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-55/30 dark:bg-slate-850 text-slate-900 dark:text-white font-sans text-sm focus:outline-none focus:ring-2 focus:ring-blue-600/30 resize-none"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="w-full py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-sans text-xs font-bold uppercase tracking-wider rounded-xl transition-all shadow-md active:scale-95 cursor-pointer mt-2"
                >
                  Post Review
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
