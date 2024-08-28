import React from "react";
import {
  ChildrenList,
 
} from "../../../constant/home.js/home";

const Children = () => {
  return (
    <div className="children-container ">
      <p>Best Of Kidswear </p>
      <div className="children-wrapper">
        {ChildrenList?.map((data) => (
          <img src={data?.image} />
        ))}
      </div>
    </div>
  );
};

export default Children;
