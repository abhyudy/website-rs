import HeaderSection from '../components/trendDetails/HeaderSection'
import ContentSection from '../components/trendDetails/ContentSection'
import SidebarSection from '../components/trendDetails/SidebarSection'
import FaqSection from '../components/FaqSection'
import NavigationSection from '../components/trendDetails/NavigationSection'
import RelatedPost from '../components/trendDetails/RelatedPost'
import { useState, useRef, useEffect } from 'react'


const TrendsDetail = () => {
  const tableOfContent = [
    {
      id: 'introduction',
      title: 'Introduction',
      description:
        'Fashion isn’t just about appearance—it’s about confidence, comfort, and self-expression. In 2025, the fashion scene is thriving with creativity, embracing daring silhouettes, timeless textures, and sustainable innovation. Designers and style icons are mixing vintage charm with modern edge, creating trends that feel both exciting and wearable <br/> This season, the spotlight is on oversized tailoring, playful prints, and eco-conscious materials. Runways from Paris to New York have shown a surge in gender-neutral designs, modern athleisure, and revived 90s vibes, while street style is embracing a more individualistic approach, encouraging people to mix high-fashion with thrift-store finds',
      hasButton: true,
      images: ['/img/trend1.jpg', '/img/trend2.jpg'],
    },
    {
      id: 'oversized-blazers',
      title: 'Oversized Blazers: Redefining Power Dressing',
      description:
        'Oversized blazers are making a bold comeback, offering a relaxed yet authoritative silhouette. Perfect for both office wear and casual outings, these pieces redefine power dressing with their versatile, gender-neutral appeal.',
    },
    {
      id: 'chunky-footwear',
      title: 'Chunky Footwear: Big, Bold & Functional',
      description:
        'Chunky footwear is dominating the streets with its chunky soles and bold designs. Not only a style statement, these shoes provide comfort and support, making them a practical choice for all-day wear.',
    },
    {
      id: 'soft-pastels',
      title: 'Soft Pastels: A Breath of Fresh Air',
      description:
        'Soft pastel shades are bringing a calming vibe to wardrobes this season. From mint greens to lavender hues, these colors offer a refreshing contrast to bold trends, ideal for creating elegant, airy looks.',
    },
    {
      id: 'sheer-layers',
      title: 'Sheer Layers: Light, Airy, and Intriguing',
      description:
        'Sheer layers add a touch of mystery and elegance to any outfit. Lightweight and versatile, they’re perfect for layering over bold pieces or wearing alone to create a sophisticated, see-through effect.',
    },
    {
      id: 'elevated-athleisure',
      title: 'Elevated Athleisure: Comfy Meets Classy',
      description:
        'Elevated athleisure blends comfort with high fashion, turning gym wear into chic street style. Think tailored joggers and sleek sneakers that transition seamlessly from workouts to social settings.',
    },
    {
      id: 'statement-accessories',
      title: 'Statement Accessories: The Bigger, The Better',
      description:
        'Statement accessories are stealing the spotlight with oversized earrings, chunky necklaces, and bold hats. These eye-catching pieces are designed to elevate any outfit with minimal effort.',
    },
    {
      id: 'matching-sets',
      title: 'Matching Sets: Coordination is Chic',
      description:
        'Matching sets are the ultimate time-saver, offering a polished look with zero effort. Available in vibrant prints or solid tones, they’re perfect for both casual and semi-formal occasions.',
    },
    {
      id: 'fringe-details',
      title: 'Fringe Details: Add Movement and Fun',
      description:
        'Fringe details bring a playful, dynamic element to fashion. From jackets to skirts, the swinging fringes add movement and texture, making every step a stylish statement.',
    },
    {
      id: 'sustainable-fabrics',
      title: 'Sustainable Fabrics: Fashion with a Conscience',
      description:
        'Sustainable fabrics are at the forefront of 2025 fashion, with eco-friendly materials like organic cotton and recycled polyester gaining popularity. These choices help reduce environmental impact while keeping you trendy.',
    },
    {
      id: 'final-thoughts',
      title: 'Final Thoughts: Style is What You Make It',
      description:
        'As this season wraps up, the key takeaway is personal style. Whether you mix bold trends or stick to classics, fashion is your canvas—paint it with confidence and creativity!',
    },
  ];

  const [activeSection, setActiveSection] = useState('');
  const observer = useRef(null);

  useEffect(() => {
    observer.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    tableOfContent.forEach((item) => {
      const section = document.getElementById(item.id);
      if (section) observer.current.observe(section);
    });

    return () => {
      if (observer.current) observer.current.disconnect();
    };
  }, []);

  const handleLinkClick = (id) => (e) => {
    e.preventDefault();
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  return (
    <>
      <div className="bg-[#FFF3F3] text-black py-10 px-4">
        <div className="w-full max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row">
            <div className="w-full lg:w-3/4">
              <HeaderSection />
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
  );
};

export default TrendsDetail;
