import { useRef } from "react";
import { useGlobalContext } from "../../context/context";
import Draggable from "react-draggable";
import { FaFolderOpen } from "react-icons/fa";

import Window from "../Window";
import boulderBuddy from "../../assets/projectImages/boulderbuddy.png";
import spotify from "../../assets/projectImages/spotify.png";
import typing from "../../assets/projectImages/typing.jpg";

const ProjectsWindow = ({ zIndex, parentClickHandler }) => {
  const { closeProjects, isProjectsVisible, toggleProjectsVisible } =
    useGlobalContext();
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
        className={`absolute top-70 left-110 w-2/3 h-3/5 z-20 ${
          isProjectsVisible ? "visible" : "hidden"
        }`}
        style={{ zIndex: zIndex }}
      >
        <Window
          closeContext={closeProjects}
          toggleContext={toggleProjectsVisible}
          icon={<FaFolderOpen className="ml-1" />}
          windowName={"Projects"}
        >
          <div className="h-fit overflow-auto">
            <div className="flex items-center gap-10 pb-4 pt-4">
              <div className="flex flex-row">
                <img
                  src={boulderBuddy}
                  alt="BoulderBuddy"
                  className="h-100 object-scale-down"
                />
                <h1 className="text-5xl text-blue-400">BoulderBuddy</h1>
                <ul className="list-disc pl-8">
                  <li>
                    Mobile application to help climbers log track their climbs
                  </li>
                  <li>
                    Designed and developed for cross-platform usability using
                    the React Native and Expo frameworks
                  </li>
                  <li>
                    Integrated Expo Camera API to enable real-time image capture
                    within the app
                  </li>
                  <li>
                    Implemented Camera Roll (Media Library API) for saving and
                    retrieving user media files
                  </li>
                  <li>
                    Managed permissions and optimized performance for seamless
                    camera functionality across iOS and Android
                  </li>
                  <li>Uses AsyncStorage to hold our climb data locally •</li>
                  <li>
                    Created a Wireframe and User Flow Diagram to ensure a
                    pleasant and streamlined UI/UX
                  </li>
                </ul>
                <a
                  href="https://github.com/torres2235/BoulderBuddy?tab=readme-ov-file"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-200 hover:underline"
                >
                  Link to GitHub
                </a>
              </div>
            </div>
            <div className="flex items-center gap-10 pb-4 pt-4 bg-gray-600">
              <div className="flex flex-row">
                <img
                  src={typing}
                  alt="typing"
                  className="h-50 object-scale-down rounded-xl"
                />
                <h1 className="text-5xl text-blue-400">Typing Speed Test</h1>
                <ul className="list-disc pl-8">
                  <li>
                    A Python GUI application made to test your typing speed
                  </li>
                  <li>
                    Speed and accuracy are both measured in WPM and percentage
                    respectively
                  </li>
                  <li>GUI developed using the TKinter library</li>
                </ul>
                <a
                  href="https://github.com/torres2235/typing_speed_test"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-200 hover:underline"
                >
                  Link to GitHub
                </a>
              </div>
            </div>
            <div className="flex items-center gap-10 pb-4 pt-4 ">
              <div className="flex flex-row">
                <img
                  src={spotify}
                  alt="spotify"
                  className="h-50 object-scale-down"
                />
                <h1 className="text-5xl text-blue-400">
                  Billboard Top 50 to Spotify
                </h1>
                <ul className="list-disc pl-8">
                  <li>
                    Takes the selected year's top 50 songs from Billboard and
                    creates a playlist on the user's Spotify
                  </li>
                  <li>
                    Uses the Beautiful Soup Library to scrape Billboard's Top
                    Songs for a given year
                  </li>
                  <li>
                    Uses the Spotify API to access a user's Spotify and create
                    the playlist within their account
                  </li>
                  <li>Developed using Python</li>
                </ul>
                <a
                  href="https://github.com/torres2235/billboard-to-spotify"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-200 hover:underline"
                >
                  Link to GitHub
                </a>
              </div>
            </div>

            <div className="text-center pb-4 pt-4 bg-gray-600">
              <h3>And this website!</h3>
              <p>
                A little cheesy I know, but I'm proud of it and am planning on
                continuely add/improve on to it
              </p>
            </div>
          </div>
        </Window>
      </div>
    </Draggable>
  );
};

export default ProjectsWindow;
