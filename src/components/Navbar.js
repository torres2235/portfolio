import React from "react";
import { Link } from "react-router-dom";
import { FaBars, FaLinkedin, FaGithub } from "react-icons/fa";

import logo from "../assets/logo.svg";

const Navbar = () => {
  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} style={{ width: "4rem" }} alt="logo" />
          <button className="nav-toggle">
            <FaBars />
          </button>
        </div>
        <div className="links Container show-container">
          <ul className="links">
            <li>
              <Link to="/">Projects</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact Me!</Link>
            </li>
          </ul>
        </div>
        <ul className="social-icons">
          <li>
            <a href="https://www.linkedin.com/in/torres-joshua/">
              <FaLinkedin />
            </a>
          </li>
          <li>
            <a href="https://github.com/torres2235">
              <FaGithub />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
