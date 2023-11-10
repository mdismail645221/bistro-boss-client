import React from "react";
import FoodCard from "./FoodCard";

const ProductTab = ({product}) => {
  console.log({product})
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {product?.map((item) => (
        <FoodCard product={item} key={item._id} />
      ))}
    </div>
  );
};

export default ProductTab;
