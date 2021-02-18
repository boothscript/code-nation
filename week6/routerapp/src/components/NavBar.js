/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";

import "./NavBar.css";

const NavBar = ({ basketNumber }) => {
  return (
    <nav>
      <h1>My Shop</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/About">About</Link>
        </li>
        <li>
          Cart: <span>{basketNumber}</span>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
