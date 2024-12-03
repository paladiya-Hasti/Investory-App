import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex items-center justify-between">
        <h1 className="text-white text-xl font-bold">INVENTORY APP</h1>

        {/* Mobile Hamburger Menu Button */}
        <div className="lg:hidden">
          <button
            className="text-gray-300 hover:text-white focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Navigation Links */}
        <ul
          className={`${
            menuOpen ? "block" : "hidden"
          } lg:flex space-x-4 items-center`}
        >
          <li>
            <Link to="/products" className="text-gray-300 hover:text-white">
              Product
            </Link>
          </li>
          <li>
            <Link to="/admin" className="text-gray-300 hover:text-white">
              Admin
            </Link>
          </li>
          <li>
            <Link to="/contract" className="text-gray-300 hover:text-white">
              Contract
            </Link>
          </li>
          <li>
            <Link to="/cart" className="text-gray-300 hover:text-white">
              Cart
            </Link>
          </li>
          <li>
            <Link to="/sign" className="text-gray-300 hover:text-white">
              Sign
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
