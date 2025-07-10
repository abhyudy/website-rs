import React from "react";
import TableOfContentItem from "./TableOfContentItem";
import SectionIntro from "./SectionIntro";
import SectionAdd from "./SectionAdd";
import SectionGrid from "./SectionGrid";

const ContentSection = ({ tableOfContent, activeSection, handleLinkClick }) => {
  return (
    <>
      {tableOfContent.map((item) =>
        item.type == "intro" ? (
          <SectionIntro key={item.id} item={item} />
        ) : item.type == "add" ? (
          <SectionAdd key={item.id} item={item} />
        ) : (
          item.type == "grid" && <SectionGrid key={item.id} item={item} />
        )
      )}
    </>
  );
};

export default ContentSection;
