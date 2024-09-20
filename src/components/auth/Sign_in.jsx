import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Modal } from "antd";

import "../auth/singin.css";
import { icons } from "../../assets/icons";
import { images } from "../../assets/images";
import LogIn from "./LoginIn"; // Assuming this is a form inside the modal

const Sign_in = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);

  const navigate = useNavigate(); // Hook to navigate to different routes

  const handleContinueClick = () => {
    setIsModalVisible(true); // Show the modal when clicking "Continue"
  };

  const handleModalSubmit = () => {
    // Handle any actions in the modal and navigate to login
    setIsModalVisible(false); // Close the modal
    navigate("/login"); // Navigate to login page
  };

  const handleCancel = () => {
    setIsModalVisible(false); // Close the modal without navigation
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
              onClick={handleContinueClick}
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
