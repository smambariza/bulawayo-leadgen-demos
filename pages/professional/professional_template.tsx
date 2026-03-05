import React from 'react';

interface ProfessionalProps {
  name: string;
  subCategory: string;
  tagline: string;
  services: string[];
  trustSignals: string[];
  address: string;
  phone: string;
  accentColor: string;
  website?: string;
}

const ProfessionalDemo: React.FC<ProfessionalProps> = ({
  name,
  subCategory,
  tagline,
  services,
  trustSignals,
  address,
  phone,
  accentColor,
  website,
}) => {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-slate-200">
      {/* Header / Nav */}
      <nav className="border-b border-slate-100 px-8 py-6 flex items-center justify-between sticky top-0 bg-white/95 backdrop-blur-sm z-50">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded flex items-center justify-center text-white font-bold text-lg shadow-inner" style={{ backgroundColor: accentColor }}>
            {name.charAt(0)}
          </div>
          <span className="text-lg font-bold tracking-tight text-slate-800 uppercase">{name}</span>
        </div>
        <div className="hidden lg:flex items-center gap-10 text-[11px] font-black uppercase tracking-[0.2em] text-slate-400">
          <a href="#expertise" className="hover:text-slate-900 transition underline-offset-8 hover:underline decoration-2" style={{ textDecorationColor: accentColor }}>Expertise</a>
          <a href="#firm" className="hover:text-slate-900 transition underline-offset-8 hover:underline decoration-2" style={{ textDecorationColor: accentColor }}>The Firm</a>
          <a href="#contact" className="hover:text-slate-900 transition underline-offset-8 hover:underline decoration-2" style={{ textDecorationColor: accentColor }}>Contact</a>
        </div>
        <div className="flex items-center gap-6">
           <span className="hidden sm:block text-sm font-bold text-slate-400">{phone}</span>
           <button 
             style={{ backgroundColor: accentColor }}
             className="px-6 py-2.5 text-white text-xs font-black uppercase tracking-widest rounded shadow-lg hover:brightness-90 transition active:scale-95"
           >
             Secure Consultation
           </button>
        </div>
      </nav>

      {/* Hero */}
      <header className="px-8 py-24 md:py-32 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-16 items-center">
        <div className="md:col-span-7">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px w-12 bg-slate-200"></div>
            <span className="text-xs font-black uppercase tracking-[0.3em] text-slate-400">{subCategory} • Bulawayo</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 leading-[1.1] mb-10 tracking-tight">
            {tagline}
          </h1>
          <p className="text-xl text-slate-500 mb-12 max-w-xl leading-relaxed">
            Unparalleled integrity, deep local expertise, and a multi-decade legacy of serving the most complex legal and architectural needs in Zimbabwe.
          </p>
          <div className="flex flex-wrap gap-6">
            <button 
              style={{ backgroundColor: accentColor }}
              className="px-10 py-5 text-white text-sm font-bold uppercase tracking-widest rounded shadow-2xl hover:brightness-95 transition"
            >
              Request Briefing
            </button>
            <button className="px-10 py-5 border-2 border-slate-100 text-slate-800 text-sm font-bold uppercase tracking-widest rounded hover:bg-slate-50 transition">
              Explore Services
            </button>
          </div>
        </div>
        <div className="md:col-span-5 relative">
          <div className="aspect-[4/5] bg-slate-50 rounded shadow-2xl border border-slate-100 flex items-center justify-center overflow-hidden group">
             <div className="absolute inset-0 bg-slate-900/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
             <span className="text-xs font-black uppercase tracking-[0.4em] text-slate-200">Prestige Photography</span>
          </div>
          <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-white border border-slate-100 shadow-xl rounded p-6 hidden lg:block">
            <p className="text-[10px] leading-relaxed text-slate-400 font-bold uppercase tracking-widest mb-4">Firm Reliability</p>
            <div className="text-3xl font-bold text-slate-800 mb-1">100%</div>
            <p className="text-[10px] text-slate-500 uppercase tracking-tighter">Client Confidentiality Guaranteed</p>
          </div>
        </div>
      </header>

      {/* Authority Bar */}
      <section className="bg-slate-50 py-12 px-8 border-y border-slate-100">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-12">
          {trustSignals.map((signal, i) => (
            <div key={i} className="flex items-center gap-4 group">
              <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: accentColor }}></div>
              <span className="text-xs font-black uppercase tracking-[0.2em] text-slate-500 group-hover:text-slate-900 transition-colors">
                {signal}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Expertise */}
      <section id="expertise" className="px-8 py-32 max-w-7xl mx-auto">
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-4">Core Areas of Expertise</h2>
          <div className="h-1.5 w-16 rounded-full" style={{ backgroundColor: accentColor }}></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {services.map((service, i) => (
            <div key={i} className="group border-b border-slate-100 pb-12 hover:border-slate-300 transition-colors">
              <span className="text-sm font-black text-slate-200 mb-6 block group-hover:text-slate-400 transition-colors tracking-tighter italic">AREA_0{i+1}</span>
              <h3 className="text-2xl font-bold text-slate-800 mb-4 tracking-tight">{service}</h3>
              <p className="text-slate-500 leading-relaxed">
                Strategic advisory and comprehensive representation tailored to the specific regulatory and commercial landscape of Bulawayo.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="px-8 py-32 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Secure Your Position</h2>
          <p className="text-slate-400 text-lg mb-16 max-w-2xl mx-auto">Contact our Bulawayo chambers to schedule a confidential briefing or professional consultation.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left bg-slate-800/50 p-12 rounded-lg border border-slate-800">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.3em] text-slate-500 mb-6">Phone & Digital</p>
              <div className="text-3xl font-bold mb-2 tracking-tight group cursor-pointer hover:text-white transition-colors">
                {phone}
              </div>
              <p className="text-slate-400 text-sm">{website ? website : 'Private Access Only'}</p>
            </div>
            <div>
              <p className="text-xs font-black uppercase tracking-[0.3em] text-slate-500 mb-6">Physical Chambers</p>
              <div className="text-xl font-bold mb-2 leading-tight">
                {address}
              </div>
              <p className="text-slate-500 text-xs font-bold uppercase tracking-widest">Bulawayo, Zimbabwe</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-8 py-12 flex flex-col md:flex-row justify-between items-center gap-8 max-w-7xl mx-auto">
        <p className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400">
          © 2026 {name} • Leading {subCategory} Practice
        </p>
        <div className="flex gap-10 text-[9px] font-black uppercase tracking-widest text-slate-400">
          <a href="#" className="hover:text-slate-900 transition">Terms of Engagement</a>
          <a href="#" className="hover:text-slate-900 transition">Regulatory Disclosure</a>
        </div>
      </footer>
    </div>
  );
};

export default ProfessionalDemo;
