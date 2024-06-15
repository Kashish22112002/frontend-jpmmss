import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  const handleBuyNow = () => {
    navigate(`/product/${product.id}`);
  };

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{product.name}</h3>
        <p className="text-gray-600 mt-2">${product.price}</p>
        <div className="mt-4 flex space-x-2">
          <button className="px-4 py-2 bg-green-800 text-orange-50 font-semibold rounded"
          onClick={handleBuyNow}>
            Buy Now
          </button>
          <button
            className="px-4 py-2 border border-green-800 text-green-800 font-semibold rounded"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
