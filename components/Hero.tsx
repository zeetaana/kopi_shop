import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-[#FAF7F2]">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[#EDE7DE] -skew-x-12 transform translate-x-32 z-0 hidden lg:block opacity-60"></div>
      
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center z-10">
        <div className="space-y-8">
          <div className="inline-block px-4 py-2 bg-[#8B5E3C]/10 rounded-full text-[#8B5E3C] font-semibold tracking-widest text-xs uppercase animate-fadeInUp">
            The Finest Roastery in Jakarta
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold leading-[1.1] text-[#2C1810] animate-fadeInUp animate-delay-1">
            Seni Seduh <br />
            <span className="text-[#8B5E3C] italic font-serif">Kesempurnaan.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-[#4B3621] max-w-lg leading-relaxed font-light animate-fadeInUp animate-delay-2">
            Menciptakan harmoni rasa melalui biji kopi pilihan Nusantara. Aura Coffee menghadirkan kemewahan dalam setiap cangkir untuk menemani momen berharga Anda.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5 pt-4 animate-fadeInUp animate-delay-3">
            <button className="bg-[#2C1810] text-[#FAF7F2] px-12 py-5 rounded-full font-bold text-lg hover:bg-[#4B3621] transition-all transform hover:scale-105 shadow-xl shadow-[#2C1810]/20 active:scale-95">
              Order Now
            </button>
            <button className="border-2 border-[#2C1810] text-[#2C1810] px-12 py-5 rounded-full font-bold text-lg hover:bg-[#2C1810] hover:text-[#FAF7F2] transition-all transform hover:scale-105 active:scale-95">
              Explore Menu
            </button>
          </div>
          
          <div className="flex items-center gap-6 pt-12 animate-fadeInUp animate-delay-3">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map(i => (
                <img 
                  key={i} 
                  src={`https://i.pravatar.cc/150?u=${i + 10}`} 
                  className="w-14 h-14 rounded-full border-4 border-[#FAF7F2] object-cover shadow-sm" 
                  alt="customer" 
                />
              ))}
            </div>
            <div className="text-sm">
              <p className="text-[#2C1810] font-bold text-lg leading-none">15,000+</p>
              <p className="text-[#4B3621]/70 font-medium">Coffee Lovers Served</p>
            </div>
          </div>
        </div>

        <div className="relative group perspective-1000 animate-fadeInUp animate-delay-2 hidden md:block">
          <div className="relative z-10 rounded-[4rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(44,24,16,0.3)] transform rotate-2 group-hover:rotate-0 transition-all duration-1000 ease-out">
            <img 
              src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=1000" 
              alt="Premium Coffee Pour" 
              className="w-full h-auto object-cover aspect-[4/5] scale-105 group-hover:scale-100 transition-transform duration-1000"
            />
          </div>
          {/* Decorative Elements */}
          <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-[#8B5E3C] rounded-full z-0 blur-[80px] opacity-20"></div>
          <div className="absolute -top-12 -right-12 border-[12px] border-[#EDE7DE] w-72 h-72 rounded-full z-0 opacity-40"></div>
          
          {/* Floating Card */}
          <div className="absolute bottom-12 -left-16 bg-white/90 backdrop-blur-lg p-6 rounded-3xl shadow-2xl z-20 border border-white/20 transform -rotate-3 group-hover:rotate-0 transition-all duration-700">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-[#8B5E3C] rounded-2xl flex items-center justify-center text-white">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                </svg>
              </div>
              <div>
                <p className="text-xs text-[#8B5E3C] font-bold uppercase tracking-widest">Premium Choice</p>
                <p className="text-[#2C1810] font-bold">Award Winning Beans</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};