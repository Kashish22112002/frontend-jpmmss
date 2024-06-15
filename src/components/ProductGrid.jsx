import React from 'react';
import ProductCard from './ProductCard';

const products = [
  { id: 1, name: 'Product 1', price: 29.99, image: 'https://via.placeholder.com/150' },
  { id: 2, name: 'Product 2', price: 49.99, image: 'https://via.placeholder.com/150' },
  { id: 3, name: 'Product 3', price: 19.99, image: 'https://via.placeholder.com/150' },
  { id: 4, name: 'Product 4', price: 99.99, image: 'https://via.placeholder.com/150' },
  { id: 5, name: 'Product 5', price: 99.99, image: 'https://via.placeholder.com/150' },
  { id: 6, name: 'Product 6', price: 99.99, image: 'https://via.placeholder.com/150' },
  { id: 7, name: 'Product 7', price: 99.99, image: 'https://via.placeholder.com/150' },
  { id: 8, name: 'Product 8', price: 99.99, image: 'https://via.placeholder.com/150' },
  // Add more products as needed
];

const ProductGrid = () => {
  return (
    <section className="px-6 container py-12 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8 text-green-800">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProductGrid;
