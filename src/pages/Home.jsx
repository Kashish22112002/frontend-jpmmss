import React from "react";
import Hero from "../components/Hero";
import ProductGrid from "../components/ProductGrid";
import Sidebar from "../components/Sidebar";
import ProductCarousel from "../components/ProductCarousel";
import products from "../components/Products/Products";

const Home = () => {
  return (
    <>
      <Hero />
      <ProductCarousel products={products} />
      <div className="flex">
        <Sidebar />
        <div className="flex-grow">
          <ProductGrid />
        </div>
      </div>
    </>
  );
};

export default Home;
