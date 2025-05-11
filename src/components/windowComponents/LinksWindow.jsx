import { useRef } from "react";
import { useGlobalContext } from "../../context/context.jsx";
import { Link } from "react-router-dom";
import Draggable from "react-draggable";
import { FaProjectDiagram } from "react-icons/fa";

import Window from "../Window.jsx";
import { socials } from "../../data/links.jsx";

const LinksWindow = ({ zIndex, parentClickHandler }) => {
  const { closeLinks, isLinksVisible, toggleLinksVisible } = useGlobalContext();
  const nodeRef = useRef(null);

  function clickHandler() {
    parentClickHandler();
  }

  return (
    <Draggable
      nodeRef={nodeRef}
      handle=".cursor-move"
      onMouseDown={clickHandler}
    >
      <div
        ref={nodeRef}
        className={`absolute top-20 right-50 z-auto ${
          isLinksVisible ? "visible" : "hidden"
        }`}
        style={{ zIndex: zIndex }}
      >
        <Window
          closeContext={closeLinks}
          toggleContext={toggleLinksVisible}
          icon={<FaProjectDiagram className="ml-1" />}
          windowName={"Links"}
        >
          <ul className="grid grid-cols-1 gap-5">
            {socials.map((link) => {
              const { id, url, text, icon } = link;
              return (
                <li key={id}>
                  <Link
                    to={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex justify-start items-center gap-1"
                  >
                    {icon}
                    {text}
                  </Link>
                </li>
              );
            })}
          </ul>
        </Window>
      </div>
    </Draggable>
  );
};

export default LinksWindow;
