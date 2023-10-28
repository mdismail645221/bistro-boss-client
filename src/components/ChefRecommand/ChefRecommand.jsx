import React from "react";

const ChefRecommand = ({ product }) => {

    console.log({data : product})
  return (
    
      <div className="card  bg-base-100 shadow-xl">
        <figure className="">
          <img
           
            src={product?.image}
            alt="Shoes"
            className="w-full"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{product?.name}</h2>
          <p>{product?.recipe}</p>
          <div className="card-actions">
            <button className="btn bg-yellow">Add To Cart</button>
          </div>
        </div>
      </div>
    
  );
};

export default ChefRecommand;
