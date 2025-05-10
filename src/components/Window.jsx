import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";

const Window = ({ closeContext, icon, windowName, children }) => {
  const [isVisible, setIsVisible] = useState(true);

  const toggleVisible = () => {
    setIsVisible(!isVisible);
  };

  return (
    <>
      {isVisible && (
        <div className="flex flex-col bg-gray-200 border-blue-400 border-2 rounded-md drop-shadow-lg drop-shadow-indigo-500/100 size-full">
          <div className="flex flex-row justify-between items-center rounded-md cursor-move ml-1 mr-1">
            <div className="text-black flex flex-row items-center">
              {icon}
              <h3 className="ml-1">{windowName}</h3>
            </div>
            <div className="mt-1 mr-1">
              <button
                className="bg-blue-400 h-4 mr-1 rounded-sm cursor-pointer transition duration-300 ease-in-out hover:scale-110 hover:bg-amber-400"
                onClick={toggleVisible}
              >
                <FaMinus />
              </button>
              <button
                className="bg-blue-400 rounded-sm cursor-pointer transition duration-300 ease-in-out hover:scale-110 hover:bg-red-700"
                onClick={closeContext}
              >
                <FaTimes />
              </button>
            </div>
          </div>
          <div className="text-xl bg-gray-700 p-2 border-blue-400 border-2 m-1 -mt-0.5 rounded-sm h-full overflow-auto">
            {children}
          </div>
        </div>
      )}
    </>
  );
};

export default Window;
