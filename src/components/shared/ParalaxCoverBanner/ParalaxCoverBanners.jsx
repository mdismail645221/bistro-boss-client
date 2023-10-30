import React from "react";

import bannerOne from '../../../assets/images/menu/banner3.jpg'

const ParalaxCoverBanners = ({data}) => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url(${data?.imgUrl ? data.imgUrl : `${bannerOne}`})`
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="w-full">
          <h1 className={`${data?.css?.heading}`}>{data?.heading}</h1>
          <p className={`${data?.css?.subHeading} mt-3`}>
            {data?.subHeading}
          </p>
          <button className={`${data?.css.btn}`}>Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default ParalaxCoverBanners;
