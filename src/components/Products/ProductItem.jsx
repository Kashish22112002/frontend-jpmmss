// ProductItem.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProductItem = ({ product }) => {

  const navigate = useNavigate();

  const handleBuyNow = () => {
    navigate(`/product/${product.id}`);
  };

  return (
    <div className="product-card bg-orange-50 rounded-lg overflow-hidden shadow-md p-4">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-auto max-h-48 object-contain rounded-md mb-4"
      />
      <div className="text-center">
        <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
        <p className="text-gray-700">Rs.{product.price}</p>
        <p>⭐⭐⭐⭐</p>
        <button onClick={handleBuyNow} className="bg-green-800 hover:bg-green-900 text-white font-semibold px-4 py-2 rounded mt-2">
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default ProductItem;
