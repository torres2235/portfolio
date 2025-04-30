import { useRef } from "react";
import { useGlobalContext } from "../context/context";
import { FaTimes } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { FaProjectDiagram } from "react-icons/fa";
import { Link } from "react-router-dom";
import Draggable from "react-draggable";

import { socials } from "../data/links.jsx";

const LinksWindow = () => {
  const { isLinksOpen, closeLinks } = useGlobalContext();
  const nodeRef = useRef(null);

  return (
    <Draggable nodeRef={nodeRef} handle=".cursor-move">
      <div
        ref={nodeRef}
        className={`${
          isLinksOpen ? "show-window visible" : "show-window collapse"
        }`}
      >
        <div className="bg-gray-500 border-blue-400 border-2 rounded-md drop-shadow-lg drop-shadow-indigo-500/100">
          <div className="flex flex-row justify-between items-center bg-gray-200 border-blue-400 border-2 rounded-md cursor-move">
            <div className="flex flex-row items-center">
              <FaProjectDiagram className="text-black ml-1" />
              <h3 className="ml-1 text-black font-minecraft">Links</h3>
            </div>
            <div className="mt-1 mr-1">
              <button
                className="bg-blue-400 h-4 mr-1 rounded-sm cursor-pointer"
                onClick={closeLinks}
              >
                <FaMinus />
              </button>
              <button
                className="bg-blue-400 rounded-sm cursor-pointer"
                onClick={closeLinks}
              >
                <FaTimes />
              </button>
            </div>
          </div>
          <ul className="social-icons p-4">
            {socials.map((link) => {
              const { id, url, text, icon } = link;
              return (
                <li key={id}>
                  <Link to={url} target="_blank" rel="noopener noreferrer">
                    {icon}
                    {text}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </Draggable>
  );
};

export default LinksWindow;
