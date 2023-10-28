import React from "react";
import SectionTitle from "../SectionTitle";
import img1 from "../../assets/images/img-with-paralax.png";
import { Link } from "react-router-dom";
import './ParalaxBannerOne.css'


import '../../assets/ParalaxBannerOne.css'

const ParalaxBanner1 = () => {
  let contentDate = `March 20, 2023`;

 

  return (
    <section id="paralaxBannerOne" className="w-full">
      <SectionTitle subHeading={"Check it out"} mainHeading="FROM OUR MENU" />

      {/* img-with-text start */}
      <div className="img-with-paralax-wrapper flex ">
        <div className="img-with-p-left">
          <img src={img1} alt="from-our-menu-img" />
        </div>
        {/* end img box */}

        <div className="img-with-p-right">
          <h4>{contentDate}</h4>
          <h3>WHERE CAN I GET SOME?</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
            voluptate facere, deserunt dolores maiores quod nobis quas quasi.
            Eaque repellat recusandae ad laudantium tempore consequatur
            consequuntur omnis ullam maxime tenetur.
          </p>
          
          <Link to="#">Read More</Link>
        </div>
      </div>
      {/* img-with-text end */}
    </section>
  );
};

export default ParalaxBanner1;
