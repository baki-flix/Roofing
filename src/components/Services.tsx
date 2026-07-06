import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Layout, Compass, Paintbrush, Building, Sparkles, Shield, ChevronRight } from 'lucide-react';
import { ServiceItem } from '../types';

export default function Services() {
  const [activeServiceId, setActiveServiceId] = useState<string | null>('space-planning');

  const services: ServiceItem[] = [
    {
      id: 'space-planning',
      title: 'Interior Architecture & Layout Drafting',
      iconName: 'Layout',
      description: 'The foundation of absolute luxury. We custom-draft floor plans, partition locations, ceiling lighting grids, and structural flows to maximize natural daylight.',
      fullDetails: [
        'Detailed architectural elevations & structural wall layout drafts',
        'In-depth lighting placement maps and electrical switch schemas',
        'Custom furniture spacing matrices and flow optimization audits',
        'Coordination with certified local structural engineers',
      ],
    },
    {
      id: 'material-millwork',
      title: 'Bespoke Sourcing & Master Millwork',
      iconName: 'Compass',
      description: 'We curate materials with timeless structural integrity. Custom hand-drawn cabinetry, kitchen islands, and structural wood wall panels built exclusively for you.',
      fullDetails: [
        'Procurement of hand-selected marble and stone slabs directly from Italian quarries',
        'Custom furniture detailing: tailored desks, custom vanities, walk-in closets',
        'Exclusive hardwood timber species curation and sustainably harvested parquet profiles',
        'Detailed wood joints, hidden cabinets, and push-to-open flush magnetic hardware',
      ],
    },
    {
      id: 'residential-curation',
      title: 'Turnkey Residential Furnishing',
      iconName: 'Paintbrush',
      description: 'A cohesive, highly personalized sanctuary. We source, order, and install premium boutique furniture, custom fabrics, fine linens, and rare art accessories.',
      fullDetails: [
        'Curated color palettes, mood boards, and complete textile swatch packages',
        'Exclusive access to trade-only high-end international furniture brands',
        'Bespoke upholstery designs: premium leather sofas, high-grade linen beds',
        'Curation and commissions of original artwork, sculptures, and wall tapestries',
      ],
    },
    {
      id: 'commercial-hospitality',
      title: 'Commercial & Hospitality Design',
      iconName: 'Building',
      description: 'Captivate your clientele. We design premium workspace headquarters, Michelin-star restaurants, and boutique lobbies that reflect a prestigious identity.',
      fullDetails: [
        'Acoustically treated meeting zones, executive boardrooms, and phone booths',
        'Exquisite dining tables, reception bars, custom host stands, and mood lighting',
        'Branded space design aligning with corporate aesthetic codes and colors',
        'ADA-compliant accessibility flow integrated with fine luxury finishes',
      ],
    },
    {
      id: 'outdoor-landscape',
      title: 'Integrated Terrace & Garden Architecture',
      iconName: 'Sparkles',
      description: 'Expanding your living space beyond glass walls. Custom-designed terraces, architectural concrete fireplace rings, and pool layout flow matching the home.',
      fullDetails: [
        'Seamless indoor-outdoor floor integration utilizing matching stone textures',
        'Custom modern pools, reflecting pools, and negative-edge waterfall features',
        'Curated structural vegetation: olive trees, architectural reeds, low-water succulents',
        'Weatherproof luxury sound integration, hidden heating systems, and customized pergolas',
      ],
    },
    {
      id: 'visualization',
      title: 'Interactive 3D Virtualization',
      iconName: 'Shield',
      description: 'Experience your future sanctuary in hyper-realistic details before groundbreaking. We build comprehensive 3D visual mockups and spatial walk-throughs.',
      fullDetails: [
        'Hyper-realistic architectural CGI renderings with real-time lighting paths',
        'Detailed virtual reality spatial walk-throughs using lightweight headsets or web frames',
        'Accurate material tactile mapping (reflections of marble vein, texture of linens)',
        'Iterative design testing for paint colors, material combinations, and lighting values',
      ],
    },
  ];

  const getIcon = (name: string) => {
    switch (name) {
      case 'Layout':
        return <Layout className="h-6 w-6 text-blue-600 dark:text-blue-400" />;
      case 'Compass':
        return <Compass className="h-6 w-6 text-amber-500" />;
      case 'Paintbrush':
        return <Paintbrush className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />;
      case 'Building':
        return <Building className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />;
      case 'Sparkles':
        return <Sparkles className="h-6 w-6 text-rose-500" />;
      case 'Shield':
        return <Shield className="h-6 w-6 text-sky-500" />;
      default:
        return <Layout className="h-6 w-6" />;
    }
  };

  return (
    <section
      id="services"
      className="py-24 bg-slate-50 dark:bg-slate-900/40 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="font-sans text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400">
            Our Architectural Services
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl tracking-tight text-slate-900 dark:text-white">
            Comprehensive Turnkey Design Curation
          </h2>
          <div className="h-1 w-12 bg-blue-600 dark:bg-blue-400 rounded mx-auto" />
          <p className="font-sans text-sm sm:text-base text-slate-500 dark:text-slate-400 font-light max-w-2xl mx-auto leading-relaxed">
            From initial spatial drafting to noble material procuring and furniture layout styling, we coordinate all structural assets under a single unified signature.
          </p>
        </div>

        {/* Services Master Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Service Cards Left Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5" id="services-cards-grid">
            {services.map((service) => {
              const isActive = activeServiceId === service.id;
              return (
                <button
                  key={service.id}
                  onClick={() => setActiveServiceId(service.id)}
                  className={`text-left p-6 rounded-2xl border transition-all duration-300 group cursor-pointer focus:outline-none ${
                    isActive
                      ? 'bg-white dark:bg-slate-900 border-blue-600/60 dark:border-blue-500/60 shadow-lg shadow-blue-600/5'
                      : 'bg-white/60 dark:bg-slate-900/30 border-slate-100 dark:border-slate-850 hover:bg-white dark:hover:bg-slate-900/50 hover:border-slate-300 dark:hover:border-slate-800 hover:shadow-md'
                  }`}
                  id={`service-card-${service.id}`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 bg-slate-50 dark:bg-slate-850 rounded-xl group-hover:scale-105 transition-transform">
                      {getIcon(service.iconName)}
                    </div>
                    {isActive && (
                      <span className="h-2 w-2 rounded-full bg-blue-600 dark:bg-blue-400" />
                    )}
                  </div>
                  <h3 className="font-display font-bold text-base text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="font-sans text-xs text-slate-500 dark:text-slate-400 line-clamp-3 mt-2.5 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="mt-4 flex items-center text-xs font-semibold text-blue-600 dark:text-blue-400 group-hover:translate-x-1 transition-transform">
                    <span>{isActive ? 'Showing detail' : 'View process'}</span>
                    <ChevronRight className="h-3 w-3 ml-1" />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Service Details Right Dynamic Panel */}
          <div className="lg:col-span-5 h-full" id="services-details-panel">
            <div className="sticky top-28 bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-xl overflow-hidden h-fit">
              <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-8 text-white">
                <span className="font-sans text-[10px] font-bold uppercase tracking-widest bg-white/15 px-2.5 py-1 rounded-full border border-white/10">
                  Detailed Scope of Custody
                </span>
                <h3 className="font-display font-extrabold text-xl mt-4 leading-snug">
                  {services.find((s) => s.id === activeServiceId)?.title}
                </h3>
              </div>

              <div className="p-8 space-y-6">
                <p className="font-sans text-sm text-slate-600 dark:text-slate-300 font-light leading-relaxed">
                  {services.find((s) => s.id === activeServiceId)?.description}
                </p>

                <div className="space-y-4">
                  <h4 className="font-display font-bold text-xs uppercase tracking-wider text-slate-400 dark:text-slate-500">
                    What is Included:
                  </h4>
                  <ul className="space-y-3">
                    {services
                      .find((s) => s.id === activeServiceId)
                      ?.fullDetails.map((detail, index) => (
                        <motion.li
                          key={index}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.08 }}
                          className="flex items-start text-xs sm:text-sm text-slate-500 dark:text-slate-450 leading-relaxed"
                        >
                          <span className="h-5 w-5 rounded-full bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold text-xs mr-3 flex-shrink-0 border border-blue-100 dark:border-blue-900/50">
                            ✓
                          </span>
                          <span>{detail}</span>
                        </motion.li>
                      ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                  <span className="font-sans text-[11px] text-slate-400 dark:text-slate-500">
                    Average scope timeline: 4–12 weeks
                  </span>
                  <a
                    href="#contact"
                    className="font-sans text-xs font-bold text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    Inquire details
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
