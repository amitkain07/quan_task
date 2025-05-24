import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="flex px-40 py-4 gap-12 bg-gray-100 shadow font-semibold text-xl">
      <Link to="/login" className="text-blue-600 ">Login</Link>
      <Link to="/register" className="text-blue-600 ">Register</Link>
      <Link to="/" className="text-blue-600 ">All Data</Link>
    </div>
  );
};

export default Navbar;
