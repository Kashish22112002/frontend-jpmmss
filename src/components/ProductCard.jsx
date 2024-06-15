import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{product.name}</h3>
        <p className="text-gray-600 mt-2">${product.price}</p>
        <button className="mt-4 px-4 py-2 bg-green-800 text-orange-50 font-semibold rounded">Add to Cart</button>
      </div>
    </div>
  );
}

export default ProductCard;