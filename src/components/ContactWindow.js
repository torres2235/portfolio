import { useRef } from "react";
import { useGlobalContext } from "../context/context";
import { FaTimes } from "react-icons/fa";
import Draggable from "react-draggable";

const ContactWindow = () => {
  const { isContactOpen, closeContact } = useGlobalContext();
  const nodeRef = useRef(null);

  return (
    <Draggable nodeRef={nodeRef} handle=".moveable">
      <div
        ref={nodeRef}
        className={`${
          isContactOpen ? "modal-overlay show-modal" : "modal-overlay"
        }`}
      >
        <div className="modal-container">
          <div className="moveable">
            <h3>Contact Me!</h3>
            <button className="close-modal-btn" onClick={closeContact}>
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

export default ContactWindow;
