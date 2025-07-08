import React, { useEffect, useRef, useState } from 'react'
import { FaArrowLeft, FaArrowRight, FaChevronDown } from 'react-icons/fa'
import './ImageSlider.css'
import FilterBox from '../filter/FilterBox'

// You can place any image in any order here (not sequential!)
const photoData = [
  '/img/11.jpg',
  '/img/12.jpg',
  '/img/13.jpg',
  '/img/14.jpg',
  '/img/15.jpg',
  '/img/16.jpg',
  '/img/17.jpg',
  '/img/19.jpg',
  '/img/20.jpg',
  '/img/21.jpg',
  '/img/22.jpg',
  '/img/23.jpg',
  '/img/24.jpg',
  '/img/25.jpg',
  '/img/26.jpg',
  '/img/27.jpg',
  '/img/28.jpg',
  '/img/29.jpg',
  '/img/30.jpg',
  '/img/31.jpg',
  '/img/32.jpg',
]

const categories = [
  'Fashion & Apparel',
  'Beauty & Skincare',
  'Luxury & Designer',
  'Sustainable Shopping',
  'Tech & Gadgets',
]

const lerp = (start, end, t) => start + t * (end - start)
const getScale = (distance, total) => Math.pow(1 - distance / total, 2)
const getLeft = (i, current, width, wrapperWidth) => {
  const diff = i - current
  const slideDistance = diff * width * 0.5
  const centerOffset = (wrapperWidth - width) / 2
  return slideDistance + centerOffset
}

export default function ImageSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const wrapperRef = useRef(null)
  const slidesRef = useRef([])
  const [slideWidth, setSlideWidth] = useState(300)
  const [wrapperWidth, setWrapperWidth] = useState(800)
  const totalSlides = photoData.length
  const [isHovered, setIsHovered] = useState(false)
  const neighbors = 4

  const moveSlide = (target) => {
    slidesRef.current.forEach((slide) => {
      const virtualIndex = parseInt(slide.dataset.virtualIndex)
      const dist = virtualIndex - target
      const absDist = Math.abs(dist)

      if (absDist > neighbors) {
        slide.style.opacity = '0'
        return
      }

      slide.style.opacity = '1'

      const left = getLeft(virtualIndex, target, slideWidth, wrapperWidth)
      const scale = getScale(absDist, neighbors + 1)

      slide.style.transform = `scale(${scale})`
      slide.style.left = `${left}px`
      slide.style.zIndex = neighbors + 1 - absDist
    })

    setCurrentSlide(target)
  }

  const next = () => {
    if (currentSlide > 400) {
      setCurrentSlide(0)
      moveSlide(0)
    } else {
      moveSlide(currentSlide + 1)
    }
  }

  const prev = () => {
    if (currentSlide < -400) {
      setCurrentSlide(0)
      moveSlide(0)
    } else {
      moveSlide(currentSlide - 1)
    }
  }

  useEffect(() => {
    const updateSize = () => {
      const slide = slidesRef.current[0]
      if (slide && wrapperRef.current) {
        setSlideWidth(slide.offsetWidth)
        setWrapperWidth(wrapperRef.current.offsetWidth)
        moveSlide(currentSlide)
      }
    }
    updateSize()
    window.addEventListener('resize', updateSize)
    return () => window.removeEventListener('resize', updateSize)
  }, [currentSlide])

  useEffect(() => {
    if (isHovered) return
    const interval = setInterval(() => next(), 3000)
    return () => clearInterval(interval)
  }, [currentSlide, isHovered])

  return (
    <div className="slider-container px-4 sm:px-6 md:px-10 py-10">
      {/* Intro */}
      <div className="py-5">
        <div className="relative flex items-center justify-between mt-2">
          <h3 className="text-3xl md:text-6xl custom-times font-semibold text-gray-800">
            What We Cover
          </h3>

          {/* Hamburger Icon - Only on Mobile */}
          <FilterBox />
        </div>

        <p className="text-black mt-4 max-w-3xl">
          We explore a wide range of shopping categories, from fashion and tech
          to beauty and home essentials. Stay ahead with the latest trends,
          discover must-have products, and unlock exclusive deals curated just
          for you.
        </p>
      </div>

      {/* Top Bar */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center pt-10 gap-4 md:gap-0">
        <h2 className="text-3xl md:text-5xl font-bold text-gray-800 border-l-4 border-[#E37561] pl-4">
          Blog
        </h2>
        <div className="flex items-center space-x-3 sm:space-x-6">
          <span className="text-lg sm:text-2xl text-black font-medium">
            See All ({photoData.length})
          </span>
          <button
            onClick={prev}
            className="p-2 sm:p-3 text-gray-400 hover:text-pink-300 rounded-full bg-gray-100 border border-gray-400 hover:border-pink-200"
          >
            <FaArrowLeft className="text-sm sm:text-md" />
          </button>
          <button
            onClick={next}
            className="p-2 sm:p-3 text-gray-400 hover:text-pink-300 rounded-full bg-gray-100 border border-gray-400 hover:border-pink-200"
          >
            <FaArrowRight className="text-sm sm:text-md" />
          </button>
        </div>
      </div>

      {/* Carousel */}
      <div
        className="slide-wrapper mt-10 sm:mt-16"
        ref={wrapperRef}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="overlay" />
        {[...Array(1000)].map((_, i) => {
          const virtualIndex = i - 500
          const actualIndex =
            ((virtualIndex % totalSlides) + totalSlides) % totalSlides
          return (
            <div
              className="slide"
              key={i}
              ref={(el) => (slidesRef.current[i] = el)}
              data-virtual-index={virtualIndex}
              data-caption={`Image ${actualIndex + 1}`}
            >
              <img
                src={photoData[actualIndex]}
                alt={`Image ${actualIndex + 1}`}
                loading="lazy"
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}
