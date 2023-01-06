import React, { useState } from "react";
import { ReactComponent as MenuIcon } from "../assets/icons/menu.svg";
import logo from "../assets/cryptologo.jpg";
import "../styles/Header.scss";

const Header = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () =>
    setIsExpanded((prevIsExpanded) => !prevIsExpanded);

  return (
    <>
      <div className="header-container">
        <div>
          <img className="logo" src={logo} alt="" />
        </div>
        <div className="menu">
          <div className="menu-links">
            <a
              href="https://crypto-graphics-98bcb.firebaseapp.com/"
              target="_blank"
              rel="noreferrer"
            >
              Prices
            </a>
            <a href="/">Roadmap</a>
            <a href="/">Wallet</a>
            <a href="/">Contact</a>
          </div>
        </div>
        <div className="wallet-btn">
          <button className="primary">Enter App</button>
        </div>
        <button className="hamburger" onClick={toggleExpanded}>
          <MenuIcon />
        </button>
      </div>
      {isExpanded && (
        <div className="menu-overlay">
          <div className="menu-links">
            <a href="https://crypto-graphics-98bcb.firebaseapp.com/">Prices</a>
            <a href="/">Roadmap</a>
            <a href="/">Wallet</a>
            <a href="/">Contact</a>
            <a href="/">Enter App</a>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
