import React from "react";
import Slideshow from "../components/Slideshow";
import ProductSliders from "../components/ProductSliders";
import PopularMenu from "../components/shared/PopularMenu/PopularMenu";

const Home = () => {
  return (
    <div>
      <Slideshow/>
      <ProductSliders/>
      <PopularMenu/>
    </div>
  );
};

export default Home;
