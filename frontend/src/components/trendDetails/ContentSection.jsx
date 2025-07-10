import React from "react";
import SectionIntro from "./SectionIntro";
import SectionAdd from "./SectionAdd";
import SectionGrid from "./SectionGrid";

// Map section types to their components
const sectionComponentMap = {
  intro: SectionIntro,
  add: SectionAdd,
  grid: SectionGrid,
};

const ContentSection = ({ tableOfContent }) => {
  return (
    <>
      {tableOfContent.map((item) => {
        const SectionComponent = sectionComponentMap[item.type];
        if (!SectionComponent) return null;

        return <SectionComponent key={item.id} item={item} />;
      })}
    </>
  );
};

export default ContentSection;
