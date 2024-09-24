import React, { useState } from "react";
import { Modal, message } from "antd"; // Import message for notifications
import "../auth/singin.css";
import { icons } from "../../assets/icons";
import { images } from "../../assets/images";
import LogIn from "./LoginIn";
import axios from "axios";

const Sign_in = () => {
  const [email, setEmail] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [emailError, setEmailError] = useState("");

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleContinueClick = (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address."); // Set error message
      return;
    }
    setEmailError("");

    setIsModalVisible(true);
    axios
      .post("http://localhost:3001/Login", { email })
      .then((result) => console.log(result))
      .catch((err) => console.log(err));

    setEmail("");
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div className="sign-in-container">
      <div className="sign-in-wrapper">
        <img src={icons?.LogInImage} alt="" />
      </div>
      <div className="sign-in-wrapper1">
        <div>
          <img src={images?.mainLogo} alt="" />
          <p className="">Login via</p>
        </div>
        <form>
          <div className="mail-input" style={{ marginTop: "3vw" }}>
            <input
              type="email"
              placeholder="Enter your e-mail or mobile number"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            {emailError && (
              <p className="error-message" style={{ color: "red" }}>
                {emailError}
              </p>
            )}{" "}
          </div>
          <div
            className=""
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "3vw",
            }}
          >
            <button
              type="button"
              className="button-click"
              onClick={(e) => handleContinueClick(e)}
            >
              Continue
            </button>
            <Modal
              open={isModalVisible}
              footer={null}
              closable={false}
              centered={true}
              onCancel={handleCancel}
              width="55%"
            >
              <LogIn setIsModalVisible={setIsModalVisible} />
            </Modal>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Sign_in;
