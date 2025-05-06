import { useRef } from "react";
import { useGlobalContext } from "../context/context";
import { FaTimes } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { FaChild } from "react-icons/fa";
import Draggable from "react-draggable";

const AboutMeWindow = () => {
  const { isAboutOpen, closeAbout } = useGlobalContext();
  const nodeRef = useRef(null);

  return (
    <Draggable nodeRef={nodeRef} handle=".cursor-move">
      <div
        ref={nodeRef}
        className={`${
          isAboutOpen
            ? "show-window visible top-80 left-100"
            : "show-window collapse top-0 left-0"
        }`}
      >
        <div className="bg-gray-200 border-blue-400 border-2 rounded-md drop-shadow-lg drop-shadow-indigo-500/100">
          <div className="flex flex-row justify-between items-center rounded-md cursor-move ml-1 mr-1">
            <div className="text-black flex flex-row items-center">
              <FaChild className="ml-1" />
              <h3 className="ml-1 font-minecraft">About Me</h3>
            </div>
            <div className="mt-1 mr-1">
              <button
                className="bg-blue-400 h-4 mr-1 rounded-sm cursor-pointer transition duration-300 ease-in-out hover:scale-110 hover:bg-amber-400"
                onClick={closeAbout}
              >
                <FaMinus />
              </button>
              <button
                className="bg-blue-400 rounded-sm cursor-pointer transition duration-300 ease-in-out hover:scale-110 hover:bg-red-700"
                onClick={closeAbout}
              >
                <FaTimes />
              </button>
            </div>
          </div>
          <div className="text-xl bg-gray-700 p-2 border-blue-400 border-2 m-1 -mt-0.5 rounded-sm">
            <p>test text</p>
          </div>
        </div>
      </div>
    </Draggable>
  );
};

export default AboutMeWindow;
