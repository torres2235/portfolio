import { useRef } from "react";
import { useGlobalContext } from "../../context/context";
import Draggable from "react-draggable";
import { FaChild } from "react-icons/fa";

import profile from "../../assets/profilepic.jpg";
import ucr from "../../assets/ucr.jpg";
import Window from "../Window";

const AboutMeWindow = ({ zIndex, parentClickHandler }) => {
  const { closeAbout } = useGlobalContext();
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
        className="absolute top-40 left-75 w-3/7 h-3/5"
        style={{ zIndex: zIndex }}
      >
        <Window
          closeContext={closeAbout}
          icon={<FaChild className="ml-1" />}
          windowName={"About Me"}
        >
          <div className="h-fit overflow-auto">
            <div className="flex flex-row justify-center items-center gap-10 pb-4">
              <img
                src={profile}
                alt="picture"
                className=" h-40 w-40 object-scale-down rounded-full"
              />
              <div className="flex flex-col">
                <h1 className="text-5xl text-blue-400 transition ease-in-out hover:animate-bounce">
                  Joshua Torres
                </h1>
                <p>California-based developer</p>
              </div>
            </div>
            <div>
              <div className="bg-gray-600 pb-4">
                <h3>HI! I'm Josh and I...</h3>
                <ul className="list-disc pl-8">
                  <li>Fuck shit up</li>
                  <li>Get hella money</li>
                  <li>Question my life choices</li>
                </ul>
              </div>
              <div className="pb-4">
                <h3 className="underline">Education:</h3>
                <div className="flex justify-around items-center">
                  <div>
                    <p>Bachelor of Science, Computer Science</p>
                    <a
                      href="https://www.ucr.edu/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-200 hover:underline"
                    >
                      University of California, Riverside
                    </a>
                  </div>
                  <img
                    src={ucr}
                    alt="UCR"
                    className="h-30 w-30 object-scale-down rounded-full"
                  />
                </div>
              </div>
              <div className="bg-gray-600 pb-4">
                <h3 className="underline">Other Intrests:</h3>
                <ul className="list-disc pl-8">
                  <li>Indoor Bouldering/ Rock Climbing 🧗‍♂️</li>
                  <li>Gaming (video, board, card, you name it!) 🎮</li>
                  <li>Reading 📚</li>
                </ul>
              </div>
            </div>
          </div>
        </Window>
      </div>
    </Draggable>
  );
};

export default AboutMeWindow;
