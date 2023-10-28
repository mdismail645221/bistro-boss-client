import React from "react";
import Slideshow from "../components/Slideshow";
import ProductSliders from "../components/ProductSliders";
import PopularMenu from "../components/shared/PopularMenu/PopularMenu";
import CallUs from "../components/CallUs";
import ChefRecommands from "../components/ChefRecommand/ChefRecommands";
import ParalaxBanner1 from "../components/ParalaxBanner1/ParalaxBanner1";

const Home = () => {
  return (
    <div>
      <Slideshow/>
      <ProductSliders/>
      <PopularMenu/>
      <CallUs/>
      <ChefRecommands/>
      <ParalaxBanner1/>
    </div>
  );
};

export default Home;
