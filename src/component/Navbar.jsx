import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white shadow sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-blue-600">KiddoCare</Link>
        <div className="space-x-6">
          <Link to="/" className="text-gray-700 hover:text-blue-600 transition">Home</Link>
          <Link to="/contact" className="text-gray-800 hover:text-blue-600 font-medium">Contact</Link>
          <Link to="/login" className="bg-blue-600 text-white px-6 py-3 rounded-lg  hover:bg-blue-500 m-5">
          Admin Panel
        </Link>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
