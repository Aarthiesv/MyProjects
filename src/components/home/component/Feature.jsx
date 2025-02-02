import React, { useRef } from "react";
import "../../home/component/first.css";

import { FeatureList } from "../../../constant/home.js/home";

const Feature = () => {
  const carouselRef = useRef(null);

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft += 200;
    }
  };
  console.log(FeatureList);

  return (
    <div className="feature-container">
      <p className="xx">Featured Categories</p>
      <div className="carousel-wrapper">
        <div className="carousel" ref={carouselRef}>
          <div className="carousel-images1">
            {FeatureList?.map((data, index) => (
              <div key={index} className="carousel-item1">
                <img
                  src={data.icon}
                  alt="Feature"
                  className=""
                  style={{ width: "50%" }}
                />
                <p className="aaa">{data?.name}</p>
              </div>
            ))}
          </div>
        </div>
        <button className="next" onClick={scrollRight}>
          &#10095;
        </button>
      </div>
    </div>
  );
};

export default Feature;
