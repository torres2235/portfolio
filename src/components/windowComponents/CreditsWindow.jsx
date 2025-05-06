import { useRef } from "react";
import { useGlobalContext } from "../../context/context";
import { FaTags } from "react-icons/fa";
import Draggable from "react-draggable";

import Window from "../Window";

const CreditsWindow = () => {
  const { isCreditsOpen, closeCredits } = useGlobalContext();
  const nodeRef = useRef(null);

  return (
    <Draggable nodeRef={nodeRef} handle=".cursor-move">
      <div
        ref={nodeRef}
        className={`${
          isCreditsOpen
            ? "show-window visible top-30 right-100 w-1/3"
            : "show-window collapse top-0 left-0"
        }`}
      >
        <Window
          closeContext={closeCredits}
          icon={<FaTags className="ml-1" />}
          windowName={"Credits"}
        >
          <div>
            <p className="underline">Desktop Icons</p>
            <a
              href="https://aconfuseddragon.itch.io/windows-95-plus-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              aconfuseddragon's 𝕎𝕚𝕟𝕕𝕠𝕨𝕤 𝟡𝟝 +𝓟𝓛𝓤𝓢+ Icon Pack #1
            </a>
          </div>
          <div className="flex flex-col">
            <p className="underline">Website Inspiration/ References</p>
            <a
              href="https://pollygon.dev/index.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              Polygon.dev
            </a>
            <a
              href="https://www.sharyap.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Shar's Desktop
            </a>
          </div>
        </Window>
      </div>
    </Draggable>
  );
};

export default CreditsWindow;
