import React, { useState } from "react";
import "../App.css";
import { Navigate } from "react-router-dom";

const Login = () => {
  const [Cima, setCima] = useState({ email: "", password: "" });
  const [Loggin, setLoggin] = useState(false);

  const handleFormData = (e) => {
    const { name, value } = e.target;
    setCima((prevState) => ({ ...prevState, [name]: value }));
  };
  const formSubmit = (e) => {
    e.preventDefault();
    if (Cima.email != "" && Cima.password != "") {
        
      localStorage.setItem("user", JSON.stringify({ Cima }));
      setLoggin(true);
    } else {
      alert("Emal and password is required");
    }
  };

  return Loggin ? (
    <Navigate to="/profile" />
  ) : (
    <div className="form">
      <h1>Login</h1>
      <form onSubmit={formSubmit}>
        <label>Name: </label>
        <input type="text" />
        <label>Email: </label>
        <input
          type="email"
          name="email"
          value={Cima.email}
          placeholder="enter email"
          onChange={handleFormData}
        />
        <label>Password: </label>
        <input
          type="password"
          name="password"
          value={Cima.password}
          placeholder="enter password"
          onChange={handleFormData}
        />
        <button className="buttonform">Login</button>
      </form>
    </div>
  );
};

export default Login;
