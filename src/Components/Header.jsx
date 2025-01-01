import React from 'react';
import "./Header.css";
import { Link } from 'react-router-dom';

export const Header = ({ cart }) => {
  return (
    <div className="navbar">
      <div className="logo">Food Court</div>
      <ul>
      <li>
          <Link to={"/"}>Welcome</Link>
        </li>
        <li>
          <Link to={"/Home"}>Home</Link>
        </li>
        <li>
          <Link to={"/Cart"}>
            <span className="cart-count">{cart.length}</span> View Cart
          </Link>
        </li>
        <li>
          <Link to={"/About"}>About Us</Link> 
        </li>
        
      </ul>
    </div>
  );
};
