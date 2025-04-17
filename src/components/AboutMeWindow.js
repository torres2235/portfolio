import { useRef } from "react";
import { useGlobalContext } from "../context/context";
import { FaTimes } from "react-icons/fa";
import Draggable from "react-draggable";

const AboutMeWindow = () => {
  const { isAboutOpen, closeAbout } = useGlobalContext();
  const nodeRef = useRef(null);

  return (
    <Draggable nodeRef={nodeRef} handle=".moveable">
      <div
        ref={nodeRef}
        className={`${
          isAboutOpen ? "modal-overlay show-modal" : "modal-overlay"
        }`}
      >
        <div className="modal-container">
          <div className="moveable">
            <h3>About Me</h3>
            <button className="close-modal-btn" onClick={closeAbout}>
              <FaTimes></FaTimes>
            </button>
          </div>

          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro
            corrupti laudantium temporibus maxime dolores adipisci excepturi
            eaque iure veritatis cumque?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro
            corrupti laudantium temporibus maxime dolores adipisci excepturi
            eaque iure veritatis cumque?
          </p>
        </div>
      </div>
    </Draggable>
  );
};

export default AboutMeWindow;
