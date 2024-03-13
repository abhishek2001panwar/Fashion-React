import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-200 rounded-sm shadow-neomorphic">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">

          <div>
            <a href="#" className="text-xl font-bold text-gray-900">E-commerce store</a>
          </div>
          <div className="hidden md:flex space-x-8">
            <ul className="flex gap-10">
              <li><Link to="/" className="text-gray-600 hover:text-gray-800">Home</Link></li>
              <li><Link to="/about" className="text-gray-600 hover:text-gray-800">About</Link></li>
              <li><Link to="/contact" className="text-gray-600 hover:text-gray-800">Contact</Link></li>
              <li><Link to="/products" className="text-gray-600 hover:text-gray-800">Products</Link></li>
              <li><Link to="/services" className="text-gray-600 hover:text-gray-800">Services</Link></li>
              <li><Link to="/signup" className="text-gray-600 hover:text-gray-800">signup</Link></li>

            </ul>
          </div>
          <div className="md:hidden">
            <button className="text-gray-600 hover:text-gray-800 focus:outline-none" onClick={toggleMenu}>
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden mt-4">
            <ul className="flex flex-col space-y-4">
              <li><Link to="/" className="text-gray-600 hover:text-gray-800" onClick={toggleMenu}>Home</Link></li>
              <li><Link to="/about" className="text-gray-600 hover:text-gray-800" onClick={toggleMenu}>About</Link></li>
              <li><Link to="/contact" className="text-gray-600 hover:text-gray-800" onClick={toggleMenu}>Contact</Link></li>
              <li><Link to="/products" className="text-gray-600 hover:text-gray-800" onClick={toggleMenu}>Products</Link></li>
              <li><Link to="/services" className="text-gray-600 hover:text-gray-800" onClick={toggleMenu}>Services</Link></li>
              <li><Link to="/signup" className="text-gray-600 hover:text-gray-800">signup</Link></li>

            </ul>
          </div>
        )}
      </div>
      <hr />
    </nav>
    
  );
}

export default Navbar;
