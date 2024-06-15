import React from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo-white.png";
import { BsBasket } from "react-icons/bs";
import { RiShoppingBasketLine } from "react-icons/ri";

const Navbar = () => {
  const navigate = useNavigate();

  const handleNavigation = (e) => {
    const selectedValue = e.target.value;
    switch (selectedValue) {
      case "all":
        navigate("/");
        break;
      case "terracotta":
        navigate("/products/terracotta");
        break;
      case "jute":
        navigate("/products/jute");
        break;
      case "banana":
        navigate("/products/banana");
        break;
      case "moonj":
        navigate("/products/moonj");
        break;
      case "macrame":
        navigate("/products/macrame");
        break;
      default:
        navigate("/");
        break;
    }
  };

  return (
    <nav className="border-b-2 shadow-black py-4 bg-green-800">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">
          <Link to="/">
            <img src={logo} alt="" className="max-w-16 rounded-md" />
          </Link>
        </div>
        <div className="bg-green-800 p-8 rounded-md">
          <ul className="flex space-x-8 text-orange-50 ">
            <li>
              <Link to="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <select
                onChange={handleNavigation}
                className="text-orange-50 bg-transparent block w-full px-4 hover:border-gray-400 outline-none"
              >
                <option className="text-gray-700">Products</option>
                <option value="all" className="text-gray-700">
                  Show All
                </option>
                <option value="terracotta" className="text-gray-700">
                  Terracotta
                </option>
                <option value="jute" className="text-gray-700">
                  Jute
                </option>
                <option value="banana" className="text-gray-700">
                  Banana
                </option>
                <option value="moonj" className="text-gray-700">
                  Moonj
                </option>
                <option value="macrame" className="text-gray-700">
                  Macrame
                </option>
              </select>
            </li>
            <li>
              <Link to="#" className="hover:underline">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:underline">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/testimonials" className="hover:underline">
                Testimonials
              </Link>
            </li>
          </ul>
        </div>
        <RiShoppingBasketLine className="text-4xl text-orange-50" />
      </div>
    </nav>
  );
};

export default Navbar;
