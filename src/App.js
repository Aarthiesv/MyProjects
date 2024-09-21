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
const AppLayout = () => {
  const location = useLocation();

  const hideHeaderAndNav =
    location.pathname === "/sign-in" || location.pathname === "/login";

  return (
    <>
      {/* {!hideHeaderAndNav && <FirstHeader />}
      {!hideHeaderAndNav && <Nav />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/brands" element={<Brands />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/product/:itemName" element={<Product />} />
        <Route path="/addCart/:itemName" element={<AddCartList />} />
        <Route path="/sign-in" element={<Sign_in />} />
        <Route path="/login" element={<LoginIn />} />
      </Routes> */}
    </>
  );
};

const App = () => {
  const [user, setUser] = useState([]);
  // return (
  // <Router>
  //   <AppLayout />
  // </Router>

  // );

  const getUser = () => {
    fetch("/api/user")
      .then((res) => res.json())
      .then((json) => setUser(json));
  };

  useEffect(() => {
    getUser();
  }, []);

  // console.log(user[0].address?.geo?.lat);
  // console.log(user[0].company?.catchPhrase);
  // console.log(user[0].company?.name);
  return (
    <div>
      {user?.map((data) => (
        <>
          <p>{data?.name}</p>
          <p>{data?.username}</p>
        </>
      ))}
    </div>
  );
};

export default App;
