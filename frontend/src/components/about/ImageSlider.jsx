import React, { useEffect, useRef, useState } from 'react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import './ImageSlider.css'
import FilterBox from '../filter/FilterBox'

const photoData = [
  { img: '/img/11.jpg', category: 'Fashion & Apparel' },
  { img: '/img/12.jpg', category: 'Beauty & Skincare' },
  { img: '/img/13.jpg', category: 'Luxury & Designer' },
  { img: '/img/14.jpg', category: 'Sustainable Shopping' },
  { img: '/img/15.jpg', category: 'Tech & Gadgets' },
  { img: '/img/16.jpg', category: 'Fashion & Apparel' },
  { img: '/img/17.jpg', category: 'Beauty & Skincare' },
  { img: '/img/19.jpg', category: 'Luxury & Designer' },
  { img: '/img/20.jpg', category: 'Sustainable Shopping' },
  { img: '/img/web1.jpg', category: 'Tech & Gadgets' },
  { img: '/img/22.jpg', category: 'Fashion & Apparel' },
  { img: '/img/23.jpg', category: 'Beauty & Skincare' },
  { img: '/img/24.jpg', category: 'Luxury & Designer' },
  { img: '/img/25.jpg', category: 'Sustainable Shopping' },
  { img: '/img/26.jpg', category: 'Tech & Gadgets' },
  { img: '/img/27.jpg', category: 'Fashion & Apparel' },
  { img: '/img/28.jpg', category: 'Beauty & Skincare' },
  { img: '/img/29.jpg', category: 'Luxury & Designer' },
  { img: '/img/30.jpg', category: 'Sustainable Shopping' },
  { img: '/img/31.jpg', category: 'Tech & Gadgets' },
  { img: '/img/32.jpg', category: 'Fashion & Apparel' },
]

const uniqueCategories = [...new Set(photoData.map((photo) => photo.category))]

const lerp = (start, end, t) => start + t * (end - start)

const getScale = (distance) => {
  if (distance === 0) return 1
  if (Math.abs(distance) === 1) return 0.7
  if (Math.abs(distance) === 2) return 0.5
  return 0.3
}

const getLeft = (i, current, slideWidth, wrapperWidth) => {
  const diff = i - current
  const centerPosition = (wrapperWidth - slideWidth) / 2

  if (diff === 0) return centerPosition
  if (diff === -3) return centerPosition - slideWidth * 1.5
  if (diff === -2) return centerPosition - slideWidth * 1.0
  if (diff === -1) return centerPosition - slideWidth * 0.5
  if (diff === 1) return centerPosition + slideWidth * 0.5
  if (diff === 2) return centerPosition + slideWidth * 1.0
  if (diff === 3) return centerPosition + slideWidth * 1.5

  return diff < 0 ? -(wrapperWidth + slideWidth) : wrapperWidth + slideWidth
}

export default function ImageSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const wrapperRef = useRef(null)
  const slidesRef = useRef([])
  const [slideWidth, setSlideWidth] = useState(520)
  const [slideHeight, setSlideHeight] = useState(300)
  const [wrapperWidth, setWrapperWidth] = useState(1200)
  const [isHovered, setIsHovered] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const filteredPhotos = selectedCategory
    ? photoData.filter((photo) => photo.category === selectedCategory)
    : photoData

  const totalSlides = filteredPhotos.length
  const neighbors = 3

  const extendedPhotos =
    totalSlides > 0
      ? [
          ...filteredPhotos.slice(-neighbors),
          ...filteredPhotos,
          ...filteredPhotos.slice(0, neighbors),
        ]
      : filteredPhotos

  const moveSlide = (target, skipTransition = false) => {
    if (totalSlides === 0) return

    target = Math.max(0, Math.min(target, totalSlides - 1))
    setIsTransitioning(!skipTransition)

    slidesRef.current.forEach((slide, index) => {
      if (!slide) return

      const dist = index - (target + neighbors)
      const absDist = Math.abs(dist)

      if (absDist > neighbors) {
        slide.style.display = 'none'
        slide.style.pointerEvents = 'none'
        return
      }

      slide.style.display = 'block'
      slide.style.opacity = '1'
      slide.style.pointerEvents = 'auto'

      const left = getLeft(index, target + neighbors, slideWidth, wrapperWidth)
      const scale = getScale(dist)

      slide.style.transition = skipTransition ? 'none' : 'all 0.5s ease'
      slide.style.transform = `scale(${scale})`
      slide.style.left = `${left}px`
      slide.style.zIndex = neighbors + 1 - absDist
    })

    setCurrentSlide(target)

    // Reset isTransitioning after the transition duration (500ms)
    if (!skipTransition) {
      setTimeout(() => setIsTransitioning(false), 500)
    }
  }

  const next = () => {
    if (isTransitioning) return
    if (currentSlide >= totalSlides - 1) {
      setCurrentSlide(0)
      moveSlide(0, true)
      setTimeout(() => moveSlide(0), 500) 
    } else {
      moveSlide(currentSlide + 1)
    }
  }

  const prev = () => {
    if (isTransitioning) return
    if (currentSlide <= 0) {
      setCurrentSlide(totalSlides - 1)
      moveSlide(totalSlides - 1, true)
      setTimeout(() => moveSlide(totalSlides - 1), 500) 
    } else {
      moveSlide(currentSlide - 1)
    }
  }

  const handleCategoryChange = (category) => {
    setSelectedCategory(category === selectedCategory ? null : category)
    setCurrentSlide(0)
    setIsTransitioning(false) // Reset transitioning on category change
  }

  useEffect(() => {
    moveSlide(0, true) 
  }, [filteredPhotos])

  useEffect(() => {
    const updateSize = () => {
      if (wrapperRef.current) {
        const newWrapperWidth = wrapperRef.current.offsetWidth
        setWrapperWidth(newWrapperWidth)

        if (newWrapperWidth <= 768) {
          setSlideWidth(320)
          setSlideHeight(200)
        } else if (newWrapperWidth <= 1024) {
          setSlideWidth(400)
          setSlideHeight(250)
        } else {
          setSlideWidth(520)
          setSlideHeight(300)
        }

        moveSlide(currentSlide, true)
      }
    }
    updateSize()
    window.addEventListener('resize', updateSize)
    return () => window.removeEventListener('resize', updateSize)
  }, [currentSlide])

  useEffect(() => {
    if (isHovered || isTransitioning) return
    const interval = setInterval(() => next(), 3000)
    return () => clearInterval(interval)
  }, [currentSlide, isHovered, isTransitioning])

  return (
    <div className="slider-container px-4 sm:px-6 md:px-10 py-10">
      <div className="py-5">
        <div className="relative flex items-center justify-between mt-2">
          <h3 className="text-3xl md:text-6xl custom-times font-semibold text-black">
            What We Cover
          </h3>
          <div className="inline-block md:hidden">
            <FilterBox
              categories={uniqueCategories}
              selectedCategory={selectedCategory}
              onSelectCategory={handleCategoryChange}
              showAll={true}
            />
          </div>
        </div>

        <div id="big-filter-box" className="hidden md:inline-block">
          <FilterBox
            categories={uniqueCategories}
            selectedCategory={selectedCategory}
            onSelectCategory={handleCategoryChange}
            showAll={true}
          />
        </div>

        <p className="text-black font-inter mt-4 max-w-3xl">
          We explore a wide range of shopping categories, from fashion and tech
          to beauty and home essentials. Stay ahead with the latest trends,
          discover must-have products, and unlock exclusive deals curated just
          for you.
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-start md:items-center pt-10 gap-4 md:gap-0">
        <h1 className="text-3xl md:text-5xl font-bold font-inter text-black border-l-4 border-[#E37561] pl-4">
          Blog
        </h1>
        <div className="flex items-center space-x-3 sm:space-x-6">
          <span className="text-lg sm:text-2xl text-black font-medium">
            <a href="/trends"> See All </a>
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

      <div
        className="slide-wrapper mt-10 sm:mt-16"
        ref={wrapperRef}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {totalSlides === 0 ? (
          <p className="text-xl font-bold text-center text-black">
            No images found
          </p>
        ) : (
          extendedPhotos.map((photo, index) => (
            <div
              className="slide"
              key={`${photo.img}-${index}`}
              ref={(el) => (slidesRef.current[index] = el)}
              data-caption={photo.category}
            >
              <img src={photo.img} alt={`Image ${index + 1}`} loading="lazy" />
              <div className="slide-category">{photo.category}</div>
            </div>
          ))
        )}
      </div>
    </div>
  )
}
