import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import "../product/product.css";
import {
  CottonSareeList,
  WomenList,
  WomenPageList,
  categoriesList,
} from "../../constant/home.js/home";
import { images } from "../../assets/images";
import { Checkbox, Radio } from "antd";

const Breadcrumb = ({ category }) => (
  <div className="clickings">
    <Link to="/">
      <p>Home</p>
    </Link>
    <p>{category}</p>
  </div>
);

const Product = () => {
  const { itemName } = useParams();
  const [selectedId, setSelectedId] = useState(null);
  const [showCottonSareeDetails, setShowCottonSareeDetails] = useState(false); // State to toggle <p> display
  const [value, setValue] = useState(1);

  const onChange = (e) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };

  const handleClick = (id) => {
    setSelectedId(selectedId === id ? null : id);
  };

  // Checkbox change handler to toggle the display of WomenList
  const handleCheckboxChange = (e, name) => {
    console.log(`checked = ${e.target.checked}`);
    if (name === "cotton saree") {
      setShowCottonSareeDetails(e.target.checked);
    }
  };

  return (
    <div className="brands-container">
      <div className="brands-wrapper">
        <span>All Brands for you</span>
        <p>Showing Results</p>
        <Breadcrumb category="All Categories" />
      </div>
      <div className="brand-content1">
        <div className="categories-list">
          <div
            className=""
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "row",
            }}
          >
            <div className="categories-left1">
              <p>Categories</p>
              {categoriesList.map((data) => (
                <div key={data.id}>
                  <span
                    onClick={() => handleClick(data.id)}
                    style={{
                      color: selectedId === data.id ? "#072255" : "black",
                      fontSize: selectedId === data.id ? "20px" : "18px",
                      borderBottom:
                        data.id !== 7 ? "1px solid #f4f4f5" : "none",
                      padding: "15px 0",
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      cursor: "pointer",
                    }}
                  >
                    {data.name}
                    <img src={images?.ArrowDown} alt="Arrow Down" />
                  </span>
                  {selectedId === 1 && data.id === 1 && (
                    <div>
                      <Radio.Group onChange={onChange} value={value}>
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                          }}
                        >
                          <Radio value={1}>Women</Radio>
                          <Radio value={2}>Men</Radio>
                        </div>
                      </Radio.Group>
                      {value === 1 && (
                        <div>
                          {WomenPageList?.map((data) => (
                            <div key={data.name} style={{ padding: "5px" }}>
                              <Checkbox
                                onChange={(e) =>
                                  handleCheckboxChange(e, data.name)
                                }
                              >
                                {data?.name}
                              </Checkbox>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Conditional Rendering for WomenList */}

            <div className="categories-right">
              {showCottonSareeDetails && (
                <div style={{}}>
                  <div className="categories-right1">
                    <div className="categories-women">
                      {CottonSareeList?.map((item) => (
                        <div className="flex flex-col" key={item.id}>
                          <div className=" relative product-card-detail">
                            <div className="">
                              <img src={item.icon} alt="" />
                              <p className="">fjhgjhgj</p> 
                            </div>
                          </div>

                          {/* <p
                            className=""
                            style={{ textAlign: "center", paddingTop: "10%" }}
                          >
                            {item.name}
                          </p> */}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
