import React, { useState } from 'react';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='hidden md:block'>
      <div className="lg:hidden flex items-center justify-between bg-green-800 text-orange-50 p-4">
        <div className=" text-xl font-bold">Menu</div>
        <button onClick={toggleSidebar} className="">
          {isOpen ? 'Close' : 'Menu'}
        </button>
      </div>
      <div className={`lg:block ${isOpen ? 'block' : 'hidden'} bg-green-800 text-orange-50 lg:h-full lg:w-52`}>
        <div className=" p-4 lg:pt-8">
          <h2 className="text-2xl font-bold mb-6">Categories</h2>
          <ul className="space-y-4 text-xl font-thin">
            <li className="">Home</li>
            <li className="">Products</li>
            <li className="">About</li>
            <li className="">Contact</li>
            <li className="">Testimonials</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
