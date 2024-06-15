import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProductGrid from "./components/ProductGrid";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <>
      <Navbar />
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

export default App;
