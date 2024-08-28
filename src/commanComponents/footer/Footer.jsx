// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

// import {
//   faFacebookF,
//   faInstagram,
//   faTwitter,
//   faLinkedinIn,
// } from "@fortawesome/free-brands-svg-icons";
// import {
//   faEnvelope,
//   faGlobe,
//   faPhone,
// } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { images } from "../../assets/images";
const Footer = () => {
  const currentyear = new Date().getFullYear();

  return (
    <footer className=" bg-[#072255]  font-normal text-[#FFFFFF]  md:h-auto ">
      <div
        class="m-auto max-w-[90%]     "
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          padding: "3% 0",
        }}
      >
        <div className="  w-[100%] md:flex-col md:gap-16 lg:flex">
          <div
            className=" w-[100%]"
            style={{
              //   border: "1px solid white",
              width: "50%",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <img
              src={images?.mainLogo}
              alt="logo"
              className=""
              style={{ width: "100px", height: "50px" }}
            ></img>

            <p
              className=" flex w-[300px] "
              style={{ textAlign: "start", fontSize: "14px" }}
            >
              Fabmerce is a social commerce marketplace for all your shopping
              needs. Experience the new era of social shopping with us.
            </p>
          </div>

          {/* <div className="ml-0.5 items-baseline gap-5  xs:hidden md:flex  ">
            <Link
              to="https://www.facebook.com/nellaikarupatticoffee?mibextid=ZbWKwL"
              target="_blank"
            >
              <FontAwesomeIcon
                icon={faFacebookF}
                className="h-[18px] w-[18px] cursor-pointer rounded-full  border border-[#481212]  p-2  px-2 text-[#481212]"
              />
            </Link>
            <Link
              to="https://www.instagram.com/nellaikarupatticoffeeofficial/?next=%2F"
              target="_blank"
            >
              <FontAwesomeIcon
                icon={faInstagram}
                className=" h-[18px] w-[18px]  cursor-pointer rounded-full border border-[#481212]  p-2 text-[#481212]"
              />
            </Link>
            <Link to="https://twitter.com/nkcofficialpage" target="_blank">
              <FontAwesomeIcon
                icon={faTwitter}
                className="h-[18px] w-[18px] cursor-pointer rounded-full border border-[#481212] p-2 text-[#481212]"
              />
            </Link>
            <Link
              to="https://www.linkedin.com/in/nellai-karupatticoffee-0b4516277/"
              target="_blank"
            >
              <FontAwesomeIcon
                icon={faLinkedinIn}
                className="h-[18px] w-[18px]  cursor-pointer rounded-full border border-[#481212] p-2 text-[#481212]"
              />
            </Link>
          </div> */}
        </div>

        <div className="footer-main">
          <ul className="xxx">
            <ul
              className="  "
              style={{
                width: "35vw",
                textAlign: "start",
              }}
            >
              <p className="" style={{ fontSize: "18px", fontWeight: "500" }}>
                shop By
              </p>
              <div
                className=""
                style={{
                  fontSize: "14px",
                  fontWeight: "400",
                  padding: "5px 0px",
                  lineHeight: "2",
                }}
              >
                <li>Clothing</li>
                <li>Kids</li>
                <li>Beauty</li>
                <li>Electronics</li>
                <li>LifeStyle</li>
                <li>Household</li>
                <li>Grocery</li>
              </div>
              {/* </Link> */}
            </ul>
            <li className=""></li>
            <ul
              className="  "
              style={{
                width: "35vw",
                textAlign: "start",
              }}
            >
              <p className="" style={{ fontSize: "18px", fontWeight: "500" }}>
                About us
              </p>
              <div
                className=""
                style={{
                  fontSize: "14px",
                  fontWeight: "400",
                  padding: "5px 0px",
                  lineHeight: "2",
                }}
              >
                <li>Live Chat</li>
                <li>FAQ</li>
                <li>Terms and Conditions</li>
                <li>Privacy Policy</li>
                <li>Become a partner</li>
              </div>
            </ul>
            <ul
              className="  "
              style={{
                width: "35vw",
                textAlign: "start",
              }}
            >
              <p className="" style={{ fontSize: "18px", fontWeight: "500" }}>
                Contact Us
              </p>
              <div
                className=""
                style={{
                  fontSize: "14px",
                  fontWeight: "400",
                  padding: "5px 0px",
                  lineHeight: "2",
                }}
              >
                <li>Chennai,Tamil Nadu</li>
                <li>+91 7092 134 246</li>
                <li>help@fabmerce.com</li>
              </div>
            </ul>
            <ul className=" ">
              <p className="" style={{ fontSize: "18px", fontWeight: "500" }}>
                Stay Connected
              </p>
              <p
                className="sss"
                style={{
                  width: "70%",
                  marginLeft: " 30%",
                  textAlign: "start",
                  fontSize: "14px",
                  padding: "10px 0px",
                }}
              >
                Join over 10 million social commerce shoppers who shop their
                products by entrusting their favourite KOLs, Influencer. Explore
                positive trends for social shopping.
              </p>
            </ul>
            {/* <li className="cursor-pointer rounded-md border-2 border-solid border-[#481212] py-1 pl-7 font-roboto text-[#481212] hover:bg-[#481212] hover:text-[#E8A21A] md:w-40">
              <Link to="/products" target="_parent">
                Products
              </Link>
            </li>

            <li className="cursor-pointer rounded-md border-2 border-solid border-[#481212] py-1  pl-7 font-roboto hover:bg-[#481212] hover:text-[#E8A21A] md:w-40">
              <Link to="/about" target="_parent">
                About us
              </Link>
            </li>
            <li className="cursor-pointer rounded-md border-2 border-solid border-[#481212] py-1  pl-7 font-roboto hover:bg-[#481212] hover:text-[#E8A21A] md:w-40">
              <Link to="/contactus" target="_parent">
                Contact US
              </Link>
            </li> */}
          </ul>
        </div>

        <div className=" ">
          {/* <h1>To Know More About us</h1> */}
          {/* <div className="flex gap-5 text-xl font-normal ">
            <FontAwesomeIcon
              icon={faEnvelope}
              className="rounded-full border border-[#481212]   p-1 text-[#481212]"
            />
            <p
              className="xs:font-roboto  xs:text-lg md:font-roboto md:text-xl"
              style={{
                fontStyle: "normal",
                fontWeight: "400",
              }}
            >
              franchise@nkcfoods.com
            </p>
          </div> */}
          {/* <div className="flex gap-5 text-xl font-normal  ">
            <FontAwesomeIcon
              icon={faGlobe}
              className="rounded-full border border-[#481212]  p-1 text-[#481212]"
            />
            <p className="text-xl  xs:font-roboto xs:text-lg md:font-roboto">
              nellaikarupatticoffee.com
            </p>
          </div> */}
        </div>

        <div className=" flex-col  xs:flex xs:gap-4 md:flex md:px-8">
          {/* <div className="mt-6 flex  xs:flex xs:gap-4">
            <FontAwesomeIcon
              icon={faPhone}
              className="h-[14px] w-[14px] rounded-full border border-[#481212] p-2 text-2xl  text-[#481212] md:mx-2"
            />
            <div className=" xs:border-b-2 xs:border-[#E8A21A]  xs:text-xl  md:mb-6 md:border-b-2 md:border-[#E8A21A] md:pb-8 md:text-3xl">
              <p>
                TamilNadu/Karnataka <br />
                Pondicherry/Kerala <br />
                6374114632
              </p>
            </div>
          </div> */}
          {/* <div className="flex xs:flex xs:gap-4 xs:pb-6">
            <FontAwesomeIcon
              icon={faPhone}
              className="h-[14px] w-[14px] rounded-full  border border-[#481212] p-2 text-2xl  text-[#481212] md:mx-2"
            />
            <div className="top-4 xs:text-xl md:text-3xl ">
              <p>
                Andhra / Telangana <br />
                9080257459
              </p>
            </div>
          </div> */}
        </div>

        {/* <div className="ml-0.5 flex  items-baseline gap-5 md:hidden ">
          <Link
            to="https://www.facebook.com/nellaikarupatticoffee?mibextid=ZbWKwL"
            target="_blank"
          >
            <FontAwesomeIcon
              icon={faFacebookF}
              className="h-[18px] w-[18px] cursor-pointer rounded-full  border border-[#481212]  p-2  px-2 text-[#481212]"
            />
          </Link>
          <Link
            to="https://www.instagram.com/nellaikarupatticoffeeofficial/?next=%2F"
            target="_blank"
          >
            <FontAwesomeIcon
              icon={faInstagram}
              className=" h-[18px] w-[18px]  cursor-pointer rounded-full border border-[#481212]  p-2 text-[#481212]"
            />
          </Link>
          <Link to="https://twitter.com/nkcofficialpage" target="_blank">
            <FontAwesomeIcon
              icon={faTwitter}
              className="h-[18px] w-[18px] cursor-pointer rounded-full border border-[#481212] p-2 text-[#481212]"
            />
          </Link>
          <Link
            to="https://www.linkedin.com/in/nellai-karupatticoffee-0b4516277/"
            target="_blank"
          >
            <FontAwesomeIcon
              icon={faLinkedinIn}
              className="h-[18px] w-[18px]  cursor-pointer rounded-full border border-[#481212] p-2 text-[#481212]"
            />
          </Link>
        </div> */}
      </div>
      <div
        className="flex h-[109px] py-4 px-2  bg-[#072255] font-inter text-[#FFFFFF] xs:text-[14px]  md:text-xl"
        style={{ borderTop: "1px solid white" }}
      >
        <div className="bg-[#072255]">
          <p
            className="  "
            style={{
              fontSize: "14px",
              fontWeight: "500",
              textAlign: "start",
            }}
          >
            © Copyright {currentyear} . All rights reserved By &nbsp;
            <span className="text-[#FFFFFF]">AptonWorks</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
