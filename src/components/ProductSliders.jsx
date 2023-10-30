import React, { useEffect, useState } from "react";
import CollectionByProduct from "./CollectionByProduct";
import SectionTitle from "./SectionTitle";

// Import Swiper React components
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const ProductSliders = () => {
  const [products, useProduct] = useState([]);
  //   const products = [
  //     {
  //       id : 1,
  //       name: "Dessert",
  //       img: dessert,
  //       price: 300,
  //       description:
  //         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, nobis.",
  //       review: 5,
  //     },
  //     {
  //         id : 2,
  //       name: "Pizza",
  //       img: pizza,
  //       price: 120,
  //       description:
  //         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, nobis.",
  //       review: 5,
  //     },
  //     {

  //         id : 3,
  //       name: "Salad",
  //       img: salad,
  //       price: 250,
  //       description:
  //         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, nobis.",
  //       review: 5,
  //     },
  //     {
  //         id : 4,
  //       name: "Soup",
  //       img: soup,
  //       price: 300,
  //       description:
  //         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, nobis.",
  //       review: 5,
  //     },
  //   ];

  useEffect(() => {
    fetch("/menu.json")
      .then((res) => res.json())
      .then((data) => useProduct(data));
  }, []);

  return (
    <section className="section-py bg-[#f9f9f9]">
      <div className="container mx-auto">
        <SectionTitle
          subHeading="From 11:00am to 10:00pm"
          mainHeading="ORDER ONLINE"
        />
        <Swiper
          slidesPerView={4}
          breakpoints={{
            100: {
              slidesPerView: 1,
              spaceBetween: 5,
            },
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
          spaceBetween="20"
          grabCursor={true}
          pagination={{
            clickable: true,
          }}
          Autoplay={{
            delay: 500,
            disableOnInteraction: true,
          }}
          modules={[Autoplay, Pagination]}
          className="mySwiper"
        >
          <div>
            {products.slice(1, 20).map((product) => (
              <SwiperSlide
                className="grid sm:grid-cols-1 md:grid-cols-4"
                key={product._id}
              >
                {" "}
                <CollectionByProduct product={product} key={product._id} />{" "}
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </div>
    </section>
  );
};

export default ProductSliders;
