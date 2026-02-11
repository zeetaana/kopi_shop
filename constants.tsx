
import { Product, BlogArticle, NavItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'Menu', href: '#menu' },
  { label: 'About', href: '#about' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
];

export const CATEGORIES = [
  {
    name: 'Espresso',
    description: 'Ekstraksi kopi murni dengan rasa yang intens dan kaya.',
    image: 'https://images.unsplash.com/photo-1510707513151-471d24585460?auto=format&fit=crop&q=80&w=800'
  },
  {
    name: 'Cappuccino',
    description: 'Keseimbangan sempurna antara espresso, steamed milk, dan busa tebal.',
    image: 'https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&q=80&w=800'
  },
  {
    name: 'Latte',
    description: 'Paduan lembut espresso dengan susu creamy yang memanjakan lidah.',
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=800'
  }
];

export const FEATURED_PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Signature Aura Blend',
    description: 'Biji kopi pilihan dengan note cokelat hitam dan karamel.',
    price: 'Rp 45.000',
    image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?auto=format&fit=crop&q=80&w=600',
    category: 'Manual Brew'
  },
  {
    id: '2',
    name: 'Velvet Vanilla Latte',
    description: 'Espresso premium dengan sirup vanilla organik dan susu segar.',
    price: 'Rp 38.000',
    image: 'https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?auto=format&fit=crop&q=80&w=600',
    category: 'Iced Coffee'
  },
  {
    id: '3',
    name: 'Golden Caramel Macchiato',
    description: 'Lapisan espresso dan susu dengan saus karamel premium.',
    price: 'Rp 42.000',
    image: 'https://images.unsplash.com/photo-1485808191679-5f86510681a2?auto=format&fit=crop&q=80&w=600',
    category: 'Sweet Treats'
  }
];

export const BLOG_POSTS: BlogArticle[] = [
  {
    id: '1',
    title: 'Seni di Balik Secangkir Espresso Sempurna',
    excerpt: 'Temukan bagaimana variabel suhu dan tekanan menciptakan harmoni rasa yang luar biasa dalam espresso kami.',
    date: '15 Mei 2024',
    author: 'Chief Barista',
    image: 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '2',
    title: 'Menelusuri Jejak Biji Kopi Single Origin Kami',
    excerpt: 'Perjalanan kami ke dataran tinggi untuk membawa biji kopi terbaik langsung dari petani lokal yang berdedikasi.',
    date: '10 Mei 2024',
    author: 'Sourcing Team',
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=800'
  }
];
