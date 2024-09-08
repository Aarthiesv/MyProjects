import React, { useState } from "react";
import "../../components/Brands/brand.css";
import {
  BeautyPageList,
  CenterList,
  ElectronicsPageList,
  HouseholdPageList,
  KidsPageList,
  LifeStylePageList,
  MenList,
  NutsList1,
  WomenList,
  categoriesList,
} from "../../constant/home.js/home";
import { images } from "../../assets/images";
import { useNavigate } from "react-router-dom";

const Categories_list = ({ onCategorySelect,  brandsWrapperContent,
 }) => {
  const [selectedId, setSelectedId] = useState(1);
  const [sectionTitle, setSectionTitle] = useState("WOMEN");

  const navigate = useNavigate();

  const handleClick = (id, categoryName) => {
    setSelectedId(id);
    setSectionTitle(categoryName);
    onCategorySelect(categoryName);

    switch (id) {
      case 1:
        setSectionTitle("WOMEN");
        break;
      case 2:
        setSectionTitle(["KIDS"]);
        break;
      case 3:
        setSectionTitle(["BEAUTY"]);
        break;
      case 4:
        setSectionTitle(["ELECTRONICS"]);
        break;
      case 5:
        setSectionTitle(["LIFESTYLE"]);
        break;
      case 6:
        setSectionTitle(["HOUSEHOLD"]);
        break;
      case 7:
        setSectionTitle(["FOODS & NUTS"]);
        break;
      default:
        setSectionTitle([]);
    }
  };

  const handleItemClick = (itemName) => {
    navigate(`/product/${itemName}`);
  };

  return (
    <>
      <div className="categories-container">
        {brandsWrapperContent}

        <div className="">
          <div className="categories-left">
            <p>Categories</p>

            {categoriesList?.map((data) => (
              <span
                key={data.id}
                onClick={() => handleClick(data.id, data.name)}
                style={{
                  color: selectedId === data.id ? "#072255" : "black",
                  fontSize: selectedId === data.id ? "20px" : "18px",
                  borderBottom: data.id !== 7 ? "1px solid #f4f4f5" : "none",
                  padding: "15px 0px",
                }}
              >
                {data.name}
              </span>
            ))}
          </div>

          {selectedId === 1 && (
            <div className="" style={{}}>
              <div className="categories-right">
                <div className="ccc">
                  <hr
                    style={{
                      width: "43%",
                      textAlign: "left",
                      marginLeft: "10px",
                      marginTop: "5%",
                      border: "1px solid black",
                    }}
                  />
                  <div className="center">
                    <div className="flex flex-row">
                      <img src={images?.women} alt="" className=" -mt-3" />
                      <p>{sectionTitle}</p>
                    </div>
                  </div>
                  <hr
                    style={{
                      width: "43%",
                      textAlign: "left",
                      marginRight: "10px",
                      marginTop: "5%",
                      border: "1px solid black",
                    }}
                  />
                </div>

                <div className="categories-women">
                  {WomenList?.map((item) => (
                    <div
                      className="flex flex-col"
                      key={item.id}
                      onClick={() => handleItemClick(item?.name)}
                    >
                      <img src={item.icon} alt="" />
                      <p
                        className=""
                        style={{ textAlign: "center", paddingTop: "10%" }}
                      >
                        {item.name}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="ccc mt-40">
                  <hr
                    style={{
                      width: "43%",
                      textAlign: "left",
                      marginLeft: "10px",
                      marginTop: "5%",
                      border: "1px solid black",
                    }}
                  />
                  <div className="center">
                    <div className="flex flex-row">
                      <img src={images?.men} alt="" className=" -mt-3" />
                      {/* <p>{sectionTitle}</p> Display the section title */}
                      <p className="pl-2">MEN</p>
                    </div>
                  </div>
                  <hr
                    style={{
                      width: "43%",
                      textAlign: "left",
                      marginRight: "10px",
                      marginTop: "5%",
                      border: "1px solid black",
                    }}
                  />
                </div>

                <div className="categories-women">
                  {MenList?.map((item) => (
                    <div className="flex flex-col" key={item.id}>
                      <img src={item.icon} alt="" />
                      <p
                        className=""
                        style={{ textAlign: "center", paddingTop: "10%" }}
                      >
                        {item.name}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
          {selectedId === 2 && (
            <div className="" style={{}}>
              <div className="categories-right">
                <div className="ccc">
                  <hr
                    style={{
                      width: "43%",
                      textAlign: "left",
                      marginLeft: "10px",
                      marginTop: "5%",
                      border: "1px solid black",
                    }}
                  />
                  <div className="center">
                    <div className="flex flex-row">
                      <p>{sectionTitle}</p>
                    </div>
                  </div>
                  <hr
                    style={{
                      width: "43%",
                      textAlign: "left",
                      marginRight: "10px",
                      marginTop: "5%",
                      border: "1px solid black",
                    }}
                  />
                </div>

                <div className="categories-women">
                  {KidsPageList?.map((item) => (
                    <div className="flex flex-col" key={item.id}>
                      <img src={item.icon} alt="" />
                      <p
                        className=""
                        style={{ textAlign: "center", paddingTop: "10%" }}
                      >
                        {item.name}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
          {selectedId === 3 && (
            <div className="" style={{}}>
              <div className="categories-right">
                <div className="ccc">
                  <hr
                    style={{
                      width: "43%",
                      textAlign: "left",
                      marginLeft: "10px",
                      marginTop: "5%",
                      border: "1px solid black",
                    }}
                  />
                  <div className="center">
                    <div className="flex flex-row">
                      <p>{sectionTitle}</p>
                    </div>
                  </div>
                  <hr
                    style={{
                      width: "43%",
                      textAlign: "left",
                      marginRight: "10px",
                      marginTop: "5%",
                      border: "1px solid black",
                    }}
                  />
                </div>

                <div className="categories-women">
                  {BeautyPageList?.map((item) => (
                    <div className="flex flex-col" key={item.id}>
                      <img src={item.icon} alt="" />
                      <p
                        className=""
                        style={{ textAlign: "center", paddingTop: "10%" }}
                      >
                        {item.name}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
          {selectedId === 4 && (
            <div className="" style={{}}>
              <div className="categories-right">
                <div className="ccc">
                  <hr
                    style={{
                      width: "43%",
                      textAlign: "left",
                      marginLeft: "10px",
                      marginTop: "5%",
                      border: "1px solid black",
                    }}
                  />
                  <div className="center">
                    <div className="flex flex-row">
                      <p>{sectionTitle}</p>
                    </div>
                  </div>
                  <hr
                    style={{
                      width: "43%",
                      textAlign: "left",
                      marginRight: "10px",
                      marginTop: "5%",
                      border: "1px solid black",
                    }}
                  />
                </div>

                <div className="categories-women">
                  {ElectronicsPageList?.map((item) => (
                    <div className="flex flex-col" key={item.id}>
                      <img src={item.icon} alt="" />
                      <p
                        className=""
                        style={{ textAlign: "center", paddingTop: "10%" }}
                      >
                        {item.name}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
          {selectedId === 5 && (
            <div className="" style={{}}>
              <div className="categories-right">
                <div className="ccc">
                  <hr
                    style={{
                      width: "43%",
                      textAlign: "left",
                      marginLeft: "10px",
                      marginTop: "5%",
                      border: "1px solid black",
                    }}
                  />
                  <div className="center">
                    <div className="flex flex-row">
                      <p>{sectionTitle}</p>
                    </div>
                  </div>
                  <hr
                    style={{
                      width: "43%",
                      textAlign: "left",
                      marginRight: "10px",
                      marginTop: "5%",
                      border: "1px solid black",
                    }}
                  />
                </div>

                <div className="categories-women">
                  {LifeStylePageList?.map((item) => (
                    <div className="flex flex-col" key={item.id}>
                      <img src={item.icon} alt="" />
                      <p
                        className=""
                        style={{ textAlign: "center", paddingTop: "10%" }}
                      >
                        {item.name}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
          {selectedId === 6 && (
            <div className="" style={{}}>
              <div className="categories-right">
                <div className="ccc">
                  <hr
                    style={{
                      width: "43%",
                      textAlign: "left",
                      marginLeft: "10px",
                      marginTop: "5%",
                      border: "1px solid black",
                    }}
                  />
                  <div className="center">
                    <div className="flex flex-row">
                      <p>{sectionTitle}</p>
                    </div>
                  </div>
                  <hr
                    style={{
                      width: "43%",
                      textAlign: "left",
                      marginRight: "10px",
                      marginTop: "5%",
                      border: "1px solid black",
                    }}
                  />
                </div>

                <div className="categories-women">
                  {HouseholdPageList?.map((item) => (
                    <div className="flex flex-col" key={item.id}>
                      <img src={item.icon} alt="" />
                      <p
                        className=""
                        style={{ textAlign: "center", paddingTop: "10%" }}
                      >
                        {item.name}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
          {selectedId === 7 && (
            <div className="" style={{}}>
              <div className="categories-right">
                <div className="ccc">
                  <hr
                    style={{
                      width: "43%",
                      textAlign: "left",
                      marginLeft: "10px",
                      marginTop: "5%",
                      border: "1px solid black",
                    }}
                  />
                  <div className="center">
                    <div className="flex flex-row">
                      <p>{sectionTitle}</p>
                    </div>
                  </div>
                  <hr
                    style={{
                      width: "43%",
                      textAlign: "left",
                      marginRight: "10px",
                      marginTop: "5%",
                      border: "1px solid black",
                    }}
                  />
                </div>

                <div className="categories-women">
                  {NutsList1?.map((item) => (
                    <div className="flex flex-col" key={item.id}>
                      <img src={item.icon} alt="" />
                      <p
                        className=""
                        style={{ textAlign: "center", paddingTop: "10%" }}
                      >
                        {item.name}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Categories_list;
