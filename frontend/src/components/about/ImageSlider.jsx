import React, { useEffect, useRef, useState } from "react";
import { FaArrowLeft, FaArrowRight, FaChevronDown } from "react-icons/fa";
import "./ImageSlider.css";

// You can place any image in any order here (not sequential!)
const photoData = [
  "/img/11.jpg", "/img/12.jpg", "/img/13.jpg", "/img/14.jpg", "/img/15.jpg",
  "/img/16.jpg", "/img/17.jpg", "/img/19.jpg", "/img/20.jpg",
  "/img/21.jpg", "/img/22.jpg", "/img/23.jpg", "/img/24.jpg", "/img/25.jpg",
  "/img/26.jpg", "/img/27.jpg", "/img/28.jpg", "/img/29.jpg", "/img/30.jpg",
  "/img/31.jpg", "/img/32.jpg",
];

const categories = [
  "Fashion & Apparel",
  "Beauty & Skincare",
  "Luxury & Designer",
  "Sustainable Shopping",
  "Tech & Gadgets",
];

const lerp = (start, end, t) => start + t * (end - start);
const getScale = (distance, total) => Math.pow(1 - distance / total, 2);
const getLeft = (i, current, width, wrapperWidth, total) => {
  const diff = i - current;
  const slideDistance = diff * width * 0.5;
  const centerOffset = (wrapperWidth - width) / 2;
  return slideDistance + centerOffset;
};

export default function ImageSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeCategory, setActiveCategory] = useState(null);
  const wrapperRef = useRef(null);
  const slidesRef = useRef([]);
  const [slideWidth, setSlideWidth] = useState(300);
  const [wrapperWidth, setWrapperWidth] = useState(800);
  const totalSlides = photoData.length;

  const neighbors = 4; // how many slides to show on either side

const moveSlide = (target) => {
  const len = photoData.length;
  const center = ((target % len) + len) % len;

  slidesRef.current.forEach((slide, i) => {
    const distCW = (i - center + len) % len;
    const distCCW = (center - i + len) % len;
    const dist = Math.min(distCW, distCCW);

    const signedOffset = distCW <= distCCW ? distCW : -distCCW;
    

    const left = getLeft(i, center, slideWidth, wrapperWidth);
    const scale = getScale(dist, neighbors + 1);

    slide.style.transform = `scale(${scale})`;
    slide.style.left = `${left}px`;
    slide.style.zIndex = neighbors + 1 - dist;
  });

  setCurrentSlide(center);
};


  const next = () => moveSlide(currentSlide + 1);
  const prev = () => moveSlide(currentSlide - 1);

  useEffect(() => {
    const updateSize = () => {
      const slide = slidesRef.current[0];
      if (slide && wrapperRef.current) {
        setSlideWidth(slide.offsetWidth);
        setWrapperWidth(wrapperRef.current.offsetWidth);
        moveSlide(currentSlide);
      }
    };
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, [currentSlide]);

  useEffect(() => {
    moveSlide(currentSlide);
  }, []);

  return (
    <div className="slider-container p-10">
      {/* Intro */}
      <div className=" py-5">
        <h3 className="text-6xl custom-times font-semibold text-gray-800">
          What We Cover
        </h3>
        <p className="text-black mt-4 max-w-3xl">
          We explore a wide range of shopping categories, from fashion and tech
          to beauty and home essentials. Stay ahead with the latest trends,
          discover must-have products, and unlock exclusive deals curated just
          for you.
        </p>

        {/* Category Buttons */}
        <div className="flex flex-wrap gap-4 mt-4">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(index)}
              className={`flex items-center gap-1 px-5 py-2 rounded-full border transition-all duration-300 ${
                activeCategory === index
                  ? "bg-gray-100 text-black border-gray-800"
                  : "bg-white text-black border-gray-400 hover:bg-gray-100"
              }`}
            >
              {category}
              <span className="p-2 rounded-full text-pink-300 bg-gray-100 hover:bg-white">
                <FaChevronDown className="text-md" />
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Top Bar */}
      <div className="flex justify-between items-center pt-10">
        <h2 className="text-5xl font-bold text-gray-800">Blog</h2>
        <div className="flex items-center space-x-6">
          <span className="text-3xl text-black font-medium">
            See All ({photoData.length})
          </span>
          <button
            onClick={prev}
            className="p-3 text-gray-400 hover:text-pink-300 rounded-full bg-gray-100 border border-gray-400 hover:border-pink-200"
          >
            <FaArrowLeft className="text-md" />
          </button>
          <button
            onClick={next}
            className="p-3 text-gray-400 hover:text-pink-300 rounded-full bg-gray-100 border border-gray-400 hover:border-pink-200"
          >
            <FaArrowRight className="text-md" />
          </button>
        </div>
      </div>

      {/* Carousel */}
      <div className="slide-wrapper" ref={wrapperRef}>
        <div className="overlay" />
        {photoData.map((imgSrc, index) => (
          <div
            className="slide"
            key={index}
            ref={(el) => (slidesRef.current[index] = el)}
            data-caption={`Image ${index + 1}`}
          >
            <img src={imgSrc} alt={`Image ${index + 1}`} loading="lazy" />
          </div>
        ))}
      </div>
    </div>
  );
}
