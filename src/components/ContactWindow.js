import { useRef } from "react";
import { useGlobalContext } from "../context/context";
import { FaTimes } from "react-icons/fa";
import Draggable from "react-draggable";

const ContactWindow = () => {
  const { isContactOpen, closeContact } = useGlobalContext();
  const nodeRef = useRef(null);

  return (
    <Draggable nodeRef={nodeRef} handle=".cursor-move">
      <div
        ref={nodeRef}
        className={`${
          isContactOpen ? "modal-overlay show-modal" : "modal-overlay"
        }`}
      >
        <div className="bg-gray-500 border-black border-2 h-auto w-2/5">
          <div className="flex flex-row justify-between bg-gray-400 cursor-move ">
            <h3>Contact Me!</h3>
            <button className="bg-red-600" onClick={closeContact}>
              <FaTimes></FaTimes>
            </button>
          </div>
          <div className="p-4">
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
      </div>
    </Draggable>
  );
};

export default ContactWindow;
