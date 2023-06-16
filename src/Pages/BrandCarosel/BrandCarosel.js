import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Brand1 from '../../Assets/Brand/Brand1.jpg'
import Brand2 from '../../Assets/Brand/Brand2.jpg'
import Brand3 from '../../Assets/Brand/Brand3.png'

const BrandCarosel = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={Brand2}
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={Brand3}
                    alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={Brand1}
                    alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
    );
};

export default BrandCarosel;