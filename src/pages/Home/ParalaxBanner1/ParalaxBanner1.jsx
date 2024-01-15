import React from "react";
import SectionTitle from "../../../components/SectionTitle";
import img1 from "../../../assets/images/img-with-paralax.png";
import { Link } from "react-router-dom";



import '../../../assets/ParalaxBannerOne.css'

const ParalaxBanner1 = () => {
  let contentDate = `March 20, 2023`;

 

  return (
    <section id="paralaxBannerOne" className="w-full section-py ">
      <SectionTitle subHeading={"Check it out"} mainHeading="FROM OUR MENU" color="text-[#fff]" />

      {/* img-with-text start */}
      <div className="img-with-paralax-wrapper container mx-auto sm:flex md:flex items-center ">
        <div className="img-with-p-left basis-1/2">
          <img src={img1} alt="from-our-menu-img" />
        </div>
        {/* end img box */}

        <div className="img-with-p-right basis-1/2 text-[#fff] flex flex-col gap-4">
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
