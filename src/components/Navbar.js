import React from "react";
import { Link } from "react-router-dom";
import "./styles/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/">
        <h2>CRUD APP</h2>
      </Link>
      <div className="links">
        <Link to="/">Home </Link>
        <Link to="/create">New Blog </Link>
      </div>
    </nav>
  );
};

export default Navbar;
