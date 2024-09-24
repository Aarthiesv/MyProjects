import React, { useState, useEffect } from "react";
import { images } from "../../../assets/images";
import "../../home/component/first.css";

const First = () => {
  const imageList = [
    images?.HomeIcon1,
    images?.HomeIcon2,
    images?.HomeIcon3,
    images?.HomeIcon4,
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === imageList.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel-container">
      <img
        src={imageList[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        className="carousel-image"
        style={{width:'100%'}}
      />

      <div className="carousel-dots">
        {imageList.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? "active" : ""}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default First;
