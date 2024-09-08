import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import "../auth/singin.css";
import { icons } from "../../assets/icons";
import { images } from "../../assets/images";

const Sign_in = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const mockEmail = "user@example.com";
    const mockPassword = "password123";

    if (email === mockEmail && password === mockPassword) {
      navigate("/");
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <div className="sign-in-container">
      <div className="sign-in-wrapper">
        <img src={icons?.LogInImage} alt="" />
      </div>
      <div className="sign-in-wrapper1">
        <div>
          <img src={images?.mainLogo} alt="" />
          <p>Login via</p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mail-input" style={{ marginTop: "10vw" }}>
            <input
              type="email"
              placeholder="Enter your e-mail or mobile number"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <Link to={"/login"}>
            <button type="submit" className="button-click">
              Continue
            </button>
          </Link>
        </form>
      </div>
      {/* <h2>Sign In</h2> */}
      {/* <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form> */}
    </div>
  );
};

export default Sign_in;
