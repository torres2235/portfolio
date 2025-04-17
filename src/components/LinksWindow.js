import { useRef } from "react";
import { useGlobalContext } from "../context/context";
import { Link } from "react-router-dom";
import Draggable from "react-draggable";

import { FaTimes } from "react-icons/fa";
import { socials } from "../data/links";

const LinksWindow = () => {
  const { isLinksOpen, closeLinks } = useGlobalContext();
  const nodeRef = useRef(null);

  return (
    <Draggable nodeRef={nodeRef} handle=".moveable">
      <div
        ref={nodeRef}
        className={`${
          isLinksOpen ? "modal-overlay show-modal" : "modal-overlay"
        }`}
      >
        <div className="modal-container">
          <div className="moveable">
            <h3>My Links</h3>
            <button className="close-modal-btn" onClick={closeLinks}>
              <FaTimes></FaTimes>
            </button>
          </div>
          <ul className="social-icons">
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
          </ul>
        </div>
      </div>
    </Draggable>
  );
};

export default LinksWindow;
