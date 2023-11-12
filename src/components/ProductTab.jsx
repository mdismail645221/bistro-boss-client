import React from "react";
import FoodCard from "./FoodCard";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


// import required modules
import { Pagination } from "swiper/modules";

const ProductTab = ({ product }) => {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };

  return (
    <div>
      <Swiper
        pagination={pagination}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {product?.map((item) => (
              <FoodCard product={item} key={item._id} />
            ))}
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ProductTab;
