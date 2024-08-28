import React, { useRef } from "react";
import "../Scroll/scroll.css";

import {
  FeatureList,
  List,
  TrendingBrandList,
} from "../../constant/home.js/home";

const Images = ({ listType }) => {
  const carouselRef = useRef(null);

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft += 200;
    }
  };

  const listToShow = listType === "trending" ? TrendingBrandList : List;

  return (
    <div className="feature-container">
      <p className="xx">
        {listType === "trending"
          ? "Fabmerce Trending brands"
          : "Featured Brands"}
      </p>

      <div className="carousel-wrapper">
        <div className="carousel" ref={carouselRef}>
          <div className="carousel-images">
            {listToShow.map((data, index) => (
              <div key={index} className="carousel-item">
                <img src={data.icon} alt="Feature" />
                <p className="aa">{data?.name}</p>
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

export default Images;
