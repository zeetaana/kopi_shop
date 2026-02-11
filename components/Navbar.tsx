import React, { useState, useEffect } from 'react';
import { NAV_ITEMS } from '../constants';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-[100] transition-all duration-500 ${
      isScrolled 
        ? 'bg-[#FAF7F2]/80 backdrop-blur-xl shadow-[0_10px_30px_-10px_rgba(44,24,16,0.1)] py-4' 
        : 'bg-transparent py-8'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-3 group">
          <div className="w-12 h-12 bg-[#2C1810] rounded-2xl flex items-center justify-center group-hover:bg-[#8B5E3C] transition-all duration-500 shadow-lg group-hover:rotate-12">
            <svg className="w-7 h-7 text-[#FAF7F2]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20,3H4v10c0,2.21,1.79,4,4,4h6c2.21,0,4-1.79,4-4v-3h2c1.1,0,2-0.9,2-2V5C22,3.9,21.1,3,20,3z M20,8h-2V5h2V8z M4,19h16v2H4V19z" />
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="text-2xl font-black tracking-tighter text-[#2C1810] leading-none">AURA</span>
            <span className="text-xs font-bold tracking-[0.3em] text-[#8B5E3C] leading-none mt-1 uppercase">Roasters</span>
          </div>
        </a>

        {/* Desktop Menu */}
        <div className="hidden lg:flex gap-12">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-[#2C1810] font-bold text-sm uppercase tracking-widest hover:text-[#8B5E3C] transition-all relative group"
            >
              {item.label}
              <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-[#8B5E3C] transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden lg:block">
          <button className="bg-[#2C1810] text-[#FAF7F2] px-10 py-3.5 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-[#8B5E3C] transition-all transform hover:scale-105 shadow-xl active:scale-95">
            Reservasi
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden w-12 h-12 flex items-center justify-center rounded-2xl bg-white/50 backdrop-blur-md text-[#2C1810] shadow-sm"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`lg:hidden fixed inset-0 top-[88px] w-full bg-[#FAF7F2] transition-all duration-500 ease-in-out z-50 transform ${
        isMobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'
      }`}>
        <div className="p-8 flex flex-col gap-6 text-center h-full justify-center">
          {NAV_ITEMS.map((item, idx) => (
            <a
              key={item.label}
              href={item.href}
              className={`text-4xl font-bold text-[#2C1810] hover:text-[#8B5E3C] transition-all transform ${isMobileMenuOpen ? 'translate-y-0' : 'translate-y-10'}`}
              style={{ transitionDelay: `${idx * 50}ms` }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <div className="mt-8">
            <button className="bg-[#2C1810] text-[#FAF7F2] w-full py-5 rounded-full text-xl font-bold">
              Order Now
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};