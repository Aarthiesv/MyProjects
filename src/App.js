// src/App.js
import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Home from "./components/home/pages/Home";
import FirstHeader from "./commanComponents/header/FirstHeader";
import Brands from "./components/Brands/Brands";
import Nav from "./commanComponents/nav/Nav";
import Categories from "./components/categories/Categories";
import Product from "./commanComponents/product/Product";
import AddCartList from "./commanComponents/addCart/AddCartList";
import Sign_in from "../src/components/auth/Sign_in";
import LoginIn from "./components/auth/LoginIn";

const App = () => {
  const [user, setUser] = useState([]);
  const location = useLocation();

  const hideHeaderAndNav =
    location.pathname === "/sign-in" || location.pathname === "/login";

  // return (
  // <Router>
  //   <AppLayout />
  // </Router>

  // );

  // const getUser = () => {
  //   fetch("/api/user")
  //     .then((res) => res.json())
  //     .then((json) => setUser(json));
  // };

  // useEffect(() => {
  //   getUser();
  // }, []);

  // console.log(user[0].address?.geo?.lat);
  // console.log(user[0].company?.catchPhrase);
  // console.log(user[0].company?.name);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000");
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const result = await response.json();
        console.log(result);
      } catch (err) {
        console.error("Fetch error:", err);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {!hideHeaderAndNav && <FirstHeader />}
      {!hideHeaderAndNav && <Nav />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/brands" element={<Brands />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/product/:itemName" element={<Product />} />
        <Route path="/addCart/:itemName" element={<AddCartList />} />
        <Route path="/sign-in" element={<Sign_in />} />
        <Route path="/login" element={<LoginIn />} />
      </Routes>
    </>
  );
};

export default App;
