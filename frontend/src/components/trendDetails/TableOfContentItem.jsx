import React from 'react';
import { Link } from 'react-router-dom';

const TableOfContentItem = ({ item, activeSection, handleLinkClick }) => (
  <li>
    <Link
      to={`#${item.id}`}
      onClick={handleLinkClick(item.id)}
      className={`block hover:underline transition-colors ${
        activeSection === item.id
          ? 'text-[#E37561] font-semibold bg-[#FFF1F1] p-1 rounded'
          : 'text-gray-700'
      }`}
    >
      {item.title}
    </Link>
  </li>
);

export default TableOfContentItem;