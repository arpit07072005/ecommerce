import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import authService from "../appwrite/auth_service"


const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.password) {
      setError("All fields are required.");
      return;
    }

    try {
      const user = await authService.createAccount(formData);
      console.log("Account created:", user);
      navigate('/login'); // Replace '/dashboard' with your actual route
    } catch (err) {
      console.error("Signup error:", err.message);
      setError("Signup failed. Please try again.");
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-form-box">
        <h2 className="signup-heading">Sign Up</h2>
        
        <form onSubmit={handleSubmit} className="signup-form">
          {error && <div className="error-text">{error}</div>}
          
          <div className="form-field">
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              onChange={handleChange}
            />
          </div>

          <div className="form-field">
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              onChange={handleChange}
            />
          </div>

          <div className="form-field">
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Create a password"
              onChange={handleChange}
            />
          </div>

          <button type="submit" className="signup-button">
            Create Account
          </button>
        </form>

        <p className="signup-footer">
          Already have an account? <Link to="/login" className="login-link">Login</Link>
        </p>
      </div>

      <div className="signup-image">
        <img src="./Red-Shopping-Cart-PNG-Photo.png" alt="Signup Banner" />
      </div>
    </div>
  );
};

export default Signup;
