import { useRef } from "react";
import { useGlobalContext } from "../../context/context";
import Draggable from "react-draggable";
import { CiBowlNoodles } from "react-icons/ci";

import Window from "../Window";

const BlogWindow = ({ zIndex, parentClickHandler }) => {
  const { closeBlog, isBlogVisible, toggleBlogVisible } = useGlobalContext();
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
        className={`absolute top-30 left-110 w-1/5 h-1/8 text-center ${
          isBlogVisible ? "visible" : "hidden"
        }`}
        style={{ zIndex: zIndex }}
      >
        <Window
          closeContext={closeBlog}
          toggleContext={toggleBlogVisible}
          icon={<CiBowlNoodles className="ml-1" />}
          windowName={"Personal Blog"}
        >
          <p>Coming soon.....</p>
        </Window>
      </div>
    </Draggable>
  );
};

export default BlogWindow;
