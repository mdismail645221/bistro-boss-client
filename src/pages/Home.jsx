import React from "react";
import Slideshow from "../components/Slideshow";
import ProductSliders from "../components/ProductSliders";
import PopularMenu from "../components/shared/PopularMenu/PopularMenu";
import CallUs from "../components/CallUs";

const Home = () => {
  return (
    <div>
      <Slideshow/>
      <ProductSliders/>
      <PopularMenu/>
      <CallUs/>
    </div>
  );
};

export default Home;
