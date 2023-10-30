import React from "react";

import '../assets/productSlider.css'
const SingleProductSlide = ({ product }) => {
 
  return (
    
      <a href="#">
        <div className="card shadow-md my-6">
          <img className="w-full h-[250px] object-cover" src={product.image} alt={product.name} />
          <div className="card-body mb-5">
            <h4 className="card-title">{product.name}</h4>
            {/* <p>{product.description}</p> */}
            <p><strong>Price :</strong> {product.price} Taka</p>
          </div>
        </div>
      </a>
    
  );
};

export default SingleProductSlide;
