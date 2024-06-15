import React from "react";
import { useNavigate } from "react-router-dom";
import ShowMoreBtn from "../ShowMoreBtn";

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
        <div className="flex items-center justify-between">
          <p className="text-gray-600 mt-2">Rs.{product.price}</p>
            <ShowMoreBtn onClick={handleBuyNow} />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
