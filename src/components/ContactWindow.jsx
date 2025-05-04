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
        className={`${
          isContactOpen
            ? "show-window visible top-70 left-80"
            : "show-window collapse"
        }`}
      >
        <div className="bg-gray-200 border-blue-400 border-2 rounded-md drop-shadow-lg drop-shadow-indigo-500/100">
          <div className="flex flex-row justify-between items-center rounded-md cursor-move ml-1 mr-1">
            <div className="text-black flex flex-row items-center">
              <IoChatbubble className="ml-1" />
              <h3 className="ml-1 font-minecraft">Contact Me!</h3>
            </div>
            <div className="mt-1 mr-1">
              <button
                className="bg-blue-400 h-4 mr-1 rounded-sm cursor-pointer transition duration-300 ease-in-out hover:scale-110 hover:bg-amber-400"
                onClick={closeContact}
              >
                <FaMinus />
              </button>
              <button
                className="bg-blue-400 rounded-sm cursor-pointer transition duration-300 ease-in-out hover:scale-110 hover:bg-red-700"
                onClick={closeContact}
              >
                <FaTimes />
              </button>
            </div>
          </div>
          <div className="text-xl bg-gray-700 border-blue-400 border-2 m-1 -mt-0.5 rounded-sm p-2 max-h-36 overflow-y-auto">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro
              corrupti laudantium temporibus maxime dolores adipisci excepturi
              eaque iure veritatis cumque?
            </p>
            <br />
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro
              corrupti laudantium temporibus maxime dolores adipisci excepturi
              eaque iure veritatis cumque?
            </p>
            <br />
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro
              corrupti laudantium temporibus maxime dolores adipisci excepturi
              eaque iure veritatis cumque?
            </p>
            <br />
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro
              corrupti laudantium temporibus maxime dolores adipisci excepturi
              eaque iure veritatis cumque?
            </p>
            <br />
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
