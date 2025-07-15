import React from 'react'
import logo from '../assets/img/footerlogo.png'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className="mx-auto bg-background-black">
      <div className="relative bg-background-black text-white">
        {/* Upward Curve */}
        <div className="relative">
          <div className="absolute top-0 left-0 w-full h-[99px] bg-background-color z-0" />
          <svg
            viewBox="0 0 1440 100"
            className="w-full h-[100px] relative z-10 rotate-180"
            preserveAspectRatio="none"
          >
            <path
              d="M0,100 C360,0 1080,0 1440,100 L1440,0 L0,0 Z"
              fill="black"
            />
          </svg>
        </div>

        {/* Footer Content */}
        <footer className="w-full max-w-6xl mx-auto pt-20 pb-10 px-4 sm:px-6 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-start text-center md:text-left gap-10 flex-wrap">
            {/* Logo & Description */}
            <div className="flex-1 min-w-[250px]">
              <Link to="/">
                <img
                  src={logo}
                  alt="R&S"
                  className="mb-4 h-auto max-w-[200px] font-inter object-contain mx-auto md:mx-0"
                  style={{ maxHeight: '100px' }}
                />
              </Link>
              <p className="text-sm sm:text-base font-inter text-gray-300 max-w-xs mx-auto md:mx-0">
                Your go-to source for shopping trends, exclusive deals, and
                expert tips. Stay ahead in the retail world!
              </p>
            </div>

            {/* Quick Links */}
            <div className="flex-1 min-w-[200px] text-center md:text-left">
              <h5 className="font-semibold mb-3 font-inter text-base sm:text-lg">
                Quick Links
              </h5>
              <ul className="text-sm sm:text-base font-inter space-y-2 text-gray-300">
                {['/', '/about', '/trends', '/contact'].map((path, idx) => (
                  <li key={idx}>
                    <Link
                      to={path}
                      onClick={() =>
                        window.scrollTo({ top: 0, behavior: 'smooth' })
                      }
                      className="hover:text-white transition duration-200 ease-in-out"
                    >
                      {['Home', 'About Us', 'Trends', 'Contact Us'][idx]}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="flex-1 min-w-[200px] text-center md:text-left">
              <h5 className="font-semibold font-inter mb-3 text-base sm:text-lg">
                Contact Us
              </h5>
              <ul className="text-sm sm:text-base font-inter space-y-2 text-gray-300">
                <li className="flex items-start gap-2">
                  <img
                    src="/img/location.png"
                    alt="location"
                    className="w-3 h-3 mt-1"
                  />
                  <span>B-148, Kankarbagh Main Road, Patna, Bihar-800020</span>
                </li>
                <li className="flex items-center gap-2">
                  <img src="/img/call.png" alt="call" className="w-3 h-3" />
                  <span>+91 (943) 0622181</span>
                </li>
                <li className="flex items-center gap-2">
                  <img src="/img/mail.png" alt="mail" className="w-3 h-3" />
                  <span>info@retailtypes.com</span>
                </li>
              </ul>
            </div>

            {/* Important Links */}
            <div className="flex-1 min-w-[200px] text-center md:text-left">
              <h5 className="font-semibold mb-3 font-inter text-base sm:text-lg">
                Important Links
              </h5>
              <ul className="text-sm sm:text-base font-inter space-y-2 text-gray-300">
                <li>
                  <Link
                    to="/privacy-policy"
                    className="hover:text-white transition duration-200 ease-in-out"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    to="/terms-and-conditions"
                    className="hover:text-white transition duration-200 ease-in-out"
                  >
                    Terms and Conditions
                  </Link>
                </li>
                <li>
                  <Link
                    to="/disclaimer"
                    className="hover:text-white transition duration-200 ease-in-out"
                  >
                    Disclaimer
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Line */}
          <div className="border-t border-gray-700 mt-10 pt-4 text-center font-inter text-xs sm:text-sm text-gray-400">
            © {new Date().getFullYear()} Copyright retailtypes.com.
            <br /> All Rights Reserved
          </div>
        </footer>
      </div>
    </div>
  )
}

export default Footer
