import React from 'react';
import { useParams } from 'react-router-dom';
import products from '../components/Products/Products';

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
