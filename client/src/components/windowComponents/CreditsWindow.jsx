import { useRef } from "react";
import { useGlobalContext } from "../../context/context";
import { FaTags } from "react-icons/fa";
import Draggable from "react-draggable";

import Window from "../Window";

const CreditsWindow = ({ zIndex, parentClickHandler }) => {
  const { closeCredits, isCreditsVisible, toggleCreditsVisible } =
    useGlobalContext();
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
        className={`absolute top-30 right-100 w-1/3 ${
          isCreditsVisible ? "visible" : "hidden"
        }`}
        style={{ zIndex: zIndex }}
      >
        <Window
          closeContext={closeCredits}
          toggleContext={toggleCreditsVisible}
          icon={<FaTags className="ml-1" />}
          windowName={"Credits"}
        >
          <div className="flex flex-col">
            <p className="underline">Icons</p>
            <a
              href="https://aconfuseddragon.itch.io/windows-95-plus-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              aconfuseddragon's 𝕎𝕚𝕟𝕕𝕠𝕨𝕤 𝟡𝟝 +𝓟𝓛𝓤𝓢+ Icon Pack #1 & #2
            </a>
            <a
              href="https://react-icons.github.io/react-icons/"
              target="_blank"
              rel="noopener noreferrer"
            >
              React Icons
            </a>
            <a
              href="https://www.flaticon.com/free-icon/noodles_7534440?term=noodle&page=1&position=34&origin=search&related_id=7534440"
              target="_blank"
              rel="noopener noreferrer"
            >
              Noodles Icon
            </a>
            <a
              href="https://www.flaticon.com/free-icon/sun_12414617?term=pixel+sun&page=4&position=7&origin=search&related_id=12414617"
              target="_blank"
              rel="noopener noreferrer"
            >
              Pixel Sun Icon
            </a>
            <a
              href="https://www.flaticon.com/free-icon/full-moon_12414720?term=pixel+moon&page=1&position=1&origin=search&related_id=12414720"
              target="_blank"
              rel="noopener noreferrer"
            >
              Pixel Moon Icon
            </a>
          </div>
          <div className="flex flex-col">
            <p className="underline">Website Inspiration/ References</p>
            <a
              href="https://pollygon.dev/index.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              Pollygon.dev
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
