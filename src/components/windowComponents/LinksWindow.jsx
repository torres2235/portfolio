import { useRef } from "react";
import { useGlobalContext } from "../../context/context.jsx";
import { Link } from "react-router-dom";
import Draggable from "react-draggable";
import { FaProjectDiagram } from "react-icons/fa";

import Window from "../Window.jsx";
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
            ? "show-window visible top-20 left-400"
            : "show-window collapse top-0 left-0"
        }`}
      >
        <Window
          closeContext={closeLinks}
          icon={<FaProjectDiagram className="ml-1" />}
          windowName={"Links"}
        >
          <ul className="flex gap-10">
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
        </Window>
      </div>
    </Draggable>
  );
};

export default LinksWindow;
