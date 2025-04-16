import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

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
    icon: <FaLinkedin />,
  },
  {
    id: 2,
    url: "https://github.com/torres2235",
    icon: <FaGithub />,
  },
];
