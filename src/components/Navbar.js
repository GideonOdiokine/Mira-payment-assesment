import React from "react";
import "./styles/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Blog App</h1>
      <div className="links">
        <a href="/">Home </a>
        <a href="/create">New Blog </a>
      </div>
    </nav>
  );
};

export default Navbar;
