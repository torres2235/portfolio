import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
//import "./App.css";

// navbar
import Navbar from "./components/Navbar";
// pages
import Home from "./components/Home";
import Contact from "./components/Contact";
// windows
import AboutMeWindow from "./components/AboutMeWindow";
import LinksWindow from "./components/LinksWindow";
import ContactWindow from "./components/ContactWindow";

import wallpaper from "./assets/backgrounds/wallpaper4.gif";

function App() {
  //const [count, setCount] = useState(0);

  return (
    <main
      className="w-screen h-screen h-42 overflow-y-scroll no-scrollbar bg-cover bg-center bg-no-repeat text-white font-mono"
      style={{ backgroundImage: `url(${wallpaper})` }}
    >
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
      <AboutMeWindow />
      <Router>
        <LinksWindow />
      </Router>
      <ContactWindow />
    </main>

    // <>
    //   <div>
    //     <a href="https://vite.dev" target="_blank">
    //       <img src={viteLogo} className="logo" alt="Vite logo" />
    //     </a>
    //     <a href="https://react.dev" target="_blank">
    //       <img src={reactLogo} className="logo react" alt="React logo" />
    //     </a>
    //   </div>
    //   <h1>Vite + React</h1>
    //   <div className="card">
    //     <button onClick={() => setCount((count) => count + 1)}>
    //       count is {count}
    //     </button>
    //     <p>
    //       Edit <code>src/App.jsx</code> and save to test HMR
    //     </p>
    //   </div>
    //   <p className="read-the-docs">
    //     Click on the Vite and React logos to learn more
    //   </p>
    // </>
  );
}

export default App;
