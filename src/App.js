import React from "react";
import Home from "../src/components/home/pages/Home";
import FirstHeader from "../src/commanComponents/header/FirstHeader";
import Brands from "../src/components/Brands/Brands";
import Nav from "../src/commanComponents/nav/Nav";
import Categories from "./components/categories/Categories";
import Product from "./commanComponents/product/Product";
import { Route, Router, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <Router>
        <FirstHeader />
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/brands" element={<Brands />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/product/:itemName" element={<Product />} />
        </Routes>
      </Router>{" "}
    </>
  );
};

export default App;
