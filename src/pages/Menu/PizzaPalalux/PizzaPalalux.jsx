import React from 'react';
import ImgTextOverlay from '../../../components/shared/ImgTextOverlay/ImgTextOverlay';
import pizzaImg from '../../../assets/menu/pizza-bg.jpg'

const PizzaPalalux = () => {
    const data = {
        imgUrl: pizzaImg,
        heading: "Our PIZZA",
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
            <ImgTextOverlay imgUrl={data.imgUrl} btnLink={"/"} heading={data.heading} subtag={data.subHeading} />
          </div>
        </section>
      );
};

export default PizzaPalalux;