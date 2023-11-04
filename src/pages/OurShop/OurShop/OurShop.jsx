import React from 'react';
import ImgTextOverlay from '../../../components/shared/ImgTextOverlay/ImgTextOverlay';
import shopImg from '../../../assets/shop/banner2.jpg'

const OurShop = () => {
    return (
        <div>
            <ImgTextOverlay imgUrl={shopImg} heading={'OUR SHOP'} subtag={'this is our shop menu'} btnLink={'/'} />
        </div>
    );
};

export default OurShop;