import React from "react";
import { Navigate } from "react-router-dom";
const Signout = () => {
  localStorage.clear();
  return <Navigate to="/signup" />;
};

export default Signout;
