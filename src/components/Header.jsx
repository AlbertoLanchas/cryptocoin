import React from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";

const Header = () => {
  return (
    <nav className="header">
      <div className="header-left"></div>
      <Link className="header-logo" to="/">
        <img src="/logo.png" alt="Logo" />
      </Link>

      <div className="header-right">
        <Link className="header-link" to="/community">
          Comunidad
        </Link>
        <Link className="header-link" to="/blog">
          Blog
        </Link>
        <Link className="header-link" to="/contact">
          Contactanos
        </Link>
      </div>
    </nav>
  );
};

export default Header;
