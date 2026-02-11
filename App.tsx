
import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Categories } from './components/Categories';
import { FeaturedProducts } from './components/FeaturedProducts';
import { Blog } from './components/Blog';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="relative">
      <Navbar />
      <main>
        <Hero />
        <Categories />
        <FeaturedProducts />
        <Blog />
      </main>
      <Footer />
    </div>
  );
};

export default App;
