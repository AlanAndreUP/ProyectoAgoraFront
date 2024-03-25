import React, { useState } from 'react';
import './Image.css'; 
import { useMediaQuery } from 'react-responsive';

export interface ImageProps {
  src: string | string[]; 
  alt: string;
  className?: string;
  buttonText?: string;
}

const Image: React.FC<ImageProps> = ({ src, alt, className, buttonText }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [initialX, setInitialX] = useState(0);

  const isSmallScreen = useMediaQuery({ maxWidth: 768 }); 

  let images: string[];
  if (typeof src === 'string') {
    images = [src]; 
  } else {
    images = src;
  }

  const handleMouseMove = (e: React.MouseEvent<HTMLImageElement>) => {
    const currentX = e.pageX;
    if (currentX - initialX > 50) {
      setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
      setInitialX(currentX);
    } else if (initialX - currentX > 50) {
      setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
      setInitialX(currentX);
    }
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLImageElement>) => {
    setInitialX(e.pageX);
  };

  return (
    <div className={`carousel-container pt-20 ${className}`}>
      {isSmallScreen ? (
        <>
          <img
            src={images[currentSlide]}
            alt={alt}
            className="carousel-image"
            onMouseMove={handleMouseMove}
            onMouseDown={handleMouseDown}
          />
        </>
      ) : (
        images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={alt}
            className={currentSlide === index ? 'carousel-image active' : 'carousel-image'}
          />
        ))
      )}
    </div>
  );
};

export default Image;
