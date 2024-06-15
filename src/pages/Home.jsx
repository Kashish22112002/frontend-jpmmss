import React from 'react';
import Hero from '../components/Hero';
import ProductGrid from '../components/ProductGrid';
import Sidebar from '../components/Sidebar';

const Home = () => {
  return (
    <>
      <Hero />
      <div className="flex">
        <Sidebar />
        <div className="flex-grow">
          <ProductGrid />
        </div>
      </div>
    </>
  );
}

export default Home;
