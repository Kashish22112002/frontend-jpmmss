import React from "react";
import projectDetails from "../constant";
import { RiShoppingBasketLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <nav className="bg-white border-b-2 shadow-black py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold ">
          <Link to="/">
          <img src={logo} alt="" className="max-w-16" /> 
          </Link>
        </div>
        <div>
          <ul className="flex space-x-8 text-gray-800 ">
            <li>
              <Link
                to="/"
                className="hover:underline"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="#/products"
                className="hover:underline"
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="hover:underline"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:underline"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="hover:underline"
              >
                Testimonials
              </Link>
            </li>
          </ul>
        </div>
        <RiShoppingBasketLine className="text-4xl text-red-800" />
      </div>
    </nav>
  );
};

export default Navbar;
