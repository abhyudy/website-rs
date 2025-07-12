import React, { useEffect, useRef } from 'react'

const StayAheadSection = () => {
  const scrollRef = useRef(null)

  useEffect(() => {
    const container = scrollRef.current
    if (!container) return

    let scrollPosition = 0
    const scrollSpeed = 1

    const scroll = () => {
      scrollPosition += scrollSpeed
      if (scrollPosition >= container.scrollHeight / 2) {
        scrollPosition = 0
      }
      container.scrollTop = scrollPosition
    }

    const interval = setInterval(scroll, 25)
    return () => clearInterval(interval)
  }, [])

  const cards = [
    {
      title: 'Shopping Mistakes You Should Avoid at All Costs',
      image: '/img/Pic1.png',
      bgColor: '#DDABAA',
    },
    {
      title: 'Top Retail Trends That Will Dominate This Year',
      image: '/img/Pic2.png',
      bgColor: '#FFB9B9',
    },
    {
      title: 'How Smart Shoppers Save Big Without Sacrificing Style',
      image: '/img/pic3.png',
      bgColor: '#F9D5E5',
    },
  ]

  const infiniteCards = [...cards, ...cards]

  return (
    <section className="bg-background-black w-full max-w-6xl mx-auto px-4 sm:px-6 mt-8 sm:mt-16 flex flex-col lg:flex-row gap-4 rounded-xl overflow-hidden">
      {/* Left Block */}
      <div className="text-white p-6 sm:p-10 flex flex-col lg:w-1/2 justify-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold custom-times mb-6 leading-tight">
          Stay Ahead of <br /> the Trends!
        </h1>
        <p className="mb-6 text-sm sm:text-base">
          Get the latest insights on must-have products, <br />
          exclusive deals, and expert shopping tips.
        </p>
        <a
          href="/trends"
          className="bg-white text-background-black px-6 py-2 rounded-full font-medium self-start hover:bg-gray-200"
        >
          See All
        </a>
      </div>

      {/* Right Block */}
      <div
        ref={scrollRef}
        className="relative w-full lg:w-[475px] h-[260px] sm:h-[400px] overflow-hidden no-scrollbar"
      >
        <div className="absolute top-0 space-y-4 w-full">
          {infiniteCards.map((card, idx) => (
            <div
              key={idx}
              className="rounded-2xl w-full h-[200px] sm:h-[254px] flex text-white relative"
              style={{ backgroundColor: card.bgColor }}
            >
              {/* Left: Title */}
              <div className="w-2/3 flex flex-col justify-start p-4">
                <h1 className="text-2xl sm:text-3xl font-bold leading-snug">
                  {card.title}
                </h1>
              </div>

              {/* Right: Full-height Image */}
              <div className=" absolute right-0 h-full">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default StayAheadSection
