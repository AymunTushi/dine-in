import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../images/banner-2.jpg'
import banner2 from '../../../images/banner-1.jpg'

const Banner = () => {
    return (
        <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={banner1}
          height={611}
          alt=""
        />
        <Carousel.Caption>
          <h1 className='mb-4'><b> WELCOME TO DINE-IN</b></h1>
          
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={banner2}
          height={611}
          
          alt=""
        />
         <Carousel.Caption>
          <h1 className='mb-4'><b> WE MAKE WHAT YOU LOVE</b></h1>
          <h3 className='mb-6'>Place Your Order And Feel The Taste</h3>
        </Carousel.Caption>
        
      </Carousel.Item>
      </Carousel>
    );
};

export default Banner;