import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logoSmall from '../assets/img/RS.png';
import logoLarge from '../assets/img/RS.png';

const Header = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [searchText, setSearchText] = useState('');

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
    if (!isSearchOpen && isNavOpen) {
      setIsNavOpen(false);
    }
  };

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
    if (!isNavOpen && isSearchOpen) {
      setIsSearchOpen(false);
    }
  };

  return (
    <>
      <header className="bg-background-color py-3 px-4  flex items-center justify-between relative">
        {/* Logo Section */}
        <div className="flex items-center">
          <img className="h-6 md:hidden object-contain" src={logoSmall} alt="Logo Small" />
          <img className="hidden md:block h-10 object-contain" src={logoLarge} alt="Logo Large" />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-12">
          <Link to="/" className="text-gray-700 hover:text-pink-500 font-semibold">Home</Link>
          <Link to="/about" className="text-gray-700 hover:text-pink-500 font-semibold">About Us</Link>
          <Link to="/trends" className="text-gray-700 hover:text-pink-500 font-semibold">Trends</Link>
          <Link to="/contact" className="text-gray-700 hover:text-pink-500 font-semibold">Contact Us</Link>
        </nav>

        {/* Icons */}
        <div className="flex items-center space-x-3">
          {/* Desktop Search Input */}
          <input
            type="text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            placeholder="Search for..."
            className={`hidden md:block px-3 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 text-gray-700 w-32 lg:w-48 mr-2 ${isSearchOpen ? 'block' : 'hidden'}`}
            aria-label="Search"
          />

          {/* Search Icon */}
          <div onClick={toggleSearch} className="cursor-pointer" aria-label="Toggle search">
            <svg className="w-5 h-5 md:w-6 md:h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z" />
            </svg>
          </div>

          {/* Hamburger Icon */}
          <div onClick={toggleNav} className="md:hidden cursor-pointer" aria-label="Toggle menu">
            <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isNavOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </div>
        </div>
      </header>

      {/* Mobile Search Input */}
      {isSearchOpen && (
        <div className="md:hidden bg-background-color px-4 py-2">
          <div className="flex items-center border rounded-md bg-white border-gray-300 px-3 py-2 relative">
            <svg className="w-5 h-5 text-gray-700 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z" />
            </svg>
            <input
              type="text"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              placeholder="Search for..."
              className="w-full bg-transparent outline-none text-gray-700 pr-6"
              aria-label="Search input"
              autoFocus
            />
            {searchText && (
              <button
                onClick={() => setSearchText('')}
                className="absolute right-3 text-gray-500 hover:text-black"
                aria-label="Clear search"
              >
                ✕
              </button>
            )}
          </div>
        </div>
      )}

      {/* Mobile Nav */}
      {isNavOpen && (
        <div className="md:hidden bg-background-color py-4 px-4 sm:px-6">
          <nav className="flex flex-col space-y-4">
            <Link to="/" className="text-gray-700 hover:text-pink-500 font-semibold" onClick={() => setIsNavOpen(false)}>Home</Link>
            <Link to="/about" className="text-gray-700 hover:text-pink-500 font-semibold" onClick={() => setIsNavOpen(false)}>About Us</Link>
            <Link to="/trends" className="text-gray-700 hover:text-pink-500 font-semibold" onClick={() => setIsNavOpen(false)}>Trends</Link>
            <Link to="/contact" className="text-gray-700 hover:text-pink-500 font-semibold" onClick={() => setIsNavOpen(false)}>Contact Us</Link>
          </nav>
        </div>
      )}

      <hr className="h-px border-0 bg-gradient-to-r from-gray-200 via-gray-600 to-gray-200" />
    </>
  );
};

export default Header;
