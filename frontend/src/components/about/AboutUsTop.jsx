import React from 'react';

const AboutUsTop = () => {
  return (
    <div className='bg-[#FFF3F3]'>
    <div className="container mx-auto flex flex-col items-center justify-center  py-20">
      {/* Top Section */}
      <div className="relative z-0 w-full max-w-7xl h-120 bg-gradient-to-r from-pink-400 to-yellow-200 text-black rounded-xl flex flex-col pt-20 items-center justify-start shadow-lg">
        <h1 className=" text-6xl font-bold text-center">About Us</h1>
        <p className=" text-xl max-w-3xl mt-4 text-center">Unlock the latest trends, insider tips, and exclusive deals. We bring you expert insights, honest reviews, and the smartest shopping strategies.</p>
      </div>

      {/* Bottom Section */}
      <div className="relative z-10 -mt-40 w-full max-w-5xl  text-black rounded-xl">
        <div className="flex flex-col md:flex-row gap-20 justify-between items-center">
          {/* Left Box */}
          <div className="flex-1 h-84 bg-white border border-gray-300 rounded-xl flex flex-col justify-between p-10 shadow-md">
            <h2 className="text-2xl font-semibold text-center">Who We Are</h2>
            <p className="text-center mt-auto mb-4">We are a community of shopping enthusiasts, trendsetters, and deal hunters, bringing you expert recommendations, honest reviews, and smart shopping strategies.</p>
          </div>

          {/* Right Box */}
          <div className="flex-1 h-84 bg-white border border-gray-300 rounded-xl flex flex-col justify-between p-10 shadow-md">
            <h2 className="text-2xl font-semibold text-center">Our Mission</h2>
            <p className="text-center mt-auto mb-4">We're your go-to for smart, stylish, and eco-friendly shopping advice-helping you find trends, quality, and value.</p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default AboutUsTop;
