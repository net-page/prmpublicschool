
import React from 'react';

interface SectionProps {
  id: string;
  title: string;
  bg?: string;
  children: React.ReactNode;
  dark?: boolean;
}

const Section: React.FC<SectionProps> = ({ id, title, bg = 'bg-white', children, dark = false }) => {
  return (
    <section id={id} className={`${bg} py-28 md:py-40 relative overflow-hidden scroll-mt-20`}>
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center mb-20 md:mb-24 text-center">
          <div className="flex items-center gap-4 mb-4">
             <span className={`h-px w-8 ${dark ? 'bg-indigo-500/30' : 'bg-indigo-200'}`}></span>
             <h2 className={`text-4xl md:text-6xl font-black tracking-tighter ${dark ? 'text-white' : 'text-slate-950'}`}>
               {title}
             </h2>
             <span className={`h-px w-8 ${dark ? 'bg-indigo-500/30' : 'bg-indigo-200'}`}></span>
          </div>
          <p className={`text-[10px] uppercase font-black tracking-[0.6em] ${dark ? 'text-indigo-400' : 'text-indigo-600'}`}>
            Excellence & Values
          </p>
        </div>
        {children}
      </div>
      
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 pointer-events-none opacity-5">
         <div className={`w-[800px] h-[800px] rounded-full blur-[120px] ${dark ? 'bg-indigo-500' : 'bg-slate-200'}`}></div>
      </div>
    </section>
  );
};

export default Section;
