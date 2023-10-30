import React from "react";
import ParalaxCoverBanners from "../../../components/shared/ParalaxCoverBanner/ParalaxCoverBanners";
import bannerImg from "../../../assets/images/menu/banner3.jpg";

const TopMenuSection = () => {
  const data = {
    imgUr: bannerImg,
    heading: "Our menu",
    subHeading: "Would you like to try a dish?",
    css: {
      heading: "text-4xl md:text-[88px] text-[#FFF] uppercase leading-tight",
      subHeading: `text-[24px]`,
      btn: 'btn bg-yellow text-black mt-3'
    },
  };

  return (
    <section>
      <div>
        <ParalaxCoverBanners data={data} />
      </div>
    </section>
  );
};

export default TopMenuSection;
