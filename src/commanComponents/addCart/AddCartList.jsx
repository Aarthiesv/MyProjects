import React, { useState } from "react";
import "../addCart/addCard.css";
import { icons } from "../../assets/icons";
import { CareList, SizeList, ratingList } from "../../constant/home.js/home";

const AddCartList = () => {
  const [showMore, setShowMore] = useState(false);

  const handleClick = () => {
    setShowMore(!showMore);
  };
  return (
    <div className="addCard-container">
      <div className="addCard-wrapper">
        <div className="addCard-left" style={{ width: "45%" }}>
          <img src={icons?.AddCard1} alt="" />
          <div className="reference-img">
            <img src={icons?.AddCard2} alt="" />
            <img src={icons?.AddCard3} alt="" />
            <img src={icons?.AddCard4} alt="" />
            <img src={icons?.AddCard5} alt="" />
          </div>
          <div className="add-cart">
            <div className="add-cart1">
              <img src={icons?.AddCartIcon} alt="" />
              <span className="" style={{ paddingLeft: "10px" }}>
                Add to cart
              </span>
            </div>
            <div className="add-cart2">
              <img src={icons?.BuyNowIcon} alt="" />
              <span className="" style={{ paddingLeft: "10px" }}>
                Buy now
              </span>
            </div>
          </div>
        </div>
        <div className="addCard-right">
          <div className="add-sub-card">
            <div className="xxx">
              <p>Nibin Fashions</p>
              <span>
                Traditional Kerala Kasavu Onam Saree Floral Design With Golden
                Zari Border
              </span>
            </div>

            <div
              className=""
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <p>₹ 3080.00</p>
              <span className="ratings">3.5</span>
              <p className="supplier">Supplier</p>
            </div>
            <div className="tag">
              <img src={icons?.TagIcon} alt="tag" />
              <p>Free delivery</p>
            </div>
          </div>

          <div className="card-detail">
            <p>Available Colours</p>
            <div
              className=""
              style={{
                width: "70%",
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                gap: "10%",
              }}
            >
              <img src={icons?.AddCard2} alt="1" />
              <img src={icons?.AddCard6} alt="6" />
              <img src={icons?.AddCard7} alt="7" />
              <img src={icons?.AddCard8} alt="8" />
            </div>
            <div className="size">
              <span>Select Size</span>

              <div className="">
                {SizeList?.map((item) => (
                  <div className="share">
                    <p>{item?.size}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="wishList">
              <div className="">
                {/* <img src={icons?.AddCard1} alt=""/> */}
                <p>share</p>
              </div>
              <div className="wishList1">
                {/* <img src={icons?.AddCard1} alt=""/> */}
                <p>wishList</p>
              </div>
            </div>
          </div>
          <div className="description">
            <p>Description</p>
            <span>
              The saree, if beauty were a garment, would be it. A saree gives
              you silent strength. The pleasure of draping a saree with grace.
              In a saree, one remains comfortable and gorgeous.
            </span>
            <p>Product Details</p>

            <ul className="design">
              <li>
                • Yellow kanjeevaram woven design saree and has a woven design
                border
              </li>
              <li>• Blouse Piece</li>
              <li>• Length: 5.5 metres plus 0.8 metre blouse piece</li>
              <li>• Width: 1.06 metres (approx)</li>
              {showMore && (
                <>
                  <li>• Top Design Styling</li>
                  <li>• Print or Pattern Type</li>
                  <li>• Weave Type</li>
                  <li>• Styling</li>
                  <li>
                    *The model is wearing a blouse from our stylist's
                    collection, see the image for a mock-up of what the actual
                    blousewould look like
                  </li>
                </>
              )}
              <p
                onClick={handleClick}
                style={{
                  cursor: "pointer",
                }}
              >
                {showMore ? "See less ..." : "See more ..."}
              </p>
            </ul>
          </div>
          <div className="description">
            <p>Sold By </p>
            <div
              className=""
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div
                className=""
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <img src={icons?.Icon} />
                <p className="" style={{ paddingLeft: "10px" }}>
                  NIBIN FASHIONS
                </p>
              </div>
              <p
                className=""
                style={{
                  border: "1px solid #f4f4f5",
                  padding: "10px",
                  borderRadius: "5px",
                }}
              >
                View Store
              </p>
            </div>
            <div
              className="sub-design"
              style={{
                width: "80%",
                margin: "auto",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              {ratingList?.map((data) => (
                <div
                  className=""
                  style={{ display: "flex", flexDirection: "column" }}
                >
                  <p>{data?.name}</p>
                  <span>{data?.content}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="description">
            <p
              className=""
              style={{ fontSize: "16px", fontWeight: "400", color: "#000000" }}
            >
              Material & Care
            </p>
            {CareList?.map((item) => (
              <span className="care">{item?.name}</span>
            ))}
          </div>
          <div className="description1">
            <p
              className=""
              style={{ fontSize: "16px", fontWeight: "400", color: "#000000" }}
            >
              Material & Care
            </p>
            {CareList?.map((item) => (
              <span className="care">{item?.name}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddCartList;
