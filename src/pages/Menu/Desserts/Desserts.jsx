import React from 'react';
import img from '../../../assets/menu/chef-service.jpg';
import ImgTextOverlay from '../../../components/shared/ImgTextOverlay/ImgTextOverlay';


const Desserts = () => {
    // const data = {
    //     imgUrl: img,
    //     heading: "DESSERTS",
    //     subHeading: "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    //     css: {
    //       heading: "text-3xl md:text-[88px] text-[#FFF] uppercase leading-tight",
    //       subHeading: `text-[24px]`,
    //       btn: 'btn bg-yellow text-black mt-3 border-yellow'
    //     },
    //   };


    let data = {
      imgUrl: img,
      heading: "DESSERTS",
      subtag: "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      btnLink: '/'
    }
    
      return (
        <section>
          <div>
            <ImgTextOverlay imgUrl={data.imgUrl} heading={data.heading} subtag={data.subtag} btnLink={data.btnLink}  />
          </div>
        </section>
      );
};

export default Desserts;