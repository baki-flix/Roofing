import React from 'react';
import { motion } from 'motion/react';
import { Phone, MessageSquare, Compass, ChevronDown } from 'lucide-react';

export default function Hero() {
  const handleScrollToNext = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const element = document.querySelector('#about');
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      id="hero"
      className="relative h-screen flex items-center justify-center overflow-hidden bg-slate-950"
    >
      {/* Background Video with Slow Zoom Animation */}
      <motion.div
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.65 }}
        transition={{ duration: 1.8, ease: 'easeOut' }}
        className="absolute inset-0 z-0 overflow-hidden"
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source
            src="https://res.cloudinary.com/k12ljcah/video/upload/v1783345765/4baedf596e99dc71cbae37b4142d37c2_ymu46a.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </motion.div>

      {/* Luxury Vignette and Gradients */}
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-slate-950 via-slate-950/40 to-slate-950/20" />
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-slate-950/80 via-transparent to-slate-950/20" />

      {/* Content Container */}
      <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-6"
        >
          {/* Subtle Location Tag */}
          <div className="inline-flex items-center space-x-2 bg-white/10 dark:bg-white/5 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20">
            <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
            <span className="font-sans text-xs font-semibold tracking-wider text-white uppercase">
              San Francisco, California
            </span>
          </div>

          {/* Main Display Headline */}
          <h1 className="font-display font-extrabold text-4xl sm:text-5xl md:text-7xl tracking-tight text-white leading-[1.1] max-w-4xl mx-auto">
            Crafting Extraordinary <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-200 to-amber-400">
              Spaces That Inspire
            </span>
          </h1>

          {/* Luxury Tagline */}
          <p className="font-sans text-base sm:text-lg md:text-xl text-slate-300 font-light max-w-2xl mx-auto leading-relaxed">
            Aura Design Studio shapes environments that combine exquisite material craft,
            meticulous modern architecture, and tailored residential luxury.
          </p>

          {/* CTA Button Grid */}
          <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-lg mx-auto">
            <a
              href="tel:+14155550199"
              className="w-full sm:w-auto flex items-center justify-center space-x-2.5 bg-blue-600 hover:bg-blue-700 active:scale-98 text-white font-sans text-sm font-bold uppercase tracking-wider py-4 px-8 rounded-full transition-all shadow-lg shadow-blue-600/30 hover:shadow-blue-600/40"
              id="hero-call-now"
            >
              <Phone className="h-4 w-4" />
              <span>Call Now</span>
            </a>

            <a
              href="https://wa.me/14155550199"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex items-center justify-center space-x-2.5 bg-emerald-600 hover:bg-emerald-700 active:scale-98 text-white font-sans text-sm font-bold uppercase tracking-wider py-4 px-8 rounded-full transition-all shadow-lg shadow-emerald-600/20 hover:shadow-emerald-600/30"
              id="hero-whatsapp"
            >
              <MessageSquare className="h-4 w-4" />
              <span>WhatsApp Chat</span>
            </a>

            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                const el = document.querySelector('#contact');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="w-full sm:w-auto flex items-center justify-center space-x-2.5 bg-white/10 hover:bg-white/15 text-white backdrop-blur-md font-sans text-sm font-semibold uppercase tracking-wider py-4 px-8 rounded-full border border-white/20 transition-all active:scale-98"
              id="hero-directions"
            >
              <Compass className="h-4 w-4 text-amber-400" />
              <span>Get Directions</span>
            </a>
          </div>
        </motion.div>
      </div>

      {/* Floating Animated Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20">
        <motion.button
          onClick={handleScrollToNext}
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
          className="p-3 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300 focus:outline-none cursor-pointer"
          aria-label="Scroll Down"
          id="hero-scroll-btn"
        >
          <ChevronDown className="h-5 w-5 text-slate-400" />
        </motion.button>
      </div>
    </section>
  );
}
