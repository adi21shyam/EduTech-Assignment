import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 py-6 bottom-0">
      <div className="container mx-auto">
        <div className="flex justify-center items-center">
          <ul className="flex space-x-4 justify-around">
            <li>
              <a
                href="#"
                className="text-gray-300 hover:text-white transition duration-300 p-3"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-300 hover:text-white transition duration-300 p-3"
              >
                Twitter
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-300 hover:text-white transition duration-300 p-3"
              >
                Instagram
              </a>
            </li>
          </ul>
          <ul className="flex items-center space-x-4 ml-auto">
            <li>
              <a
                href="#"
                className="text-gray-300 hover:text-white transition duration-300 p-3"
              >
                Terms of Service
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-300 hover:text-white transition duration-300 p-3"
              >
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
