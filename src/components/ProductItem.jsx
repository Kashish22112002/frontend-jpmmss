// ProductItem.js
import React from 'react';

const ProductItem = ({ product }) => {
  return (
    <div className="product-card bg-orange-50 rounded-lg overflow-hidden shadow-md p-4">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-auto max-h-48 object-contain rounded-md mb-4"
      />
      <div className="text-center">
        <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
        <p className="text-gray-700">${product.price}</p>
        <p>⭐⭐⭐⭐</p>
        <button className="bg-green-800 hover:bg-green-900 text-white font-semibold px-4 py-2 rounded mt-2">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductItem;
