import React from 'react';

interface MedicalProps {
  name: string;
  subCategory: string;
  tagline: string;
  services: string[];
  trustSignals: string[];
  address: string;
  phone: string;
  accentColor: string;
}

const MedicalDemo: React.FC<MedicalProps> = ({
  name,
  subCategory,
  tagline,
  services,
  trustSignals,
  address,
  phone,
  accentColor,
}) => {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-6 py-4 bg-white shadow-sm sticky top-0 z-50">
        <div className="text-xl font-bold tracking-tight text-slate-800">
          <span style={{ color: accentColor }}>+</span> {name}
        </div>
        <div className="hidden md:flex gap-8 text-sm font-medium text-slate-600">
          <a href="#services" className="hover:text-slate-900 transition">Services</a>
          <a href="#about" className="hover:text-slate-900 transition">About</a>
          <a href="#contact" className="hover:text-slate-900 transition">Contact</a>
        </div>
        <button 
          style={{ backgroundColor: accentColor }}
          className="px-5 py-2 text-white text-sm font-bold rounded-full shadow-lg hover:brightness-110 transition"
        >
          Book Appointment
        </button>
      </nav>

      {/* Hero */}
      <header className="relative py-20 px-6 text-center bg-white border-b border-slate-100 overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
          <span className="text-xs font-bold tracking-widest uppercase mb-4 block" style={{ color: accentColor }}>
            {subCategory} in Bulawayo
          </span>
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 leading-tight">
            {tagline}
          </h1>
          <p className="text-lg text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            Professional care, modern techniques, and a commitment to your long-term health. Located in the heart of Bulawayo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              style={{ backgroundColor: accentColor }}
              className="px-8 py-4 text-white font-bold rounded-xl shadow-xl hover:translate-y-[-2px] transition active:translate-y-0"
            >
              Consult via WhatsApp
            </button>
            <button className="px-8 py-4 bg-white border-2 border-slate-200 text-slate-800 font-bold rounded-xl hover:bg-slate-50 transition">
              View Our Services
            </button>
          </div>
        </div>
        {/* Abstract background element */}
        <div 
          className="absolute top-[-10%] right-[-5%] w-64 h-64 rounded-full opacity-5 blur-3xl"
          style={{ backgroundColor: accentColor }}
        ></div>
      </header>

      {/* Trust Bar */}
      <section className="bg-slate-900 py-6 px-6 overflow-hidden">
        <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-8 md:gap-16 opacity-80">
          {trustSignals.map((signal, i) => (
            <div key={i} className="flex items-center gap-2 text-white/90 text-sm font-medium whitespace-nowrap">
              <span style={{ color: accentColor }}>✓</span> {signal}
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-24 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-slate-900 mb-4">Our Specialized Services</h2>
          <div className="h-1 w-20 mx-auto rounded-full" style={{ backgroundColor: accentColor }}></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition">
              <div className="w-12 h-12 rounded-lg mb-6 flex items-center justify-center text-xl font-bold" style={{ backgroundColor: `${accentColor}15`, color: accentColor }}>
                {i + 1}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{service}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Expertly delivered using latest clinical standards to ensure optimal recovery and comfort.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white py-20 px-6 border-y border-slate-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-black mb-8">Ready to start your recovery?</h2>
          <p className="text-slate-600 mb-10">We are open Monday to Friday. Walk-ins welcome for emergencies.</p>
          <div className="inline-flex flex-col items-center p-8 bg-slate-50 rounded-3xl border border-slate-200">
            <div className="text-2xl font-bold text-slate-900 mb-2">{phone}</div>
            <div className="text-sm font-medium text-slate-500 uppercase tracking-widest">{address}</div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-white text-center border-t border-slate-100">
        <p className="text-slate-400 text-xs tracking-widest uppercase">
          © 2026 {name} • Bulawayo Medical Specialists
        </p>
      </footer>
    </div>
  );
};

export default MedicalDemo;
