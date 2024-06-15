import React from 'react';
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-orange-50 text-green-800 py-8 border-t-4">
      <div className="container mx-auto px-4 flex flex-row justify-evenly">
        <img src={logo} alt="" className='w-24 hidden md:block' />
        <div className="mb-6 md:mb-0">
          <h3 className="text-lg font-bold mb-4">Get to Know Us</h3>
          <ul className="space-y-2">
            <li><a href="#about" className="hover:text-red-900">About Us</a></li>
            <li><a href="#careers" className="hover:text-red-900">Careers</a></li>
            <li><a href="#sell" className="hover:text-red-900">Sell Through Us</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-4">Connect with Us</h3>
          <ul className="space-y-2">
            <li><a href="#facebook" className="hover:text-red-900">Facebook</a></li>
            <li><a href="#twitter" className="hover:text-red-900">Twitter</a></li>
            <li><a href="#instagram" className="hover:text-red-900">Instagram</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
