import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

const SlideTestimonial = ({review}) => {
    return (
        <SwiperSlide>
            {review.name}
        </SwiperSlide>
    );
};

export default SlideTestimonial;