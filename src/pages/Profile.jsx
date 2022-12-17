import React, { useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import Navbar from "../components/Navbar";

const Profile = () => {
  const [login, setLogin] = useState(true);
  const user = JSON.parse(localStorage.getItem("user"));
  useEffect(() => {
    if (!user) {
      setLogin(false);
    }
  });
  return login ? (
    <div>
      <Navbar />
      <h1>Your Profile</h1>
      <h1>welcome </h1>
      <p>your email is: {user.email}</p>
      <p>
        <Link to="/signout">Signout</Link>
      </p>
    </div>
  ) : (
    <Navigate to="/signup" />
  );
};

export default Profile;
