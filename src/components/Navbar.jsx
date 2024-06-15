import React from 'react';
import projectDetails from '../constant';
import { RiShoppingBasketLine } from "react-icons/ri";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white border-b-2 shadow-black py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold ">
          <Link to="/">
          {projectDetails.NAME}
          </Link>
        </div>
        <div>
          <ul className="flex space-x-4">
            <li><Link to="/" className="text-gray-700">Home</Link></li>
            <li><Link to="/" className="text-gray-700">Products</Link></li>
            <li><Link to="#" className="text-gray-700">About</Link></li>
            <li><Link to="#" className="text-gray-700">Contact</Link></li>
          </ul>
        </div>
        <RiShoppingBasketLine className='text-2xl border bg-slate-100' />
      </div>
    </nav>
  );
}

export default Navbar;
