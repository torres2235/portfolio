import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

import { links, socials } from "../data/links";
import noodles from "../assets/icons/noodles2.jpg";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  // useEffect(() => {
  //   // gets us position and size of our element
  //   const linksHeight = linksRef.current.getBoundingClientRect().height; // .height means we only extract the height
  //   if (showLinks) {
  //     linksContainerRef.current.style.height = `${linksHeight}px`;
  //   } else {
  //     linksContainerRef.current.style.height = "0px";
  //   }
  // }, [showLinks]);

  return (
    <nav>
      <div className="flex justify-between bg-black border-b-purple-950 border-b-2">
        <div className="nav-header">
          <img
            src={noodles}
            style={{ width: "4rem" }}
            alt="logo"
            className="rounded-full"
          />
        </div>
        {/* <div className="links-container" ref={linksContainerRef}>
          <ul className="flex flex-row" ref={linksRef}>
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
        <ul className="flex-column">
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
        </ul> */}
        <button className="nav-toggle" onClick={() => setShowLinks(!showLinks)}>
          <FaBars />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
