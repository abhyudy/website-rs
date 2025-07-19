import HeaderSection from '../components/trendDetails/HeaderSection'
import ContentSection from '../components/trendDetails/ContentSection'
import SidebarSection from '../components/trendDetails/SidebarSection'
import FaqSection from '../components/FaqSection'
import NavigationSection from '../components/trendDetails/NavigationSection'
import RelatedPost from '../components/trendDetails/RelatedPost'
import { useState, useRef, useEffect } from 'react'
import MobileTOC from '../components/trendDetails/MobileTOC'

const TrendsBlog = () => {
  const tableOfContent = [
    {
      type: 'intro',
      id: 'introduction',
      title: 'Introduction',
      description:
        'Fashion isn’t just about appearance—it’s about confidence, comfort, and self-expression. In 2025, the fashion scene is thriving with creativity, embracing daring silhouettes, timeless textures, and sustainable innovation. Designers and style icons are mixing vintage charm with modern edge, creating trends that feel both exciting and wearable. <br/> <br/> This season, the spotlight is on oversized tailoring, playful prints, and eco-conscious materials. Runways from Paris to New York have shown a surge in gender-neutral designs, modern athleisure, and revived 90s vibes, while street style is embracing a more individualistic approach, encouraging people to mix high-fashion with thrift-store finds',
      hasButton: true,
      images: ['/img/trend2.jpg', '/img/trend2.jpg'],
    },
    {
      type: 'intro',
      id: 'oversized-blazers',
      title: 'Oversized Blazers: Redefining Power Dressing',
      description:
        'Oversized blazers are back—and they’re bigger (literally) than ever. Inspired by vintage tailoring with a modern twist, these structured pieces add instant polish to casual outfits. Try layering one over a crop top and wide-leg jeans for a street-chic look, or belt it at the waist for a more defined silhouette. From neutral tones to bold plaids, this wardrobe essential is a timeless investment.',
    },
    {
      type: 'intro',
      id: 'bold-prints',
      title: 'Bold Prints: Wear Your Personality',
      description:
        'This season is about self-expression, and nothing says bold like statement prints. From psychedelic swirls to oversized florals, bold patterns are commanding attention. Mix clashing prints for an editorial-inspired outfit or keep it simple with a standout piece like a printed blazer or skirt. Either way, it’s your time to shine.',
    },
    {
      type: 'add',
      id: 'chunky Footwear',
      title: 'Chunky Footwear: Big, Bold & Functional',
      image: '/img/shoes.png',
      description:
        'Chunky is in this year! Think platform boots, thick-soled sandals, and dad sneakers for height, comfort, and a cool edge. Perfect with dresses or basics, they’re stylish and built for walking.',
    },
    {
      type: 'intro',
      id: 'soft-pastels',
      title: 'Soft Pastels: A Breath of Fresh Air',
      description:
        'Step into spring with a palette of calming pastels. Lavender, peach, powder blue, and pistachio green are dominating runways and wardrobes alike. These gentle tones pair well with both crisp whites and deeper neutrals, making them incredibly versatile. They also evoke a mood of freshness and lightness—exactly what we all need this season.',
    },
    {
      type: 'grid',
      id: 'sheer-layers',
      title: 'Sheer Layers: Light, Airy, and Intriguing',
      images: [
        '/img/women1.png',
        '/img/sunglasses.png',
        '/img/bags.png',
        '/img/women2.png',
        '/img/shoes.png',
        '/img/blazer.png',
        '/img/women3.png',
        '/img/wardrobe.png',
      ],
      description:
        'Sheer fabrics add instant elegance and intrigue. Think mesh tops, organza blouses, and tulle skirts. These breathable, lightweight layers can be worn over bralettes, tanks, or even turtlenecks depending on your comfort level. It’s a great way to play with textures and create dynamic depth in an outfit.',
    },
    {
      type: 'intro',
      id: 'elevated-athleisure',
      title: 'Elevated Athleisure: Comfy Meets Classy',
      description:
        'Athleisure is evolving into something sleeker and more sophisticated. Tailored joggers, matching sweat sets, and minimalist sports bras are now wardrobe staples. Look for high-quality fabrics, neutral palettes, and structured silhouettes that allow you to look polished without compromising comfort.',
    },
    {
      type: 'intro',
      id: 'statement-accessories',
      title: 'Statement Accessories: The Bigger, The Better',
      description:
        'Athleisure is evolving into something sleeker and more sophisticated. Tailored joggers, matching sweat sets, and minimalist sports bras are now wardrobe staples. Look for high-quality fabrics, neutral palettes, and structured silhouettes that allow you to look polished without compromising comfort',
    },
    {
      type: 'add',
      id: 'matching-sets',
      title: 'Matching Sets: Coordination is Chic',
      image: '/img/matchingSets.png',
      description:
        'Matching sets are a style hack! Ribbed knits, silk co-ords, or denim-on-denim make dressing easy and polished. Practical, chic, and perfect for mixing and matching.',
    },
    {
      type: 'intro',
      id: 'fringe-details',
      title: 'Fringe Details: Add Movement and Fun',
      description:
        'Fringe has returned from the festival scene and entered mainstream fashion. Whether it’s on leather jackets, midi skirts, or even boots, fringe details create drama and movement that turn heads. Use it to add a playful, boho vibe to your outfit or make it the focal point of your look.',
    },
    {
      type: 'intro',
      id: 'sustainable-fabrics',
      title: 'Sustainable Fabrics: Fashion with a Conscience',
      description:
        'Sustainability is no longer just a buzzword—it’s a core value for modern fashion. Brands are embracing eco-conscious materials like organic cotton, bamboo viscose, recycled polyester, and even pineapple leather. Investing in ethical pieces isn’t just trendy—it’s a step toward a greener planet and a more mindful wardrobe',
    },
    {
      type: 'intro',
      id: 'final-thoughts',
      title: 'Conclusion: Style is What You Make It',
      description: `Fashion trends are exciting, but the real magic happens when you make them your own. Use this season’s must-haves to explore your style, step out of your comfort zone, and curate a wardrobe that reflects who you are. Whether you're going bold with prints or subtle with pastels, the goal is to feel great in what you wear—and to have fun doing it.`,
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
      if (observer.current) observer.current.disconnect()
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

  return (
    <>
      <div className="bg-[#FFF3F3] text-black py-10 px-4 sm:px-6">
        <div className="w-full max-w-6xl mx-auto ">
          <div className="grid grid-cols-12 lg:gap-10 lg:flex-row">
            <div className="w-full col-span-12 lg:col-span-8">
              <HeaderSection />
              <MobileTOC
                tableOfContent={tableOfContent}
                handleLinkClick={handleLinkClick}
                activeSection={activeSection}
              />
              <ContentSection
                tableOfContent={tableOfContent}
                activeSection={activeSection}
                handleLinkClick={handleLinkClick}
              />
              <FaqSection />
              <NavigationSection />
            </div>
            <SidebarSection
              tableOfContent={tableOfContent}
              activeSection={activeSection}
              handleLinkClick={handleLinkClick}
            />
          </div>
        </div>
      </div>
      <RelatedPost />
    </>
  )
}

export default TrendsBlog
