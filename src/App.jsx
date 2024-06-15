import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import ViewProduct from "./components/Products/ViewProduct";
import Home from "./pages/Home";
import ContactForm from "./pages/ContactForm";
import Footer from "./components/Footer";
import products from "./components/Products/Products";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const handleNavigation = (e) => {
    console.log(e.target.value);
    setSelectedCategory(e.target.value);
  };

  const filteredProducts = selectedCategory === "all"
    ? products
    : products.filter(product => product.materialType === selectedCategory);

  return (
    <Router>
      <Navbar handleNavigation={handleNavigation} />
      <Routes>
        <Route path="/" element={<Home filteredProducts={filteredProducts} />} />
        <Route path="/product/:id" element={<ViewProduct />} />
        <Route path="/contact" element={<ContactForm />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
