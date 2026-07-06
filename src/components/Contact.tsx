import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, Mail, Clock, MapPin, Send, Instagram, Linkedin, MessageCircle, ExternalLink } from 'lucide-react';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [projectType, setProjectType] = useState('Residential');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) return;

    setIsSubmitting(true);
    // Simulate server side submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setName('');
      setEmail('');
      setPhone('');
      setMessage('');
      setProjectType('Residential');
      
      // Auto close success message after 5s
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  const contactDetails = [
    {
      icon: <Phone className="h-5 w-5 text-blue-600 dark:text-blue-400" />,
      title: 'Telephone',
      content: '+1 (415) 555-0199',
      href: 'tel:+14155550199',
    },
    {
      icon: <Mail className="h-5 w-5 text-blue-600 dark:text-blue-400" />,
      title: 'Email Communications',
      content: 'concierge@auradesignstudio.com',
      href: 'mailto:concierge@auradesignstudio.com',
    },
    {
      icon: <MapPin className="h-5 w-5 text-blue-600 dark:text-blue-400" />,
      title: 'Physical Studio Address',
      content: '101 California St, Suite 3400, San Francisco, CA 94111',
      href: 'https://maps.google.com/?q=101+California+St,+San+Francisco,+CA+94111',
    },
    {
      icon: <Clock className="h-5 w-5 text-blue-600 dark:text-blue-400" />,
      title: 'Studio Hours',
      content: 'Monday – Friday: 9:00 AM – 6:00 PM (Saturdays by private appointment only)',
      href: null,
    },
  ];

  const socialLinks = [
    { name: 'Instagram', icon: <Instagram className="h-4.5 w-4.5" />, href: 'https://instagram.com' },
    { name: 'LinkedIn', icon: <Linkedin className="h-4.5 w-4.5" />, href: 'https://linkedin.com' },
    { name: 'Pinterest', icon: <MessageCircle className="h-4.5 w-4.5" />, href: 'https://pinterest.com' },
  ];

  return (
    <section
      id="contact"
      className="py-24 bg-slate-50 dark:bg-slate-900/40 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="font-sans text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400">
            Initiate Consultation
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl tracking-tight text-slate-900 dark:text-white">
            Let’s Shape Your Dream Environment
          </h2>
          <div className="h-1 w-12 bg-blue-600 dark:bg-blue-400 rounded mx-auto" />
          <p className="font-sans text-sm text-slate-500 dark:text-slate-400 font-light max-w-2xl mx-auto leading-relaxed">
            Whether you are remodeling a California estate, designing an executive office lobby, or establishing a conceptual master plan, write or call us.
          </p>
        </div>

        {/* Master Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch mb-16">
          
          {/* Left Column: Details (5/12) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8" id="contact-details-box">
            <div className="space-y-6">
              <h3 className="font-display font-extrabold text-xl text-slate-900 dark:text-white">
                Studio Headquarters
              </h3>
              <p className="font-sans text-sm text-slate-500 dark:text-slate-400 font-light leading-relaxed">
                Located in the heart of San Francisco’s Financial District, our showroom exhibits noble marble slabs, sustainable oak collections, and private mockups. Consultations are available in-studio or virtually.
              </p>

              <div className="space-y-4">
                {contactDetails.map((detail, idx) => (
                  <div key={idx} className="flex items-start space-x-4 p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-150 dark:border-slate-800 shadow-sm" id={`contact-item-${idx}`}>
                    <div className="p-2.5 bg-slate-50 dark:bg-slate-850 rounded-xl border border-slate-100 dark:border-slate-800 flex-shrink-0">
                      {detail.icon}
                    </div>
                    <div className="space-y-0.5">
                      <h4 className="font-display font-bold text-xs uppercase tracking-wider text-slate-400 dark:text-slate-500">
                        {detail.title}
                      </h4>
                      {detail.href ? (
                        <a
                          href={detail.href}
                          target={detail.href.startsWith('http') ? '_blank' : undefined}
                          rel={detail.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                          className="font-sans text-sm text-slate-800 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 font-medium break-all"
                        >
                          {detail.content}
                        </a>
                      ) : (
                        <p className="font-sans text-sm text-slate-600 dark:text-slate-350 font-medium">
                          {detail.content}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social channels */}
            <div className="space-y-3 pt-6 border-t border-slate-200 dark:border-slate-800">
              <h4 className="font-display font-bold text-xs uppercase tracking-widest text-slate-400 dark:text-slate-500">
                Follow Our Creative Sourcing
              </h4>
              <div className="flex space-x-3">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-1.5 py-2.5 px-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-150 dark:border-slate-800 text-slate-600 dark:text-slate-350 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-600/30 dark:hover:border-blue-500/30 font-sans text-xs font-semibold shadow-sm transition-all"
                  >
                    {link.icon}
                    <span>{link.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Glassmorphic Form (7/12) */}
          <div className="lg:col-span-7" id="contact-form-box">
            <div className="h-full bg-white dark:bg-slate-900 rounded-3xl border border-slate-150 dark:border-slate-800 shadow-xl p-8 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-600 to-indigo-600" />
              
              <AnimatePresence mode="wait">
                {isSuccess ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="h-full flex flex-col items-center justify-center text-center space-y-4 py-16"
                  >
                    <div className="h-16 w-16 rounded-full bg-emerald-100 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 flex items-center justify-center border border-emerald-200 dark:border-emerald-900/50 shadow-inner scale-110">
                      <Send className="h-6 w-6 animate-pulse" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-display font-extrabold text-2xl text-slate-900 dark:text-white">
                        Inquiry Received
                      </h3>
                      <p className="font-sans text-slate-500 dark:text-slate-400 text-sm max-w-sm">
                        Thank you for contacting Aura Design Studio. Our concierge team has routed your specs to an interior architect.
                      </p>
                    </div>
                    <p className="font-sans text-xs text-blue-600 dark:text-blue-400 font-semibold uppercase tracking-widest pt-2">
                      Expect a callback within 24 business hours.
                    </p>
                  </motion.div>
                ) : (
                  <form key="form" onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-1">
                      <h3 className="font-display font-extrabold text-lg text-slate-900 dark:text-white">
                        Draft Your Project Parameters
                      </h3>
                      <p className="font-sans text-xs text-slate-500">
                        All information is strictly private and safeguarded under NDAs.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* Name */}
                      <div className="space-y-1.5">
                        <label htmlFor="contact-name" className="font-sans text-xs font-semibold text-slate-500 uppercase tracking-wider">
                          Your Full Name
                        </label>
                        <input
                          id="contact-name"
                          type="text"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="e.g. Sterling Cooper"
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-55/30 dark:bg-slate-850 text-slate-900 dark:text-white font-sans text-sm focus:outline-none focus:ring-2 focus:ring-blue-600/30"
                        />
                      </div>

                      {/* Email */}
                      <div className="space-y-1.5">
                        <label htmlFor="contact-email" className="font-sans text-xs font-semibold text-slate-500 uppercase tracking-wider">
                          Email Address
                        </label>
                        <input
                          id="contact-email"
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="e.g. sterling@vanguard.com"
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-55/30 dark:bg-slate-850 text-slate-900 dark:text-white font-sans text-sm focus:outline-none focus:ring-2 focus:ring-blue-600/30"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* Phone */}
                      <div className="space-y-1.5">
                        <label htmlFor="contact-phone" className="font-sans text-xs font-semibold text-slate-500 uppercase tracking-wider">
                          Phone Number (Optional)
                        </label>
                        <input
                          id="contact-phone"
                          type="tel"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="e.g. +1 (415) 555-0100"
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-55/30 dark:bg-slate-850 text-slate-900 dark:text-white font-sans text-sm focus:outline-none focus:ring-2 focus:ring-blue-600/30"
                        />
                      </div>

                      {/* Project Category */}
                      <div className="space-y-1.5">
                        <label htmlFor="contact-project-type" className="font-sans text-xs font-semibold text-slate-500 uppercase tracking-wider">
                          Project Classification
                        </label>
                        <select
                          id="contact-project-type"
                          value={projectType}
                          onChange={(e) => setProjectType(e.target.value)}
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-55/30 dark:bg-slate-850 text-slate-900 dark:text-white font-sans text-sm focus:outline-none focus:ring-2 focus:ring-blue-600/30"
                        >
                          <option value="Residential">Residential Villa / Penthouse</option>
                          <option value="Commercial">Commercial Executive Suite</option>
                          <option value="Hospitality">Michelin Restaurant / Hotel</option>
                          <option value="Concept">Conceptual Spatial Study</option>
                        </select>
                      </div>
                    </div>

                    {/* Message */}
                    <div className="space-y-1.5">
                      <label htmlFor="contact-message" className="font-sans text-xs font-semibold text-slate-500 uppercase tracking-wider">
                        Spatial Parameters & Scope Details
                      </label>
                      <textarea
                        id="contact-message"
                        required
                        rows={4}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Tell us about the property, square footage, lighting requirements, and your material preferences..."
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-55/30 dark:bg-slate-850 text-slate-900 dark:text-white font-sans text-sm focus:outline-none focus:ring-2 focus:ring-blue-600/30 resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full flex items-center justify-center space-x-2.5 py-4 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-sans text-xs font-bold uppercase tracking-wider rounded-xl transition-all shadow-md active:scale-98 cursor-pointer"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          <span>Routing Specifications...</span>
                        </>
                      ) : (
                        <>
                          <Send className="h-4 w-4" />
                          <span>Submit Private Inquiry</span>
                        </>
                      )}
                    </button>
                  </form>
                )}
              </AnimatePresence>
            </div>
          </div>

        </div>

        {/* Embedded Map Section */}
        <div className="rounded-3xl border border-slate-250 dark:border-slate-800 overflow-hidden shadow-lg relative bg-white dark:bg-slate-900" id="contact-map-block">
          <div className="p-4 sm:p-6 bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-blue-600 text-white rounded-lg">
                <MapPin className="h-4 w-4" />
              </div>
              <div>
                <h4 className="font-display font-bold text-sm text-slate-900 dark:text-white">
                  Financial District Studio Headquarters
                </h4>
                <p className="font-sans text-xs text-slate-500">
                  101 California St, Suite 3400, San Francisco, CA 94111
                </p>
              </div>
            </div>
            <a
              href="https://maps.google.com/?q=101+California+St,+San+Francisco,+CA+94111"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1 px-4 py-2 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 rounded-xl text-slate-700 dark:text-slate-300 font-sans text-xs font-bold transition-all"
            >
              <span>Navigate in Maps</span>
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </div>

          <div className="aspect-[21/9] min-h-[300px] w-full bg-slate-100 dark:bg-slate-950">
            {/* Elegant, styled embedded map centered on San Francisco Financial District */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3152.9157454845427!2d-122.3999464846819!3d37.79320297975618!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085806294d13fb5%3A0xe54ef9034f195861!2s101%20California%20St%2C%20San%20Francisco%2C%20CA%2094111!5e0!3m2!1sen!2sus!4v1688390000000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'grayscale(0.1) contrast(1.05) brightness(0.95)' }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Aura Design Studio SF HQ Map Location"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
