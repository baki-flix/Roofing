import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sun, Moon, Menu, X, Phone, MessageSquare } from 'lucide-react';

interface HeaderProps {
  darkMode: boolean;
  setDarkMode: (dark: boolean) => void;
}

export default function Header({ darkMode, setDarkMode }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Philosophy', href: '#philosophy' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const offset = 80; // height of sticky header
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
    <header
      id="header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'glass-nav py-3 shadow-md'
          : 'bg-transparent py-5 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => handleLinkClick(e, '#header')}
            className="flex items-center space-x-2 group focus:outline-none"
            id="nav-logo"
          >
            <span className="font-display font-extrabold text-2xl tracking-wider text-slate-900 dark:text-white transition-colors">
              AURA<span className="text-blue-600 dark:text-blue-400">.</span>
            </span>
            <span className="hidden sm:inline-block font-sans font-light tracking-widest text-xs uppercase text-slate-500 dark:text-slate-400 pt-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              DESIGN STUDIO
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="font-sans font-medium text-sm text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 rounded-full transition-all duration-200"
                id={`nav-link-${link.name.toLowerCase()}`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Controls */}
          <div className="flex items-center space-x-3">
            {/* Theme Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2.5 rounded-full text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/80 transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-600/30"
              aria-label="Toggle Theme"
              id="theme-toggle-btn"
            >
              {darkMode ? (
                <Sun className="h-5 w-5 text-amber-500" />
              ) : (
                <Moon className="h-5 w-5 text-slate-700" />
              )}
            </button>

            {/* Quick Contact buttons (Desktop only) */}
            <a
              href="tel:+14155550199"
              className="hidden lg:flex items-center space-x-1.5 bg-blue-600 hover:bg-blue-700 text-white font-sans text-xs font-semibold uppercase tracking-wider py-2.5 px-4 rounded-full transition-all duration-300 shadow-md shadow-blue-600/10 hover:shadow-blue-600/20 active:scale-95 focus:outline-none"
              id="header-call-btn"
            >
              <Phone className="h-3.5 w-3.5" />
              <span>Call Now</span>
            </a>

            {/* Mobile menu trigger */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-full text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/80 transition-all cursor-pointer focus:outline-none"
              aria-label="Toggle menu"
              id="mobile-menu-trigger"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden border-b border-slate-200 dark:border-slate-800/80 glass-nav overflow-hidden shadow-inner"
            id="mobile-drawer"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="block px-4 py-3 rounded-xl font-sans text-base font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/50 hover:text-blue-600 dark:hover:text-blue-400 transition-all"
                  id={`mobile-nav-link-${link.name.toLowerCase()}`}
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 grid grid-cols-2 gap-3">
                <a
                  href="tel:+14155550199"
                  className="flex items-center justify-center space-x-2 py-3 px-4 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-xl text-slate-800 dark:text-slate-200 font-sans font-bold text-sm text-center transition-all active:scale-95"
                  id="mobile-drawer-call"
                >
                  <Phone className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                  <span>Call Now</span>
                </a>
                <a
                  href="https://wa.me/14155550199"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2 py-3 px-4 bg-green-600 hover:bg-green-700 rounded-xl text-white font-sans font-bold text-sm text-center transition-all active:scale-95 shadow-md shadow-green-600/10"
                  id="mobile-drawer-wa"
                >
                  <MessageSquare className="h-4 w-4" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
