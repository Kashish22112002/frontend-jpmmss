import React from "react";
import { useParams } from "react-router-dom";
import products from "./Products";

const ViewProduct = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col md:flex-row">
        <img
          src={product.image}
          alt={product.name}
          className="w-full md:w-1/2 h-auto"
        />
        <div className="ml-0 md:ml-4 mt-4 md:mt-0 md:w-1/2">
          <div>
            <h2 className="text-3xl font-bold">{product.name}</h2>
            <p className="text-xl text-gray-600 mt-2">${product.price}</p>
            <p className="mt-4">{product.details}</p>
            <button className="mt-4 px-4 py-2 bg-green-800 text-white font-semibold rounded">
              Add to Cart
            </button>
          </div>
          <div className="mt-8">
            <h3 className="text-2xl font-bold">Product details</h3>
            <ul className="list-disc pl-5 mt-2">
              <li>
                <strong>Clasp type:</strong> {product.claspType}
              </li>
              <li>
                <strong>Material type:</strong> {product.materialType}
              </li>
              <li>
                <strong>Metal type:</strong> {product.metalType}
              </li>
              <li>
                <strong>Gem type:</strong> {product.gemType}
              </li>
              <li>
                <strong>Occasion type:</strong> {product.occasionType}
              </li>
              <li>
                <strong>Country of Origin:</strong> {product.countryOfOrigin}
              </li>
            </ul>
          </div>
          <div className="mt-8">
            <h3 className="text-2xl font-bold">About this item</h3>
            <p className="mt-2">{product.about}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewProduct;
