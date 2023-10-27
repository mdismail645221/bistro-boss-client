import React, { useEffect, useState } from "react";
import CollectionByProduct from "./CollectionByProduct";
import SectionTitle from "./SectionTitle";

// Import Swiper React components
import { Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide,  } from 'swiper/react';



// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import '../assets/collectionStyle.css';


const ProductSliders = () => {
 const [products, useProduct] = useState([])
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

useEffect(()=> {
    fetch("/menu.json")
    .then(res=> res.json())
    .then(data=> useProduct(data))
},[])


  return (

    <section className="container mx-auto section-py bg-[#f9f9f9]">
      <SectionTitle subHeading="From 11:00am to 10:00pm" mainHeading="ORDER ONLINE" />
    <Swiper
        slidesPerView={4}
        
        spaceBetween={30}
        grabCursor={true}
        pagination={{
          clickable: true,
        }}
        Autoplay={{
          delay: 500,
          disableOnInteraction: true
      }}
        modules={[Pagination]}
        
        className="mySwiper"
    >
      
        <div className="grid grid-cols-4 gap-3">{products.slice(1, 20).map((product) => <SwiperSlide>  <CollectionByProduct product={product} key={product._id} /> </SwiperSlide>)}</div>

    
    </Swiper>
  
    </section>
  );
};

export default ProductSliders;
