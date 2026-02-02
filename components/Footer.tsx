
import React from 'react';
import { GroundingLink } from '../types';

interface FooterProps {
  schoolName: string;
  groundingSources: GroundingLink[];
}

const Footer: React.FC<FooterProps> = ({ schoolName, groundingSources }) => {
  const links = [
    { name: 'Home', href: '#' },
    { name: 'About Us', href: '#about' },
    { name: 'Academics', href: '#academics' },
    { name: 'Facilities', href: '#facilities' },
    { name: 'Contact Us', href: '#contact' },
  ];

  const socialLinks = [
    { name: 'Facebook', href: 'https://www.facebook.com/profile.php?id=61574101725350' },
    { name: 'Instagram', href: 'https://www.instagram.com/p.r.m.publicschool?utm_source=qr&igsh=MWx4dXhieDZjb2d2eg==' }
  ];

  return (
    <footer className="bg-slate-950 text-slate-400 py-20 border-t border-slate-900">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-16 pb-20">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-5 mb-8">
              <div className="w-20 h-20 rounded-2xl bg-white/5 p-3 flex items-center justify-center border border-white/10 shadow-lg">
                <img src="logo.png" alt="PRM logo" className="w-full h-full object-contain filter brightness-110" />
              </div>
              <div className="flex flex-col">
                <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tighter uppercase">
                  PRM <span className="text-indigo-500">PUBLIC SCHOOL</span>
                </h3>
                <span className="text-[10px] text-slate-600 uppercase tracking-[0.3em] font-bold">Nurturing Excellence Since 2000</span>
              </div>
            </div>
            <p className="max-w-md text-base md:text-lg leading-relaxed mb-10 text-slate-500">
              Dedicated to providing a world-class education that empowers students to reach their full potential through innovation, values, and community engagement.
            </p>
            <div className="flex gap-4">
              {socialLinks.map(social => (
                <a 
                  key={social.name} 
                  href={social.href} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="px-6 py-3 rounded-xl bg-slate-900 border border-slate-800 text-xs font-bold uppercase tracking-widest hover:bg-indigo-600 hover:text-white hover:border-indigo-600 transition-all"
                >
                  {social.name}
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-white mb-8 uppercase tracking-widest text-xs">Quick Navigation</h4>
            <ul className="space-y-4">
              {links.map(link => (
                <li key={link.name}>
                  <a href={link.href} className="hover:text-white transition-colors flex items-center gap-2 group text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 scale-0 group-hover:scale-100 transition-transform"></span>
                    {link.name}
                  </a>
                </li>
              ))}
              <li>
                <a 
                  href="https://drive.google.com/file/d/1XSsmnW2HWr0_wUculYjr3Y6JIRODZ5pp/view" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-indigo-400 font-bold hover:text-indigo-300 transition-colors flex items-center gap-2 mt-4 text-sm"
                >
                  Admission Form (PDF)
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-8 uppercase tracking-widest text-xs">School Details</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex gap-3">
                 <span className="text-indigo-500 font-bold">Address:</span>
                 <span>Khekra, Baghpat, UP-250101</span>
              </li>
              <li className="flex gap-3">
                 <span className="text-indigo-500 font-bold">Email:</span>
                 <a href="mailto:prmpublicschool@gmail.com" className="hover:text-white">prmpublicschool@gmail.com</a>
              </li>
              <li className="pt-4">
                <h4 className="font-bold text-white mb-4 uppercase tracking-widest text-[10px]">Sources</h4>
                {groundingSources.map((source, idx) => (
                  <a 
                    key={idx}
                    href={source.uri} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-start gap-2 hover:text-indigo-400 transition text-xs leading-tight mb-2"
                  >
                    <svg className="w-3 h-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101" /></svg>
                    {source.title || 'Official Listing'}
                  </a>
                ))}
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-10 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-600">
          <p>© {new Date().getFullYear()} {schoolName}. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Compliance</a>
            <a 
              href="https://drive.google.com/file/d/1XSsmnW2HWr0_wUculYjr3Y6JIRODZ5pp/view" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-white transition-colors"
            >
              Admissions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
