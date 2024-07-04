import React, {useEffect, useState} from 'react';
import { Carousel, Container } from 'react-bootstrap';



const CarouselComponent = () => {

  return (
    <Carousel>
      <Carousel.Item>
        <img 
          className="d-block w-100"
          src="./src/assets/Products/img1.png"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Asus rtx 3090 ti</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Container className='size'>
          <img
            className="d-block w-100"
            src="./src/assets/Products/img2.png"
            alt="Second slide"
          />
        </Container>
        <Carousel.Caption>
          <h3>Combo auriculares G435 y mouse G300</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./src/assets/Products/img3.png"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Procesadores Intel Serie X</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./src/assets/Products/img4.png"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Memoria Ram</h3>
        </Carousel.Caption>
      </Carousel.Item>


    </Carousel>
  );
};

export default CarouselComponent;
