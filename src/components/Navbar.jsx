import React from "react";
import projectDetails from "../constant";
import { RiShoppingBasketLine } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo-white.png";

const Navbar = () => {
  const navigate = useNavigate();
  const handleNavigation = (e) => {
    const selectedValue = e.target.value;
    switch (selectedValue) {
      case "products":
        navigate("/products");
        break;
      case "category1":
        navigate("/category1");
        break;
      case "category2":
        navigate("/category2");
        break;
      case "category3":
        navigate("/category3");
        break;
      case "category4":
        navigate("/category4");
        break;
      case "category5":
        navigate("/category5");
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
                <option value="category1" className="text-gray-700">
                  Category 1
                </option>
                <option value="category2" className="text-gray-700">
                  Category 2
                </option>
                <option value="category3" className="text-gray-700">
                  Category 3
                </option>
                <option value="category4" className="text-gray-700">
                  Category 4
                </option>
                <option value="category5" className="text-gray-700">
                  Category 5
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
              <a
                href={window.location.href !== "" ? "/" : "#testimonials"}
                className="hover:underline"
              >
                Testimonials
              </a>
            </li>
          </ul>
        </div>
        <RiShoppingBasketLine className="text-4xl text-orange-50" />
      </div>
    </nav>
  );
};

export default Navbar;
