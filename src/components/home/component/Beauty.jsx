import React from "react";

import "../../home/component/first.css";
import { images } from "../../../assets/images";

export const BeautyProductList = [
  {
    id: 1,
    icon: images?.BeautyIcon2,
  },
  {
    id: 2,
    icon: images?.BeautyIcon3,
  },
  {
    id: 3,
    icon: images?.BeautyIcon4,
  },
  {
    id: 5,
    icon: images?.BeautyIcon5,
  },
];

const Beauty = () => {
  return (
    <div className="children-container ">
      <p>Beauty & Cosmetics</p>
      <div className="beauty-wrapper">
        <div className="left-container">
          <img
            src={images?.BeautyIcon1}
            alt=""
            className=""
            style={{ width: "100%" }}
          />
        </div>
        <div className="right-container">
          {BeautyProductList?.map((item) => (
            <img src={item?.icon} className="" style={{ width: "100%" }} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Beauty;
