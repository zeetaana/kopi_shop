import React, { useState } from 'react';
import { FEATURED_PRODUCTS } from '../constants';

export const FeaturedProducts: React.FC = () => {
  const [favorites, setFavorites] = useState<Record<string, boolean>>({});

  const toggleFavorite = (id: string) => {
    setFavorites(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section id="menu" className="relative py-32 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-end mb-20 gap-8">
          <div className="text-center lg:text-left">
            <h2 className="text-5xl md:text-6xl font-bold text-[#2C1810] mb-6">Menu Unggulan</h2>
            <p className="text-[#4B3621] text-xl font-light max-w-xl">
              Kurasi menu favorit pilihan barista untuk pengalaman kopi yang tak terlupakan.
            </p>
          </div>
          <a href="#menu" className="group flex items-center gap-3 bg-[#2C1810] text-white px-8 py-4 rounded-full font-bold hover:bg-[#8B5E3C] transition-all shadow-lg">
            Semua Menu
            <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {FEATURED_PRODUCTS.map((product) => (
            <div key={product.id} className="group bg-white p-2 rounded-[3.5rem] shadow-sm hover:shadow-3xl transition-all duration-500 border border-transparent hover:border-[#8B5E3C]/10">
              <div className="relative aspect-square overflow-hidden rounded-[3rem]">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <button 
                  onClick={() => toggleFavorite(product.id)}
                  className={`absolute top-6 right-6 w-14 h-14 rounded-2xl flex items-center justify-center transition-all shadow-xl backdrop-blur-md ${
                    favorites[product.id] 
                      ? 'bg-red-500 text-white' 
                      : 'bg-white/80 text-[#2C1810] hover:bg-white'
                  }`}
                >
                  <svg className="w-6 h-6" fill={favorites[product.id] ? "currentColor" : "none"} stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </button>
                <div className="absolute bottom-6 left-6 bg-[#2C1810]/80 backdrop-blur-md px-5 py-2 rounded-full text-xs font-bold text-white uppercase tracking-widest">
                  {product.category}
                </div>
              </div>
              
              <div className="p-8 space-y-6">
                <div className="flex justify-between items-start gap-4">
                  <h3 className="text-3xl font-bold text-[#2C1810] leading-tight font-serif">{product.name}</h3>
                  <span className="text-[#8B5E3C] font-bold text-2xl">{product.price}</span>
                </div>
                <p className="text-[#4B3621]/70 font-light text-lg leading-relaxed">
                  {product.description}
                </p>
                <button className="w-full py-5 bg-[#FAF7F2] border-2 border-[#2C1810]/5 rounded-full font-bold text-[#2C1810] hover:bg-[#2C1810] hover:text-white hover:border-[#2C1810] transition-all transform active:scale-95 shadow-sm">
                  Add to Order
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};