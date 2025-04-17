//import { useRef } from "react";
import { useGlobalContext } from "../context/context";

const Home = () => {
  const { openAbout, openContact, openLinks } = useGlobalContext();

  return (
    <>
      <div>
        <h1>Home Page</h1>
        <p>Welcome :)</p>
      </div>

      <button className="btn" onClick={openAbout}>
        About
      </button>
      <button className="btn" onClick={openLinks}>
        Links
      </button>
      <button className="btn" onClick={openContact}>
        Contact Me
      </button>
    </>
  );
};

export default Home;
