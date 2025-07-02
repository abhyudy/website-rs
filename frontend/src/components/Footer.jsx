import React from 'react'
import { FaInstagram, FaFacebookF, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className="w-full mx-auto bg-background-black">
      <div className="relative bg-background-black text-white">
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
        <footer className="container mx-auto pt-20 pb-10 px-4 sm:px-6 md:px-10 lg:px-16 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-start gap-8 md:gap-10 lg:gap-16 flex-wrap">
            {/* Logo & Description */}
            <div className="w-full md:w-auto md:max-w-xs mb-8 md:mb-0">
              <h2 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4">
                R&S
              </h2>
              {/* Responsive font size */}
              <p className="text-sm sm:text-base text-gray-300">
                Your go-to source for shopping trends, exclusive deals, and
                expert tips. Stay ahead in the retail world!
              </p>
            </div>
            {/* Quick Links */}
            <div className="w-1/2 md:w-auto mb-4 md:mb-0">
              <h5 className="font-semibold mb-3 text-base sm:text-lg">
                Quick Links
              </h5>{' '}
              <ul className="text-sm sm:text-base space-y-2 text-gray-300">
                <li>
                  <a href="/" className="hover:text-gray-100 transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="/about"
                    className="hover:text-gray-100 transition-colors"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="/trends"
                    className="hover:text-gray-100 transition-colors"
                  >
                    Trends
                  </a>
                </li>
                <li>
                  <a
                    href="/contact"
                    className="hover:text-gray-100 transition-colors"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
            {/* Contact Info */}
            <div className="w-1/2 md:w-auto mb-4 md:mb-0">
              <h5 className="font-semibold mb-3 text-base sm:text-lg">
                Contact Us
              </h5>
              <ul className="text-sm sm:text-base space-y-2 text-gray-300">
                <li>📍 123 Shopping Street, Retail City, RC 56789</li>
                <li>📞 +1 (555) 123-4567</li>
                <li>📧 support@yourblog.com</li>
              </ul>
            </div>
            {/* Social Icons */}
            <div className="w-full md:w-auto">
              <h5 className="font-semibold mb-3 text-base sm:text-lg">
                Follow Us
              </h5>
              <div className="flex space-x-4 text-xl sm:text-2xl text-white">
                <a
                  href="#"
                  aria-label="Instagram"
                  className="hover:text-gray-400 transition-colors"
                >
                  <FaInstagram />
                </a>
                <a
                  href="#"
                  aria-label="Facebook"
                  className="hover:text-gray-400 transition-colors"
                >
                  <FaFacebookF />
                </a>
                <a
                  href="#"
                  aria-label="Twitter"
                  className="hover:text-gray-400 transition-colors"
                >
                  <FaTwitter />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Line */}
          <div className="border-t border-gray-700 mt-8 md:mt-10 pt-4 text-center text-xs sm:text-sm text-gray-400">
            Rights Reserved.
          </div>
        </footer>
      </div>
    </div>
  )
}

export default Footer
