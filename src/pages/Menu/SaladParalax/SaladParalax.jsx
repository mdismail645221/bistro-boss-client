import React from 'react';
import saladimg from '../../../assets/menu/salad-bg.jpg'
import ImgTextOverlay from '../../../components/shared/ImgTextOverlay/ImgTextOverlay';

const SaladParalax = () => {
    const data = {
        imgUrl: saladimg,
        heading: "Our Salads",
        subHeading: "Would you like to try a dish?",
      };
    
      return (
        <section>
          <div>
            <ImgTextOverlay imgUrl={data.imgUrl} btnLink={"/"} heading={data.heading} subtag={data.subHeading} />
          </div>
        </section>
      );
};

export default SaladParalax;