import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import OAuth from './OAuth';
import Logo from "../assets/Logo.webp"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  let data = null;
  if (localStorage.getItem("data")) {
    data = JSON.parse(localStorage.getItem("data"));
  }
  console.log(data, "data")

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem("data");
    setIsOpen(false); 
    navigate('/');
  };

  return (
    <nav className="bg-blue-500 p-6 ">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <Link to="/" className="font-semibold text-xl tracking-tight">
            <img src={Logo} alt='Logo' className='rounded-lg h-16 w-16' />
          </Link>
        </div>
        {/* For mobile view */}
        <div className="md:hidden">
          <button
            className="text-white focus:outline-none"
            onClick={toggleMenu}
          >
            {/* Hamburger menu icon */}
            <svg
              className="h-6 w-6 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 18a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H3zm0-7a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H3zm0-7a1 1 0 0 1-1-1V1a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H3z"
              />
            </svg>
          </button>
        </div>
        {/* For medium and larger screens */}
        <div className={`md:flex flex-col ${isOpen ? 'block' : 'hidden'}`}>
          <div className="flex items-center justify-end space-x-4">
            <Link to="/" className="text-white hover:text-gray-200">
              Home
            </Link>
            <Link to="/about" className="text-white hover:text-gray-200">
              About
            </Link>
            <Link to="/dashboard" className="text-white hover:text-gray-200">
              Courses
            </Link>
            <Link to="/contact" className="text-white hover:text-gray-200">
              Contact
            </Link>
            <div className="relative">
              <button className="text-white hover:text-gray-200 focus:outline-none" onClick={toggleMenu}>
                {data ? (
                  <img
                    className='rounded-full h-7 w-7 object-cover'
                    src={data.photo}
                    alt='profile'
                  />
                ) : (
                  <OAuth />
                )}
              </button>
              {/* Dropdown menu */}
              {isOpen && data && (
                <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                  <button
                    onClick={handleLogout}
                    className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none"
                  >
                    Log Out
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
