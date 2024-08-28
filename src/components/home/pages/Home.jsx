import React from "react";
import First from "../component/First";
import Explore from "../component/Explore";
import Feature from "../component/Feature";
// import Trends from "../component/Trends";
import Offer from "../component/Offer";
import Unmissable from "../component/Unmissable";
import Images from "../../../commanComponents/Scroll/Images";
import Children from "../component/Children";
import Beauty from "../component/Beauty";
import Gadgets from "../../../commanComponents/gadgets/Gadgets";
import LifeStyle from "../component/LifeStyle";
import Nuts from "../component/Nuts";
import Footer from "../../../commanComponents/footer/Footer";

const Home = () => {
  return (
    <div>
      <First />
      <Explore />
      <Feature />
      <Images listType="trending" />

      <Offer />
      <Unmissable />
      <Images listType="featured" />
      <Children />
      <Beauty />
      <Gadgets listType="gadgets" />
      <LifeStyle />
      <Gadgets listType="household" />
      <Nuts />
      <Footer />
    </div>
  );
};

export default Home;
