import { useRef } from "react";
import { useGlobalContext } from "../context/context";
import { FaTimes } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { IoChatbubble } from "react-icons/io5";
import Draggable from "react-draggable";

const ContactWindow = () => {
  const { isContactOpen, closeContact } = useGlobalContext();
  const nodeRef = useRef(null);

  return (
    <Draggable nodeRef={nodeRef} handle=".cursor-move">
      <div
        ref={nodeRef}
        className={`${isContactOpen ? "show-window" : "collapse"}`}
      >
        <div className="bg-gray-500 border-blue-400 border-2 rounded-md drop-shadow-lg drop-shadow-indigo-500/100">
          <div className="flex flex-row justify-between items-center bg-gray-200 border-blue-400 border-2 rounded-md cursor-move">
            <div className="flex flex-row items-center">
              <IoChatbubble className="text-black ml-1" />
              <h3 className="ml-1 text-black font-minecraft">Contact Me!</h3>
            </div>
            <div className="mt-1 mr-1">
              <button
                className="bg-blue-400 h-4 mr-1 rounded-sm"
                onClick={closeContact}
              >
                <FaMinus />
              </button>
              <button className="bg-blue-400 rounded-sm" onClick={closeContact}>
                <FaTimes />
              </button>
            </div>
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
