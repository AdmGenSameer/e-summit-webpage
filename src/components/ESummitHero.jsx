import React, { useState } from 'react';

const ESummitHero = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-700 to-teal-900 text-white">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-6 py-4 bg-opacity-20 backdrop-blur-lg rounded-full shadow-lg border border-gray-300/10">
        <div className="text-2xl font-bold">E-Cell</div>

        {/* Toggle Button: Visible only on mobile */}
        <button
          className="md:hidden block text-xl focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle Navigation"
        >
          ☰
        </button>

        {/* Navbar Links */}
        <ul
          className={`${
            isMenuOpen ? 'block' : 'hidden'
          } md:flex flex-col md:flex-row md:space-x-6 text-lg absolute md:static bg-teal-900 md:bg-transparent top-16 left-0 w-full md:w-auto py-4 md:py-0 shadow-lg md:shadow-none rounded-lg md:rounded-none`}
        >
          <li className="hover:text-yellow-300 transition duration-300 ease-in-out px-4 md:px-0">
            <a href="#home">Home</a>
          </li>
          <li className="hover:text-yellow-300 transition duration-300 ease-in-out px-4 md:px-0">
            <a href="#events">Events</a>
          </li>
          <li className="hover:text-yellow-300 transition duration-300 ease-in-out px-4 md:px-0">
            <a href="#speakers">Speakers</a>
          </li>
          <li className="hover:text-yellow-300 transition duration-300 ease-in-out px-4 md:px-0">
            <a href="#sponsors">Sponsors</a>
          </li>
          <li className="hover:text-yellow-300 transition duration-300 ease-in-out px-4 md:px-0">
            <a href="#contact">Contact Us</a>
          </li>
        </ul>
      </nav>

      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center text-center h-[85vh] space-y-6 px-4">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-wide animate-pulse">
          E-Summit'25
        </h1>
        <button className="px-4 py-2 md:px-6 md:py-3 text-lg md:text-xl font-medium bg-red-600 rounded-full hover:bg-red-700 transition duration-300 shadow-lg transform hover:scale-105">
          Register Now
        </button>
      </div>
    </div>
  );
};

export default ESummitHero;
