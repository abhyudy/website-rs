import React, { useState, useEffect, useRef } from 'react'
import { FaFacebookF, FaPinterestP, FaXTwitter } from 'react-icons/fa6'
import Faq from './FaqSection'
import FaqSection from './FaqSection'

const TrendsDetail = () => {
  const tableOfContent = [
    {
      id: 'oversized-blazers',
      title: 'Oversized Blazers: Redefining Power Dressing',
    },
    { id: 'bold-prints', title: 'Bold Prints: Wear Your Personality' },
    { id: 'chunky-footwear', title: 'Chunky Footwear: Big, Bold & Functional' },
    { id: 'soft-pastels', title: 'Soft Pastels: A Breath of Fresh Air' },
    { id: 'sheer-layers', title: 'Sheer Layers: Light, Airy, and Intriguing' },
    {
      id: 'elevated-athleisure',
      title: 'Elevated Athleisure: Comfy Meets Classy',
    },
    {
      id: 'statement-accessories',
      title: 'Statement Accessories: The Bigger, The Better',
    },
    { id: 'matching-sets', title: 'Matching Sets: Coordination is Chic' },
    { id: 'fringe-details', title: 'Fringe Details: Add Movement and Fun' },
    {
      id: 'sustainable-fabrics',
      title: 'Sustainable Fabrics: Fashion with a Conscience',
    },
    {
      id: 'final-thoughts',
      title: 'Final Thoughts: Style is What You Make It',
    },
  ]

  const [activeSection, setActiveSection] = useState('')
  const observer = useRef(null)

  useEffect(() => {
    observer.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.5 }
    )

    tableOfContent.forEach((item) => {
      const section = document.getElementById(item.id)
      if (section) observer.current.observe(section)
    })

    return () => {
      if (observer.current) {
        observer.current.disconnect()
      }
    }
  }, [])

  const handleLinkClick = (id) => (e) => {
    e.preventDefault()
    const section = document.getElementById(id)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
      setActiveSection(id)
    }
  }

  // related posts data
  const relatedPosts = [
    {
      topic: 'Fashion & Apparel',
      title: 'How to Build a Capsule Wardrobe That Lasts',
      description:
        'Discover the essentials of creating a minimal, versatile wardrobe...',
      image: '/img/img1.png',
      author: 'By Emily Davis',
    },
    {
      topic: 'Fashion & Apparel',
      title: 'How to Build a Capsule Wardrobe That Lasts',
      description:
        'Discover the essentials of creating a minimal, versatile wardrobe...',
      image: '/img/img2.png',
      author: 'By Emily Davis',
    },
    {
      topic: 'Fashion & Apparel',
      title: 'How to Build a Capsule Wardrobe That Lasts',
      description:
        'Discover the essentials of creating a minimal, versatile wardrobe...',
      image: '/img/img3.png',
      author: 'By Emily Davis',
    },
    {
      topic: 'Fashion & Apparel',
      title: 'How to Build a Capsule Wardrobe That Lasts',
      description:
        'Discover the essentials of creating a minimal, versatile wardrobe...',
      image: '/img/img4.png',
      author: 'By Emily Davis',
    },
    {
      topic: 'Fashion & Apparel',
      title: 'Fashion & Apparel Wardrobe That Lasts',
      description:
        'Discover the essentials of creating a minimal, versatile wardrobe...',
      image: '/img/img5.png',
      author: 'By Emily Davis',
    },
    {
      topic: 'Fashion & Apparel',
      title: 'Fashion & Apparel Wardrobe That Lasts',
      description:
        'Discover the essentials of creating a minimal, versatile wardrobe...',
      image: '/img/img6.png',
      author: 'By Emily Davis',
    },
  ]

  return (
    <div className="bg-[#FFF3F3] text-black py-10 px-4 lg:px-20">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10">
        <div className="lg:w-2/3">
          <h1 className="text-5xl font-bold text-center mb-2 leading-tight">
            10 Must-Have <br />
            Fashion Trends for <br />
            This Season
          </h1>
          <p className="text-sm text-center text-gray-700 mb-4">
            By Sarah Thompson • March 29, 2025 • 5 min read
          </p>

          <div className="flex justify-center gap-4 mb-6 text-gray-600 text-lg">
            <FaFacebookF className="cursor-pointer" />
            <FaPinterestP className="cursor-pointer" />
            <FaXTwitter className="cursor-pointer" />
          </div>

          <div className="flex flex-col md:flex-row gap-6 mb-8">
            <img
              src="/img/blog1.jpg"
              alt="Fashion Hero"
              className="w-full md:w-1/2 rounded-lg object-cover"
            />
            <p className="text-sm text-gray-700 leading-relaxed">
              Fashion isn’t just about appearance—it’s about confidence,
              comfort, and self-expression. In 2025, the fashion scene is
              thriving with creativity, embracing daring silhouettes, timeless
              textures, and sustainable innovation. Designers and style icons
              are mixing vintage charm with modern edge, creating trends that
              feel both exciting and wearable. In 2025, the fashion scene is
              thriving with creativity, embracing daring silhouettes, timeless
              textures, and sustainable innovation. Designers and style icons
              are mixing vintage charm with modern edge, creating trends that
              feel both exciting and wearable.
            </p>
          </div>

          {tableOfContent.map((item, idx) => (
            <section id={item.id} key={item.id} className="mb-10 scroll-mt-24">
              <h1 className="text-4xl font-semibold mb-2">{item.title}</h1>
              <p className="text-sm text-gray-700 leading-relaxed">
                This section describes the trend: <strong>{item.title}</strong>.
                Add your real fashion description here. Use expressive writing
                to engage readers with style tips, cultural relevance, or brand
                shout-outs!
              </p>
            </section>
          ))}

          <section id="final-thoughts" className="mb-10 scroll-mt-24">
            <h2 className="text-xl font-semibold mb-2">
              Final Thoughts: Style is What You Make It
            </h2>
            <p className="text-sm text-gray-700 leading-relaxed">
              Whether you're embracing a bold new look or sticking with timeless
              classics, this season is all about self-expression. Let fashion be
              your canvas!
            </p>
          </section>

          {/* FAQ  */}
          <FaqSection />

          {/* Navigation Buttons */}
          <div className="flex justify-between mb-10">
            <button className="bg-background-black text-white px-4 py-2 rounded hover:[background-color:#E37561] cursor-pointer">
              Previous
            </button>
            <button className="bg-background-black text-white px-4 py-2 rounded hover:[background-color:#E37561] cursor-pointer">
              Next
            </button>
          </div>

          {/* Related Posts */}
          <div className="mb-10">
            <h1 className="text-4xl custom-times font-bold mb-6">
              Related Posts
            </h1>
            <div className="w-[1200px] mx-auto">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {relatedPosts.map((post, index) => (
                  <div
                    key={index}
                    className="bg-white shadow-md rounded-lg p-2"
                    style={{ width: '384px', height: '226px' }}
                  >
                    <div className="flex items-center h-full">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-40 h-full object-cover mr-2"
                      />
                      <div className="flex-1">
                        <p className="text-sm text-background-gray mb-6">
                          {post.topic}
                        </p>
                        <h6 className="text-lg font-semibold line-clamp-1 mb-2">
                          {post.title}
                        </h6>
                        <p className="text-sm text-gray-600 line-clamp-2 mb-2">
                          {post.description}
                        </p>
                        <p className="text-sm text-gray-500 mt-6">
                          {post.author}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <aside className="lg:w-1/3">
          <div className="  p-4 mb-6 max-h-[400px] overflow-y-auto">
            <h2 className="text-3xl font-semibold mb-4">Table of Content</h2>
            <ul className="text-sm space-y-2">
              {tableOfContent.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={handleLinkClick(item.id)}
                    className={`block text-pink-500 hover:underline transition-colors ${
                      activeSection === item.id
                        ? 'font-bold bg-pink-100 p-1 rounded'
                        : ''
                    }`}
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className=" p-4">
            <h2 className="text-3xl custom-times font-semibold mb-2">
              Most Viewed
            </h2>
            <ul className="text-sm space-y-2">
              <li>
                <a href="#" className="text-pink-500 hover:underline">
                  Top Sustainable Fashion Brands
                </a>
              </li>
              <li>
                <a href="#" className="text-pink-500 hover:underline">
                  Accessories 101: From Subtle to Statement
                </a>
              </li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  )
}

export default TrendsDetail
