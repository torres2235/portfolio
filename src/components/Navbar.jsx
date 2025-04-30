import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

import { links, socials } from "../data/links";
import noodles from "../assets/icons/noodles2.jpg";
import moon from "../assets/icons/moon.png";
import sun from "../assets/icons/sun.png";

function updateTime() {
  var currentTime = new Date();
  var hours = currentTime.getHours();
  var minutes = currentTime.getMinutes();
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  var t_str = hours + ":" + minutes + " ";
  if (hours > 11) {
    t_str += "PM";
  } else {
    t_str += "AM";
  }
  document.getElementById("clock").innerHTML = t_str;
}
setInterval(updateTime, 1000);

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  return (
    <nav>
      <div className="flex justify-between bg-black border-b-fuchsia-900 border-b-2 p-0.5">
        <div className="nav-header">
          <img
            src={noodles}
            style={{ width: "3rem" }}
            alt="logo"
            className="rounded-full"
          />
        </div>
        <div className="flex justify-center items-center gap-3">
          <div
            id="clock"
            className="flex items-center bg-gray-800 rounded-full h-6 pl-2 pr-2 font-mono"
          ></div>

          <button
            className="nav-toggle"
            onClick={() => setShowLinks(!showLinks)}
          >
            <img src={moon} style={{ width: "1.5rem" }} alt="moon" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
