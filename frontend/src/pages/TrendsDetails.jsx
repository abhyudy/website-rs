import HeaderSection from "../components/trendDetails/HeaderSection";
import ContentSection from "../components/trendDetails/ContentSection";
import SidebarSection from "../components/trendDetails/SidebarSection";
import FaqSection from "../components/FaqSection";
import NavigationSection from "../components/trendDetails/NavigationSection";
import RelatedPost from "../components/trendDetails/RelatedPost";
import { useState, useRef, useEffect } from "react";

const TrendsDetail = () => {
  const tableOfContent = [
    {
      type: "intro",
      id: "introduction",
      title: "Introduction",
      description:
        "Fashion isn’t just about appearance—it’s about confidence, comfort, and self-expression. In 2025, the fashion scene is thriving with creativity, embracing daring silhouettes, timeless textures, and sustainable innovation. Designers and style icons are mixing vintage charm with modern edge, creating trends that feel both exciting and wearable. <br/> <br/> This season, the spotlight is on oversized tailoring, playful prints, and eco-conscious materials. Runways from Paris to New York have shown a surge in gender-neutral designs, modern athleisure, and revived 90s vibes, while street style is embracing a more individualistic approach, encouraging people to mix high-fashion with thrift-store finds",
      hasButton: true,
      images: ["/img/trend1.jpg", "/img/trend2.jpg"],
    },
    {
      type: "intro",
      id: "oversized-blazers",
      title: "Oversized Blazers: Redefining Power Dressing",
      description:
        "Oversized blazers are back—and they’re bigger (literally) than ever. Inspired by vintage tailoring with a modern twist, these structured pieces add instant polish to casual outfits. Try layering one over a crop top and wide-leg jeans for a street-chic look, or belt it at the waist for a more defined silhouette. From neutral tones to bold plaids, this wardrobe essential is a timeless investment.",
    },
    {
      type: "intro",
      id: "bold-prints",
      title: "Bold Prints: Wear Your Personality",
      description:
        "This season is about self-expression, and nothing says bold like statement prints. From psychedelic swirls to oversized florals, bold patterns are commanding attention. Mix clashing prints for an editorial-inspired outfit or keep it simple with a standout piece like a printed blazer or skirt. Either way, it’s your time to shine.",
    },
    {
      type: "add",
      id: "chunky Footwear",
      title: "Chunky Footwear: Big, Bold & Functional",
      image: "/img/shoes.png",
      description:
        "Chunky is in this year! Think platform boots, thick-soled sandals, and dad sneakers for height, comfort, and a cool edge. Perfect with dresses or basics, they’re stylish and built for walking.",
    },
    {
      type: "intro",
      id: "soft-pastels",
      title: "Soft Pastels: A Breath of Fresh Air",
      description:
        "Soft pastel shades are bringing a calming vibe to wardrobes this season. From mint greens to lavender hues, these colors offer a refreshing contrast to bold trends, ideal for creating elegant, airy looks.",
    },
    {
      type: "grid",
      id: "sheer-layers",
      title: "Sheer Layers: Light, Airy, and Intriguing",
      images: [
        "/img/women1.png",
        "/img/sunglasses.png",
        "/img/bags.png",
        "/img/women2.png",
        "/img/shoes.png",
        "/img/blazer.png",
        "/img/women3.png",
        "/img/wardrobe.png",
      ],
      description:
        "Sheer layers add a touch of mystery and elegance to any outfit. Lightweight and versatile, they’re perfect for layering over bold pieces or wearing alone to create a sophisticated, see-through effect.",
    },
    {
      type: "intro",
      id: "elevated-athleisure",
      title: "Elevated Athleisure: Comfy Meets Classy",
      description:
        "Elevated athleisure blends comfort with high fashion, turning gym wear into chic street style. Think tailored joggers and sleek sneakers that transition seamlessly from workouts to social settings.",
    },
    {
      type: "intro",
      id: "statement-accessories",
      title: "Statement Accessories: The Bigger, The Better",
      description:
        "Statement accessories are stealing the spotlight with oversized earrings, chunky necklaces, and bold hats. These eye-catching pieces are designed to elevate any outfit with minimal effort.",
    },
    {
      type: "add",
      id: "matching-sets",
      title: "Matching Sets: Coordination is Chic",
      image: "/img/matchingSets.png",
      description:
        "Matching sets are the ultimate time-saver, offering a polished look with zero effort. Available in vibrant prints or solid tones, they’re perfect for both casual and semi-formal occasions.",
    },
    {
      type: "intro",
      id: "fringe-details",
      title: "Fringe Details: Add Movement and Fun",
      description:
        "Fringe details bring a playful, dynamic element to fashion. From jackets to skirts, the swinging fringes add movement and texture, making every step a stylish statement.",
    },
    {
      type: "intro",
      id: "sustainable-fabrics",
      title: "Sustainable Fabrics: Fashion with a Conscience",
      description:
        "Sustainable fabrics are at the forefront of 2025 fashion, with eco-friendly materials like organic cotton and recycled polyester gaining popularity. These choices help reduce environmental impact while keeping you trendy.",
    },
    {
      type: "intro",
      id: "final-thoughts",
      title: "Final Thoughts: Style is What You Make It",
      description:
        "As this season wraps up, the key takeaway is personal style. Whether you mix bold trends or stick to classics, fashion is your canvas—paint it with confidence and creativity!",
    },
  ];

  const [activeSection, setActiveSection] = useState("");
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
      section.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
    }
  };

  return (
    <>
      <div className="bg-[#FFF3F3] text-black py-10">
        <div className="w-full max-w-6xl mx-auto pl-8">
          <div className="grid grid-cols-12 gap-10 lg:flex-row">
            <div className="w-full col-span-8">
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
