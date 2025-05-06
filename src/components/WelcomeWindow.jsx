import { useRef } from "react";
import { useGlobalContext } from "../context/context";
import { FaTimes } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { FaRegLaugh } from "react-icons/fa";
import Draggable from "react-draggable";

const WelcomeWindow = () => {
  const { isWelcomeOpen, closeWelcome } = useGlobalContext();
  const nodeRef = useRef(null);

  return (
    <Draggable nodeRef={nodeRef} handle=".cursor-move">
      <div
        ref={nodeRef}
        className={`${
          isWelcomeOpen
            ? "show-window visible top-50 left-70"
            : "show-window collapse top-0 left-0"
        }`}
      >
        <div className="bg-gray-200 border-blue-400 border-2 rounded-md drop-shadow-lg drop-shadow-indigo-500/100">
          <div className="flex flex-row justify-between items-center rounded-md cursor-move ml-1 mr-1">
            <div className="text-black flex flex-row items-center">
              <FaRegLaugh className="ml-1" />
              <h3 className="ml-1 font-minecraft">Welcome</h3>
            </div>
            <div className="mt-1 mr-1">
              <button
                className="bg-blue-400 h-4 mr-1 rounded-sm cursor-pointer transition duration-300 ease-in-out hover:scale-110 hover:bg-amber-400"
                onClick={closeWelcome}
              >
                <FaMinus />
              </button>
              <button
                className="bg-blue-400 rounded-sm cursor-pointer transition duration-300 ease-in-out hover:scale-110 hover:bg-red-700"
                onClick={closeWelcome}
              >
                <FaTimes />
              </button>
            </div>
          </div>
          <div className="text-xl bg-gray-700 p-2 border-blue-400 border-2 m-1 -mt-0.5 rounded-sm">
            <p>
              Hello! My name is Joshua Torres, a developer based in Los Angeles,
              California.
            </p>
            <br />
            <p>Welcome to my small corner of the internet!</p>
            <p>
              Here, you can find infromation about me, my intrests, and any
              projects I've made/ am making.
            </p>
            <br />
            <p>
              This site will look best on a desktop browser, but you should be
              able to access the content on mobile.
            </p>
            <p>Thanks for checking me out and stopping by :D</p>
          </div>
        </div>
      </div>
    </Draggable>
  );
};

export default WelcomeWindow;
