import React, { useState } from "react";
import "../header/header.css";
import { HeaderList } from "../../constant/nav/Nav";
const FirstHeader = () => {
  const [search, setSearch] = useState("");

  const handleOnChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="header-main">
      <div className="header-wrapper ">
        <input
          className="Input"
          value={search}
          placeholder="Search for products, brands and more"
          onChange={(e) => handleOnChange(e)}
        />
        {/* <input className="Background" /> */}
        {HeaderList?.map((data) => (
          <div className="sub-title ">
            <img src={data?.icon} alt="no" />
            <p className="content">{data?.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FirstHeader;
