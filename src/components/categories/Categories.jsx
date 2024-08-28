// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { images } from "../../assets/images";
// import Categories_list from "../../commanComponents/categories/Categories_list";
// import Product from "../../commanComponents/product/Product";

// import "../Brands/brand.css";

// const Categories = () => {
//   const [selectedCategory, setSelectedCategory] = useState("All Categories");
//   const [selectedBrand, setSelectedBrand] = useState("Categories");

//   const handleCategorySelect = (category) => {
//     setSelectedCategory(category);
//     setSelectedBrand("Categories");
//   };

//   const handleBrandSelect = (brand) => {
//     setSelectedBrand(brand);
//   };

//   return (
//     <div className="brands-container">
//       <div className="brands-wrapper">
//         <span>All Brands for you</span>
//         <p>Showing Results</p>
//         <div className="clickings">
//           <Link to={"/"}>
//             <p>Home</p>
//           </Link>
//           <img src={images?.ArrowRight} alt="" />
//           <p>{selectedCategory}</p>
//         </div>
//       </div>

//       <div className="brand-content1">
//         {selectedBrand === "Categories" ? (
//           <Categories_list onCategorySelect={handleCategorySelect} />
//         ) : (
//           <Product />
//         )}
//       </div>
//     </div>
//   );
// };

// export default Categories;


import React, { useState } from "react";
import { Link } from "react-router-dom";
import { images } from "../../assets/images";
import Categories_list from "../../commanComponents/categories/Categories_list";
import Product from "../../commanComponents/product/Product";

import "../Brands/brand.css";

const Breadcrumb = ({ category }) => (
  <div className="clickings">
    <Link to="/">
      <p>Home</p>
    </Link>
    <img src={images?.ArrowRight} alt="" />
    <p>{category}</p>
  </div>
);

const Categories = () => {
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [selectedBrand, setSelectedBrand] = useState("Categories");

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setSelectedBrand("Categories");
  };

  const handleBrandSelect = (brand) => {
    setSelectedBrand(brand);
  };

  return (
    <div className="brands-container">
      <div className="brands-wrapper">
        <span>All Brands for you</span>
        <p>Showing Results</p>
        <Breadcrumb category={selectedCategory} />
      </div>

      <div className="brand-content1">
        {selectedBrand === "Categories" ? (
          <Categories_list onCategorySelect={handleCategorySelect} />
        ) : (
          <Product />
        )}
      </div>
    </div>
  );
};

export default Categories;
