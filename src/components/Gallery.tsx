import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import { GalleryItem } from '../types';

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState<'All' | 'Residential' | 'Commercial' | 'Concept'>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const galleryItems: GalleryItem[] = [
    {
      id: 0,
      title: 'Sunset Penthouse Oasis',
      category: 'Residential',
      description: 'A bespoke double-height penthouse draft overlooking the Pacific coastline. Crafted with travertine columns and custom low-profile seating to align with the golden hour.',
      image: '/src/assets/images/luxury_penthouse_1783093199417.jpg',
    },
    {
      id: 1,
      title: 'Charcoal Culinary Suite',
      category: 'Residential',
      description: 'Monochromatic kitchen design featuring solid black marble countertops, push-to-open flush magnetic doors, and fully custom-tailored dark oak paneling.',
      image: '/src/assets/images/luxury_kitchen_1783093213711.jpg',
    },
    {
      id: 2,
      title: 'Sunlit Terraced Lounge',
      category: 'Residential',
      description: 'Double-height living room with fluid ceiling apertures designed to let sunlight paint the white bouclé textiles. Framed with minimal sliding glass structures.',
      image: '/src/assets/images/luxury_living_room_1783093229653.jpg',
    },
    {
      id: 3,
      title: 'Vanguard Corporate Lobby',
      category: 'Commercial',
      description: 'A luxurious business hub in the Financial District of San Francisco. Brass wall features, premium velvet seating, and acoustically insulated cedar ceilings.',
      image: '/src/assets/images/luxury_lounge_1783093246075.jpg',
    },
    {
      id: 4,
      title: 'Pacific Heights Foyer',
      category: 'Residential',
      description: 'An elegant entrance corridor with floating oak staircases, subtle gold lining, and soft-washed textured wall finishes to invite visitors with warmth.',
      image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=800',
    },
    {
      id: 5,
      title: 'Amber Boutique Lounge',
      category: 'Commercial',
      description: 'A cozy bar and reception lounge featuring retro brass fixtures, dimmable LED lines, and custom concrete fluting on the reception columns.',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800',
    },
    {
      id: 6,
      title: 'Brutalist Concrete Atrium',
      category: 'Concept',
      description: 'An architectural vision combining solid raw-board concrete, circular apertures, and weeping ivy flora, creating a harmonious dialogue with light.',
      image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=800',
    },
    {
      id: 7,
      title: 'Minimalist Floating Pavilion',
      category: 'Concept',
      description: 'A conceptual modern structure hovering over water, featuring structural glass framing, raw steel cantilevers, and minimalist wooden shading grates.',
      image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=800',
    },
  ];

  const filteredItems = activeCategory === 'All'
    ? galleryItems
    : galleryItems.filter((item) => item.category === activeCategory);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex === null) return;
    const prevIndex = lightboxIndex === 0 ? filteredItems.length - 1 : lightboxIndex - 1;
    setLightboxIndex(prevIndex);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex === null) return;
    const nextIndex = lightboxIndex === filteredItems.length - 1 ? 0 : lightboxIndex + 1;
    setLightboxIndex(nextIndex);
  };

  return (
    <section
      id="portfolio"
      className="py-24 bg-white dark:bg-slate-950 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-4 max-w-xl">
            <span className="font-sans text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400">
              Our Spatial Portfolio
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl tracking-tight text-slate-900 dark:text-white leading-tight">
              A Symphony of Matter & Light
            </h2>
            <div className="h-1 w-12 bg-blue-600 dark:bg-blue-400 rounded" />
          </div>

          {/* Categories Tab Bar */}
          <div className="flex flex-wrap gap-2 bg-slate-50 dark:bg-slate-900 p-1.5 rounded-full border border-slate-100 dark:border-slate-800 w-fit">
            {(['All', 'Residential', 'Commercial', 'Concept'] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setActiveCategory(cat);
                  setLightboxIndex(null); // Reset lightbox when category changes
                }}
                className={`font-sans text-xs sm:text-sm font-semibold py-2 px-4.5 rounded-full transition-all cursor-pointer focus:outline-none ${
                  activeCategory === cat
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'text-slate-500 dark:text-slate-450 hover:text-blue-600 dark:hover:text-blue-400'
                }`}
                id={`gallery-tab-${cat.toLowerCase()}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Masonry-Style Grid Layout */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          id="gallery-grid"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="group relative rounded-2xl overflow-hidden aspect-square sm:aspect-[4/3] md:aspect-[3/4] bg-slate-100 dark:bg-slate-900 border border-slate-100 dark:border-slate-850 shadow-md flex flex-col justify-end"
                id={`gallery-item-${item.id}`}
              >
                {/* Image */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                  referrerPolicy="no-referrer"
                />

                {/* Overlay Vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

                {/* Content */}
                <div className="relative z-10 p-5 space-y-2 translate-y-3 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="font-sans text-[10px] font-bold uppercase tracking-widest text-amber-400 bg-amber-500/10 border border-amber-400/20 px-2.5 py-0.5 rounded-full">
                    {item.category}
                  </span>
                  <h3 className="font-display font-bold text-base text-white">
                    {item.title}
                  </h3>
                  <p className="font-sans text-xs text-slate-300 font-light line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Maximize Icon Trigger */}
                <button
                  onClick={() => setLightboxIndex(index)}
                  className="absolute top-4 right-4 p-2.5 bg-black/40 hover:bg-blue-600 border border-white/20 text-white rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 cursor-pointer shadow-lg active:scale-90"
                  aria-label="View large image"
                >
                  <Maximize2 className="h-4 w-4" />
                </button>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Full-Screen Lightbox Portal */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-md flex flex-col items-center justify-center p-4 select-none"
            onClick={() => setLightboxIndex(null)}
            id="gallery-lightbox-modal"
          >
            {/* Close Button */}
            <button
              onClick={() => setLightboxIndex(null)}
              className="absolute top-6 right-6 p-3 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-full transition-all cursor-pointer focus:outline-none"
              aria-label="Close Lightbox"
            >
              <X className="h-6 w-6" />
            </button>

            {/* Navigation Handles */}
            <button
              onClick={handlePrev}
              className="absolute left-4 sm:left-8 p-3 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-full transition-all cursor-pointer focus:outline-none active:scale-95"
              aria-label="Previous Image"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            <button
              onClick={handleNext}
              className="absolute right-4 sm:right-8 p-3 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-full transition-all cursor-pointer focus:outline-none active:scale-95"
              aria-label="Next Image"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            {/* Lightbox Canvas */}
            <div
              className="relative max-w-4xl w-full max-h-[70vh] flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.img
                key={filteredItems[lightboxIndex].id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                src={filteredItems[lightboxIndex].image}
                alt={filteredItems[lightboxIndex].title}
                className="max-w-full max-h-[70vh] object-contain rounded-2xl shadow-2xl border border-white/10"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Metadata overlay at bottom */}
            <motion.div
              key={`meta-${filteredItems[lightboxIndex].id}`}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 15 }}
              className="max-w-2xl text-center mt-6 space-y-2 px-4"
              onClick={(e) => e.stopPropagation()}
            >
              <span className="font-sans text-[10px] font-bold uppercase tracking-widest text-amber-400 bg-amber-500/10 border border-amber-400/20 px-3 py-1 rounded-full">
                {filteredItems[lightboxIndex].category}
              </span>
              <h4 className="font-display font-extrabold text-xl sm:text-2xl text-white">
                {filteredItems[lightboxIndex].title}
              </h4>
              <p className="font-sans text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
                {filteredItems[lightboxIndex].description}
              </p>
              <p className="font-sans text-[11px] text-slate-500 mt-2">
                Image {lightboxIndex + 1} of {filteredItems.length}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
