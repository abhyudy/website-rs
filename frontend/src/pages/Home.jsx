import React, { useEffect, useRef } from 'react'
import Subscribe from '../components/Subscribe'

const Home = () => {
  const scrollRef = useRef(null)

  useEffect(() => {
    const scrollContainer = scrollRef.current
    let scrollInterval

    if (scrollContainer) {
      scrollInterval = setInterval(() => {
        scrollContainer.scrollTop += 1
        if (
          scrollContainer.scrollTop + scrollContainer.clientHeight >=
          scrollContainer.scrollHeight
        ) {
          scrollContainer.scrollTop = 0
        }
      }, 30)
    }

    return () => clearInterval(scrollInterval)
  }, [])

  return (
    <div
      className="min-h-screen"
      style={{ backgroundColor: 'var(--color-background-color)' }}
    >
      <main>
        {/* Hero Section */}
        <section className="bg-background-color py-8 sm:py-12 lg:py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-6 lg:gap-10">
            {/* Left: Text */}
            <div className="lg:w-1/2 text-center lg:text-left">
              <h1 className="text-5xl font-bold custom-times text-gray-900 mb-4 leading-tight">
                Style Meets Savings: <br /> Discover, Shop & Stay Ahead!
              </h1>
              <p className="text-base sm:text-lg text-gray-600 mb-6">
                Unlock the latest trends, exclusive deals, and expert shopping
                insights – all in one place. Elevate your shopping game today!
              </p>
              <a
                href="/trendsDetail"
                className="bg-background-black text-white px-4 py-2 sm:px-6 sm:py-3 rounded-full hover:bg-gray-800 transition text-sm sm:text-base"
              >
                Read More
              </a>
            </div>

            {/* Right: Image */}
            <div className="lg:w-1/2 mt-6 lg:mt-0">
              <img
                src="/img/home2.png"
                alt="Shopping Fun"
                className="w-full h-auto rounded-lg object-cover max-h-[400px]"
              />
            </div>
          </div>

          {/* Bottom Section */}
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-4 lg:gap-6 mt-8">
            {/* Visitor Box */}
            <div
              className="rounded-xl flex flex-col items-center justify-center p-4 relative mt-4 sm:mt-6"
              style={{
                backgroundColor: 'var(--color-color)',
                width: '100%',
                maxWidth: '251px',
                height: '250px',
              }}
            >
              {/* Grouped Profile Images */}
              <div className="flex -space-x-4 mb-4">
                <img
                  src="https://randomuser.me/api/portraits/men/32.jpg"
                  alt="User 1"
                  className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-white"
                />
                <img
                  src="https://randomuser.me/api/portraits/women/44.jpg"
                  alt="User 2"
                  className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-white"
                />
                <img
                  src="https://randomuser.me/api/portraits/women/65.jpg"
                  alt="User 3"
                  className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-white"
                />
              </div>

              {/* Visitor Count */}
              <p className="text-5xl sm:text-6xl font-bold text-white">4.3k</p>
            </div>

            {/* Shopping Bags Image */}
            <div
              className="mt-4 sm:mt-6"
              style={{ width: '100%', maxWidth: '251px', height: '250px' }}
            >
              <img
                src="/img/home3.png"
                alt="Shopping Bags"
                className="w-full h-full rounded-xl object-cover"
              />
            </div>

            {/* Categories */}
            <div className="w-full lg:w-1/2 sm:mt-6">
              <h3 className="text-gray-800 mb-4">
                Categories
                <hr className="h-px mb-6 mt-2 border-0 bg-gradient-to-r from-gray-200 via-gray-600 to-gray-200" />
              </h3>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                <button className="px-3 py-1 sm:px-4 sm:py-2 border border-pink-500 text-pink-600 rounded-full hover:bg-pink-50 transition text-sm sm:text-base">
                  Luxury & Designer
                </button>
                <button className="px-3 py-1 sm:px-4 sm:py-2 bg-blue-100 text-blue-700 border border-blue-400 rounded-full hover:bg-blue-200 transition text-sm sm:text-base">
                  Fashion & Style
                </button>
                <button className="px-3 py-1 sm:px-4 sm:py-2 border border-gray-300 text-gray-700 rounded-full hover:bg-gray-100 transition text-sm sm:text-base">
                  Sustainable Shopping
                </button>
                <button className="px-3 py-1 sm:px-4 sm:py-2 border border-gray-300 text-gray-700 rounded-full hover:bg-gray-100 transition text-sm sm:text-base">
                  Tech & Gadgets
                </button>
                <button className="px-3 py-1 sm:px-4 sm:py-2 border border-gray-300 text-gray-700 rounded-full hover:bg-gray-100 transition text-sm sm:text-base">
                  Beauty & Skincare
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Most Popular Section */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          {/* Heading */}
          <div className="flex flex-col sm:flex-row justify-between items-center mb-6 sm:mb-8">
            <h1 className=" text-5xl custom-times font-bold  text-background-black text-center sm:text-left">
              Most Popular At <br /> The Moment
            </h1>
            <a
              href="#"
              className="text-sm sm:text-base font-semibold underline text-background-black mt-4 sm:mt-0"
            >
              SEE ALL
            </a>
          </div>
          {/* Staggered Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              {
                title: 'Fashion & Apparel',
                img: '/img/img1.png',
                offset: 'translate-y-4',
              },
              {
                title: 'Tech & Gadgets',
                img: '/img/img2.png',
                offset: '-translate-y-4',
              },
              {
                title: 'Beauty & Skincare',
                img: '/img/img3.png',
                offset: 'translate-y-4',
              },
              {
                title: 'Sustainable Shopping',
                img: '/img/img4.png',
                offset: '-translate-y-4',
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className={`relative rounded-xl overflow-hidden shadow-lg h-[300px] sm:h-[346px] w-full ${item.offset}`}
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background-black/70 to-transparent p-4">
                  <h5 className="text-white font-semibold text-base sm:text-lg">
                    {item.title}
                  </h5>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Stay Ahead Section */}
        <section className="bg-background-black max-w-6xl h-auto min-h-[300px] mx-auto px-4 sm:px-6 lg:px-8 mt-8 sm:mt-16 flex flex-col lg:flex-row gap-6 rounded-xl overflow-hidden">
          {/* Left Block */}
          <div className="text-white p-6 sm:p-10 flex flex-col justify-between lg:w-1/2">
            <h1 className="text-6xl font-bold custom-times">
              Stay Ahead of <br /> the Trends!
            </h1>
            <p className="mb-14 text-xs sm:text-sm">
              Get the latest insights on must-have products, <br />
              exclusive deals, and expert shopping tips.
            </p>
            <a
              href="#"
              className="bg-white text-background-black px-4 sm:px-6 py-2 rounded-full font-medium self-start mt-8"
            >
              See All
            </a>
          </div>

          {/* Right Scrolling Cards */}
          <div
            ref={scrollRef}
            className="relative w-full lg:w-[475px] h-[300px] sm:h-[400px] overflow-hidden no-scrollbar" // Added no-scrollbar
          >
            <div className="absolute top-0 animate-scroll space-y-4 w-full">
              {[
                {
                  title: 'Shopping Mistakes You Should Avoid at All Costs',
                  img: '/img/img1.png',
                },
                {
                  title: 'Top 10 Fashion Trends for 2025',
                  img: '/img/img6.png',
                },
                {
                  title: 'Fashion Tips from Stylists',
                  img: '/img/img7.png',
                },
                {
                  title: 'Shopping Mistakes You Should Avoid at All Costs',
                  img: '/img/img1.png',
                },
                {
                  title: 'Top 10 Fashion Trends for 2025',
                  img: '/img/img6.png',
                },
                {
                  title: 'Fashion Tips from Stylists',
                  img: '/img/img7.png',
                },
              ].map((card, idx) => (
                <div
                  key={idx}
                  className="bg-pink-200 p-4 rounded-2xl flex justify-between items-center relative w-full h-[200px] sm:h-[254px]"
                >
                  {/* Text Content */}
                  <div className="text-white font-semibold text-xs sm:text-sm max-w-[60%] leading-tight">
                    {card.title}
                  </div>

                  {/* Image and Icon */}
                  <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-lg overflow-hidden">
                    <img
                      src={card.img}
                      alt={card.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-1 right-1 w-5 h-5 sm:w-6 sm:h-6 bg-white rounded-full flex items-center justify-center shadow">
                      <span className="text-xs sm:text-sm text-background-black">
                        →
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Trending Posts Section */}
        <section className="bg-[#FDF1F3] py-8 sm:py-10">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px8">
            {/* Header */}
            <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
              <h1 className=" text-6xl font-bold custom-times text-center sm:text-left">Trending Posts</h1>
              <a
                href="#"
                className="text-sm font-semibold underline text-background-black mt-4 sm:mt-0"
              >
                SEE ALL
              </a>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Left Big Card */}
              <div className="bg-background-light-gray rounded-xl p-4 sm:p-6 flex flex-col justify-between relative h-full col-span-1">
                <span className="text-xs bg-white text-pink-500 px-2 sm:px-3 py-1 rounded-full mb-3 w-fit">
                  Trendy posts
                </span>
                <h3 className="text-base sm:text-lg font-semibold mb-1">
                  Luxury vs. Affordable Fashion: Is It Worth the Price?
                </h3>
                <p className="text-xs sm:text-sm text-gray-700 mb-4">
                  Is designer clothing worth the investment, or can
                  budget-friendly brands....
                </p>
                <img
                  src="/img/girlpost.png"
                  alt="Luxury vs Affordable"
                  className="w-full max-w-[150px] sm:max-w-[200px] self-end mt-auto"
                />
              </div>

              {/* Right Cards */}
              <div className="grid grid-cols-2 gap-4 md:col-span-1">
                {/* Top Left Card */}
                <div className="bg-orange-100 rounded-xl p-3 sm:p-4 flex justify-between items-start h-full">
                  <p className="text-sm sm:text-base font-semibold w-2/3">
                    Latest in Retail & Shopping
                  </p>
                  <img
                    src="/img/bag.png"
                    alt="Retail"
                    className="w-12 h-12 sm:w-16 sm:h-16 object-contain self-end"
                  />
                </div>

                {/* Top Right Card */}
                <div className="bg-blue-100 rounded-xl p-3 sm:p-4 flex justify-between items-start h-full">
                  <p className="text-sm sm:text-base font-semibold w-2/3">
                    Recent Insights & Trends
                  </p>
                  <img
                    src="/img/watch.png"
                    alt="Watch"
                    className="w-12 h-12 sm:w-16 sm:h-16 object-contain self-end"
                  />
                </div>

                {/* Bottom Full-Width Card */}
                <div className="bg-yellow-100 rounded-xl p-3 sm:p-4 flex justify-between items-start col-span-2 h-full">
                  <div>
                    <p className="text-sm sm:text-base font-semibold">
                      Top Ethical & Sustainable Fashion Brands to Watch
                    </p>
                    <p className="text-sm text-gray-600 mt-1">
                      Is designer clothing worth the investment, or can
                      budget-friendly brands...
                    </p>
                  </div>
                  <img
                    src="/img/bag2.png"
                    alt="Sustainable"
                    className="w-20 h-20 sm:w-24 sm:h-24 object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Top Discount Section */}
        <section className="bg-[url('/img/backgroundimg.png')] bg-cover bg-center py-8 sm:py-10">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              {/* Left Image */}
              <div className="md:w-1/2">
                <img
                  src="/img/img6.png"
                  alt="Top Discounts"
                  className="w-full h-auto object-cover object-top max-h-[200px] sm:max-h-[400px]"
                />
              </div>

              {/* Right Content */}
              <div className="md:w-1/2 text-center md:text-left">
                <p className="text-xs sm:text-sm text-[#D96B69] font-semibold mb-2">
                  Top Deals & Discounts
                </p>
                <h1 className="text-5xl custom-times sm:text-2xl md:text-3xl font-bold mb-4 leading-snug">
                  Ultimate Guide to Finding the <br /> Best Online Discounts
                </h1>
                <p className="text-xs sm:text-sm text-background-gray mb-6">
                  Never pay full price again! Learn how to find hidden deals,
                  discount codes, and cashback offers while shopping online.
                </p>
                <button className="bg-background-black text-white text-xs sm:text-sm px-4 sm:px-5 py-2 rounded-full hover:bg-gray-800">
                  Read More
                </button>
              </div>
            </div>
          </div>
        </section>
        <Subscribe />
      </main>
    </div>
  )
}

export default Home
