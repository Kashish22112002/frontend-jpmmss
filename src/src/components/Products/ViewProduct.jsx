import React from "react";
import { useParams } from "react-router-dom";
import products from "./Products";


// Example product data, in a real application you would fetch this from an API
// const products = [
//   {
//     id: 1,
//     name: "Product 1",
//     price: 29.99,
//     image: "https://via.placeholder.com/150",
//     details: "Detailed description of Product 1",
//     claspType: "Lobster Clasp",
//     materialType: "Terracotta",
//     metalType: "No Metal Type",
//     gemType: "No Gemstone",
//     occasionType: "Wedding, Birthday",
//     countryOfOrigin: "India",
//     about:
//       "Handmade - Terracotta jewelries are handmade and no machines are used in the whole process. Colour Difference - The colour of the actual product can be different from what you see in the images.",
//   },
//   {
//     id: 2,
//     name: "Product 2",
//     price: 49.99,
//     image: "https://via.placeholder.com/150",
//     details: "Detailed description of Product 2",
//     claspType: "Lobster Clasp",
//     materialType: "Terracotta",
//     metalType: "No Metal Type",
//     gemType: "No Gemstone",
//     occasionType: "Wedding, Birthday",
//     countryOfOrigin: "India",
//     about:
//       "Handmade - Terracotta jewelries are handmade and no machines are used in the whole process. Colour Difference - The colour of the actual product can be different from what you see in the images.",
//   },
//   {
//     id: 3,
//     name: "Product 3",
//     price: 19.99,
//     image: "https://via.placeholder.com/150",
//     details: "Detailed description of Product 3",
//     claspType: "Lobster Clasp",
//     materialType: "Terracotta",
//     metalType: "No Metal Type",
//     gemType: "No Gemstone",
//     occasionType: "Wedding, Birthday",
//     countryOfOrigin: "India",
//     about:
//       "Handmade - Terracotta jewelries are handmade and no machines are used in the whole process. Colour Difference - The colour of the actual product can be different from what you see in the images.",
//   },
//   {
//     id: 4,
//     name: "Product 4",
//     price: 99.99,
//     image: "https://via.placeholder.com/150",
//     details: "Detailed description of Product 4",
//     claspType: "Lobster Clasp",
//     materialType: "Terracotta",
//     metalType: "No Metal Type",
//     gemType: "No Gemstone",
//     occasionType: "Wedding, Birthday",
//     countryOfOrigin: "India",
//     about:
//       "Handmade - Terracotta jewelries are handmade and no machines are used in the whole process. Colour Difference - The colour of the actual product can be different from what you see in the images.",
//   },
// ];

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
