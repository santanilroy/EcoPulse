"use client";
import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white/60 backdrop-blur-md shadow-md fixed w-full top-0 left-0 z-50 rounded-b-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <span className="text-3xl font-bold text-green-700 tracking-normal">
              EcoPulse
            </span>
          </div>
          {/* Desktop Navigation Links */}
          <div className="hidden md:flex space-x-8">
            <a
              href="#heroSec"
              className="text-gray-800 hover:text-green-700 font-medium transition-colors"
            >
              Home
            </a>
            <a
              href="#dataSec"
              className="text-gray-800 hover:text-green-700 font-medium transition-colors"
            >
              Data
            </a>
            <a
              href="#impactSec"
              className="text-gray-800 hover:text-green-700 font-medium transition-colors"
            >
              Impact
            </a>
            <a
              href="#solutionSec"
              className="text-gray-800 hover:text-green-700 font-medium transition-colors"
            >
              Solution
            </a>
            <a
              href="#involvedSec"
              className="text-gray-800 hover:text-green-700 font-medium transition-colors"
            >
              Get Involved
            </a>
          </div>
          {/* Mobile Menu Icon */}
          <div className="md:hidden flex items-center">
            <div
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-green-700 focus:outline-none"
              aria-label="Open menu"
            >
              <FiMenu size={40} />
            </div>
          </div>
        </div>
        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden flex flex-col space-y-2 py-4 bg-transparent rounded-b-2xl">
            <a
              href="#heroSec"
              className="text-gray-800 hover:text-green-700 font-medium px-4 py-2 transition-colors"
            >
              Home
            </a>
            <a
              href="#dataSec"
              className="text-gray-800 hover:text-green-700 font-medium px-4 py-2 transition-colors"
            >
              Data
            </a>
            <a
              href="#impactSec"
              className="text-gray-800 hover:text-green-700 font-medium px-4 py-2 transition-colors"
            >
              Impact
            </a>
            <a
              href="#solutionSec"
              className="text-gray-800 hover:text-green-700 font-medium px-4 py-2 transition-colors"
            >
              Solution
            </a>
            <a
              href="#involvedSec"
              className="text-gray-800 hover:text-green-700 font-medium px-4 py-2 transition-colors"
            >
              Get Involved
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
