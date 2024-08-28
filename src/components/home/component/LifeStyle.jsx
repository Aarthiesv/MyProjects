import React, { useState, useEffect } from "react";
import { images } from "../../../assets/images";
import "../../home/component/first.css";

const LifeStyle = () => {
  const imageList = [
    images?.LifeStyleImage1,
    images?.LifeStyleImage2,
    images?.LifeStyleImage3,
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState("forward");

  const totalItems = 3;

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex === 0) {
        setDirection("backward");
        return totalItems - 1;
      }
      setDirection("backward");
      return prevIndex - 1;
    });
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex === totalItems - 1) {
        setDirection("forward");
        return 0;
      }

      setDirection("forward");
      return prevIndex + 1;
    });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (direction === "forward") {
        nextSlide();
      } else {
        prevSlide();
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [direction]);

  return (
    <div className="carousel-container">
      <p className="xx">New Checklist For Lifestyle</p>
      <img
        src={imageList[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        className="lifeStyle-wrapper"
      />

      <div className="">
        {imageList.map((_, index) => (
          <span
            key={index}
            className={`carousel-dot ${index === currentIndex ? "active" : ""}`}
          />
        ))}
      </div>
    </div>
  );
};

export default LifeStyle;
