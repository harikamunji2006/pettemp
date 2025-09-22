import React, { useState } from "react";
import axios from "axios";

const Signup = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    organizationName: "",
    userType: "adopter" // default
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8080/api/auth/signup", formData);
      alert("Signup successful!");
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
      alert("Signup failed. Please try again.");
    }
  };

  return (
    <div className="signup-container">
      <h2>Signup</h2>
      <form onSubmit={handleSubmit}>
        <select name="userType" value={formData.userType} onChange={handleChange}>
          <option value="adopter">Adopter</option>
          <option value="shelter">Shelter</option>
        </select>

        {formData.userType === "adopter" ? (
          <>
            <input type="text" name="firstName" placeholder="First Name" onChange={handleChange} />
            <input type="text" name="lastName" placeholder="Last Name" onChange={handleChange} />
          </>
        ) : (
          <input type="text" name="organizationName" placeholder="Organization Name" onChange={handleChange} />
        )}

        <input type="email" name="email" placeholder="Email" onChange={handleChange} />
        <input type="password" name="password" placeholder="Password" onChange={handleChange} />
        <input type="text" name="phone" placeholder="Phone" onChange={handleChange} />
        <input type="text" name="address" placeholder="Address" onChange={handleChange} />
        <input type="text" name="city" placeholder="City" onChange={handleChange} />
        <input type="text" name="state" placeholder="State" onChange={handleChange} />
        <input type="text" name="zipCode" placeholder="Zip Code" onChange={handleChange} />

        <button type="submit">Signup</button>
      </form>
    </div>
  );
};

export default Signup;
