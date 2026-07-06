import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShieldAlert, X, Heart } from 'lucide-react';

export default function Footer() {
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [showTerms, setShowTerms] = useState(false);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
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

  const quickLinks = [
    { name: 'About Studio', href: '#about' },
    { name: 'Core Services', href: '#services' },
    { name: 'Spatial Portfolio', href: '#portfolio' },
    { name: 'Our Philosophy', href: '#philosophy' },
    { name: 'Client Reviews', href: '#reviews' },
    { name: 'FAQ Consults', href: '#faq' },
    { name: 'Contact Us', href: '#contact' },
  ];

  return (
    <footer className="bg-slate-950 text-white border-t border-slate-900 py-16" id="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-12">
          
          {/* Logo Brand Col */}
          <div className="md:col-span-5 space-y-4">
            <span className="font-display font-extrabold text-2xl tracking-wider text-white">
              AURA<span className="text-blue-500">.</span>
            </span>
            <p className="font-sans text-xs text-slate-400 font-light leading-relaxed max-w-sm">
              Aura Design Studio is a certified architectural drafting and custom interior planning firm based in San Francisco, California. We build noble environments balancing structural precision with material craft.
            </p>
            <div className="flex items-center space-x-1.5 text-[10px] text-slate-500 font-sans tracking-wide uppercase">
              <span>Licensed California Architects</span>
              <span>•</span>
              <span>Lic #C39281</span>
            </div>
          </div>

          {/* Quick links Col */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="font-display font-bold text-xs uppercase tracking-widest text-slate-400">
              Sitemap Index
            </h4>
            <ul className="grid grid-cols-1 gap-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="font-sans text-xs text-slate-400 hover:text-blue-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact col */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="font-display font-bold text-xs uppercase tracking-widest text-slate-400">
              Concierge Contact
            </h4>
            <p className="font-sans text-xs text-slate-400 font-light leading-relaxed">
              Have a high-end draft requirement? Email or call our concierge desk. We will arrange a structural walk-through.
            </p>
            <div className="space-y-1">
              <p className="font-sans text-xs font-semibold text-slate-300">
                Email: concierge@auradesignstudio.com
              </p>
              <p className="font-sans text-xs font-semibold text-slate-300">
                Phone: +1 (415) 555-0199
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-[11px] font-sans">
          
          <p>© {new Date().getFullYear()} Aura Design Studio. All architectural rights reserved.</p>

          <div className="flex items-center space-x-4">
            <button
              onClick={() => setShowPrivacy(true)}
              className="hover:text-blue-400 transition-colors cursor-pointer focus:outline-none"
            >
              Privacy Policy
            </button>
            <span>•</span>
            <button
              onClick={() => setShowTerms(true)}
              className="hover:text-blue-400 transition-colors cursor-pointer focus:outline-none"
            >
              Terms of Service
            </button>
          </div>

          <p className="flex items-center text-slate-600">
            <span>Crafted with</span>
            <Heart className="h-3 w-3 mx-1 text-red-600 animate-pulse fill-red-600" />
            <span>in California</span>
          </p>

        </div>

      </div>

      {/* Privacy Policy Modal */}
      <AnimatePresence>
        {showPrivacy && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setShowPrivacy(false)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              className="bg-white dark:bg-slate-900 text-slate-850 dark:text-slate-105 rounded-3xl w-full max-w-lg p-8 shadow-2xl border border-slate-200 dark:border-slate-800 space-y-6 max-h-[80vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-4">
                <h3 className="font-display font-extrabold text-lg text-slate-900 dark:text-white">
                  Privacy Covenant
                </h3>
                <button
                  onClick={() => setShowPrivacy(false)}
                  className="p-1.5 bg-slate-50 hover:bg-slate-100 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-500 rounded-full cursor-pointer focus:outline-none"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              <div className="space-y-4 font-sans text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-light">
                <p className="font-semibold text-slate-800 dark:text-slate-200">
                  Last Updated: July 2026
                </p>
                <p>
                  At Aura Design Studio, we operate with absolute discretion. All personal data collected through our contact and consultation portals is processed in accordance with strict luxury sector confidentiality guidelines and California data codes.
                </p>
                <h4 className="font-display font-bold text-sm text-slate-800 dark:text-slate-200 uppercase tracking-wider pt-2">
                  1. Information Acquisition
                </h4>
                <p>
                  We compile project specifications, names, physical site locations, telephone contacts, and email communication channels explicitly to frame your customized architectural plans and schedule introductory calls.
                </p>
                <h4 className="font-display font-bold text-sm text-slate-800 dark:text-slate-200 uppercase tracking-wider pt-2">
                  2. Non-Disclosure & Security
                </h4>
                <p>
                  We operate an absolute zero-transfer covenant. We NEVER trade, sell, or disclose your architectural blueprints, address parameters, site photographs, or communication transcripts to third-party marketing entities. Internal access is guarded under secure corporate credentials.
                </p>
                <p>
                  If you have concerns about site safety, spatial photography, or localized permitting disclosures, email our legal concierge directly at <strong>concierge@auradesignstudio.com</strong>.
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Terms of Service Modal */}
      <AnimatePresence>
        {showTerms && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setShowTerms(false)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              className="bg-white dark:bg-slate-900 text-slate-850 dark:text-slate-105 rounded-3xl w-full max-w-lg p-8 shadow-2xl border border-slate-200 dark:border-slate-800 space-y-6 max-h-[80vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-4">
                <h3 className="font-display font-extrabold text-lg text-slate-900 dark:text-white">
                  Terms of Curation
                </h3>
                <button
                  onClick={() => setShowTerms(false)}
                  className="p-1.5 bg-slate-50 hover:bg-slate-100 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-500 rounded-full cursor-pointer focus:outline-none"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              <div className="space-y-4 font-sans text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-light">
                <p className="font-semibold text-slate-800 dark:text-slate-200">
                  Effective: July 2026
                </p>
                <p>
                  These terms govern web usage, conceptual evaluations, and general sitemap inquiries on this digital channel.
                </p>
                <h4 className="font-display font-bold text-sm text-slate-800 dark:text-slate-200 uppercase tracking-wider pt-2">
                  1. Intellectual Material & Blueprint Rights
                </h4>
                <p>
                  All architectural drawings, 3D renders, site photographs, custom-joint details, and brand trademarks visible on this portal remain the exclusive, copyrighted property of Aura Design Studio. Downloading, replicating, or using our mockups for third-party building execution without written authorization is strictly prohibited.
                </p>
                <h4 className="font-display font-bold text-sm text-slate-800 dark:text-slate-200 uppercase tracking-wider pt-2">
                  2. Consultation Disclaimers
                </h4>
                <p>
                  Completing our contact specifications or receiving a 3D virtualization study does not constitute a formal builder-architect contract. Formal services, budgets, liabilities, and permits are explicitly defined in private contracts signed in-studio.
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </footer>
  );
}
