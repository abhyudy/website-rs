import React from 'react'
import Subscribe from '../components/Subscribe'
import StayAheadSection from '../components/Home/StayAheadSection'
import CategoryButtons from '../components/Home/CategoryButtons'

const Home = () => {
  return (
    <div className=" bg-background-color">
      {/* Hero Section */}
      <div className=" py-container mx-auto flex flex-col items-center justify-center  py-8">
        <div className="w-full max-w-6xl mx-auto px-4 flex flex-col lg:flex-row items-center gap-6 lg:gap-10">
          {/* Left: Text */}
          <div className="w-1/2 text-left">
            <h1 className="text-5xl font-bold custom-times text-gray-900 mb-4 leading-tight">
              Style Meets Savings: <br /> Discover, Shop & Stay Ahead!
            </h1>
            <p className="text-base font-inter text-gray-600 mb-6">
              Unlock the latest trends, exclusive deals, and expert shopping
              insights – all in one place. Elevate your shopping game today!
            </p>
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

          {/* Right: Image */}

          <div className=" relative w-1/2 mt-6">
            <div className="absolute h-full w-full bg-black/40 rounded-2xl"></div>
            <img
              src="/img/home2.png"
              alt="Shopping Fun"
              className="w-full h-auto rounded-2xl object-cover max-h-[400px]"
            />
          </div>
        </div>

        {/* Bottom Section */}
        <div className="w-full max-w-6xl mx-auto px-2 flex flex-col lg:flex-row gap-4 lg:gap-10 mt-8">
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
          <CategoryButtons />
        </div>

        {/* Most Popular Section */}
        <section className="w-full max-w-6xl mx-auto px-2 py-8 max-md:px-6">
          {/* Heading */}
          <div className="flex flex-col sm:flex-row justify-between items-center mb-6 sm:mb-8">
            <h1 className=" text-5xl custom-times font-bold  text-background-black text-center sm:text-left">
              Most Popular At <br /> The Moment
            </h1>
            <a
              href="/trends"
              className="text-base sm:text-xl font-inter font-medium underline text-background-black mt-4 sm:mt-0"
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
                className={`relative rounded-xl overflow-hidden shadow-lg h-[300px] sm:h-[346px] w-full transform transition duration-300 ease-in-out hover:brightness-110 hover:scale-105 cursor-pointer ${item.offset}`}
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background-black/70 to-transparent p-4">
                  <h5 className="text-white custom-times  font-semibold text-base sm:text-lg">
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
        <div className="w-full max-w-6xl mx-auto py-8 justify-between">
          {/* Header */}
          <div className="flex flex-col sm:flex-row justify-between items-center mb-8">
            <h1 className="text-6xl font-bold custom-times text-center sm:text-left ">
              Trending Posts
            </h1>
            <a
              href="/trends"
              className="text-base font-inter sm:text-xl font-medium underline text-background-black mt-4 sm:mt-0"
            >
              SEE ALL
            </a>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Left Card (Fixed Height) */}
            <div
              className="bg-[#EAEAEA] rounded-xl p-6 flex flex-col justify-start relative overflow-hidden w-full"
              style={{ height: '482px' }}
            >
              <span
                className="text-xs font-medium font-inter rounded-full flex items-center justify-center mb-3"
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

              <h3 className="text-xl font-bold font-inter text-background-black leading-snug mb-3 max-w-[60%]">
                Luxury vs. Affordable Fashion: Is It Worth the Price?
              </h3>
              <p className="text-base font-inter text-gray-600 leading-relaxed mb-6 max-w-[60%]">
                Explore key differences, benefits, and drawbacks of luxury and
                budget fashion…..
              </p>
              <img
                src="/img/girlpost.png"
                alt="Luxury vs Affordable"
                className="absolute bottom-0 left-24 h-3/4 object-contain"
              />
            </div>

            {/* Right Cards (Also Total Height = 482px) */}
            <div
              className="flex flex-col justify-between  relative w-full"
              style={{ height: '482px' }}
            >
              {/* Top Row: Two Cards side by side, each 50% height */}
              <div className="flex gap-4 h-[48%]">
                {/* Top Left Card */}
                <div className="bg-orange-100 rounded-xl px-5 py-6 flex justify-between relative items-start w-1/2">
                  <p className="text-base font-inter font-semibold text-background-black w-2/3">
                    Latest in Retail & Shopping
                  </p>
                  <div className="flex items-end h-full w-full absolute right-0 top-0 ">
                    <img
                      src="/img/bag.png"
                      alt="Retail"
                      className="absolute h-3/5  object-contain right-0"
                    />
                  </div>
                </div>

                {/* Top Right Card */}
                <div className="bg-blue-100 rounded-xl px-5 py-6 flex justify-between  relative items-start w-1/2">
                  <p className="text-base font-inter font-semibold text-background-black w-2/3">
                    Recent Insights <br /> & Trends
                  </p>
                  <div className="flex items-end h-full absolute top-0 w-full">
                    <img
                      src="/img/watch.png"
                      alt="Watch"
                      className="absolute h-full top-0 right-0 z-10 object-contain"
                    />
                  </div>
                </div>
              </div>

              {/* Bottom Card (Remaining 50% height) */}
              <div
                className="rounded-xl px-5 py-6 flex justify-between items-start relative"
                style={{
                  height: '48%',
                  backgroundColor: '#FFE58F',
                }}
              >
                <div className="max-w-[60%] ">
                  <p className="text-lg font-semibold font-inter text-background-black leading-snug mb-2">
                    Top Ethical & Sustainable Fashion Brands to Watch
                  </p>
                  <p className="text-base font-inter text-gray-700">
                    Find clothing brands that are good for people and the
                    environment……
                  </p>
                </div>
                <div className="flex items-end h-full w-full absolute right-0 top-0">
                  <img
                    src="/img/bag2.png"
                    alt="Sustainable"
                    className="absolute right-0  h-full  object-contain"
                  />
                </div>
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
            <div className="md:w-1/2 lg:pr-[150px] ">
              <img
                src="/img/img6.png"
                alt="Top Discounts"
                className="w-full h-auto object-cover  object-top max-h-[400px] mt-6"
              />
            </div>

            {/* Right Content */}
            <div className="md:w-1/2 text-center md:text-left lg:pr-[85px]">
              <p className="text-xs sm:text-sm font-inter text-[#E37561] font-semibold mb-2">
                Top Deals & Discounts
              </p>
              <h1 className="text-5xl custom-times sm:text-2xl md:text-3xl font-bold mb-4 leading-snug text-[#000000]">
                Ultimate Guide to Finding the <br /> Best Online Discounts
              </h1>
              <p className="text-xs sm:text-sm font-inter text-[#000000] mb-6">
                Never pay full price again! Learn how to find hidden deals,
                discount codes, and cashback offers while shopping online.
              </p>
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
      </section>
      <Subscribe />
    </div>
  )
}

export default Home
