import React from 'react';
import { BLOG_POSTS } from '../constants';

export const Blog: React.FC = () => {
  return (
    <section id="blog" className="py-32 bg-[#2C1810] relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#8B5E3C] opacity-10 blur-[100px] rounded-full"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-white opacity-5 blur-[80px] rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-24 space-y-4">
          <h2 className="text-5xl md:text-6xl font-bold text-white">Wawasan Kopi</h2>
          <div className="w-24 h-1.5 bg-[#8B5E3C] mx-auto rounded-full"></div>
          <p className="text-[#FAF7F2]/60 max-w-2xl mx-auto text-xl font-light">
            Menyelami lebih dalam dunia kopi bersama tim ahli kami.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {BLOG_POSTS.map((post) => (
            <div key={post.id} className="group relative flex flex-col md:flex-row bg-[#FAF7F2] rounded-[3.5rem] overflow-hidden shadow-2xl transition-transform duration-500 hover:-translate-y-2">
              <div className="md:w-[45%] overflow-hidden relative">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 min-h-[350px]"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500"></div>
              </div>
              <div className="md:w-[55%] p-12 flex flex-col justify-center gap-6">
                <div className="flex items-center gap-4 text-sm font-bold tracking-widest uppercase">
                  <span className="text-[#8B5E3C]">{post.date}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2C1810]/20"></span>
                  <span className="text-[#2C1810]/40">{post.author}</span>
                </div>
                <h3 className="text-3xl font-bold text-[#2C1810] font-serif leading-tight group-hover:text-[#8B5E3C] transition-colors duration-300">
                  {post.title}
                </h3>
                <p className="text-[#4B3621]/70 text-lg line-clamp-3 font-light">
                  {post.excerpt}
                </p>
                <a href={`#blog/${post.id}`} className="inline-flex items-center gap-3 font-bold text-[#2C1810] group/link">
                  <span className="border-b-2 border-transparent group-hover/link:border-[#8B5E3C] transition-all">Baca Selengkapnya</span>
                  <div className="w-10 h-10 rounded-full bg-[#2C1810] text-white flex items-center justify-center transform group-hover/link:translate-x-2 transition-all">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};