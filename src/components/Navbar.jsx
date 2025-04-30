import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaWifi } from "react-icons/fa";
import { FaBatteryThreeQuarters } from "react-icons/fa";
import { HiSpeakerWave } from "react-icons/hi2";
import { HiSpeakerXMark } from "react-icons/hi2";

import { links, socials } from "../data/links";
import noodles from "../assets/icons/noodles.png";
import moon from "../assets/icons/moon.png";
import sun from "../assets/icons/sun.png";

function updateTime() {
  var currentTime = new Date();
  var hours = currentTime.getHours();
  var minutes = currentTime.getMinutes();
  var secs = currentTime.getSeconds();
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  var t_str = " ";
  if (secs % 2 === 0) {
    t_str = hours + " " + minutes + " ";
  } else {
    t_str = hours + ":" + minutes + " ";
  }

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
      <div className="flex justify-between bg-black border-b-fuchsia-900 border-b-2 pt-0.5 pb-0.5 pr-5 pl-5">
        <div className="nav-header">
          <img
            src={noodles}
            style={{ width: "3rem" }}
            alt="logo"
            className="hover:animate-spin"
          />
        </div>

        <div className="flex content-end justify-center items-center gap-3">
          <div className="flex items-center justify-between gap-5 bg-gray-800 rounded-full h-8 pl-4 pr-4 font-mono">
            <div className="flex justify-evenly gap-1">
              <FaWifi />
              <FaBatteryThreeQuarters />
              <HiSpeakerWave />
            </div>
            <div id="clock"></div>
          </div>

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
