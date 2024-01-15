import React from "react";
import { Link } from "react-router-dom";

const ChefRecommand = ({ product }) => {

  return (
    
      <Link to="#" className="card  bg-base-100 shadow-xl">
        <figure className="">
          <img
           
            src={product?.image}
            alt="Shoes"
            className="w-full"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="block text-ellipsis whitespace-nowrap overflow-hidden">{product?.name}</h2>
          <p>Price :<span className="text-lg">{product?.price}</span></p>
          <p className="hidden md:block">{product?.recipe.length >  5 ? `${product.recipe.slice(0, 30)}...` : product?.recipe}</p>
          <div className="card-actions">
            <button className="btn bg-yellow">See Details</button>
          </div>
        </div>
      </Link>
    
  );
};

export default ChefRecommand;
