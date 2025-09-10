
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Categories from './components/Categories';
import ProductGrid from './components/ProductGrid';
import TrustBadges from './components/TrustBadges';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen font-sans">
      <div className="container mx-auto max-w-5xl bg-white shadow-2xl my-8 rounded-lg overflow-hidden">
        <Header />
        <main>
          <Hero />
          <div className="p-8 md:p-12">
            <Categories />
            <ProductGrid />
            <TrustBadges />
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;
