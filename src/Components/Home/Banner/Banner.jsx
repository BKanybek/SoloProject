import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css'
import Banner1 from '../../Images/Banner11.jpg';
import Banner2 from '../../Images/Banner3.jpg';
import Banner3 from '../../Images/banner4.jpeg';

const Banner = () => {
    return (
        <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Banner1}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Dantist</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Banner2}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Banner3}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Our Doctors</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    );
};

export default Banner;