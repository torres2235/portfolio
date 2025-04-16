import React from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

import { links, socials } from "../data/links";
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
            {links.map((link) => {
              const { id, url, text } = link;
              return (
                <li key={id}>
                  <Link to={url}>{text}</Link>
                </li>
              );
            })}
          </ul>
        </div>
        <ul className="social-icons">
          {socials.map((link) => {
            const { id, url, icon } = link;
            return (
              <li key={id}>
                <Link to={url} target="_blank" rel="noopener noreferrer">
                  {icon}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
