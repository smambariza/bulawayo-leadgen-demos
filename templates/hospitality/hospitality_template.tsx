import React from 'react';

interface HospitalityProps {
  name: string;
  subCategory: string;
  tagline: string;
  services: string[];
  trustSignals: string[];
  address: string;
  phone: string;
  accentColor: string;
  pricing?: string;
}

const HospitalityDemo: React.FC<HospitalityProps> = ({
  name,
  subCategory,
  tagline,
  services,
  trustSignals,
  address,
  phone,
  accentColor,
  pricing,
}) => {
  return (
    <div className="min-h-screen bg-stone-50 font-serif text-stone-900">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-6 bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-stone-100">
        <div className="text-2xl font-light tracking-widest uppercase text-stone-800">
          {name}
        </div>
        <div className="hidden md:flex gap-10 text-xs font-semibold tracking-widest uppercase text-stone-500">
          <a href="#experience" className="hover:text-stone-900 transition">Experience</a>
          <a href="#rooms" className="hover:text-stone-900 transition">Rooms</a>
          <a href="#location" className="hover:text-stone-900 transition">Location</a>
        </div>
        <button 
          style={{ backgroundColor: accentColor }}
          className="px-6 py-2 text-white text-xs font-bold tracking-widest uppercase rounded-sm shadow-sm hover:brightness-90 transition"
        >
          Check Availability
        </button>
      </nav>

      {/* Hero */}
      <header className="relative h-[80vh] flex items-center justify-center text-center px-6 bg-stone-200 overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10 text-white drop-shadow-lg">
          <span className="text-sm font-bold tracking-[0.3em] uppercase mb-6 block">
            {subCategory} in Bulawayo
          </span>
          <h1 className="text-5xl md:text-7xl font-light mb-8 leading-tight italic">
            {tagline}
          </h1>
          {pricing && (
            <p className="text-xl font-medium tracking-wide mb-10 opacity-90">
              {pricing}
            </p>
          )}
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button 
              style={{ backgroundColor: accentColor }}
              className="px-10 py-5 text-white font-bold tracking-widest uppercase rounded-sm shadow-2xl hover:scale-105 transition active:scale-100"
            >
              Book Direct & Save
            </button>
          </div>
        </div>
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30 z-0"></div>
      </header>

      {/* Trust Bar */}
      <section className="bg-stone-100 py-10 px-6 border-b border-stone-200">
        <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-12 md:gap-20">
          {trustSignals.map((signal, i) => (
            <div key={i} className="flex items-center gap-3 text-stone-600 text-xs font-bold tracking-widest uppercase">
              <span className="text-xl" style={{ color: accentColor }}>✦</span> {signal}
            </div>
          ))}
        </div>
      </section>

      {/* Experience / Services */}
      <section id="experience" className="py-32 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div>
            <span className="text-xs font-black tracking-widest uppercase mb-4 block" style={{ color: accentColor }}>Our Services</span>
            <h2 className="text-4xl font-light text-stone-900 mb-8 italic">Tailored Zimbabwean Hospitality</h2>
            <div className="h-0.5 w-16 mb-12" style={{ backgroundColor: accentColor }}></div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-8">
              {services.map((service, i) => (
                <div key={i} className="flex items-start gap-4">
                  <span className="text-lg font-light opacity-30 italic">0{i+1}</span>
                  <p className="text-stone-700 font-medium tracking-wide">{service}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/5] bg-stone-200 rounded-sm shadow-inner"></div>
            <div className="absolute -bottom-10 -left-10 w-48 h-48 border border-stone-200 p-4 bg-white/50 backdrop-blur-sm hidden lg:block">
               <p className="text-[10px] leading-relaxed text-stone-400 uppercase tracking-tighter">Experience the serene city outskirts and the legendary Matobo hills.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-stone-900 py-24 px-6 text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-light mb-10 italic">Escape to Tranquility</h2>
          <p className="text-stone-400 mb-12 tracking-wide leading-relaxed">Avoid third-party booking fees and enjoy personalized service by contacting our lodge directly.</p>
          <div className="inline-block p-10 border border-stone-800 rounded-sm">
            <p className="text-xs tracking-[0.4em] uppercase text-stone-500 mb-4 text-center">Contact Information</p>
            <div className="text-3xl font-light tracking-widest mb-4">{phone}</div>
            <div className="text-xs font-semibold text-stone-600 uppercase tracking-widest">{address}</div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 bg-white text-center">
        <p className="text-stone-400 text-[10px] tracking-[0.5em] uppercase">
          © 2026 {name} • Bulawayo, Zimbabwe
        </p>
      </footer>
    </div>
  );
};

export default HospitalityDemo;
