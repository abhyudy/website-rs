import React, { useEffect, useRef } from 'react'
//Replace with your actual image path

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
      }, 30) // Adjust speed
    }

    return () => clearInterval(scrollInterval)
  }, [])
  return (
    <div className="min-h-screen bg-background-color">
      {/* Hero Section */}
      <section className="bg-pink-50 py-16">
        <div className="max-w-6xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-10">
          {/* Left: Text */}
          <div className="lg:w-1/2">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
              Style Meets Savings: <br /> Discover, Shop & Stay Ahead!
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              Unlock the latest trends, exclusive deals, and expert shopping
              insights – all in one place. Elevate your shopping game today!
            </p>
            <button className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition">
              Read More
            </button>
          </div>

          {/* Right: Image */}
          <div className="lg:w-1/2">
            <img
              src="/img/home2.png"
              alt="Shopping Fun"
              className="w-full h-auto rounded-lg object-cover"
            />
          </div>
        </div>

        {/* Bottom Section */}
        <div className="max-w-6xl mx-auto px-6 flex flex-col lg:flex-row gap-6">
          {/* Visitor Box */}
          <div
            className="bg-color rounded-xl flex flex-col items-center justify-center p-4 relative mt-6"
            style={{ width: '251px', height: '250px' }}
          >
            {/* Grouped Profile Images */}
            <div className="flex -space-x-4 mb-4 ">
              <img
                src="https://randomuser.me/api/portraits/men/32.jpg"
                alt="User 1"
                className="w-10 h-10 rounded-full border-2 border-white"
              />
              <img
                src="https://randomuser.me/api/portraits/women/44.jpg"
                alt="User 2"
                className="w-10 h-10 rounded-full border-2 border-white"
              />
              <img
                src="https://randomuser.me/api/portraits/women/65.jpg"
                alt="User 3"
                className="w-10 h-10 rounded-full border-2 border-white"
              />
            </div>

            {/* Visitor Count */}
            <p className="text-6xl font-bold text-white">4.3k</p>
          </div>

          {/* Shopping Bags Image */}
          <div className="mt-6" style={{ width: '251px', height: '250px' }}>
            <img
              src="../../public/img/home3.png"
              alt="Shopping Bags"
              className="w-full h-full rounded-xl object-cover"
            />
          </div>

          {/* Categories */}
          <div className="w-full lg:w-1/2">
            <h3 className="text-3xl font-semibold text-gray-800 mb-4 mt-6">
              Categories
              <hr className="" />
            </h3>
            <div className="flex flex-wrap gap-3">
              <button className="px-4 py-2 border border-pink-500 text-pink-600 rounded-full hover:bg-pink-50 transition">
                Luxury & Designer
              </button>
              <button className="px-4 py-2 bg-blue-100 text-blue-700 border border-blue-400 rounded-full hover:bg-blue-200 transition">
                Fashion & Style
              </button>
              <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-full hover:bg-gray-100 transition">
                Sustainable Shopping
              </button>
              <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-full hover:bg-gray-100 transition">
                Tech & Gadgets
              </button>
              <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-full hover:bg-gray-100 transition">
                Beauty & Skincare
              </button>
            </div>
          </div>
        </div>

        {/* Top Section: Most Popular */}
        <section className="max-w-6xl mx-auto px-6 py-12">
          {/* Heading */}
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-[40px] font-extrabold leading-tight text-black">
              Most Popular At <br /> The Moment
            </h2>
            <a
              href="#"
              className="text-[16px] font-semibold underline text-black"
            >
              SEE ALL
            </a>
          </div>
          {/* Staggered Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10">
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
                className={`relative rounded-xl overflow-hidden shadow-lg h-[346px] w-full ${item.offset}`}
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <h3 className="text-white font-semibold text-lg">
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Bottom Section: Stay Ahead */}
        <section className="bg-black max-w-6xl h-[400px] mx-auto px-6 mt-16 flex flex-col lg:flex-row gap-8 rounded-xl overflow-hidden">
          {/* Left Block */}
          <div className="text-white p-10 flex flex-col justify-between lg:w-1/2">
            <h2 className="text-5xl font-bold mb-4 leading-tight">
              Stay Ahead of <br /> the Trends!
            </h2>
            <p className="mb-10 text-sm">
              Get the latest insights on must-have products, <br />
              exclusive deals, and expert shopping tips.
            </p>
            <a
              href="#"
              className="bg-white text-black px-6 py-2 rounded-full font-medium self-start mt-10"
            >
              See All
            </a>
            
          </div>

          {/* Right Scrolling Cards */}
          <div className="relative w-[475px] h-full overflow-hidden">
            <div className="absolute top-0 animate-scroll space-y-4 w-full">
              {[
                {
                  title: 'Shopping Mistakes You Should Avoid at All Costs',
                  img: '/img/img1.png',
                },
                {
                  title: 'Top 10 Fashion Trends for 2025',
                  img: '/img6.png',
                },
                {
                  title: 'Fashion Tips from Stylists',
                  img: '/img7.png',
                },
                {
                  title: 'Shopping Mistakes You Should Avoid at All Costs',
                  img: '/img/img1.png',
                },
                {
                  title: 'Top 10 Fashion Trends for 2025',
                  img: '/img6.png',
                },
                {
                  title: 'Fashion Tips from Stylists',
                  img: '/img7.png',
                },
              ].map((card, idx) => (
                <div
                  key={idx}
                  className="bg-pink-200 p-4 rounded-2xl flex justify-between items-center relative w-full h-[254px]"
                >
                  {/* Text Content */}
                  <div className="text-white font-semibold text-sm max-w-[60%] leading-tight">
                    {card.title}
                  </div>

                  {/* Image and Icon */}
                  <div className="relative w-20 h-20 rounded-lg overflow-hidden">
                    <img
                      src={card.img}
                      alt={card.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-1 right-1 w-6 h-6 bg-white rounded-full flex items-center justify-center shadow">
                      <span className="text-sm text-black">→</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Treding Post */}
        <section className="bg-[#FDF1F3] py-10">
          <div className="max-w-6xl mx-auto px-6">
            {/* Header */}
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-4xl font-bold">Trending Posts</h2>
              <a href="#" className="text-sm font-semibold underline">
                SEE ALL
              </a>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Left Big Card */}
              <div className="bg-[#D8D8D8] rounded-xl p-6 flex flex-col justify-between relative h-full col-span-1 md:col-span-2">
                <span className="text-xs bg-white text-pink-500 px-3 py-1 rounded-full mb-3 w-fit">
                  Trendy posts
                </span>
                <h3 className="text-base md:text-lg font-semibold mb-1">
                  Luxury vs. Affordable Fashion: Is It Worth the Price?
                </h3>
                <p className="text-sm text-gray-700 mb-4">
                  Is designer clothing worth the investment, or can
                  budget-friendly brands....
                </p>
                <img
                  src="/img/girlpost.png"
                  alt="Luxury vs Affordable"
                  className="w-full max-w-[200px] self-end mt-auto"
                />
              </div>

              {/* Right Cards */}
              <div className="grid grid-cols-2 gap-4 md:col-span-1">
                {/* Top Left Card */}
                <div className="bg-orange-100 rounded-xl p-4 flex justify-between items-center h-[130px]">
                  <p className="text-sm font-semibold w-2/3">
                    Latest in Retail & Shopping
                  </p>
                  <img
                    src="/img/bag.png"
                    alt="Retail"
                    className="w-16 h-16 object-contain"
                  />
                </div>

                {/* Top Right Card */}
                <div className="bg-blue-100 rounded-xl p-4 flex justify-between items-center h-[130px]">
                  <p className="text-sm font-semibold w-2/3">
                    Recent Insights & Trends
                  </p>
                  <img
                    src="/img/watch.png"
                    alt="Watch"
                    className="w-16 h-16 object-contain"
                  />
                </div>

                {/* Bottom Full-Width Card */}
                <div className="bg-yellow-100 rounded-xl p-4 flex justify-between items-center col-span-2 h-[130px]">
                  <div>
                    <p className="text-sm font-semibold">
                      Top Ethical & Sustainable Fashion Brands to Watch
                    </p>
                    <p className="text-xs text-gray-600 mt-1">
                      Is designer clothing worth the investment, or can
                      budget-friendly brands...
                    </p>
                  </div>
                  <img
                    src="/img/bag2.png"
                    alt="Sustainable"
                    className="w-24 h-24 object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Top Discount */}
        <section className="bg-[url('/img/backgroundimg.png')] bg-cover bg-center py-10">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              {/* Left Image */}
              <div className="md:w-1/2">
                <img
                  src="/img/topdiscount.png"
                  alt="Top Discounts"
                  className="w-full object-contain"
                />
              </div>

              {/* Right Content */}
              <div className="md:w-1/2 text-center md:text-left">
                <p className="text-sm text-[#D96B69] font-semibold mb-2">
                  Top Deals & Discounts
                </p>
                <h2 className="text-2xl md:text-3xl font-bold mb-4 leading-snug">
                  Ultimate Guide to Finding the <br /> Best Online Discounts
                </h2>
                <p className="text-sm text-gray-700 mb-6">
                  Never pay full price again! Learn how to find hidden deals,
                  discount codes, and cashback offers while shopping online.
                </p>
                <button className="bg-black text-white text-sm px-5 py-2 rounded-full hover:bg-gray-800">
                  Read More
                </button>
              </div>
            </div>
          </div>
        </section>
      </section>

      {/* Stay Updated Section */}
      <section className="bg-[#D9D9D9] border border-[#D9D9D9] rounded-lg p-6 w-[1132px] h-[268px] mx-auto my-8 shadow-sm">
        <h2 className="text-4xl font-bold text-gray-800 mb-6 text-center mt-6">
          Stay Updated!
        </h2>
        <p className="text-gray-600 mb-6 text-center">
          Subscribe to get the latest trends and exclusive deals!
        </p>
        <div className="flex justify-center">
          <input
            type="email"
            placeholder="Enter your email..."
            className="w-full max-w-xs px-4 py-2 border border-white rounded-l-md focus:outline-none focus:ring-2 focus:ring-black"
          />
          <button
            type="button"
            className="bg-black text-white px-6 py-2 rounded-r-md hover:bg-gray-800 transition"
          >
            Subscribe
          </button>
        </div>
      </section>
    </div>
  )
}

export default Home
