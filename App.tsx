
import React, { useState, useEffect } from 'react';
import { fetchSchoolInfo } from './services/schoolService';
import { AppState, SchoolData } from './types';
import Header from './components/Header';
import Hero from './components/Hero';
import Section from './components/Section';
import Footer from './components/Footer';
import logo from './assets/logo.svg';

const App: React.FC = () => {
  const [state, setState] = useState<AppState>({
    loading: true,
    error: null,
    data: null,
  });

  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const init = async () => {
      try {
        const data = await fetchSchoolInfo();
        setState({ loading: false, error: null, data });
      } catch (err) {
        setState({ loading: false, error: "Failed to load site data.", data: null });
      }
    };

    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    init();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (state.loading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-slate-950">
        <div className="relative mb-10 w-24 h-24">
          <img 
            src={logo} 
            alt="Loading..." 
            className="w-full h-full object-contain animate-pulse filter drop-shadow-[0_0_15px_rgba(99,102,241,0.5)]"
          />
        </div>
        <div className="flex flex-col items-center gap-4">
          <p className="text-white font-black text-sm tracking-[0.4em] uppercase opacity-50">
            PRM Public School
          </p>
          <div className="h-[1px] w-32 bg-slate-800 relative overflow-hidden">
            <div className="absolute inset-0 bg-indigo-500 w-1/2 animate-[loading_1.5s_infinite_linear]"></div>
          </div>
        </div>
        <style>{`
          @keyframes loading {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(200%); }
          }
        `}</style>
      </div>
    );
  }

  const { data } = state;
  if (!data) return null;

  return (
    <div className="flex flex-col min-h-screen scroll-smooth selection:bg-indigo-100 selection:text-indigo-900">
      <Header schoolName={data.name} />
      
      <main className="flex-grow">
        <Hero 
          name={data.name} 
          tagline={data.tagline} 
          contact={data.contact}
        />
        
        <Section id="about" title="Our Institution" bg="bg-white">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <span className="text-indigo-600 font-black text-xs uppercase tracking-widest">About Us</span>
                <p className="text-slate-600 leading-relaxed text-lg font-light">
                  {data.about}
                </p>
              </div>
              <div className="grid sm:grid-cols-2 gap-8">
                <div className="p-8 bg-slate-50 border border-slate-100 rounded-[2rem] transition-all hover:bg-white hover:shadow-xl group">
                  <div className="w-12 h-12 bg-indigo-600 text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-indigo-100 group-hover:-translate-y-1 transition-transform">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                  </div>
                  <h4 className="font-bold text-slate-900 mb-2 uppercase text-xs tracking-widest">Our Mission</h4>
                  <p className="text-slate-500 text-sm leading-relaxed">{data.mission}</p>
                </div>
                <div className="p-8 bg-slate-50 border border-slate-100 rounded-[2rem] transition-all hover:bg-white hover:shadow-xl group">
                  <div className="w-12 h-12 bg-indigo-600 text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-indigo-100 group-hover:-translate-y-1 transition-transform">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                  </div>
                  <h4 className="font-bold text-slate-900 mb-2 uppercase text-xs tracking-widest">Our Vision</h4>
                  <p className="text-slate-500 text-sm leading-relaxed">{data.vision}</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-indigo-600/5 rounded-[3rem] -rotate-2"></div>
              <img 
                src="https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&q=80&w=1200" 
                alt="PRM School Life" 
                className="rounded-[2.5rem] shadow-2xl relative z-10 w-full transform transition-transform hover:scale-[1.02] duration-700"
              />
            </div>
          </div>
        </Section>

        <Section id="academics" title="Academics" bg="bg-slate-50">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.academics.map((item, idx) => {
              const [title, desc] = item.includes(':') ? item.split(':') : [item, "Developing core competencies through modern pedagogical techniques."];
              return (
                <div key={idx} className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-slate-100 hover:shadow-2xl transition-all duration-500 group">
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-indigo-600 font-black text-2xl opacity-20">0{idx + 1}</span>
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">{title}</h3>
                  </div>
                  <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
                </div>
              );
            })}
          </div>
        </Section>

        <Section id="facilities" title="World-Class Facilities" bg="bg-white">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {data.facilities.map((facility, idx) => (
              <div key={idx} className="group relative overflow-hidden p-10 rounded-[2rem] bg-slate-50 border border-slate-100 text-center transition-all hover:-translate-y-2 hover:bg-indigo-600 hover:shadow-2xl active:scale-95">
                <div className="relative z-10">
                  <div className="w-12 h-12 mx-auto bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-white/20 group-hover:text-white transition-colors">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <span className="font-black text-slate-800 text-[10px] uppercase tracking-[0.2em] group-hover:text-white transition-colors">{facility}</span>
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section id="contact" title="Admissions & Inquiry" bg="bg-slate-950" dark>
          <div className="grid lg:grid-cols-2 gap-20">
            <div className="space-y-12">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-indigo-600/20 rounded-2xl flex items-center justify-center border border-indigo-500/20">
                     <svg className="w-6 h-6 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-sm tracking-widest uppercase mb-1">Call Administration</h4>
                    <p className="text-slate-400 font-mono">{data.contact.phone}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-indigo-600/20 rounded-2xl flex items-center justify-center border border-indigo-500/20">
                     <svg className="w-6 h-6 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /></svg>
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-sm tracking-widest uppercase mb-1">Our Location</h4>
                    <p className="text-slate-400 text-sm">{data.contact.address}</p>
                  </div>
                </div>
              </div>

              <div className="p-10 bg-indigo-600 rounded-[2.5rem] shadow-2xl shadow-indigo-600/20 text-white relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform">
                  <svg className="w-32 h-32" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
                </div>
                <h3 className="text-3xl font-black mb-4 relative z-10">Start the Journey.</h3>
                <p className="text-indigo-100 mb-8 max-w-sm relative z-10 opacity-80">Our admissions for the upcoming academic session are now open. Secure your child's seat today.</p>
                <a 
                  href="https://drive.google.com/file/d/1XSsmnW2HWr0_wUculYjr3Y6JIRODZ5pp/view" 
                  target="_blank"
                  className="inline-flex items-center gap-4 bg-white text-indigo-900 px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-indigo-50 transition-colors relative z-10 active:scale-95"
                >
                  Download Form (PDF)
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" /></svg>
                </a>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-xl p-12 rounded-[3rem] border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-8">Inquiry Form</h3>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] text-indigo-400 uppercase font-black tracking-widest px-1">Name</label>
                    <input type="text" className="w-full bg-slate-900 border border-slate-800 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-indigo-500 transition-colors" placeholder="Parent's Name" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] text-indigo-400 uppercase font-black tracking-widest px-1">Contact</label>
                    <input type="tel" className="w-full bg-slate-900 border border-slate-800 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-indigo-500 transition-colors" placeholder="Phone Number" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] text-indigo-400 uppercase font-black tracking-widest px-1">Message</label>
                  <textarea className="w-full bg-slate-900 border border-slate-800 rounded-2xl px-6 py-4 text-white h-32 resize-none focus:outline-none focus:border-indigo-500 transition-colors" placeholder="Tell us about your child..."></textarea>
                </div>
                <button className="w-full py-5 bg-white text-slate-950 rounded-2xl font-black uppercase tracking-[0.2em] text-xs hover:bg-indigo-50 transition-colors active:scale-[0.98]">Submit Request</button>
              </form>
            </div>
          </div>
        </Section>
      </main>

      <Footer groundingSources={data.groundingSources} schoolName={data.name} />

      {/* Floating Scroll Button */}
      <button 
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 w-14 h-14 bg-indigo-600 text-white rounded-2xl flex items-center justify-center shadow-2xl transition-all duration-500 z-[100] ${showScrollTop ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-20 opacity-0 scale-50'}`}
      >
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" /></svg>
      </button>
    </div>
  );
};

export default App;