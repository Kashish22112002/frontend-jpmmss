// ProductItem.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import ShowMoreBtn from '../ShowMoreBtn';

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
        <p>⭐⭐⭐⭐</p>
        <div className="flex items-center justify-around mt-4">
          <p className="text-gray-600 mt-2 font-bold">Rs.{product.price}</p>
            <ShowMoreBtn onClick={handleBuyNow} />
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
