// Navbar and Hero Section Component
import React from 'react';

const ESummitHero = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-700 to-teal-900 text-white">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-4 bg-opacity-20 backdrop-blur-lg rounded-full shadow-lg border border-gray-300/10">
        <div className="text-xl font-bold">E-Cell</div>
        <ul className="flex space-x-6 text-lg">
          <li className="hover:text-yellow-300 transition duration-300 ease-in-out">
            <a href="#home">Home</a>
          </li>
          <li className="hover:text-yellow-300 transition duration-300 ease-in-out">
            <a href="#events">Events</a>
          </li>
          <li className="hover:text-yellow-300 transition duration-300 ease-in-out">
            <a href="#speakers">Speakers</a>
          </li>
          <li className="hover:text-yellow-300 transition duration-300 ease-in-out">
            <a href="#sponsors">Sponsors</a>
          </li>
          <li className="hover:text-yellow-300 transition duration-300 ease-in-out">
            <a href="#contact">Contact Us</a>
          </li>
        </ul>
      </nav>

      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center h-[85vh] space-y-8">
        <h1 className="text-6xl font-extrabold tracking-wide animate-pulse">
          E-Summit'25
        </h1>
        <button className="px-6 py-3 text-xl font-medium bg-red-600 rounded-full hover:bg-red-700 transition duration-300 shadow-lg transform hover:scale-105">
          Register Now
        </button>
      </div>
    </div>
  );
};

export default ESummitHero;
