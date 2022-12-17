import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  return (
    <div className="nav">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          {/* <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li> */}
        </ul>

        {user ? (
          <>
            <button>
              <Link to="/profile">Profile</Link>
            </button>
          </>
        ) : (
          <>
            <button type="button">
              <Link to="/signup">Signup</Link>
            </button>
          </>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
