import React from "react";
import { images } from "../../../assets/images";
import { OfferList } from "../../../constant/home.js/home";

const Offer = () => {
  return (
    <div className="offer-wrapper">
      <img
        src={images?.DealBackGroundImage}
        alt="no-img"
        className=""
        style={{ width: "100%" }}
      />
      <div className="offer-container">
        <div className="">
          <p>
            Get more <br></br>offers{" "}
          </p>
          <span>“Deal zone”</span>
        </div>
      </div>
      <div
        className="zz"
        style={{
          position: "absolute",
          left: "300px",
          top: "50px",
          display: "flex",
          flexDirection: "row",
          width: "20vw",
        }}
      >
        {OfferList?.map((data, index) => {
          return (
            <div key={index} className="offerList">
              <div className="">
                <p>{data?.content}</p>
                <p>{data?.offer}</p>
                <p
                  style={{
                    textDecoration: data.id !== 1 ? "line-through" : "none",
                    textDecorationColor: data.id !== 1 ? "black" : "inherit",
                  }}
                >
                  {data.value}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Offer;
