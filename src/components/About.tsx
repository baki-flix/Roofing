import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'motion/react';
import { Compass, Sparkles, Shield, ChevronRight } from 'lucide-react';

export default function About() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const isDragging = useRef(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (!isDragging.current) return;
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging.current) return;
    handleMove(e.clientX);
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('touchmove', handleTouchMove);
    window.addEventListener('touchend', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, []);

  const coreValues = [
    {
      icon: <Compass className="h-5 w-5 text-blue-600 dark:text-blue-400" />,
      title: 'Bespoke Architectural Vision',
      desc: 'No catalog templates. We custom-draft every layout, window aperture, and spatial axis tailored to the local light and client habits.',
    },
    {
      icon: <Sparkles className="h-5 w-5 text-amber-500" />,
      title: 'Noble Material Mastery',
      desc: 'We procure hand-selected Carrara marble, sustainably farmed premium oak, and bespoke hot-rolled raw steel accents to form everlasting spaces.',
    },
    {
      icon: <Shield className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />,
      title: 'Turnkey Project Custody',
      desc: 'From initial 3D visualization and planning approvals to absolute master-builder custody, we handle all construction details.',
    },
  ];

  return (
    <section
      id="about"
      className="py-24 bg-white dark:bg-slate-950 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Narrative and values */}
          <div className="lg:col-span-7 space-y-8" id="about-content">
            <div className="space-y-4">
              <span className="font-sans text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400">
                The Aura Legacy
              </span>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl tracking-tight text-slate-900 dark:text-white leading-tight">
                Sculpting Light, Matter, <br />
                and Modern Luxury
              </h2>
              <div className="h-1 w-12 bg-blue-600 dark:bg-blue-400 rounded" />
            </div>

            <p className="font-sans text-base sm:text-lg text-slate-600 dark:text-slate-300 font-light leading-relaxed">
              Founded in 2014 in San Francisco, Aura Design Studio is a globally recognized team of custom home designers, interior architects, and landscape planners. We believe spaces are physical manifestations of well-being, crafted through a dialogue between structural concrete and daylight.
            </p>

            <p className="font-sans text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
              Our projects range from high-altitude residential retreats overlooking the Pacific coastline to premium executive offices and Michelin-star restaurant environments. Our integrated philosophy unites interior styling, custom spatial drafting, and furniture design under a single signature standard.
            </p>

            {/* Core Values Cards */}
            <div className="space-y-5 pt-4">
              {coreValues.map((val, idx) => (
                <div
                  key={idx}
                  className="flex items-start space-x-4 p-5 rounded-2xl border border-slate-100 dark:border-slate-900 bg-slate-50/50 dark:bg-slate-900/30 hover:border-slate-200 dark:hover:border-slate-800 transition-all duration-300"
                  id={`about-value-${idx}`}
                >
                  <div className="p-3 bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800/50 flex-shrink-0">
                    {val.icon}
                  </div>
                  <div className="space-y-1.5">
                    <h3 className="font-display font-bold text-base text-slate-900 dark:text-white">
                      {val.title}
                    </h3>
                    <p className="font-sans text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                      {val.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Interactive Before/After slider */}
          <div className="lg:col-span-5 flex flex-col items-center space-y-6" id="about-visual">
            <div className="text-center w-full max-w-sm">
              <span className="font-sans text-[11px] font-bold uppercase tracking-wider text-amber-500 bg-amber-500/10 dark:bg-amber-500/5 px-3 py-1.5 rounded-full border border-amber-500/20">
                Interactive Design Slider
              </span>
              <p className="font-sans text-xs text-slate-500 dark:text-slate-400 mt-2.5">
                Drag the bar to reveal before & after transformation
              </p>
            </div>

            <div
              ref={containerRef}
              className="relative w-full max-w-md aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800 select-none cursor-ew-resize"
              onMouseDown={(e) => {
                e.preventDefault();
                isDragging.current = true;
                handleMove(e.clientX);
              }}
              onTouchStart={(e) => {
                isDragging.current = true;
                handleMove(e.touches[0].clientX);
              }}
              id="before-after-slider-container"
            >
              {/* Image 1: AFTER (Completed Space) */}
              <img
                src="/src/assets/images/luxury_living_room_1783093229653.jpg"
                alt="Aura Luxury Completed Space"
                className="absolute inset-0 w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 right-4 bg-slate-900/80 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/15">
                <span className="font-sans text-[11px] font-bold uppercase tracking-widest text-white">
                  AFTER: Aura Design
                </span>
              </div>

              {/* Image 2: BEFORE (Raw space / Grayscale concept blueprint) */}
              <div
                className="absolute inset-y-0 left-0 right-0 overflow-hidden"
                style={{ width: `${sliderPosition}%` }}
              >
                <img
                  src="/src/assets/images/luxury_living_room_1783093229653.jpg"
                  alt="Aura Raw Space"
                  className="absolute inset-y-0 left-0 w-full h-full object-cover filter grayscale contrast-125 brightness-75 hue-rotate-15 scale-102"
                  style={{
                    width: containerRef.current?.getBoundingClientRect().width,
                    maxWidth: 'none',
                  }}
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 bg-blue-900/80 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/15 whitespace-nowrap">
                  <span className="font-sans text-[11px] font-bold uppercase tracking-widest text-white">
                    BEFORE: Raw Space
                  </span>
                </div>
              </div>

              {/* Slider Handle Divider */}
              <div
                className="absolute inset-y-0 z-30 w-1 bg-white cursor-ew-resize flex items-center justify-center"
                style={{ left: `${sliderPosition}%` }}
              >
                <div className="absolute p-2 bg-blue-600 text-white rounded-full shadow-lg border-2 border-white flex items-center justify-center active:scale-110 active:bg-blue-700 transition-transform">
                  <div className="flex space-x-0.5">
                    <span className="block w-0.5 h-3 bg-white" />
                    <span className="block w-0.5 h-3 bg-white" />
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Experience Badge */}
            <div className="w-full max-w-md grid grid-cols-3 gap-4 text-center">
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800/80 shadow-sm">
                <p className="font-display font-extrabold text-2xl sm:text-3xl text-blue-600 dark:text-blue-400">12+</p>
                <p className="font-sans text-[11px] font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider mt-1">Years Active</p>
              </div>
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800/80 shadow-sm">
                <p className="font-display font-extrabold text-2xl sm:text-3xl text-amber-500">240+</p>
                <p className="font-sans text-[11px] font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider mt-1">Fine Homes</p>
              </div>
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800/80 shadow-sm">
                <p className="font-display font-extrabold text-2xl sm:text-3xl text-indigo-600 dark:text-indigo-400">15+</p>
                <p className="font-sans text-[11px] font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider mt-1">Design Awards</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
