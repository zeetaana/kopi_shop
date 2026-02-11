
import React from 'react';
import { Wave } from './Wave';

export const Footer: React.FC = () => {
  return (
    <footer id="contact" className="relative bg-[#FAF7F2] text-[#2C1810]">
      <Wave color="#2C1810" flip className="absolute top-0 left-0 w-full" />
      
      <div className="max-w-7xl mx-auto px-6 pt-32 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="space-y-6">
            <a href="#home" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-[#2C1810] rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-[#FAF7F2]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <span className="text-2xl font-bold tracking-tight text-[#2C1810]">AURA<span className="text-[#8B5E3C]">COFFEE</span></span>
            </a>
            <p className="text-[#4B3621] leading-relaxed">
              Membangun komunitas pecinta kopi melalui dedikasi terhadap kualitas dan keberlanjutan. Setiap cangkir adalah janji kenyamanan.
            </p>
            <div className="flex gap-4">
              {['facebook', 'instagram', 'twitter', 'youtube'].map((social) => (
                <a key={social} href={`#${social}`} className="w-10 h-10 rounded-full border border-[#2C1810]/10 flex items-center justify-center hover:bg-[#8B5E3C] hover:text-white transition-all">
                   <span className="sr-only">{social}</span>
                   <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482C19.138 20.161 22 16.416 22 12c0-5.523-4.477-10-10-10z" />
                   </svg>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-8">Tautan Cepat</h4>
            <ul className="space-y-4">
              <li><a href="#home" className="hover:text-[#8B5E3C] transition-colors">Beranda</a></li>
              <li><a href="#menu" className="hover:text-[#8B5E3C] transition-colors">Menu Favorit</a></li>
              <li><a href="#about" className="hover:text-[#8B5E3C] transition-colors">Tentang Kami</a></li>
              <li><a href="#blog" className="hover:text-[#8B5E3C] transition-colors">Blog & Artikel</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-8">Jam Operasional</h4>
            <ul className="space-y-4 text-[#4B3621]">
              <li className="flex justify-between"><span>Senin - Jumat</span> <span>08:00 - 22:00</span></li>
              <li className="flex justify-between"><span>Sabtu</span> <span>09:00 - 23:00</span></li>
              <li className="flex justify-between"><span>Minggu</span> <span>09:00 - 21:00</span></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-8">Kontak & Lokasi</h4>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <svg className="w-6 h-6 text-[#8B5E3C] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Jl. Senopati Raya No. 12, Kebayoran Baru, Jakarta Selatan</span>
              </li>
              <li className="flex gap-3">
                <svg className="w-6 h-6 text-[#8B5E3C] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>hello@auracoffee.com</span>
              </li>
              <li className="flex gap-3">
                <svg className="w-6 h-6 text-[#8B5E3C] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>(021) 555-0123</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-[#2C1810]/10 text-center text-sm text-[#4B3621]">
          <p>© {new Date().getFullYear()} Aura Coffee Roasters. All Rights Reserved. Crafted for Premium Lovers.</p>
        </div>
      </div>
    </footer>
  );
};
