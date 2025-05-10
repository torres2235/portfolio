import React, { useState, useRef, useEffect } from "react";
import { FaWifi } from "react-icons/fa";
import { FaBatteryThreeQuarters } from "react-icons/fa";
import { HiSpeakerWave } from "react-icons/hi2";
import { HiSpeakerXMark } from "react-icons/hi2";
import { useGlobalContext } from "../context/context";

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
  const {
    isWelcomeOpen,
    isAboutOpen,
    isProjectsOpen,
    isLinksOpen,
    isContactOpen,
    isCreditsOpen,
  } = useGlobalContext();

  return (
    <nav>
      <div className="flex justify-between bg-black border-b-blue-500 border-b-2 pt-0.5 pb-0.5 pr-5 pl-5">
        <div className="flex flex-row items-center gap-2">
          <img
            src={noodles}
            style={{ width: "3rem" }}
            alt="logo"
            className="hover:animate-spin"
          />

          {isWelcomeOpen && (
            <div className="rounded-lg cursor-pointer transition ease-in-out duration-300 hover:scale-110 hover:border-2 hover:border-blue-400">
              <p className="text-white bg-gray-700 rounded-md p-1">Welcome</p>
            </div>
          )}

          {isAboutOpen && (
            <div className="rounded-lg cursor-pointer transition ease-in-out duration-300 hover:scale-110 hover:border-2 hover:border-blue-400">
              <p className="text-white bg-gray-700 rounded-md p-1">About Me</p>
            </div>
          )}

          {isProjectsOpen && (
            <div className="rounded-lg cursor-pointer transition ease-in-out duration-300 hover:scale-110 hover:border-2 hover:border-blue-400">
              <p className="text-white bg-gray-700 rounded-md p-1">Projects</p>
            </div>
          )}

          {isLinksOpen && (
            <div className="rounded-lg cursor-pointer transition ease-in-out duration-300 hover:scale-110 hover:border-2 hover:border-blue-400">
              <p className="text-white bg-gray-700 rounded-md p-1">Links</p>
            </div>
          )}

          {isContactOpen && (
            <div className="rounded-lg cursor-pointer transition ease-in-out duration-300 hover:scale-110 hover:border-2 hover:border-blue-400">
              <p className="text-white bg-gray-700 rounded-md p-1">Contact</p>
            </div>
          )}

          {isCreditsOpen && (
            <div className="rounded-lg cursor-pointer transition ease-in-out duration-300 hover:scale-110 hover:border-2 hover:border-blue-400">
              <p className="text-white bg-gray-700 rounded-md p-1">Credits</p>
            </div>
          )}
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
