/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

import "./NavBar.css";

const NavBar = ({ basketNumber }) => {
  return (
    <nav>
      <h1>My Shop</h1>
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          Cart: <span>{basketNumber}</span>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
