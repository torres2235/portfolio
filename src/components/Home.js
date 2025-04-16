//import { useRef } from "react";
import { useGlobalContext } from "../context/context";

const Home = () => {
  const { openModal } = useGlobalContext();

  return (
    <>
      <div>
        <h1>Home Page</h1>
        <p>Welcome :)</p>
      </div>

      <button className="btn" onClick={openModal}>
        show modal
      </button>
    </>
  );
};

export default Home;
