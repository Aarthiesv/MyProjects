import React, { useState } from "react";
import "../nav/nav.css";
import { images } from "../../assets/images";
import {
  BeautyList,
  ElectronicList,
  GroceryList,
  HouseholdList,
  LifeStyleList,
  NavList,
} from "../../constant/nav/Nav";
import { ClothList, KidsList } from "../../constant/nav/Nav";
import { Link, useNavigate } from "react-router-dom";

const Nav = () => {
  const [selectedItem, setSelectedItem] = useState(false);
  const [dataList, setDataList] = useState([]);

  const navigate = useNavigate();

  const handleNavBarClick = (item) => {
    setSelectedItem(item);
    if (item.name === "Clothing") {
      setDataList(ClothList);
    } else if (item.name === "Kids") {
      setDataList(KidsList);
    } else if (item.name === "Beauty") {
      setDataList(BeautyList);
    } else if (item.name === "Electronic") setDataList(ElectronicList);
    else if (item.name === "LifeStyle") setDataList(LifeStyleList);
    else if (item.name === "Household") setDataList(HouseholdList);
    else if (item.name === "Grocery") setDataList(GroceryList);
    else {
      setDataList([]);
    }
  };

  return (
    <div className="nav-header">
      <div className="nav-wrapper">
        {NavList.map((item) => (
          <div
            key={item.id}
            className=""
            onClick={() => handleNavBarClick(item)}
          >
            <p>{item.name}</p>
            <img src={images?.DownIcon} alt="down icon" />
          </div>
        ))}
        <div
          className=""
          style={{
            // width: "10%",

            alignItems: "center",
          }}
        >
          <img
            src={images?.shopIcon}
            alt="shop-icon"
            className=""
            style={{
              width: "20px",
              height: "20px",
              display: "flex",
              align: "center",
            }}
          />
          <Link to={"/Brands"}>
            <p className="" style={{ padding: "5px", color: "white" }}>
              Brands
            </p>
          </Link>
          <div className="all-categories">
            <img src={images?.ElementIcon} alt="" />
            <Link to={"/Categories"}>
              <p className="">All Categories</p>
            </Link>
          </div>
        </div>
      </div>
      {selectedItem && (
        <div div className="flex flex-row ">
          <div className="item-details">
            <ul>
              {dataList.map((data) => (
                <li key={data.id}>
                  <p className="content"> {data.name1}</p>
                  <ul>
                    {data.subtitle?.map((item) => (
                      <li className="content-types" key={item.id}>
                        {item.type}
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>

          <div className="item-details">
            <ul>
              {dataList.map((data) => (
                <li key={data.id}>
                  <p className="content">{data.name}</p>
                  <div className="columns">
                    <ul className="column">
                      {data.subtitle1?.slice(0, 8).map((item) => (
                        <li className="content-types" key={item.id}>
                          {item.type}
                        </li>
                      ))}
                    </ul>
                    <ul className="column1">
                      {data.subtitle1?.slice(8).map((item) => (
                        <li className="content-types" key={item.id}>
                          {item.type}
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="Beauty flex flex-row">
            <ul>
              {dataList.map((data) => (
                <li key={data.id}>
                  <p className="contents"> {data?.play}</p>
                  <ul>
                    {data.kids?.map((item) => (
                      <li className="content-types" key={item.id}>
                        {item.types}
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>

            <ul>
              {dataList.map((data) => (
                <li key={data.id}>
                  <p className="contents"> {data.play1}</p>
                  <ul>
                    {data.kids1?.map((item) => (
                      <div className="column-beauty">
                        <ul className="column">
                          <li className="content-types" key={item.id}>
                            {item.types}
                          </li>
                        </ul>
                      </div>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
            <ul>
              {dataList.map((data) => (
                <li key={data.id}>
                  <p className="contents"> {data?.play2}</p>
                  <ul>
                    {data.kids2?.map((item) => (
                      <li className="content-types" key={item.id}>
                        {item.types}
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>

          <div className=" Beauty flex flex-row">
            <ul>
              {dataList.map((data) => (
                <li key={data.id}>
                  <p className="content"> {data.content1}</p>
                  <ul>
                    {data.sub?.map((item) => (
                      <li className="content-types" key={item.id}>
                        {item.type}
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>

            <ul>
              {dataList.map((data) => (
                <li key={data.id}>
                  <p className="content"> {data.content2}</p>
                  <ul>
                    {data.sub1?.map((item) => (
                      <div className="column-beauty">
                        <ul className="column">
                          <li className="content-types" key={item.id}>
                            {item.type}
                          </li>
                        </ul>
                      </div>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
            <ul>
              {dataList.map((data) => (
                <li key={data.id}>
                  <p className="content"> {data.content3}</p>
                  <ul>
                    {data.sub2?.map((item) => (
                      <li className="content-types" key={item.id}>
                        {item.type}
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>

            <ul>
              {dataList.map((data) => (
                <li key={data.id}>
                  <p className="content"> {data.content4}</p>
                  <ul>
                    {data.sub3?.map((item) => (
                      <div className="column-beauty">
                        <ul className="column">
                          <li className="content-types" key={item.id}>
                            {item.type}
                          </li>
                        </ul>
                      </div>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
            <ul>
              {dataList.map((data) => (
                <li key={data.id}>
                  <p className="content"> {data.content5}</p>
                  <ul>
                    {data.sub4?.map((item) => (
                      <li className="content-types" key={item.id}>
                        {item.type}
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>

          <div className="Beauty flex flex-row">
            <ul>
              {dataList.map((data) => (
                <li key={data.id}>
                  <p className="content"> {data.product1}</p>
                  <ul>
                    {data.type1?.map((item) => (
                      <li className="content-types" key={item.id}>
                        {item.type}
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>

            <ul>
              {dataList.map((data) => (
                <li key={data.id}>
                  <p className="content"> {data.product2}</p>
                  <ul>
                    {data.type2?.map((item) => (
                      <div className="column-beauty">
                        <ul className="column">
                          <li className="content-types" key={item.id}>
                            {item.type}
                          </li>
                        </ul>
                      </div>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
            <ul>
              {dataList.map((data) => (
                <li key={data.id}>
                  <p className="content"> {data.product3}</p>
                  <ul>
                    {data.type3?.map((item) => (
                      <li className="content-types" key={item.id}>
                        {item.type}
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>

            <ul>
              {dataList.map((data) => (
                <li key={data.id}>
                  <p className="content"> {data.product4}</p>
                  <ul>
                    {data.type4?.map((item) => (
                      <div className="column-beauty">
                        <ul className="column">
                          <li className="content-types" key={item.id}>
                            {item.type}
                          </li>
                        </ul>
                      </div>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>

          <div className="Beauty flex flex-row">
            <ul>
              {dataList.map((data) => (
                <li key={data.id}>
                  <p className="content"> {data.style}</p>
                  <ul>
                    {data.category?.map((item) => (
                      <li className="content-types" key={item.id}>
                        {item.type}
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>

            <ul>
              {dataList.map((data) => (
                <li key={data.id}>
                  <p className="content"> {data.style1}</p>
                  <ul>
                    {data.category1?.map((item) => (
                      <div className="column-beauty">
                        <ul className="column">
                          <li className="content-types" key={item.id}>
                            {item.type}
                          </li>
                        </ul>
                      </div>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
            <ul>
              {dataList.map((data) => (
                <li key={data.id}>
                  <p className="content"> {data?.style2}</p>
                  <ul>
                    {data.category2?.map((item) => (
                      <li className="content-types" key={item.id}>
                        {item.type}
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>

          <div className="Beauty flex flex-row">
            <ul>
              {dataList.map((data) => (
                <li key={data.id}>
                  <p className="content"> {data.contain}</p>
                  <ul>
                    {data.property?.map((item) => (
                      <li className="content-types" key={item.id}>
                        {item.type}
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>

            <ul>
              {dataList.map((data) => (
                <li key={data.id}>
                  <p className="content"> {data.contain1}</p>
                  <ul>
                    {data.property1?.map((item) => (
                      <div className="column-beauty">
                        <ul className="column">
                          <li className="content-types" key={item.id}>
                            {item.type}
                          </li>
                        </ul>
                      </div>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>

          <div className="Beauty flex flex-row">
            <ul>
              {dataList.map((data) => (
                <li key={data.id}>
                  <p className="content"> {data.contain}</p>
                  <ul>
                    {data.property?.map((item) => (
                      <li className="content-types" key={item.id}>
                        {item.type}
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>

            <ul>
              {dataList.map((data) => (
                <li key={data.id}>
                  <p className="content"> {data.contains}</p>
                  <ul>
                    {data.items?.map((item) => (
                      <li className="content-types" key={item.id}>
                        {item.type}
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Nav;
