import React, { useState } from 'react';

interface CarouselProps {
  images: string[];
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const goToPreviousSlide = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNextSlide = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="carousel">
      <button onClick={goToPreviousSlide}>Previous</button>
      <img src={images[currentImageIndex]} alt="carousel slide" />
      <button onClick={goToNextSlide}>Next</button>
    </div>
  );
};

const CarouselComponent: React.FC = () => {
  const images: string[] = [
    '../images/testimonio/testimonio 1.png',
    '../images/testimonio/testimonio 2.png',
    '../images/testimonio/testimonio 3.png',
    '../images/testimonio/testimonio 4.png',
  ];

  return (
    <div>
      <h1>Carousel Example</h1>
      <Carousel images={images} />
    </div>
  );
};

export default CarouselComponent;
