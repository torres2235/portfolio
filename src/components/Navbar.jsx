import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaWifi } from "react-icons/fa";
import { FaBatteryThreeQuarters } from "react-icons/fa";
import { HiSpeakerWave } from "react-icons/hi2";
import { HiSpeakerXMark } from "react-icons/hi2";
import { useGlobalContext } from "../context/context";

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
  const { isWelcomeOpen, isAboutOpen, isProjectsOpen } = useGlobalContext();

  return (
    <nav>
      <div className="flex justify-between bg-black border-b-blue-500 border-b-2 pt-0.5 pb-0.5 pr-5 pl-5">
        <div className="flex flex-row items-center gap">
          <img
            src={noodles}
            style={{ width: "3rem" }}
            alt="logo"
            className="hover:animate-spin"
          />
          <div className={`${isWelcomeOpen ? "visible" : "collapse"}`}>
            <p className="text-white">Welcome</p>
          </div>
          <div className={`${isAboutOpen ? "visible" : "collapse"}`}>
            <p className="text-white">About Me</p>
          </div>
          <div className={`${isProjectsOpen ? "visible" : "collapse"}`}>
            <p className="text-white">Projects</p>
          </div>
        </div>

        <div className="flex content-end justify-center items-center gap-3">
          <div className="flex items-center justify-between gap-5 bg-gray-800 rounded-full h-8 pl-4 pr-4 font-mono">
            <div className="flex justify-evenly gap-1">
              <FaWifi />
              <FaBatteryThreeQuarters />
              <HiSpeakerWave />
            </div>
            <div id="clock" />
          </div>

          <button>
            <img
              src={sun}
              style={{ width: "1.5rem" }}
              alt="sun"
              className="hover:animate-pulse"
            />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
