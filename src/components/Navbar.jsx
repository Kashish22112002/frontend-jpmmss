import React from 'react';
import projectDetails from '../constant';
import { RiShoppingBasketLine } from "react-icons/ri";

const Navbar = () => {
  return (
    <nav className="bg-white border-b-2 shadow-black py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold ">{projectDetails.NAME}</div>
        <div>
          <ul className="flex space-x-4">
            <li><a href="#" className="text-gray-700">Home</a></li>
            <li><a href="#" className="text-gray-700">Products</a></li>
            <li><a href="#" className="text-gray-700">About</a></li>
            <li><a href="#" className="text-gray-700">Contact</a></li>
          </ul>
        </div>
        <RiShoppingBasketLine className='text-2xl border bg-slate-100' />
      </div>
    </nav>
  );
}

export default Navbar;
