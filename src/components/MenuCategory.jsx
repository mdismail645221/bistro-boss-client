import React from "react";
import PopularMenuItems from "./PopularMenuItems";
import { Link } from "react-router-dom";

const MenuCategory = ({ items }) => {
  console.log({ items });
  return (
    <section>
      <div className="grid grid-cols-2 gap-3">
        {items.slice(0, 6).map((data) => (
          <PopularMenuItems item={data} key={data._id} />
        ))}
      </div>
      <div className="flex justify-center items-center">
        <Link className="btn btn-primary" to={`/ourShop/${items[0]?.category}`}>
          ORDER YOUR FAVOURITE FOOD
        </Link>
      </div>
    </section>
  );
};

export default MenuCategory;
