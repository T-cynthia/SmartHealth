import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white shadow sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-blue-600">KiddoCare</Link>
        <div className="space-x-6">
          <Link to="/" className="text-gray-700 hover:text-blue-600 transition">Home</Link>
          <Link to="/register" className="text-gray-700 hover:text-green-600 transition">Register</Link>
          
          <Link to="/consultation">Book Consultation</Link>
          <Link to="/contact" className="text-gray-800 hover:text-green-600 font-medium">Contact</Link>
          <Link to="/health-tips" className="text-blue-600 hover:underline">
  Health Tips
</Link>
<Link to="/admin" className="bg-blue-600 text-white px-6 py-3 rounded-lg">
          Admin Panel
        </Link>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
