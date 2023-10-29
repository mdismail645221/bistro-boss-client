import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../components/SectionTitle';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// custom css 
import './testimonial.css'

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import SlideTestimonial from './SlideTestimonial';

const Testimonials = () => {

    const [reviews, setReview] = useState([])

    useEffect(()=> {
        fetch('reviews.json')
        .then(res => res.json())
        .then(data => setReview(data))
    }, [])

 


    return (
        <section className='container mx-auto section-py' id='testimonial-65461'>
            
            <SectionTitle subHeading="What Our Clients Say" mainHeading="TESTIMONIALS" />

            <div>
                <Swiper
                    cssMode={true}
                    navigation={true}
                    pagination={true}
                    mousewheel={true}
                    // keyboard={true}
                    modules={[Navigation, Pagination]}
                    className="mySwiper"
                >
                   <div className='grid grid-cols-1'>{reviews.map(review => <SwiperSlide key={review._id}><SlideTestimonial key={review._id} review={review} /></SwiperSlide>)}</div>
                </Swiper>
            </div>

        </section>
    );
};

export default Testimonials;