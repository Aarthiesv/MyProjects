import React from "react";
import { images } from "../../../assets/images";
import { TrendsList } from "../../../constant/home.js/home";

import "../../home/component/first.css";

const Explore = () => {
  return (
    <div className="main-container">
      <div className="wrapper">
        <p>Explore</p>
        <img
          src={images?.ExploreIcon}
          alt="no-img"
          className=""
          style={{ width: "100%" }}
        />

        <span>New Trends</span>

        <div className="images-list">
          {TrendsList?.map((data) => (
            <img src={data?.icon} alt="noimg" />
          ))}
        </div>
      </div>
      <div className="left-side">
        <div>
          <img src={images?.ExploreSareeIcon} alt="" />
          <span>FABROOM</span>
        </div>

        <img src={images?.SareeIcon} alt="" />
      </div>
    </div>
  );
};

export default Explore;
