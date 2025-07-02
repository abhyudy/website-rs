import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/img/logo1.png' // Make sure this path is correct

const Header = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [isNavOpen, setIsNavOpen] = useState(false) // New state for mobile navigation

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen)

    if (!isSearchOpen && isNavOpen) {
      setIsNavOpen(false)
    }
  }

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen)
    // Optional: Close search if mobile nav is opened
    if (!isNavOpen && isSearchOpen) {
      setIsSearchOpen(false)
    }
  }

  return (
    <>
      <header className="bg-background-color py-4 px-4 sm:px-6 lg:px-16 flex items-center justify-between relative">
        {/* Logo Section */}
        <div className="flex items-center">
          <img className="h-10" src={logo} alt="R&S" />
        </div>

        {/* Navigation Links - Hidden on small screens, shown on medium and up */}
        <nav className="hidden md:flex space-x-12">
          <Link
            to="/"
            className="text-gray-700 hover:text-pink-500 font-semibold"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-gray-700 hover:text-pink-500 font-semibold"
          >
            About Us
          </Link>
          <Link
            to="/trends"
            className="text-gray-700 hover:text-pink-500 font-semibold"
          >
            Trends
          </Link>
          <Link
            to="/contact"
            className="text-gray-700 hover:text-pink-500 font-semibold"
          >
            Contact Us
          </Link>
        </nav>

        {/* Search Icon and Mobile Menu Toggle */}
        <div className="flex items-center space-x-4">
          {/* Search Input - Visibility controlled by 'style' attribute */}
          <input
            style={{ visibility: isSearchOpen ? 'visible' : 'hidden' }}
            type="text"
            placeholder="Search for..."
            className="mr-2 px-3 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
          />

          <div onClick={toggleSearch} className="cursor-pointer">
            <svg
              className="w-6 h-6 text-gray-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z"
              ></path>
            </svg>
          </div>

          {/* Hamburger Icon - Visible on small screens, hidden on medium and up */}
          <div onClick={toggleNav} className="md:hidden cursor-pointer">
            <svg
              className="w-6 h-6 text-gray-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isNavOpen ? (
                // Close icon (X)
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              ) : (
                // Hamburger icon
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              )}
            </svg>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Menu - Appears when isNavOpen is true */}
      {isNavOpen && (
        <div className="md:hidden bg-background-color py-4 px-4 sm:px-6">
          <nav className="flex flex-col space-y-4">
            <a
              href="/"
              className="block text-gray-700 hover:text-pink-500 font-semibold text-lg"
              onClick={() => setIsNavOpen(false)} // Close menu on click
            >
              Home
            </a>
            <a
              href="/about"
              className="block text-gray-700 hover:text-pink-500 font-semibold text-lg"
              onClick={() => setIsNavOpen(false)}
            >
              About Us
            </a>
            <a
              href="/trends"
              className="block text-gray-700 hover:text-pink-500 font-semibold text-lg"
              onClick={() => setIsNavOpen(false)}
            >
              Trends
            </a>
            <a
              href="/contact"
              className="block text-gray-700 hover:text-pink-500 font-semibold text-lg"
              onClick={() => setIsNavOpen(false)}
            >
              Contact Us
            </a>
          </nav>
        </div>
      )}
      <hr className="h-px border-0 bg-gradient-to-r from-gray-200 via-gray-600 to-gray-200" />
    </>
  )
}

export default Header
