import React from 'react';
import { useParams } from 'react-router-dom';

// Example product data, in a real application you would fetch this from an API
const products = [
  { id: 1, name: 'Product 1', price: 29.99, image: 'https://via.placeholder.com/150', details: 'Detailed description of Product 1' },
  { id: 2, name: 'Product 2', price: 49.99, image: 'https://via.placeholder.com/150', details: 'Detailed description of Product 2' },
  { id: 3, name: 'Product 3', price: 19.99, image: 'https://via.placeholder.com/150', details: 'Detailed description of Product 3' },
  { id: 4, name: 'Product 4', price: 99.99, image: 'https://via.placeholder.com/150', details: 'Detailed description of Product 4' },
];

const ViewProduct = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <div className="flex">
        <img src={product.image} alt={product.name} className="w-1/2 h-auto" />
        <div className="ml-4">
          <h2 className="text-3xl font-bold">{product.name}</h2>
          <p className="text-xl text-gray-600 mt-2">${product.price}</p>
          <p className="mt-4">{product.details}</p>
          <button className="mt-4 px-4 py-2 bg-blue-500 text-white font-semibold rounded">Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

export default ViewProduct;
