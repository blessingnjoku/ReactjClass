import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import Navbar from "../../components/Navbar";

const Signup = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [Signup, setSignup] = useState(false);
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      setSignup(true);
    }
  });
  const handleInputValue = (e) => {
    const { name, value } = e.target;
    setData((prevstate) => ({ ...prevstate, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (data.email !== "" && data.password !== "") {
      localStorage.setItem("user", JSON.stringify({ data }));
      setSignup(true);
    } else {
      alert("common go back");
    }
    // console.log(data);
  };

  return Signup ? (
    <Navigate to="/profile" />
  ) : (
    <div>
      <Navbar />
      <div style={{ margin: "auto", width: "200px", height: "200px" }}>
        <form onSubmit={handleFormSubmit}>
          <label id="email">Email:</label> <br></br>
          <input
            id="email"
            type="email"
            placeholder="enter email"
            value={data.email}
            onChange={handleInputValue}
            name="email"
          />
          <br></br>
          <label id="password">Password:</label>
          <br></br>
          <input
            id="password"
            type="password"
            placeholder="enter password"
            value={data.password}
            onChange={handleInputValue}
            name="password"
          />
          <button style={{ marginTop: "15px" }}>Signup</button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
