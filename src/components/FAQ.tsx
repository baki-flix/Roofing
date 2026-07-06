import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, MessageSquare } from 'lucide-react';
import { FaqItem } from '../types';

export default function FAQ() {
  const [expandedId, setExpandedId] = useState<string | null>('faq-1');

  const faqs: FaqItem[] = [
    {
      id: 'faq-1',
      question: 'What is Aura Design Studio’s signature architectural style?',
      answer: 'We specialize in modern warm-minimalism. We believe in maximizing natural daylight via floor-to-ceiling glass, crafting comfortable layouts with noble organic materials (like travertine stone, textured plaster, and oak), and prioritizing spatial acoustics and visual sightlines over excessive decoration. However, our design remains fully client-centric.',
    },
    {
      id: 'faq-2',
      question: 'Do you handle the actual building, permitting, and engineering?',
      answer: 'Yes, absolutely. We offer fully integrated turnkey project custody. We coordinate directly with trusted California structural, mechanical, and civil engineers, compile complete architectural sets for San Francisco and regional planning approvals, submit building permit dossiers, and provide full on-site superintendent oversight throughout the building phase.',
    },
    {
      id: 'faq-3',
      question: 'How are the project budgets and designer fees structured?',
      answer: 'To guarantee absolute transparency and prevent budget creep, we divide our projects into structured phases (Drafting, Procurement, Execution). For the drafting phase, we charge a fixed architectural flat fee. For material and turnkey furniture procurement, we supply transparent quotes prior to ordering so you authorize every dollar of investment in advance.',
    },
    {
      id: 'faq-4',
      question: 'Where do you procure your stone, lumber, and custom furniture?',
      answer: 'We maintain strong global trade relationships. Our marble slabs are custom-selected by our team in Carrara and Pietrasanta, Italy. Our sustainable white oak timber is sourced from certified central European forests. All bespoke cabinetry, sliding partitions, and tables are fabricated by master craftsmen in our private California millwork studio.',
    },
    {
      id: 'faq-5',
      question: 'What is the typical timeline for a complete residential project?',
      answer: 'While every bespoke layout differs, a high-end interior and architectural transformation generally adheres to a predictable cycle: 4–6 weeks for structural drafts and 3D renderings; 6–8 weeks for planning permits and local agency approvals; 8–12 weeks for materials fabrication and millwork; and 12–24 weeks for expert on-site construction, installation, and final styling.',
    },
  ];

  const handleToggle = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section
      id="faq"
      className="py-24 bg-white dark:bg-slate-950 transition-colors duration-300"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <span className="font-sans text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400">
            Frequently Asked Questions
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl tracking-tight text-slate-900 dark:text-white">
            Design Consultations Demystified
          </h2>
          <div className="h-1 w-12 bg-blue-600 dark:bg-blue-400 rounded mx-auto" />
          <p className="font-sans text-sm text-slate-500 dark:text-slate-400 font-light max-w-2xl mx-auto leading-relaxed">
            Have questions about architectural phases, local city permitting, or custom material sourcing? Read our detailed responses.
          </p>
        </div>

        {/* Accordions container */}
        <div className="space-y-4" id="faq-accordions">
          {faqs.map((faq) => {
            const isExpanded = expandedId === faq.id;
            return (
              <div
                key={faq.id}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isExpanded
                    ? 'bg-slate-50/50 dark:bg-slate-900/40 border-slate-200 dark:border-slate-800 shadow-md'
                    : 'bg-white dark:bg-slate-950 border-slate-100 dark:border-slate-900 hover:border-slate-200 dark:hover:border-slate-800'
                }`}
                id={faq.id}
              >
                {/* Trigger Row */}
                <button
                  onClick={() => handleToggle(faq.id)}
                  className="w-full flex items-center justify-between p-6 text-left cursor-pointer focus:outline-none"
                  aria-expanded={isExpanded}
                >
                  <h3 className="font-display font-bold text-sm sm:text-base text-slate-900 dark:text-white select-none pr-4">
                    {faq.question}
                  </h3>
                  <div
                    className={`p-1.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 transition-transform duration-300 flex-shrink-0 ${
                      isExpanded ? 'rotate-180 bg-blue-600/10 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400' : ''
                    }`}
                  >
                    <ChevronDown className="h-4.5 w-4.5" />
                  </div>
                </button>

                {/* Answer Content Panel */}
                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <div className="px-6 pb-6 pt-1 text-slate-500 dark:text-slate-400 font-sans text-xs sm:text-sm leading-relaxed font-light border-t border-slate-100 dark:border-slate-850">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Quick Contact Box */}
        <div className="mt-12 p-6 rounded-2xl bg-blue-50/50 dark:bg-blue-950/20 border border-blue-100 dark:border-blue-900/30 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-3 text-center sm:text-left">
            <div className="p-3 bg-blue-600 text-white rounded-xl shadow-sm hidden sm:block">
              <MessageSquare className="h-5 w-5" />
            </div>
            <div>
              <h4 className="font-display font-bold text-sm text-slate-900 dark:text-white">
                Have a unique design challenge?
              </h4>
              <p className="font-sans text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                Speak directly with an interior architect. We offer complimentary 30-minute introductory calls.
              </p>
            </div>
          </div>
          <a
            href="#contact"
            className="whitespace-nowrap px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-sans text-xs font-bold uppercase tracking-wider rounded-xl transition-all shadow-md active:scale-95"
          >
            Request call
          </a>
        </div>

      </div>
    </section>
  );
}
