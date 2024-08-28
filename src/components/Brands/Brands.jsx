import React from "react";

import "../Brands/brand.css";
import { images } from "../../assets/images";
import { Link } from "react-router-dom";
import { BrandPageList } from "../../constant/home.js/home";

const Brands = () => {
  return (
    <div className="brands-container">
      <div className="brands-wrapper">
        <span>All Brands for you</span>
        <p>Showing Results</p>
        <div className="clicking">
          <Link to={"/"}>
            <p>Home</p>
          </Link>
          <img src={images?.ArrowRight} alt="" />
          <p>Brands</p>
        </div>
      </div>
      <div className="brand-content">
        {BrandPageList?.map((data) => (
          <img src={data?.icon} alt="" />
        ))}
      </div>
    </div>
  );
};

export default Brands;
