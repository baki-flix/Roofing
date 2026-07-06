/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, MessageSquare, ArrowUp } from 'lucide-react';

import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Gallery from './components/Gallery';
import WhyChooseUs from './components/WhyChooseUs';
import Reviews from './components/Reviews';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [darkMode, setDarkMode] = useState(true); // Default to luxurious dark mode
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Sync theme to document element
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  // Monitor scroll for Scroll-to-Top visibility
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-800 dark:text-slate-100 selection:bg-blue-600/30 dark:selection:bg-blue-400/30 overflow-x-hidden transition-colors duration-300">
      
      {/* Navigation Header */}
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />

      {/* Main Content Layout */}
      <main className="relative">
        {/* 1. Hero Cover */}
        <Hero />

        {/* 2. Story, Mission, & Core Values */}
        <About />

        {/* 3. Services Grid */}
        <Services />

        {/* 4. Portfolio Showcase Gallery */}
        <Gallery />

        {/* 5. Why Choose Us (Stats, Certifications, Guarantees) */}
        <WhyChooseUs />

        {/* 6. Testimonials & Google Score Board */}
        <Reviews />

        {/* 7. FAQ Expandables */}
        <FAQ />

        {/* 8. Interactive Form, Coordinates & Iframe Map */}
        <Contact />
      </main>

      {/* 9. Site Footer with terms/privacy overlays */}
      <Footer />

      {/* Floating Action Button Cluster (Lower Right) */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-center space-y-3.5 select-none pointer-events-none">
        
        {/* WhatsApp Float - Bouncing and clickable */}
        <motion.a
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          href="https://wa.me/14155550199"
          target="_blank"
          rel="noopener noreferrer"
          className="pointer-events-auto p-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full shadow-2xl flex items-center justify-center cursor-pointer transition-all active:scale-90 hover:shadow-emerald-600/20"
          title="Chat with an Architect on WhatsApp"
          id="wa-float-bubble"
          whileHover={{ y: -3 }}
        >
          <MessageSquare className="h-6 w-6" />
        </motion.a>

        {/* Scroll To Top - Fades in based on scroll */}
        <AnimatePresence>
          {showScrollTop && (
            <motion.button
              initial={{ opacity: 0, y: 10, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.8 }}
              onClick={handleScrollToTop}
              className="pointer-events-auto p-3 bg-white hover:bg-slate-100 text-slate-800 dark:bg-slate-900 dark:hover:bg-slate-800 dark:text-white border border-slate-200 dark:border-slate-800 rounded-full shadow-2xl flex items-center justify-center cursor-pointer transition-all active:scale-90 focus:outline-none"
              title="Return to top"
              id="scroll-top-btn"
            >
              <ArrowUp className="h-5 w-5" />
            </motion.button>
          )}
        </AnimatePresence>

      </div>

      {/* Mobile-Only Sticky Contact Bar (Affixed at absolute viewport bottom) */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-45 bg-white/95 dark:bg-slate-950/95 border-t border-slate-200 dark:border-slate-850 p-3 flex gap-3 shadow-inner backdrop-blur-md">
        <a
          href="tel:+14155550199"
          className="flex-1 flex items-center justify-center space-x-2 py-3 bg-blue-600 hover:bg-blue-700 text-white font-sans text-xs font-bold uppercase tracking-wider rounded-xl transition-all shadow-md active:scale-95"
          id="mobile-bottom-call"
        >
          <Phone className="h-4 w-4" />
          <span>Call Studio</span>
        </a>
        <a
          href="https://wa.me/14155550199"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center space-x-2 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-sans text-xs font-bold uppercase tracking-wider rounded-xl transition-all shadow-md active:scale-95"
          id="mobile-bottom-wa"
        >
          <MessageSquare className="h-4 w-4" />
          <span>WhatsApp Chat</span>
        </a>
      </div>

      {/* Spacing correction for mobile bottom bar */}
      <div className="md:hidden h-16 w-full pointer-events-none" />

    </div>
  );
}
