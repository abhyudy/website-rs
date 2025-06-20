import React from 'react'

const Contact = () => {
  return (
    <div className="bg-background-color text-white pt-10 px-4 sm:px-6 md:px-10 lg:px-20 relative">
      {/* Gradient Header Section */}
      <div className="bg-gradient-to-r from-[#FEC5C5] to-[#FFFCA7] text-background-black rounded-xl mx-auto w-full max-w-[1200px] h-[307px] flex flex-col justify-center items-center text-center p-6 sm:p-10">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 sm:mb-4">
          Contact Us
        </h2>
        <p className="text-sm sm:text-base max-w-3xl mx-auto px-2">
          We'd love to hear from you!
        </p>
      </div>

      {/* Contact Form Section */}
      <div className="flex justify-center -mt-[5%] z-10 relative mb-20">
        <div className="bg-white rounded-xl shadow-lg w-[979px] h-[747px] p-8 flex flex-col justify-start text-black">
          {/* Form Heading */}
          <h2 className="text-3xl font-bold mb-2">Get in Touch</h2>
          <p className="text-sm text-gray-700 mb-8 max-w-md">
            Have a query or suggestion? Fill out the form below, and we’ll get
            back to you as soon as possible.
          </p>

          {/* Form Fields */}
          <form className="space-y-6 w-full max-w-md">
            <div>
              <label className="block text-sm font-medium mb-1" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full border-b border-gray-400 focus:outline-none py-1"
                placeholder="Enter your name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full border-b border-gray-400 focus:outline-none py-1"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1" htmlFor="phone">
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                className="w-full border-b border-gray-400 focus:outline-none py-1"
                placeholder="Enter your phone"
              />
            </div>

            <div>
              <label
                className="block text-sm font-medium mb-1"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                id="message"
                rows="3"
                className="w-full border-b border-gray-400 focus:outline-none py-1"
                placeholder="Write your message..."
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-black text-white font-semibold px-6 py-2 rounded-full w-full max-w-[120px] mx-auto block hover:bg-gray-900"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
