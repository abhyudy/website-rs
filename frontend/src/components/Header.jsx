import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logoSmall from '../assets/img/RS.png' // Small screen logo
import logoLarge from '../assets/img/RS.png' // Large screen logo

const Header = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [isNavOpen, setIsNavOpen] = useState(false)

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen)
    if (!isSearchOpen && isNavOpen) {
      setIsNavOpen(false)
    }
  }

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen)
    if (!isNavOpen && isSearchOpen) {
      setIsSearchOpen(false)
    }
  }

  return (
    <>
      <header className="bg-background-color py-3 px-4 sm:px-6 lg:px-16 flex items-center justify-between relative">
        {/* Logo Section */}
        <div className="flex items-center">
          {/* Small Screen Logo */}
          <img
            className="h-6 md:hidden object-contain"
            src={logoSmall}
            alt="R&S Small Logo"
          />
          {/* Large Screen Logo */}
          <img
            className="hidden md:block h-10 object-contain"
            src={logoLarge}
            alt="R&S Large Logo"
          />
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

        {/* Search Icon and Hamburger Menu */}
        <div className="flex items-center space-x-3">
          {/* Search Input - Inline for large screens, hidden when closed */}
          <input
            type="text"
            placeholder="Search for..."
            className={`hidden md:block px-3 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 text-gray-700 w-32 lg:w-48 mr-2 ${
              isSearchOpen ? 'block' : 'hidden'
            }`}
            aria-label="Search for content"
          />

          {/* Search Icon - Visible on all screens */}
          <div
            onClick={toggleSearch}
            className="cursor-pointer"
            aria-label="Toggle search"
          >
            <svg
              className="w-5 h-5 md:w-6 md:h-6 text-gray-700"
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

          {/* Hamburger Icon - Visible on small screens only */}
          <div
            onClick={toggleNav}
            className="md:hidden cursor-pointer"
            aria-label={isNavOpen ? 'Close menu' : 'Open menu'}
          >
            <svg
              className="w-5 h-5 text-gray-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isNavOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              ) : (
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

      {/* Small Screen: Search Bar Below Header */}
      {isSearchOpen && (
        <div className="md:hidden bg-background-color px-4 py-2">
          <div className="flex items-center border rounded-md bg-white border-gray-300 px-3 py-2">
            <input
              type="text"
              placeholder="Search for..."
              className="w-full bg-transparent outline-none text-gray-700"
              aria-label="Search for content"
              autoFocus
            />
            <svg
              className="w-5 h-5 text-gray-700"
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
         
        </div>
      )}

      {/* Mobile Navigation Menu - Small screens only */}
      {isNavOpen && (
        <div className="md:hidden bg-background-color py-4 px-4 sm:px-6">
          <nav className="flex flex-col space-y-4">
            <Link
              to="/"
              className="block text-gray-700 hover:text-pink-500 font-semibold text-base"
              onClick={() => setIsNavOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="block text-gray-700 hover:text-pink-500 font-semibold text-base"
              onClick={() => setIsNavOpen(false)}
            >
              About Us
            </Link>
            <Link
              to="/trends"
              className="block text-gray-700 hover:text-pink-500 font-semibold text-base"
              onClick={() => setIsNavOpen(false)}
            >
              Trends
            </Link>
            <Link
              to="/contact"
              className="block text-gray-700 hover:text-pink-500 font-semibold text-base"
              onClick={() => setIsNavOpen(false)}
            >
              Contact Us
            </Link>
          </nav>
        </div>
      )}

      <hr className="h-px border-0 bg-gradient-to-r from-gray-200 via-gray-600 to-gray-200" />
    </>
  )
}

export default Header
