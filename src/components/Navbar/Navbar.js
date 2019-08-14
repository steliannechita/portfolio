import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar" id="navbar">
      <a href="#navbar">Home</a>
      <a href="#bio">Bio</a>
      <a href="#skills">Skills</a>
      <a href="#projects">Projects</a>
      <a href="#contact">Contact</a>
    </div>
  );
}
export default Navbar;
