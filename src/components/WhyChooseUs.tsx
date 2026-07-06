import { Award, Trophy, ShieldAlert, CheckCircle2 } from 'lucide-react';

export default function WhyChooseUs() {
  const statistics = [
    { value: '12+', label: 'Years of Architectural Heritage', desc: 'Crafting premium residential spaces since 2014 in the San Francisco Bay Area.' },
    { value: '240+', label: 'Luxurious Spaces Handed Over', desc: 'Complete high-end customized penthouses, villas, executive lounges, and hospitality spaces.' },
    { value: '15+', label: 'Design & Architecture Awards', desc: 'Acclaimed by the California Architectural Guild and the International Design Association.' },
    { value: '100%', label: 'Absolute Client Satisfaction', desc: 'Our turnkey service covers all plans, material purchases, and master construction oversight.' },
  ];

  const certifications = [
    {
      acronym: 'AIA',
      name: 'American Institute of Architects',
      badge: <Award className="h-6 w-6 text-amber-500" />,
      desc: 'Certified architectural planning adhering to structural integrity, safety codes, and elite professional practices.',
    },
    {
      acronym: 'LEED AP',
      name: 'LEED Accredited Professional',
      badge: <Trophy className="h-6 w-6 text-blue-600 dark:text-blue-400" />,
      desc: 'Expertise in high-performance green building design, maximizing energy savings, insulation, and solar lighting.',
    },
    {
      acronym: 'ASID',
      name: 'American Society of Interior Designers',
      badge: <CheckCircle2 className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />,
      desc: 'Timeless aesthetic curation, certified fabric and finish testing, and exclusive network trade-only furniture sourcing.',
    },
  ];

  const guarantees = [
    {
      title: 'Noble Materials Only',
      desc: 'We enforce an absolute zero-synthetic rule. Only authentic stone, premium hardwoods, hot-rolled steel, and hand-woven wool linens enter our drafts.',
    },
    {
      title: 'Structural Fixed Price Custody',
      desc: 'No sudden invoices or structural surprises. Our pre-construction quotes cover detailed millwork, labor, and installations down to the dollar.',
    },
    {
      title: 'Timeless Aesthetic Promise',
      desc: 'We design against fleeting trends. Our focus on proportional geometry, daylight pathways, and organic finishes ensures your space retains value for decades.',
    },
  ];

  return (
    <section
      id="philosophy"
      className="py-24 bg-slate-950 text-white relative overflow-hidden"
    >
      {/* Background soft glowing accent lights */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <span className="font-sans text-xs font-bold uppercase tracking-widest text-amber-400">
            Why Choose Aura
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl tracking-tight leading-tight">
            Our Architectural Heritage & Quality Guarantee
          </h2>
          <div className="h-1 w-12 bg-amber-400 rounded mx-auto" />
          <p className="font-sans text-sm sm:text-base text-slate-400 font-light max-w-2xl mx-auto leading-relaxed">
            We operate with absolute design precision and structural integrity, backed by top state certifications and material promises.
          </p>
        </div>

        {/* Part 1: Grid for stats and credentials */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Stats column (7/12) */}
          <div className="lg:col-span-7 space-y-10" id="philosophy-stats">
            <h3 className="font-display font-bold text-lg sm:text-xl text-slate-250 border-b border-slate-800 pb-3">
              Elite Performance in Numbers
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {statistics.map((stat, idx) => (
                <div key={idx} className="space-y-2 group" id={`stat-box-${idx}`}>
                  <div className="flex items-baseline space-x-1.5">
                    <span className="font-display font-black text-4xl sm:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300 group-hover:from-amber-400 group-hover:to-amber-200 transition-all duration-300">
                      {stat.value}
                    </span>
                  </div>
                  <h4 className="font-display font-bold text-sm text-slate-200 uppercase tracking-wider">
                    {stat.label}
                  </h4>
                  <p className="font-sans text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {stat.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Accreditations column (5/12) */}
          <div className="lg:col-span-5 space-y-8 bg-slate-900/50 backdrop-blur-md p-8 rounded-3xl border border-slate-800" id="philosophy-certs">
            <h3 className="font-display font-bold text-lg text-slate-200">
              Institutional Accreditations
            </h3>

            <div className="space-y-6">
              {certifications.map((cert, idx) => (
                <div key={idx} className="flex items-start space-x-4" id={`cert-badge-${idx}`}>
                  <div className="p-3 bg-slate-850 border border-slate-800 rounded-2xl flex-shrink-0 text-amber-500 shadow-inner">
                    {cert.badge}
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center space-x-2">
                      <span className="font-display font-extrabold text-xs bg-slate-800 px-2.5 py-0.5 rounded-md border border-slate-700 text-amber-400 uppercase tracking-widest">
                        {cert.acronym}
                      </span>
                      <h4 className="font-display font-bold text-sm text-slate-200">
                        {cert.name}
                      </h4>
                    </div>
                    <p className="font-sans text-xs text-slate-450 leading-relaxed">
                      {cert.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Part 2: Quality Guarantees Panel (Bento block) */}
        <div className="mt-20 pt-16 border-t border-slate-900" id="philosophy-guarantees">
          <div className="text-center max-w-xl mx-auto mb-10">
            <h3 className="font-display font-bold text-xl text-slate-200">
              Our Material & Structural Guarantees
            </h3>
            <p className="font-sans text-xs text-slate-500 mt-1.5">
              These covenants are legally written in every project contract we sign.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {guarantees.map((guar, idx) => (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-slate-900/30 border border-slate-800/60 hover:border-slate-700 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 shadow-md"
                id={`guarantee-card-${idx}`}
              >
                <div className="space-y-4">
                  <div className="h-2 w-10 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full" />
                  <h4 className="font-display font-extrabold text-base text-slate-100">
                    {guar.title}
                  </h4>
                  <p className="font-sans text-xs sm:text-sm text-slate-400 leading-relaxed font-light">
                    {guar.desc}
                  </p>
                </div>
                <div className="mt-6 flex items-center space-x-2 text-[11px] font-bold uppercase tracking-wider text-amber-400">
                  <span className="text-sm">✓</span>
                  <span>Aura Standard Verified</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
