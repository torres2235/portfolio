import React from "react";
import { FaLinkedin, FaGithub, FaInstagram, FaSteam } from "react-icons/fa";

export const links = [
  {
    id: 1,
    url: "/",
    text: "Home",
  },
  {
    id: 2,
    url: "/about",
    text: "About",
  },
  {
    id: 3,
    url: "/contact",
    text: "Contact Me",
  },
];

export const socials = [
  {
    id: 1,
    url: "https://www.linkedin.com/in/torres-joshua/",
    text: "LinkedIn",
    icon: <FaLinkedin size={70} />,
  },
  {
    id: 2,
    url: "https://github.com/torres2235",
    text: "GitHub",
    icon: <FaGithub size={70} />,
  },
  {
    id: 3,
    url: "https://www.instagram.com/torresdejoshua/",
    text: "Instagram",
    icon: <FaInstagram size={70} />,
  },
  {
    id: 4,
    url: "https://steamcommunity.com/profiles/76561198044571990/",
    text: "Steam",
    icon: <FaSteam size={70} />,
  },
];
