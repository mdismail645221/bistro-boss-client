import React from "react";
import Slideshow from "../components/Slideshow";
import ProductSliders from "../components/ProductSliders";
import PopularMenu from "../components/shared/PopularMenu/PopularMenu";
import CallUs from "../components/CallUs";
import ChefRecommands from "../components/ChefRecommand/ChefRecommands";

const Home = () => {
  return (
    <div>
      <Slideshow/>
      <ProductSliders/>
      <PopularMenu/>
      <CallUs/>
      <ChefRecommands/>
    </div>
  );
};

export default Home;
