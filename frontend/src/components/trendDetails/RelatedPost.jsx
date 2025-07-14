import React from 'react'
import { Link } from 'react-router-dom'

const relatedPosts = [
  {
    topic: 'Fashion & Apparel',
    title: 'How to Build a Capsule Wardrobe That Lasts',
    description:
      'Discover the essentials of creating a minimal, versatile wardrobe...',
    image: '/img/rp.jpg',
    author: 'By Emily Davis',
    slug: 'capsule-wardrobe-1',
  },
  {
    topic: 'Fashion & Apparel',
    title: 'How to Build a Capsule Wardrobe That Lasts',
    description:
      'Discover the essentials of creating a minimal, versatile wardrobe...',
    image: '/img/rp.jpg',
    author: 'By Emily Davis',
    slug: 'capsule-wardrobe-2',
  },
  {
    topic: 'Fashion & Apparel',
    title: 'How to Build a Capsule Wardrobe That Lasts',
    description:
      'Discover the essentials of creating a minimal, versatile wardrobe...',
    image: '/img/rp.jpg',
    author: 'By Emily Davis',
    slug: 'capsule-wardrobe-3',
  },
  {
    topic: 'Fashion & Apparel',
    title: 'How to Build a Capsule Wardrobe That Lasts',
    description:
      'Discover the essentials of creating a minimal, versatile wardrobe...',
    image: '/img/rp.jpg',
    author: 'By Emily Davis',
    slug: 'capsule-wardrobe-4',
  },
  {
    topic: 'Fashion & Apparel',
    title: 'Fashion & Apparel Wardrobe That Lasts',
    description:
      'Discover the essentials of creating a minimal, versatile wardrobe...',
    image: '/img/rp.jpg',
    author: 'By Emily Davis',
    slug: 'capsule-wardrobe-5',
  },
  {
    topic: 'Fashion & Apparel',
    title: 'Fashion & Apparel Wardrobe That Lasts',
    description:
      'Discover the essentials of creating a minimal, versatile wardrobe...',
    image: '/img/rp.jpg',
    author: 'By Emily Davis',
    slug: 'capsule-wardrobe-6',
  },
]

const RelatedPost = () => {
  return (
    <div className="bg-white">
      <div className="w-full max-w-6xl mx-auto px-4 py-10">
        <h1 className="text-3xl sm:text-4xl font-inter font-bold pb-6 custom-times">
          Related Posts
        </h1>

        {/* Scrollable on small, grid on medium+ */}
        <div className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 overflow-x-auto md:overflow-visible scrollbar-hide">
          {relatedPosts.map((post, index) => (
            <Link
              key={index}
              to={`/post/${post.slug}`}
              className="flex-shrink-0 md:flex-shrink md:w-auto"
            >
              <div
                className="bg-white shadow-md rounded-lg overflow-hidden transform transition duration-300 hover:brightness-110 hover:scale-105 cursor-pointer"
                style={{ width: '340px', height: '390px' }}
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-[180px] object-cover"
                />
                <div className="p-4 flex flex-col justify-between h-[210px]">
                  <div>
                    <p className="text-sm font-inter text-gray-500 mb-1">{post.topic}</p>
                    <h6 className="text-lg  font-inter font-semibold line-clamp-2 mb-2">
                      {post.title}
                    </h6>
                    <p className="text-sm font-inter text-gray-600 line-clamp-2">
                      {post.description}
                    </p>
                  </div>
                  <p className="text-sm font-inter text-gray-500 mt-3">{post.author}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default RelatedPost
