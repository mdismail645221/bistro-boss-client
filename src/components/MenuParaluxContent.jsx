import React from "react";
import { Link } from "react-router-dom";

const MenuParaluxContent = ({heading, subtag, btnLink}) => {
  return (
    <div className="py-4 sm:w-full xl:w-[600px]" style={{backgroundColor: `rgba(21, 21, 21, 0.60)`, backgroundAttachment: 'fixed',}}>
      <h1 className="text-3xl md:text-[88px] text-[#FFF] uppercase leading-tight">{heading}</h1>
      <p className={`text-[24px] mt-3 text-gray-light`}>{subtag}</p>
      <Link to={btnLink} className={`btn bg-yellow text-black mt-3 border-yellow`}>Get Started</Link>
    </div>
  );
};

export default MenuParaluxContent;
