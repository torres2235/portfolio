import { useRef } from "react";
import { useGlobalContext } from "../../context/context.jsx";
import { FaTimes } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { FaProjectDiagram } from "react-icons/fa";
import { Link } from "react-router-dom";
import Draggable from "react-draggable";

import { socials } from "../../data/links.jsx";

const LinksWindow = () => {
  const { isLinksOpen, closeLinks } = useGlobalContext();
  const nodeRef = useRef(null);

  return (
    <Draggable nodeRef={nodeRef} handle=".cursor-move">
      <div
        ref={nodeRef}
        className={`${
          isLinksOpen
            ? "show-window visible top-90 left-200"
            : "show-window collapse top-0 left-0"
        }`}
      >
        <div className="bg-gray-200 border-blue-400 border-2 rounded-md drop-shadow-lg drop-shadow-indigo-500/100">
          <div className="flex flex-row justify-between items-center rounded-md cursor-move ml-1 mr-1">
            <div className="text-black flex flex-row items-center">
              <FaProjectDiagram className="ml-1" />
              <h3 className="ml-1 font-minecraft">Links</h3>
            </div>
            <div className="mt-1 mr-1">
              <button
                className="bg-blue-400 h-4 mr-1 rounded-sm cursor-pointer transition duration-300 ease-in-out hover:scale-110 hover:bg-amber-400"
                onClick={closeLinks}
              >
                <FaMinus />
              </button>
              <button
                className="bg-blue-400 rounded-sm cursor-pointer transition duration-300 ease-in-out hover:scale-110 hover:bg-red-700"
                onClick={closeLinks}
              >
                <FaTimes />
              </button>
            </div>
          </div>
          <ul className="flex social-icons text-xl bg-gray-700 p-2 border-blue-400 border-2 m-1 -mt-0.5 rounded-sm gap-10">
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
