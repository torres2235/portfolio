import { useRef } from "react";
import { useGlobalContext } from "../context/context";
import { Link } from "react-router-dom";
import Draggable from "react-draggable";

import { FaTimes } from "react-icons/fa";
import { socials } from "../data/links.jsx";

const LinksWindow = () => {
  const { isLinksOpen, closeLinks } = useGlobalContext();
  const nodeRef = useRef(null);

  return (
    <Draggable nodeRef={nodeRef} handle=".cursor-move">
      <div
        ref={nodeRef}
        className={`${
          isLinksOpen ? "modal-overlay show-modal" : "modal-overlay"
        }`}
      >
        <div className="bg-gray-500 border-black border-2 h-auto w-2/5">
          <div className="flex flex-row justify-between bg-gray-400 cursor-move">
            <h3>My Links</h3>
            <button className="bg-red-600" onClick={closeLinks}>
              <FaTimes></FaTimes>
            </button>
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
