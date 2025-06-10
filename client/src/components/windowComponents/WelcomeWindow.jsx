import React, { useEffect, useState, useRef } from "react";
import { useGlobalContext } from "../../context/context";
import Draggable from "react-draggable";
import { FaRegLaugh } from "react-icons/fa";
import axios from "axios";

import Window from "../Window";

const WelcomeWindow = ({ zIndex, parentClickHandler }) => {
  const { closeWelcome, isWelcomeVisible, toggleWelcomeVisible } =
    useGlobalContext();
  const nodeRef = useRef(null);

  function clickHandler() {
    parentClickHandler();
  }

  /*
    =============== 
    Fetch API
    ===============
    */
  const [array, setArray] = useState([]);
  const fetchAPI = async () => {
    const response = await axios.get("http://localhost:8080/api");
    setArray(response.data.users);
  };

  useEffect(() => {
    fetchAPI();
  }, []);

  return (
    <Draggable
      nodeRef={nodeRef}
      handle=".cursor-move"
      onMouseDown={clickHandler}
    >
      <div
        ref={nodeRef}
        className={`absolute top-20 left-100 w-1/2 origin-left ${
          isWelcomeVisible ? "scale-100" : "duration-100 scale-0"
        }`}
        style={{ zIndex: zIndex }}
      >
        <Window
          closeContext={closeWelcome}
          toggleContext={toggleWelcomeVisible}
          icon={<FaRegLaugh className="ml-1" />}
          windowName={"Welcome!"}
        >
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
            This site is made for a desktop broswer view, but I'm in the process
            of making it work for mobile!
          </p>
          <p>Thanks for checking me out and stopping by (●'◡'●)</p>

          {array.map((users, index) => (
            <div key={index}>
              <p>{users}</p>
              <br />
            </div>
          ))}
        </Window>
      </div>
    </Draggable>
  );
};

export default WelcomeWindow;
