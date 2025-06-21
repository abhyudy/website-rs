import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight, FaChevronDown } from "react-icons/fa";

// Put as many images as you like
const photoData = [
  "/img/blog1.jpg",
  "/img/blog2.png",
  "/img/blog3.png",
  "/img/blog4.png",
  "/img/blog5.png",
  "/img/blog6.png",
  "/img/blog7.png",
  "/img/blog8.png",
  "/img/blog9.png",
  "/img/1.jpg",
  "/img/2.png",
  "/img/3.png",
  "/img/4.png",
  "/img/5.png",
  "/img/6.png",
  "/img/7.png",
  "/img/8.png",
  "/img/9.png",
  "/img/10.png",
];

export default function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const total = photoData.length;

  const maxVisiblePerSide = 3; // Number of items shown on each side

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % total);
  };

  const getItem = (offset) => {
    return photoData[(currentIndex + offset + total) % total];
  };

  const renderLayeredImage = (offset, isLeft) => {
    const indexOffset = isLeft ? -offset : offset;
    const image = getItem(indexOffset);

    // ⬇ Customize these values to control layout
    const positionOffset = offset * 160; // distance between layers horizontally
    const scale = 1 - offset * 0.2; // smaller as it goes deeper
    const opacity = 1 - offset * 0.1; // fade back
    const z = 20 - offset; // zIndex

    const translateX = isLeft ? `-${positionOffset}px` : `${positionOffset}px`;

    return (
      <img
        key={`${isLeft ? "L" : "R"}-${offset}`}
        src={image}
        alt=""
        className="absolute h-[300px] object-cover rounded-lg shadow-lg transition-all duration-500"
        style={{
          transform: `translateX(${translateX}) scale(${scale})`,
          zIndex: z,
          opacity: opacity,
        }}
      />
    );
  };
  const [activeCategory, setActiveCategory] = useState(null);

  const categories = [
    "Fashion & Apparel",
    "Beauty & Skincare",
    "Luxury & Designer",
    "Sustainable Shopping",
    "Tech & Gadgets",
  ];

  return (
    <div className="container mx-auto h-[auto] w-full overflow-hidden bg-white py-10">
      {/* Intro Section */}
      <div className="px-30 py-5">
        <h3 className="text-6xl custom-times  font-semibold text-gray-800">
          What We Cover
        </h3>
        <p className="text-black mt-4 max-w-3xl">
          We explore a wide range of shopping categories, from fashion and tech
          to beauty and home essentials. Stay ahead with the latest trends,
          discover must-have products, and unlock exclusive deals curated just
          for you.
        </p>

        {/* Category Buttons */}
        <div className="flex flex-wrap gap-10 mt-4">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(index)}
              className={`flex items-center gap-2 px-5 py-2 rounded-full border transition-all duration-300 ${
                activeCategory === index
                  ? "bg-gray-100 text-black border-gray-800"
                  : "bg-white text-black border-gray-400 hover:bg-gray-100"
              }`}
            >
              {category}
              <span className="p-2 rounded-full text-pink-300 bg-gray-100 hover:bg-white">
                <FaChevronDown className="text-md " />
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Top Bar */}
      <div className="flex justify-between items-center px-30 pt-10">
        <h2 className="text-5xl font-bold text-gray-800">Blog</h2>
        <div className="flex items-center space-x-6">
          <span className="text-2xl text-black font-medium">
            See All ({photoData.length})
          </span>
          <button onClick={prevSlide} className="p-3 text-gray-400 hover:text-pink-300 rounded-full bg-gray-100 border border-gray-400 hover:border-pink-200 ">
              <FaArrowLeft className="text-md " />
          </button>
          <button onClick={prevSlide} className="p-3 text-gray-400 hover:text-pink-300 rounded-full bg-gray-100 border border-gray-400 hover:border-pink-200 ">
            <FaArrowRight className="text-md" />
          </button>
        </div>
      </div>

      {/* Carousel */}
      <div className="relative w-full h-[400px] flex justify-center items-center mt-4">
        {/* Left layered images */}
        {Array.from({ length: Math.min(maxVisiblePerSide, total - 1) }).map(
          (_, i) => renderLayeredImage(i + 1, true)
        )}

        {/* Center image */}
        <img
          src={getItem(0)}
          alt="Center"
          className="h-[350px] rounded-lg shadow-xl z-20 transition-all duration-500"
        />

        {/* Right layered images */}
        {Array.from({ length: Math.min(maxVisiblePerSide, total - 1) }).map(
          (_, i) => renderLayeredImage(i + 1, false)
        )}
      </div>
    </div>
  );
}
