import React from "react";
import Hero from "../components/Hero";
import ProductGrid from "../components/Products/ProductGrid";
import Sidebar from "../components/Sidebar";
import ProductCarousel from "../components/Products/ProductCarousel";
import products from "../components/Products/Products";
import TestimonialsCarousel from "../components/Testimonials/TestimonialsCarousel";

const Home = () => {
  return (
    <>
      <Hero />
      <div id="products" className="md:mt-6">
        <h2 className="text-3xl font-bold text-center md:mb-6 text-green-800">
          Best Sellers
        </h2>
        <ProductCarousel products={products} />
      </div>
          <ProductGrid />
      <div id="testimonials">
        <TestimonialsCarousel />
      </div>
    </>
  );
};

export default Home;
