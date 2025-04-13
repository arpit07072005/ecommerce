import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import authService from "../appwrite/auth_service";

const Loginpage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const session = await authService.login({ email, password });
      console.log("Login success:", session);
      alert("Login successful!");
      navigate("/home");
    } catch (error) {
      console.error("Login failed:", error.message);
      alert("Login failed: " + error.message);
    }
  };

  return (
    <div className="cartimgcont">
      <div className="logincontainer">
        <h2>Login</h2>
        <form className="form" onSubmit={handleLogin}>
          <div className="group">
            <label className="label">Email</label>
            <input
              type="email"
              value={email}
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
              className="input"
              required
            />
          </div>
          <div className="group">
            <label className="label">Password</label>
            <input
              type="password"
              value={password}
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value)}
              className="input"
              required
            />
          </div>
          <button className="loginbutton">Login</button>
          <p>
            Don't have an account? <a href="/signup">Sign Up</a>
          </p>
        </form>
      </div>
      <div className="cartimg">
        <img src="Red-Shopping-Cart-PNG-Photo.png" alt="" />
      </div>
    </div>
  );
};

export default Loginpage;
