import React from 'react';
import ParalaxCoverBanners from '../../../components/shared/ParalaxCoverBanner/ParalaxCoverBanners';
import img from '../../../assets/menu/chef-service.jpg';


const Desserts = () => {
    const data = {
        imgUrl: img,
        heading: "adsfasdfdsf",
        subHeading: "Would you like to try a dish?",
        css: {
          heading: "text-4xl md:text-[88px] text-[#FFF] uppercase leading-tight",
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