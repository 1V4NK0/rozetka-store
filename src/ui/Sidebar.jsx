/* eslint-disable react/prop-types */

import { useState } from "react";

function Sidebar({ list, onCategorySelect }) {
  const [chosenCategory, setChosenCategory] = useState("");

  const handleClick = (category) => {
    setChosenCategory(category);
    onCategorySelect(category);
  };

  return (
    <ul className="  border-r border-slate-600 px-[40px] py-3 flex flex-col gap-4 mt-[50px]">
      {list.map((item) => (
        <li
          onClick={() => handleClick(item.category)}
          className="text-lg cursor-pointer hover:text-green-700"
          key={item.id}
        >
          {item.category}
        </li>
      ))}
    </ul>
  );
}

export default Sidebar;
