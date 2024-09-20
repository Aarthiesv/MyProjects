// import React, { useRef } from "react";
// import "../Scroll/scroll.css";

// import {
//   FeatureList,
//   GadgetsList,
//   HouseholdList,
//   List,
//   TrendingBrandList,
// } from "../../constant/home.js/home";

// const Gadgets = ({ listType }) => {
//   const carouselRef = useRef(null);

//   const scrollRight = () => {
//     if (carouselRef.current) {
//       carouselRef.current.scrollLeft += 200;
//     }
//   };

//   const commonScrollList = listType === "listing" ? GadgetsList : HouseholdList : TrendingBrandList;

//   return (
//     <div className="feature-container">
//       <p className="xx">
//         {listType === "trending"
//           ? "Fabmerce Trending brands"
//           : "Gadgets & Accessories"}
//       </p>

//       <div className="container-wrapper">
//         <div
//           className=""
//           style={{
//             width: "100%",
//             margin: "20px",
//             overflowX: "auto",
//             whiteSpace: "nowrap",
//             scrollBehavior: "smooth",
//           }}
//           ref={carouselRef}
//         >
//           <div className="carousel-image">
//             {commonScrollList.map((data, index) => (
//               <div key={index} className="carousel-item1">
//                 <img src={data.icon} alt="Feature" />
//                 <p className="gadgets-item">{data?.name}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//         {/* <button className="next" onClick={scrollRight}>
//           &#10095;
//         </button> */}
//       </div>
//     </div>
//   );
// };

// export default Gadgets;
import React, { useRef } from "react";
import "../Scroll/scroll.css";

import {
  GadgetsList,
  HouseholdList,
  NutsList1,
} from "../../constant/home.js/home";

const Gadgets = ({ listType }) => {
  const carouselRef = useRef(null);

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft += 200;
    }
  };

  // Update the commonScrollList to handle multiple lists
  let commonScrollList;

  if (listType === "gadgets") {
    commonScrollList = GadgetsList;
  } else if (listType === "household") {
    commonScrollList = HouseholdList;
  } else {
    commonScrollList = NutsList1;
  }

  return (
    <div className="feature-container">
      <p className="xx">
        {listType === "trending"
          ? "Fabmerce Trending brands"
          : listType === "gadgets"
          ? "Gadgets & Accessories"
          : listType === "household"
          ? "House Essentials"
          : listType === "nuts"
          ? ""
          : "Other Items"}
      </p>

      <div className="container-wrapper">
        <div
          className=""
          style={{
            width: "100%",
            margin: "20px",
            overflowX: "auto",
            whiteSpace: "nowrap",
            scrollBehavior: "smooth",
          }}
          ref={carouselRef}
        >
          <div className="carousel-image">
            {commonScrollList?.map((data, index) => (
              <div key={index} className="carousel-item1">
                <img
                  src={data.icon}
                  alt="Feature"
                  className=""
                  style={{
                    width: "15vw",
                    height: "30vh",
                  }}
                />
                <p className="gadgets-item">{data?.name}</p>
              </div>
            ))}
          </div>
        </div>
        {/* <button className="next" onClick={scrollRight}>
          &#10095;
        </button> */}
      </div>
    </div>
  );
};

export default Gadgets;
