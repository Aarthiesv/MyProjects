import React from "react";

import "../../home/component/first.css";
import { NutsList } from "../../../constant/home.js/home";
import Gadgets from "../../../commanComponents/gadgets/Gadgets";

const Nuts = () => {
  return (
    <div className="nuts-container-wrapper">
      <p className="xx">Food, Nuts & Spices</p>
      <div className="nuts-container">
        <div className="nuts-main-container">
          {NutsList?.map((data) => (
            <img src={data?.icon} alt="zz" />
          ))}
        </div>
        <Gadgets listType="nuts" />
      </div>
    </div>
  );
};

export default Nuts;
