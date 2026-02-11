import React from 'react';
import { CATEGORIES } from '../constants';

export const Categories: React.FC = () => {
  return (
    <section id="about" className="relative py-32 bg-[#F5F1EA] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20 space-y-4">
          <h2 className="text-5xl md:text-6xl font-bold text-[#2C1810]">Koleksi Utama</h2>
          <div className="w-24 h-1.5 bg-[#8B5E3C] mx-auto rounded-full"></div>
          <p className="text-[#4B3621] max-w-2xl mx-auto text-xl font-light leading-relaxed">
            Menghadirkan spektrum rasa dari metode klasik hingga teknik brewing modern paling presisi.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {CATEGORIES.map((cat, idx) => (
            <div key={idx} className="group relative">
              <div className="relative h-[500px] mb-8 overflow-hidden rounded-[3rem] shadow-2xl transition-all duration-500 group-hover:shadow-3xl group-hover:-translate-y-2">
                <img 
                  src={cat.image} 
                  alt={cat.name} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#2C1810] via-transparent to-transparent opacity-40 group-hover:opacity-70 transition-opacity duration-500"></div>
                
                {/* Content Overlay */}
                <div className="absolute inset-0 flex flex-col justify-end p-10 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-4xl font-bold text-white mb-4 font-serif">{cat.name}</h3>
                  <p className="text-white/80 leading-relaxed text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    {cat.description}
                  </p>
                  <div className="mt-6 flex items-center gap-2 text-[#8B5E3C] font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                    <span>Lihat Detail</span>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Decorative Wave at the bottom */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] transform rotate-180">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[60px] md:h-[100px] fill-[#FAF7F2]">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg>
      </div>
    </section>
  );
};