// import React from "react";

import React from "react";
import { images } from "../../../assets/images";

import "../../home/component/first.css";

const Unmissable = () => {
  return (
    <div className="main-containe">
      <p className="xx">Featured Categories</p>

      <div className="Trends-container">
        <img src={images?.colorImage} alt="" className="trend-image" />
        <div className="cloth-container">
          <p className="cloth">Clothing</p>
          <div className="mm">
            <img src={images?.WomenWearImage} alt="" />
            <img src={images?.MensWearImage} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Unmissable;
