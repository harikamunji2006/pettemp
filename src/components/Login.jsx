import React, { useState } from "react";
import axios from "axios";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8080/api/auth/login", formData);
      alert("Login successful!");
      console.log(res.data);

      // Save token to localStorage
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("userType", res.data.userType);

      // Redirect based on user type
      if (res.data.userType === "adopter") {
        window.location.href = "/adopter-dashboard";
      } else {
        window.location.href = "/shelter-dashboard";
      }
    } catch (err) {
      console.error(err);
      alert("Invalid email or password");
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" placeholder="Email" onChange={handleChange} />
        <input type="password" name="password" placeholder="Password" onChange={handleChange} />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
