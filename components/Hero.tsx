
import React from 'react';

interface HeroProps {
  name: string;
  tagline: string;
  contact: { phone: string };
}

const Hero: React.FC<HeroProps> = ({ name, tagline, contact }) => {
  return (
    <section className="relative min-h-screen md:min-h-[750px] flex items-center overflow-hidden bg-slate-950">
      {/* Background with optimized overlay */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1523050853051-f750004c4139?auto=format&fit=crop&q=80&w=2000" 
          alt="PRM School Environment" 
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-950/80 via-slate-950 to-slate-950"></div>
        
        {/* Animated Background Blobs */}
        <div className="absolute top-1/4 -right-1/4 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute -bottom-1/4 -left-1/4 w-[600px] h-[600px] bg-indigo-800/5 rounded-full blur-[150px]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 pt-28 pb-12">
        <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
          
          {/* Logo / Crest Section */}
          <div className="relative mb-8 group">
             <div className="absolute -inset-12 bg-indigo-500/10 rounded-full blur-[80px] group-hover:bg-indigo-500/20 transition-all duration-1000"></div>
             <div className="relative w-32 h-32 md:w-44 md:h-44 flex items-center justify-center transition-all duration-700 hover:scale-105 transform-gpu">
               <img 
                 src="logo.png" 
                 alt="P.R.M. Shield" 
                 className="w-full h-full object-contain filter drop-shadow-[0_20px_40px_rgba(0,0,0,0.5)] brightness-110"
               />
             </div>
          </div>
          
          {/* Institution Header Box */}
          <div className="flex flex-col items-center gap-3 mb-8">
            <div className="flex items-center gap-4">
              <span className="h-px w-8 bg-indigo-500/30"></span>
              <span className="text-indigo-400 font-black uppercase tracking-[0.4em] text-[10px] md:text-xs">
                Since 2000
              </span>
              <span className="h-px w-8 bg-indigo-500/30"></span>
            </div>
            
            <div className="border border-white/10 px-8 py-4 rounded-xl bg-white/5 backdrop-blur-sm shadow-2xl">
              <h2 className="text-white font-black text-3xl md:text-5xl tracking-tighter leading-none uppercase">
                P.R.M. PUBLIC SCHOOL
              </h2>
            </div>
            
            <div className="flex flex-col items-center">
              <p className="text-white/60 text-sm md:text-base font-medium tracking-wide">Khekra, Baghpat, Uttar Pradesh</p>
              <p className="text-indigo-500 font-black tracking-[0.2em] uppercase text-[9px] md:text-[10px]">U.P. Education Board Affiliated</p>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-7xl lg:text-8xl text-white font-bold mb-8 leading-[1.1] tracking-tighter max-w-4xl">
            Nurturing <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-white to-indigo-300">Excellence</span> Every Day.
          </h1>
          
          <p className="text-lg md:text-xl text-slate-400 mb-10 leading-relaxed max-w-2xl font-light italic opacity-80">
            "{tagline}"
          </p>
          
          {/* CTA Buttons - Ensuring they are high enough to be seen */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            <a 
              href="#about" 
              className="group relative px-10 py-5 bg-white text-indigo-950 font-black rounded-2xl overflow-hidden transition-all hover:shadow-[0_0_40px_rgba(255,255,255,0.1)] text-xs md:text-sm text-center inline-block active:scale-95"
            >
              <span className="relative z-10 uppercase tracking-[0.2em]">Our Institution</span>
              <div className="absolute inset-0 bg-indigo-50 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
            </a>
            
            <a 
              href="https://drive.google.com/file/d/1XSsmnW2HWr0_wUculYjr3Y6JIRODZ5pp/view" 
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-3 px-10 py-5 bg-indigo-600/20 backdrop-blur-md border border-indigo-500/30 text-white font-black rounded-2xl hover:bg-indigo-600 hover:border-indigo-500 transition-all shadow-xl text-xs md:text-sm uppercase tracking-[0.2em] active:scale-95"
            >
              <svg className="w-4 h-4 text-indigo-400 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Enroll Now
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 opacity-20">
        <span className="text-[8px] uppercase tracking-[0.4em] text-white">Scroll</span>
        <div className="w-[1px] h-8 bg-gradient-to-b from-indigo-500 to-transparent rounded-full animate-bounce"></div>
      </div>
    </section>
  );
};

export default Hero;
