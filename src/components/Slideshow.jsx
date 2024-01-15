import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import img1 from '../assets/images/01.jpg';
import img2 from '../assets/images/02.jpg';
import img3 from '../assets/images/03.png';
import img4 from '../assets/images/04.jpg';
import img5 from '../assets/images/04.jpg';
import img6 from '../assets/images/05.png';
import '../assets/slideshow.css';

const Slideshow = () => {
    return (
        <section> 
           <Carousel>
                <div>
                    <img  src={img1} alt='banner-logo'/>
                </div>
                <div>
                    <img src={img2} alt='banner-logo'/>
                </div>
                <div>
                    <img src={img3} alt='banner-logo'/>
                </div>
                <div>
                    <img src={img4}  alt='banner-logo'/>
                </div>
                <div>
                    <img src={img5} alt='banner-logo'/>
                </div>
                <div>
                    <img src={img6} alt='banner-logo'/>
                </div>
            </Carousel>
        </section>
    );
};

export default Slideshow;