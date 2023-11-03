import React, { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle";
import ChefRecommand from "./ChefRecommand";
import useMenu from "../../../hooks/useMenu";

const ChefRecommands = () => {
  const [data, loading] =useMenu();
  const product = data.filter(item => item.category === "popular")

  if(loading) {
    return <div>Loading...</div>
  }

  return (
    <section className="section-py  bg-[#f9f9f9]">
      <div className="container mx-auto">
        <SectionTitle subHeading="Should Try" mainHeading="CHEF RECOMMENDS" />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {product.map(item => <ChefRecommand product={item} key={item._id}> </ChefRecommand>)}
        </div>
      </div>
    </section>
  );
};

export default ChefRecommands;
