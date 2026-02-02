import React, { useState, useEffect } from 'react';
import logo from '../assets/logo.svg';

interface HeaderProps {
  schoolName: string;
}

const Header: React.FC<HeaderProps> = ({ schoolName }) => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Academics', href: '#academics' },
    { label: 'Facilities', href: '#facilities' },
    { label: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    { 
      name: 'Facebook', 
      href: 'https://www.facebook.com/profile.php?id=61574101725350',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
        </svg>
      )
    },
    { 
      name: 'Instagram', 
      href: 'https://www.instagram.com/p.r.m.publicschool?utm_source=qr&igsh=MWx4dXhieDZjb2d2eg==',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
        </svg>
      )
    }
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      setIsMenuOpen(false);
      const targetId = href.replace('#', '');
      if (targetId === '') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }
      const elem = document.getElementById(targetId);
      if (elem) {
        const offset = 80;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elemRect = elem.getBoundingClientRect().top;
        const elemPosition = elemRect - bodyRect;
        const offsetPosition = elemPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-[600] transition-all duration-500 ${
        scrolled || isMenuOpen 
          ? 'bg-white shadow-xl py-2' 
          : 'bg-transparent py-4'
      }`}>
        <div className="container mx-auto px-6 flex items-center justify-between relative z-[610]">
          <a href="#" className="flex items-center gap-3 group" onClick={(e) => handleLinkClick(e, '#')}>
            <div className={`relative flex items-center justify-center transition-all duration-500 ${scrolled ? 'w-10 h-10' : 'w-12 h-12'}`}>
              <img 
                src={logo} 
                alt="Logo" 
                className={`relative z-10 w-full h-full object-contain transition-all duration-300 ${scrolled || isMenuOpen ? 'filter drop-shadow-sm' : 'filter drop-shadow-md'}`}
              />
            </div>
            <div className="flex flex-col">
              <span className={`font-black text-xs md:text-lg leading-none transition-colors duration-300 ${
                scrolled || isMenuOpen ? 'text-indigo-950' : 'text-white'
              }`}>
                {schoolName.toUpperCase()}
              </span>
              <span className={`text-[7px] md:text-[9px] uppercase tracking-widest font-bold transition-colors duration-300 ${
                scrolled || isMenuOpen ? 'text-indigo-600' : 'text-indigo-300'
              }`}>
                Khekra, Baghpat
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <a 
                key={item.label}
                href={item.href}
                onClick={(e) => handleLinkClick(e, item.href)}
                className={`text-[10px] font-bold uppercase tracking-widest transition-colors hover:text-indigo-500 ${
                  scrolled ? 'text-slate-700' : 'text-white'
                }`}
              >
                {item.label}
              </a>
            ))}
            <a 
              href="https://drive.google.com/file/d/1XSsmnW2HWr0_wUculYjr3Y6JIRODZ5pp/view" 
              target="_blank"
              rel="noopener noreferrer"
              className={`px-5 py-2 rounded-xl font-black text-[10px] uppercase tracking-widest transition-all ${
                scrolled 
                  ? 'bg-indigo-900 text-white hover:bg-indigo-800 shadow-lg shadow-indigo-200' 
                  : 'bg-white text-indigo-900 hover:bg-indigo-50 shadow-md'
              }`}
            >
              Admissions
            </a>
          </nav>

          {/* Hamburger Button */}
          <button 
            className="lg:hidden p-4 -mr-4 focus:outline-none transition-transform active:scale-90"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
          >
            <div className="w-6 flex flex-col items-end gap-1.5 relative h-4">
              <span className={`h-0.5 absolute transition-all duration-300 ease-in-out ${isMenuOpen ? 'w-6 rotate-45 top-2 bg-indigo-950' : `w-6 top-0 ${scrolled ? 'bg-indigo-950' : 'bg-white'}`}`}></span>
              <span className={`h-0.5 absolute transition-all duration-200 ease-in-out top-[7px] ${isMenuOpen ? 'opacity-0 right-0' : `w-4 right-0 ${scrolled ? 'bg-indigo-950' : 'bg-white'}`}`}></span>
              <span className={`h-0.5 absolute transition-all duration-300 ease-in-out ${isMenuOpen ? 'w-6 -rotate-45 top-2 bg-indigo-950' : `w-5 bottom-0 ${scrolled ? 'bg-indigo-950' : 'bg-white'}`}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Nav Overlay - Fixed Solid Background */}
        <div className={`fixed inset-0 bg-white transition-all duration-500 ease-in-out lg:hidden z-[550] flex flex-col h-screen ${
          isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
        }`}>
          <div className="flex-grow flex flex-col items-center justify-center gap-6 p-10 pt-24 overflow-y-auto">
            {navItems.map((item, idx) => (
              <a 
                key={item.label}
                href={item.href}
                onClick={(e) => handleLinkClick(e, item.href)}
                className={`text-xl font-black text-indigo-950 uppercase tracking-[0.2em] transition-all transform ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                style={{ transitionDelay: `${idx * 50}ms` }}
              >
                {item.label}
              </a>
            ))}
            <a 
              href="https://drive.google.com/file/d/1XSsmnW2HWr0_wUculYjr3Y6JIRODZ5pp/view"
              target="_blank"
              rel="noopener noreferrer"
              className={`mt-4 px-8 py-4 rounded-2xl bg-indigo-900 text-white font-black text-xs uppercase tracking-widest shadow-xl transition-all transform ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
              style={{ transitionDelay: `${navItems.length * 50}ms` }}
            >
              Admissions
            </a>
          </div>

          {/* Mobile Footer / Social Icons */}
          <div className={`flex items-center justify-center gap-8 p-12 border-t border-slate-100 bg-slate-50 transition-all duration-700 delay-300 ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            {socialLinks.map((social) => (
              <a 
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-900 hover:text-indigo-600 transition-all p-4 bg-white rounded-full shadow-sm hover:shadow-md active:scale-90"
                aria-label={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;