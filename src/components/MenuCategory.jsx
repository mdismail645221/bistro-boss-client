import React from "react";
import PopularMenuItems from "./PopularMenuItems";

const MenuCategory = ({items}) => {
  return (
    <div className="grid grid-cols-2 gap-3">
      {items.slice(0, 6).map((data) => (
        <PopularMenuItems item={data} key={data._id} />
      ))}
    </div>
  );
};

export default MenuCategory;
