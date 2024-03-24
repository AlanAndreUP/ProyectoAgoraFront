import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

interface CarruselProps {
  folderName: string;
}

const Carrusel: React.FC<CarruselProps> = ({ folderName }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = Array.from({ length: 12 }, (_, i) => `/${folderName}/image${i + 1}.jpg`);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  const changeSlide = (step: number) => {
    setCurrentImageIndex((prevIndex) => (prevIndex + step + images.length) % images.length);
  };

  const leftIndex = (currentImageIndex - 1 + images.length) % images.length;
  const rightIndex = (currentImageIndex + 1) % images.length;

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    e.currentTarget.style.display = "none";
  };

  return (
    <div className="relative overflow-hidden py-10">
      <div className="flex items-center justify-center">
        <div className="grid grid-cols-3 gap-4">
          <img
            key={leftIndex}
            src={images[leftIndex]}
            alt={`Slide ${leftIndex}`}
            className="w-72 h-48 object-contain"
            onError={handleImageError}
          />
          <img
            key={currentImageIndex}
            src={images[currentImageIndex]}
            alt={`Slide ${currentImageIndex}`}
            className="w-72 h-48 object-contain"
            onError={handleImageError}
          />
          <img
            key={rightIndex}
            src={images[rightIndex]}
            alt={`Slide ${rightIndex}`}
            className="w-72 h-48 object-contain"
            onError={handleImageError}
          />
        </div>
      </div>

      <button
        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-2"
        onClick={() => changeSlide(1)}
      >
        <FaChevronRight />
      </button>
    </div>
  );
};

export default Carrusel;
