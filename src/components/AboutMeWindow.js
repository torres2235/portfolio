import { useRef } from "react";
import { useGlobalContext } from "../context/context";
import { FaTimes } from "react-icons/fa";
import Draggable from "react-draggable";

const AboutMeWindow = () => {
  const { isAboutOpen, closeAbout } = useGlobalContext();
  const nodeRef = useRef(null);

  return (
    <Draggable nodeRef={nodeRef} handle=".cursor-move">
      <div
        ref={nodeRef}
        className={`${
          isAboutOpen ? "modal-overlay show-modal" : "modal-overlay"
        }`}
      >
        <div className="bg-gray-500 border-black border-2 h-auto w-2/5">
          <div className="flex flex-row justify-between bg-gray-400 cursor-move">
            <h3>About Me</h3>
            <button className="bg-red-600" onClick={closeAbout}>
              <FaTimes></FaTimes>
            </button>
          </div>
          <div className="font-minecraft p-4">
            <p>
              Hello! My name is Joshua Torres, a developer based in Los Angeles
              California.
            </p>
            <p>
              I love gaming (video, board, card, you name it), instant noodles, rock climbing,
              reading, puzzles, and my dog Shiloh.
            </p>
            <p>My whole life I've been a consumer, and now I aim to CREATE.</p>
            <p>Thanks for stopping by my little corner of the internet :)</p>
          </div>
        </div>
      </div>
    </Draggable>
  );
};

export default AboutMeWindow;
