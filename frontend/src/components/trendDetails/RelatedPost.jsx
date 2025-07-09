import React from 'react'
import { Link } from 'react-router-dom'

// Data
const relatedPosts = [
  {
    topic: 'Fashion & Apparel',
    title: 'How to Build a Capsule Wardrobe That Lasts',
    description:
      'Discover the essentials of creating a minimal, versatile wardrobe...',
    image: '/img/img1.png',
    author: 'By Emily Davis',
    slug: 'capsule-wardrobe-1',
  },
  {
    topic: 'Fashion & Apparel',
    title: 'How to Build a Capsule Wardrobe That Lasts',
    description:
      'Discover the essentials of creating a minimal, versatile wardrobe...',
    image: '/img/img2.png',
    author: 'By Emily Davis',
    slug: 'capsule-wardrobe-2',
  },
  {
    topic: 'Fashion & Apparel',
    title: 'How to Build a Capsule Wardrobe That Lasts',
    description:
      'Discover the essentials of creating a minimal, versatile wardrobe...',
    image: '/img/img3.png',
    author: 'By Emily Davis',
    slug: 'capsule-wardrobe-3',
  },
  {
    topic: 'Fashion & Apparel',
    title: 'How to Build a Capsule Wardrobe That Lasts',
    description:
      'Discover the essentials of creating a minimal, versatile wardrobe...',
    image: '/img/img4.png',
    author: 'By Emily Davis',
    slug: 'capsule-wardrobe-4',
  },
  {
    topic: 'Fashion & Apparel',
    title: 'Fashion & Apparel Wardrobe That Lasts',
    description:
      'Discover the essentials of creating a minimal, versatile wardrobe...',
    image: '/img/img5.png',
    author: 'By Emily Davis',
    slug: 'capsule-wardrobe-5',
  },
  {
    topic: 'Fashion & Apparel',
    title: 'Fashion & Apparel Wardrobe That Lasts',
    description:
      'Discover the essentials of creating a minimal, versatile wardrobe...',
    image: '/img/img6.png',
    author: 'By Emily Davis',
    slug: 'capsule-wardrobe-6',
  },
]

const RelatedPost = () => {
  return (
    <div className="bg-white">
      <div className="max-w-[1440px] mx-auto px-8 py-10">
        <h1 className="text-4xl custom-times font-bold pb-4">Related Posts</h1>
        <div className="grid grid-cols-3 gap-6 overflow-visible">
          {relatedPosts.map((post, index) => (
            <Link key={index} to={`/post/${post.slug}`} className="block">
              <div
                className="p-2 transform transition duration-300 hover:brightness-110 hover:scale-105 cursor-pointer relative z-10 hover:z-20"
                style={{ width: '100%', maxWidth: '384px', height: '226px' }}
                role="button"
                aria-label={`View post: ${post.title}`}
              >
                <div className="flex items-center h-full">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-40 h-full object-cover mr-3"
                  />
                  <div className="flex-1">
                    <p className="text-sm text-gray-500 mb-4">{post.topic}</p>
                    <h6 className="text-lg font-semibold line-clamp-1 mb-2">
                      {post.title}
                    </h6>
                    <p className="text-sm text-gray-600 line-clamp-2 mb-2">
                      {post.description}
                    </p>
                    <p className="text-sm text-gray-500 mt-4">{post.author}</p>
                  </div>
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
