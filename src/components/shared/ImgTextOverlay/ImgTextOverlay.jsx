import React from "react";
import MenuParaluxContent from "../../MenuParaluxContent";

const ImgTextOverlay = ({imgUrl, heading, subtag, btnLink}) => {
  return (
    <div className="hero md:h-[650px] xl:h-[650px] object-cover" style={{backgroundImage: `url(${imgUrl})`}}>
      <div className="hero-content text-center">
        <div>
          <MenuParaluxContent heading={heading} subtag={subtag} btnLink={btnLink} />
        </div>
      </div>
    </div>
  );
};

export default ImgTextOverlay;
