import React from "react";
import { useGlobalContext } from "../context/context";
import Draggable from "react-draggable";

const Home = () => {
  const { openModal } = useGlobalContext();

  return (
    <main>
      <Draggable>
        <div>
          <h1>Home Page</h1>
          <p>Welcome :)</p>
        </div>
      </Draggable>

      <button className="btn" onClick={openModal}>
        show modal
      </button>
    </main>
  );
};

export default Home;
