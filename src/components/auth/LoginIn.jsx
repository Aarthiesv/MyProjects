import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import "../auth/singin.css";
import { icons } from "../../assets/icons";
import { images } from "../../assets/images";

const LogIn = () => {
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const mockEmail = "user@example.com";
    const mockPassword = "password123";

    if (password === mockPassword) {
      navigate("/");
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <div className="sign-in-container">
      <div className="sign-in-wrapper">
        <img src={icons?.LogInImage1} alt="" />
      </div>
      <div className="sign-in-wrapper1">
        <div>
          <img src={images?.mainLogo} alt="" />
          <p>Welcome Back!</p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mail-input" style={{ marginTop: "3vw" }}>
            <input
              placeholder="Enter your Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
            <button type="submit" className="button-click">
              Continue
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LogIn;
