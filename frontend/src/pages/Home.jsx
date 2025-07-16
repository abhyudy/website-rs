import React from 'react'
import Subscribe from '../components/Subscribe'
import StayAheadSection from '../components/Home/StayAheadSection'
import CategoryButtons from '../components/Home/CategoryButtons'
import MobileBottomSection from '../components/Home/MobileBottomSection'

const Home = () => {
  return (
    <div className=" bg-background-color">
      {/* Hero Section */}
      <div className="py-container mx-auto py-8">
        <div className="w-full max-w-6xl mx-auto px-4 flex flex-col-reverse md:flex-row items-center gap-6 lg:gap-10">
          {/* Left: Text */}
          <div className="w-full md:w-1/2 text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold custom-times text-black mb-4 leading-tight">
              Style Meets Savings: <br /> Discover, Shop & Stay Ahead!
            </h1>
            <p className="text-base font-inter text-gray-600 mb-6">
              Unlock the latest trends, exclusive deals, and expert shopping
              insights – all in one place. Elevate your shopping game today!
            </p>
            <a
              href="/trends"
              className="font-inter bg-black text-white rounded-full hover:bg-gray-800 transition flex items-center justify-center"
              style={{
                width: '156px',
                height: '45px',
              }}
            >
              Read More
            </a>
          </div>

          {/* Right: Image */}

          <div className="w-full md:w-1/2 relative mb-6 md:mb-0">
            <div className="absolute h-full w-full bg-black/40 rounded-2xl"></div>
            <img
              src="/img/home2.png"
              alt="Shopping Fun"
              className="w-full h-auto rounded-2xl object-cover max-h-[344px]"
            />
          </div>
        </div>

        {/* Bottom Section  */}

        <div className="hidden sm:block">
          <div className="w-full max-w-6xl mx-auto px-2 flex justify-start flex-col lg:flex-row gap-4 lg:gap-10 mt-8">
            {/* Visitor Box + Image in a row */}
            <div className="flex flex-row flex-wrap gap-4 justify-center">
              {/* Visitor Box */}
              <div
                className="rounded-xl flex flex-col items-center justify-center p-4 mt-4 sm:mt-6 flex-shrink-0"
                style={{
                  backgroundColor: 'var(--color-color)',
                  width: '251px',
                  height: '250px',
                }}
              >
                <div className="flex -space-x-4 mb-4">
                  <img
                    src="https://randomuser.me/api/portraits/men/32.jpg"
                    className="w-10 h-10 rounded-full border-2 border-white"
                  />
                  <img
                    src="https://randomuser.me/api/portraits/women/44.jpg"
                    className="w-10 h-10 rounded-full border-2 border-white"
                  />
                  <img
                    src="https://randomuser.me/api/portraits/women/65.jpg"
                    className="w-10 h-10 rounded-full border-2 border-white"
                  />
                </div>
                <p className="text-6xl font-bold text-white">4.3k</p>
              </div>

              {/* Image */}
              <div
                className="mt-4 sm:mt-6 flex-shrink-0"
                style={{ width: '251px', height: '250px' }}
              >
                <img
                  src="/img/home3.png"
                  className="w-full h-full rounded-xl object-cover"
                />
              </div>
            </div>

            {/* Categories */}
            <CategoryButtons />
          </div>
        </div>

        {/* ✅ Mobile Layout only */}
        <MobileBottomSection />

        {/* Most Popular Section */}
        <section className="w-full max-w-6xl mx-auto px-4 py-8">
          {/* Heading */}
          <div className="flex flex-row  justify-between items-center mb-6 sm:mb-8 ">
            <h1 className="text-3xl sm:text-5xl custom-times font-bold text-background-black text-left sm:text-left">
              Most Popular At <br className="hidden sm:block" /> The Moment
            </h1>
            <a
              href="/trends"
              className="text-sm sm:text-xl font-inter whitespace-nowrap font-medium underline text-background-black ml-auto "
            >
              See All
            </a>
          </div>

          {/* Grid with Up-Down Staggering */}
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              {
                title: 'Fashion & Apparel',
                img: '/img/img1.png',
                offset: 'translate-y-4',
              },
              {
                title: 'Tech & Gadget',
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
                className={`relative rounded-xl overflow-hidden shadow-lg h-[220px] sm:h-[346px] w-full transform transition duration-300 ease-in-out hover:brightness-110 hover:scale-105 cursor-pointer ${item.offset}`}
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background-black/70 to-transparent p-3">
                  <h5 className="text-white custom-times font-semibold text-xs sm:text-lg">
                    {item.title}
                  </h5>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Stay Ahead Section */}
        <StayAheadSection />

        {/* Trending Posts Section */}
        <div className="w-full max-w-6xl mx-auto py-8">
          {/* Header */}
          <div className="flex flex-row justify-between items-center mb-8 px-4">
            <h1 className="text-3xl sm:text-6xl font-bold custom-times text-center sm:text-left ">
              Trending Posts
            </h1>
            <a
              href="/trends"
              className="text-base sm:text-xl font-inter font-medium underline text-background-black"
            >
              SEE ALL
            </a>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Left Card */}
            <div className="bg-[#EAEAEA] rounded-xl p-6 relative overflow-hidden w-full h-[482px] flex flex-col justify-start">
              <span
                className="text-xs font-medium font-inter rounded-full flex items-center justify-center mb-3 z-10"
                style={{
                  backgroundColor: '#FFFFFF',
                  color: '#FFA8A8',
                  border: '1px solid #FFA8A8',
                  width: '117px',
                  height: '37px',
                }}
              >
                TrendyLooks
              </span>

              <h3 className="text-xl font-bold font-inter text-background-black leading-snug mb-3 max-w-[60%] z-10">
                Luxury vs. Affordable Fashion: Is It Worth the Price?
              </h3>
              <p className="text-base font-inter text-gray-600 leading-relaxed mb-6 max-w-[60%] z-10">
                Explore key differences, benefits, and drawbacks of luxury and
                budget fashion…..
              </p>

              {/* Image */}
              <div className="absolute inset-0 pointer-events-none">
                <img
                  src="/img/girlpost.png"
                  alt="Luxury vs Affordable"
                  className="absolute bottom-0 left-24 h-[70%] object-contain"
                />
              </div>
            </div>

            {/* Right Section */}
            <div className="flex flex-col justify-between w-full h-[482px]">
              {/* Top Row */}
              <div className="flex gap-4 h-[48%]">
                {/* Top Left Card */}
                <div className="bg-orange-100 rounded-xl px-5 py-6 relative w-1/2 overflow-hidden">
                  <p className="text-base font-inter font-semibold text-background-black w-2/3 relative z-10">
                    Latest in Retail & Shopping
                  </p>
                  <img
                    src="/img/bag.png"
                    alt="Retail"
                    className="absolute bottom-2 right-2 h-3/5 sm:h-[65%] object-contain z-0"
                  />
                </div>

                {/* Top Right Card */}

                <div className="bg-blue-100 rounded-xl px-5 py-6 relative w-1/2 overflow-hidden">
                  <p className="text-base font-inter font-semibold text-background-black w-2/3 relative z-10">
                    Recent Insights <br /> & Trends
                  </p>
                  <img
                    src="/img/watch.png"
                    alt="Watch"
                    className="absolute top-0 right-0 max-md:-right-1/2 h-full object-cover z-0"
                  />
                </div>
              </div>

              {/* Bottom Card */}
              <div
                className="rounded-xl px-5 py-6 flex justify-between items-start relative overflow-hidden"
                style={{
                  height: '48%',
                  backgroundColor: '#FFE58F',
                }}
              >
                <div className="max-w-[60%] z-10 relative">
                  <p className="text-lg font-semibold font-inter text-background-black leading-snug mb-2">
                    Top Ethical & Sustainable Fashion Brands to Watch
                  </p>
                  <p className="text-base font-inter text-gray-700">
                    Find clothing brands that are good for people and the
                    environment……
                  </p>
                </div>
                <img
                  src="/img/bag2.png"
                  alt="Sustainable"
                  className="absolute top-0  right-0 max-md:right-[-20%] bottom-0 h-full object-cover z-0"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Top Discount Section */}
      <section className="bg-[url('/img/backgroundimg.png')] bg-cover bg-center ">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 ">
            {/* Left Image */}
            <div className="w-full md:w-1/2 lg:pr-[150px] ">
              <img
                src="/img/img6.png"
                alt="Top Discounts"
                className="w-full  object-cover  object-top max-h-[400px] mt-6"
              />
            </div>

            {/* Right Content */}
            <div className="md:w-1/2 text-center md:text-left lg:pr-[85px]">
              <p className="text-base sm:text-sm font-inter text-[#E37561] font-semibold mb-2">
                Top Deals & Discounts
              </p>
              <h1 className="text-xl custom-times sm:text-2xl md:text-3xl font-bold mb-4 leading-snug text-black">
                Ultimate Guide to Finding the <br /> Best Online Discounts
              </h1>
              <p className="text-xs sm:text-sm font-inter text-black mb-6">
                Never pay full price again! Learn how to find hidden deals,
                discount codes, and cashback offers while shopping online.
              </p>

              {/* Button: Centered on mobile */}
              <div className="flex justify-center md:justify-start mb-4">
                <a
                  href="/trends"
                  className="font-inter bg-background-black text-white rounded-full hover:bg-gray-800 transition flex items-center justify-center"
                  style={{
                    width: '156px',
                    height: '45px',
                  }}
                >
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Subscribe />
    </div>
  )
}

export default Home
