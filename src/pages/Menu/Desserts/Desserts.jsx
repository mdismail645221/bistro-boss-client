import React from 'react';
import ParalaxCoverBanners from '../../../components/shared/ParalaxCoverBanner/ParalaxCoverBanners';
import img from '../../../assets/menu/chef-service.jpg';


const Desserts = () => {
    const data = {
        imgUrl: img,
        heading: "DESSERTS",
        subHeading: "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        css: {
          heading: "text-3xl md:text-[88px] text-[#FFF] uppercase leading-tight",
          subHeading: `text-[24px]`,
          btn: 'btn bg-yellow text-black mt-3 border-yellow'
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

export default Desserts;