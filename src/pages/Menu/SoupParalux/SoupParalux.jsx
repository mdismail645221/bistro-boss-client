import React from 'react';
import ImgTextOverlay from '../../../components/shared/ImgTextOverlay/ImgTextOverlay';
import soupImg from '../../../assets/menu/soup-bg.jpg'

const SoupParalux = () => {
    const data = {
        imgUrl: soupImg,
        heading: "SOUPS",
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

export default SoupParalux;