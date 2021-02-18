/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const NavBar = () => {
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
          Cart: <span>0</span>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
