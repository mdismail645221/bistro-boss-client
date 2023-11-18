import React from "react";
import Slideshow from "../../components/Slideshow";
import ProductSliders from "../../components/ProductSliders";
import PopularMenu from "../../components/shared/PopularMenu/PopularMenu";
import CallUs from "../../components/CallUs";
import ChefRecommands from "./ChefRecommand/ChefRecommands";
import ParalaxBanner1 from "./ParalaxBanner1/ParalaxBanner1";
import Testimonials from "./Testimonial/Testimonials";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const Home = () => {
  const user = useContext(AuthContext);
  console.log({user})
  return (
    <div>
      <Slideshow/>
      <ProductSliders/>
      <PopularMenu/>
      <CallUs/>
      <ChefRecommands/>
      <ParalaxBanner1/>
      <Testimonials/>
    </div>
  );
};

export default Home;
